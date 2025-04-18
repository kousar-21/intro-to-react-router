import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

// for users2 
const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: 'laptop', Component: Laptop },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback="users is loading....">
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userID',
        // both way is okay
        // loader: ({params}) =>{
        //   console.log('params inside the loader', params);
        //   console.log('params inside the loader', params.userID);
        //   fetch('https://jsonplaceholder.typicode.com/users')
        // },
        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
          
        Component: UserDetails
      },
      // post part
      {
        path: 'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path:'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: 'about',
    element: <div>this is second page</div>
  },
  {
    path: 'last',
    element: <div>React comes to an end</div>
  },
  {
    path: 'app',

    // element lekhle evhabe ditey hobe
    // element: <App></App>

    // comoponent lekhle evhabe ditey hobe
    Component: App
  },
  {
    path: '/app2',
    Component: App

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
