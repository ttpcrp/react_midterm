import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home'
import Info from './Components/Info'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/info",
      element: <Info/>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
