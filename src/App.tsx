import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutUsPage, HomePage } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App
