import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import TopBar from "pages/TopBar";
import Home from "pages/Home";

const ReduxExample = lazy(() => import("pages/ReduxExample"));
const RequestExample = lazy(() => import("pages/RequestExample"));

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TopBar />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}></Route>
        <Route
          path="redux"
          element={
            <Suspense fallback={<>Loading...</>}>
              <ReduxExample />
            </Suspense>
          }
        ></Route>
        <Route
          path="request"
          element={
            <Suspense fallback={<>Loading...</>}>
              <RequestExample />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Not Found</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default MyRouter;
