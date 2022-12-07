import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';

function App() {
  return (
    <div className='App bg-secondary min-h-screen'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
