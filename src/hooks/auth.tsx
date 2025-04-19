import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode
} from "react";
import { publicHttp } from "@/http/api-client";
import Cookies from "js-cookie";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string | null;
}

interface AuthState {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState | null>(() => {
    const storedToken = Cookies.get("token") ?? null;

    if (storedToken) {
      return { token: storedToken };
    }

    return null;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { token } = await publicHttp
      .post("auth/login", {
        json: {
          email,
          password
        }
      })
      .json<AuthState>();

    Cookies.set("token", token, {
      expires: 7, // 7 dias
      secure: false, // mude para `true` se for https
      sameSite: "strict"
    });

    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    Cookies.remove("token");
    setData(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, token: data?.token ?? null }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
