import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import LandingPage from './pages/landing';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import Event from './pages/event';
import CreateEvent from './pages/create-event';
import College from './pages/college';
import NotFound from './pages/404';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "sign-up",
      element: <SignUp />
    },
    {
      path: "sign-in",
      element: <SignIn />
    },
    {
      path: "event",
      element: <Event />
    },
    {
      path: "create-event",
      element: <CreateEvent />
    },
    {
      path: "college",
      element: <College />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
