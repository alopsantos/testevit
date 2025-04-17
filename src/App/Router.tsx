import { Routes, Route } from "react-router";
import Noxious from ".";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Noxious />} />
    </Routes>
  );
}
