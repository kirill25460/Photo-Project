import AdminPanel from "pages/AdminPanel/AdminPanel";
import UserPanel from "pages/UserPanel/UserPanel";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel/>} />
      <Route path="/user" element={<UserPanel/>} />
    </Routes>
  );
};
