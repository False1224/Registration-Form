import React from 'react';
import Registration from './Registration';  
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <SignIn/>,
  },
  {
    path: "/",
    element: <SignUp/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;



// export default function App() {
//   return (
//     <>
//     <Registration/>
//     <SignIn/>
//     <SignUp/>
//     </>
//   )
// }
