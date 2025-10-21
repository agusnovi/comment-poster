import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Posts, { fetchPosts } from "./routes/Posts"
import Details, { fetchDetail } from "./routes/Details"
import NewPost, { submitPost } from "./routes/NewPost"
import RootLayout from "./routes/RootLayout"

import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: fetchPosts,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: submitPost
          },{
            path: ':id',
            element: <Details />,
            loader: fetchDetail
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
