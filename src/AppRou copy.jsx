import React from 'react';
import { Login } from './Frontend/pages/Login/Login';
import { Carrinho} from './Frontend/pages/Carrinho/Carrinho'
import { Home } from './Frontend/pages/Home/Home'
import { Topbar } from './Frontend/pages/components/Topbar/Topbar'
import { Usuario } from './Frontend/pages/Usuario/Usuario'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthContext} from "./Frontend/Context/Auth"
import { useState } from 'react';
import { Usuario } from './Frontend/pages/Usuario/Usuario';

function AppRouter() {

  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("login", {email, password});
    setUser({id: "123", email})
  }

  const logout = () => {
    console.log("logout");
  }

  return (
    <React.Fragment>
      <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Carrinho" element={<Carrinho />} />

          <Route path="/Usuario" element={<Usuario />} />

          
        </Routes>
      <footer>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script src="app.js"></script>
    </React.Fragment>
  );
}

export default AppRouter;