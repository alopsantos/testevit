import { getToken } from "@/hooks/auth-store";
import ky from "ky";

export const publicHttp = ky.create({
  prefixUrl: "https://noxious.lopscorp.com/api/v1/"
  // prefixUrl: "http://localhost:3333/api/v1/"
});

export const privateHttp = ky.create({
  prefixUrl: "https://noxious.lopscorp.com/api/v1/",
  // prefixUrl: "http://localhost:3333/api/v1/",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getToken();

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      }
    ]
  }
});
