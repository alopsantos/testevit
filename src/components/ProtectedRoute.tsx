import Cookies from "js-cookie";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children
}: {
  children: JSX.Element;
}) {
  const token = Cookies.get("token");
  const isAuthenticated = !!token;

  return isAuthenticated ? children : <Navigate to="/" />;
}
