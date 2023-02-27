import logo from './logo.svg';
import './App.css';
import { Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './views/Login/Login';
import Admin from './views/admin/Admin';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Login/>}>
        <Route index element={<Login/>} />
        
      </Route>
      <Route path='admin' element={<Admin />} />
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
