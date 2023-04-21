
import './App.css';

import { Layout } from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './Signup/Signup';
import { Login } from './Login/Login';
import { Logout } from './Logout/Logout'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Layout >
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='logout' element={<Logout />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
