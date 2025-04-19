import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/Sidebar";
import DashboardHome from "./pages/dashboard/dashboard";
import Settings from "./pages/dashboard/settings";
import Profile from "./pages/dashboard/prifile";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
