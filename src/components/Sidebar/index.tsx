import { Link, Outlet, useNavigate } from "react-router";

import { Atom, Gear, SignOut } from "@phosphor-icons/react/dist/ssr";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/use-auth";

export default function DashboardLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex h-screen select-none">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-slate-200 lg:flex lg:flex-col sm:flex-col justify-between">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link to="/dashboard">
              <Atom size="32" />
            </Link>
            <span className="sr-only">Home</span>
          </TooltipProvider>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/dashboard/settings">
                <Gear size="32" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/dashboard/settings">
                <Gear size="32" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"ghost"} onClick={handleSignOut}>
                <SignOut className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
          </Tooltip>
        </nav>
      </aside>
      <main className="flex-1 p-4 ml-14 ">
        <Outlet />
      </main>
    </div>
  );
}
