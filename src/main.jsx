import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Regitser/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import People from './components/People/People.jsx';
import Root from './components/Root/Root.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App/>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element:<UpdateCoffee/>,
        loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/people',
        element:<People/>,
        loader: () => fetch('http://localhost:5000/peoples')
      }
      
    ],
  },
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)



