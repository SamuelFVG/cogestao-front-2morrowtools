import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Favorites } from "./pages";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Favorites />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
