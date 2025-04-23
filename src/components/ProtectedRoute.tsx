import { getToken } from "@/hooks/auth-store";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children
}: {
  children: JSX.Element;
}) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}
