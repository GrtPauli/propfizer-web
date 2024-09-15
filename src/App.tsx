import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutUsPage, DashboardPage, HomePage } from './pages';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App
