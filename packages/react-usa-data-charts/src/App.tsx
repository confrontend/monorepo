import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/layout";

import { initializeFirebase } from "./firebase";
import { lazy, Suspense, useEffect, useState } from "react";
import NonIdealState from "./components/UI/non-ideal-state/non-ideal-state";

// Lazy loading area
const Login = lazy(() => import("./pages/login/login"));
// Webpack magic comment to enable preloading <Link rel="prefetch" ..>
const Tax = lazy(() => import(/* webpackPrefetch: true */ "./pages/tax/tax"));
const Weather = lazy(() => import("./pages/weather/weather"));
const LifeQuality = lazy(() => import("./pages/life-quality/life-quality"));
const Demography = lazy(() => import("./pages/demography/demography"));
// -- End of Lazy loading area

import { auth } from "./firebase";
import { User } from "firebase/auth";

function App() {
  initializeFirebase();

  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth: User | null) => {
      if (userAuth) {
        console.log(userAuth);
        setUser(userAuth);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {isLoading ? (
        //fixme: Styling
        <div></div>
      ) : !user ? (
        <Suspense fallback={<NonIdealState></NonIdealState>}>
          <Login />
        </Suspense>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<NonIdealState></NonIdealState>}>
                    <Tax />
                  </Suspense>
                }
              />
              <Route
                path="/tax"
                element={
                  <Suspense fallback={<NonIdealState></NonIdealState>}>
                    <Tax />
                  </Suspense>
                }
              />
              <Route
                path="/life-quality"
                element={
                  <Suspense fallback={<NonIdealState></NonIdealState>}>
                    <LifeQuality />
                  </Suspense>
                }
              />
              <Route
                path="/weather"
                element={
                  <Suspense fallback={<NonIdealState></NonIdealState>}>
                    <Weather />
                  </Suspense>
                }
              />
              <Route
                path="/demography"
                element={
                  <Suspense fallback={<NonIdealState></NonIdealState>}>
                    <Demography />
                  </Suspense>
                }
              />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
