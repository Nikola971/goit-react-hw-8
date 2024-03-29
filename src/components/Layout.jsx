import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.css';


export const Layout = () => {
  return (
    <div className={css.containerMain}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
       <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};
