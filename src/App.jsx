import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Nav from "./components/navigation/Nav";
import Home from "./pages/webPages/Home";
import About from "./pages/webPages/About";
import Contact from "./pages/webPages/Contact";
import Layout from "./components/navigation/Layout";
import Projects from "./pages/webPages/Projects";
import TodoApp from "./pages/projectPages/TodoApp";
import ApiDataPage from "./pages/projectPages/ApiDataPage";
import WeatherApp from "./pages/projectPages/WeatherApp";
import RecipiApp from "./pages/projectPages/RecipiApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/todoApp",
        element: <TodoApp />,
      },
      {
        path: "/apiData",
        element: <ApiDataPage />,
      },
      {
        path: "/weather",
        element: <WeatherApp />,
      },
      {
        path: "/recipiebook",
        element: <RecipiApp />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Nav />
      <Outlet />
    </RouterProvider>
  );
}

export default App;
