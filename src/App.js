import { useRoutes } from 'react-router-dom';
import './App.css';
import MainLayOut from './Pages/MainLayout/mainlayout'
import router from './Routes/routes';
function App() {
  const route = useRoutes(router)
  return (
    <div className="">
      {route}
    </div>
  );
}

export default App;
