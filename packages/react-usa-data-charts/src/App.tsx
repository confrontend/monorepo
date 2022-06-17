import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/layout";
import { initializeApp } from "firebase/app";
import { lazy, Suspense, FormEvent } from "react";
import NonIdealState from "./components/UI/non-ideal-state/non-ideal-state";

// Lazy loading area
const Login = lazy(() => import("./pages/signin-page/signin-page"));
// Webpack magic comment to enable preloading <Link rel="prefetch" ..>
const Tax = lazy(() => import(/* webpackPrefetch: true */ "./pages/tax/tax"));
const Weather = lazy(() => import("./pages/weather/weather"));
const LifeQuality = lazy(() => import("./pages/life-quality/life-quality"));
const Demography = lazy(() => import("./pages/demography/demography"));
// -- End of Lazy loading area

import { firebaseConfig } from "./firebase-config";
import { FirebaseProvider } from "./global/providers";
import SignInPage from "./pages/signin-page/signin-page";
import { signInWithFirebase } from "./apis/auth/auth-firebase";
import { useHandleAuth } from "./global/utils/auth-util";

function App() {
  const app = initializeApp(firebaseConfig);

  const [user, isLoading] = useHandleAuth(app);

  const signInFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements: any = e.currentTarget.elements;

    signInWithFirebase(
      e,
      app,
      elements.username.value,
      elements.password.value
    ).catch((err) => {
      // fixme handle error properly
      alert(err);
    });
  };

  return (
    <FirebaseProvider value={app}>
      {isLoading ? (
        //fixme: Styling
        <div></div>
      ) : !user ? (
        <Suspense fallback={<NonIdealState></NonIdealState>}>
          <SignInPage signInFn={signInFn} />
        </Suspense>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout app={app} />}>
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
    </FirebaseProvider>
  );
}

export default App;
