import { publicHttp } from "./api-client";

interface signInWithPasswordRequest {
  email: string;
  password: string;
}

interface signInWithPasswordResponse {
  token: string;
}
export async function signInWithPassword({
  email,
  password
}: signInWithPasswordRequest) {
  const { token } = await publicHttp
    .post("auth/login", {
      json: {
        email,
        password
      }
    })
    .json<signInWithPasswordResponse>();

  return token;
}
