// import Dashboard from './components/Dashboard'
import React from 'react'
import SignIn from './features/auth/SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import SignUp from './features/auth/SignUp';
import ForgotPassword from './features/auth/ForgotPassword';
import Protected from './features/auth/Protected';
import UserProfile from './components/UserProfile'
import Schedule from './components/Schedule';
import Error from './components/Error';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Protected>
        <Dashboard />
        </Protected>
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/forgot",
      element: <ForgotPassword />
    },
    {
      path: "/userProfile",
      element: <UserProfile/>
    },
    {
      path: "/Calendar",
      element: <Schedule/>
    },
    {
      path: "*",
      element: <Error/>
    }
  ]);
  // <UserProfile/>

  return (
    <>
     <React.StrictMode>
        <RouterProvider router={router} />

      </React.StrictMode>
      {/* <Dashboard /> */}
    </>
  )
}

export default App
