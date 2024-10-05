import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutUsPage, AccountSettingsPage, DashboardPage, HomePage, PaymentsPage, PropertyDetailPage, PropertyListingPage, RentalDetailPage, RentalsPage } from './pages';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import MyListingsPage from './pages/my-listings';
import CreateListingPage from './pages/my-listings/create';
import TenantsPage from './pages/tenants';
import VerifyTenantPage from './pages/tenants/add';

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
  {
    path: "/my-listings",
    children: [
      {index: true, element: <MyListingsPage />},
      {path: 'create', element: <CreateListingPage/>}
      // {path: ':id', element: <PropertyDetailPage/>}
    ]
  },
  {
    path: "/tenants",
    children: [
      {index: true, element: <TenantsPage />},
      {path: 'add', element: <VerifyTenantPage/>}
      // {path: ':id', element: <PropertyDetailPage/>}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
