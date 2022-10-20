import { Home } from "./pages/Home"
import { Login } from "./pages/user/Login"
import { ErrorPage } from "./pages/user/ErrorPage"
import { User } from "./pages/user/Users"
import { SignIn } from "./pages/user/SignIn"
import { UpdateUser } from "./pages/user/UpdateUser"
import { Teams } from "./pages/team/Teams"
import { CreateSport } from "./pages/sport/CreateSport"
import { Sports } from "./pages/sport/Sports"
import { CreateEvent } from "./pages/event/CreateEvent"
import { Events } from "./pages/event/Events"

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import { CreateTeam } from "./pages/team/CreateTeam"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <User /> },
        {
          path: "user/login",
          element: <Login />
        },
        {
          path: "signin",
          element: <SignIn />
        },
        {
          path: "user",
          element: <User />
        },
        {
          path: "update/:uuid",
          element: <UpdateUser />
        },
        {
          path: "createTeam",
          element: <CreateTeam />
        },
        {
          path: "team",
          element: <Teams />
        },
        {
          path: "createSport",
          element: <CreateSport />
        },
        {
          path: "sport",
          element: <Sports />
        },
        {
          path: "createEvent",
          element: <CreateEvent />
        },
        {
          path: "event",
          element: <Events />
        }
      ]
    }
  ])

  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
