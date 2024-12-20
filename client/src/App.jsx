import { lazy, useEffect, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FireBaseProvider } from "./context/firebase";
import Dashboard from './pages/admin/Dashboard';
import Store from './pages/Store';

const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const Login = lazy(() => import('./pages/auth/Login'));

const AdminSignup = lazy(() => import('./pages/admin/auth/Signup'));
const AdminLogin = lazy(() => import('./pages/admin/auth/Login'));

function Loading() {
  return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
}

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, [auth]);

  const ComingSoon = () => <div>Coming Soon!</div>;

  return (
    <FireBaseProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store" element={<Store />} />
            <Route path="/tournaments" element={<ComingSoon />} />
            <Route path="/community" element={<ComingSoon />} />
            <Route path="/news" element={<ComingSoon />} />
            <Route path="/cart" element={<ComingSoon />} />

            <Route path="/admin" element={<Outlet />}>
              <Route index element={<Navigate to="/admin/login" replace />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="signup" element={<AdminSignup />} />
              <Route path="dashboard" element={user ? <Dashboard /> : <Navigate to="/admin/login" replace />} />
              <Route path="dashboard/add" element={<ComingSoon />} />
              <Route path="dashboard/edit" element={<ComingSoon />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </FireBaseProvider>
  );
}

export default App;