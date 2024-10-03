import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutUsPage, AccountSettingsPage, DashboardPage, HomePage, PaymentsPage, PropertyDetailPage, PropertyListingPage, RentalDetailPage, RentalsPage } from './pages';
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
  {
    path: "/rentals",
    children: [
      {index: true, element: <RentalsPage />},
      {path: ':id', element: <RentalDetailPage/>}
    ]
  },
  {
    path: "/payments",
    element: <PaymentsPage />,
  },
  {
    path: "/listings",
    children: [
      {index: true, element: <PropertyListingPage />},
      {path: ':id', element: <PropertyDetailPage/>}
    ]
  },
  {
    path: "/account-settings",
    element: <AccountSettingsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
