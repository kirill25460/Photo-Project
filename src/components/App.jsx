import AdminPanel from 'pages/AdminPanel/AdminPanel';
import UserPanel from 'pages/UserPanel/UserPanel';
import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Nav = lazy(() => import('./Nav/Nav'));

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserPanel />} />
      </Route>
    </Routes>
  );
};
