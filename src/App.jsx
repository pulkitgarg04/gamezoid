import { lazy, useEffect, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FireBaseProvider } from "./context/firebase";

const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const Login = lazy(() => import('./pages/Auth/Login'));

function Loading() {
  return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
}

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, [auth]);

  const ComingSoon = () => <div>Coming Soon!</div>;

  return (
    <FireBaseProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="/admin" element={<ComingSoon />}>
              <Route index element={<ComingSoon />} />
              <Route path="login" element={<ComingSoon />} />
              <Route path="signup" element={<ComingSoon />} />
              <Route path="dashboard" element={<ComingSoon />} />
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