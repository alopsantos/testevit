import Cookies from "js-cookie";
import ky from "ky";

export const publicHttp = ky.create({
  // prefixUrl: "https://noxious.lopscorp.com/api/v1/"
  prefixUrl: "http://localhost:3333/api/v1/"
});

export const privateHttp = ky.create({
  // prefixUrl: "https://noxious.lopscorp.com/api/v1/",
  prefixUrl: "http://localhost:3333/api/v1/",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get("token");

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      }
    ]
  }
});
