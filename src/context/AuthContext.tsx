import { clearToken, getToken, saveToken } from "@/hooks/auth-store";

import { createContext, useState, ReactNode, useEffect } from "react";

export type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        setToken(token);
      }
    })();
  }, []);

  const login = (newToken: string) => {
    async () => {
      await saveToken(newToken);
      setToken(newToken);
    };
  };

  const logout = () => {
    (async () => {
      await clearToken();
      setToken(null);
    })();
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
