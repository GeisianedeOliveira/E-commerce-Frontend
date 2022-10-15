import React from 'react';
import { Login } from './Frontend/pages/Login/Login';
import { Carrinho} from './Frontend/pages/Carrinho/Carrinho';
import { Home } from './Frontend/pages/Home/Home';
import { Topbar } from './Frontend/pages/components/Topbar/Topbar';
import { Cadastro } from './Frontend/pages/Cadastro/Cadastro';
import { Produtos } from './Frontend/pages/Home/Produtos/Produtos'
import { Routes, Route, Navigate} from 'react-router-dom';
import { AuthProvider, AuthContext } from "./Frontend/Context/Auth";
import { useContext } from 'react';
import { Footer } from './Frontend/pages/components/Footer';
import { Usuario } from './Frontend/pages/Usuario/Usuario';
import { Faleconosco } from './Frontend/pages/Fale_conosco/faleconosco'
import { Admin } from './Frontend/pages/Admin/Admin'
import { Detalhes } from './Frontend/pages/produtos-detalhes/produtos-detalhes';
import { Pagamento } from './Frontend/pages/Pagamento/pagamento'
import { Finalizar } from './Frontend/pages/FinalizarCompra/finalizarCompra'


function AppRouter() {
// eslint-disable-next-line
  const Private = ({children}) => {
    const { authenticated, loading} = useContext(AuthContext);

    if (loading) {
      return <div className="loading"> Carregando... </div>
    }


    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children;

  }

  return (
    <React.Fragment>
      <Topbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Carrinho" element={<Carrinho />} />

          <Route path="/Cadastro" element={<Cadastro />} />

          <Route path="/Produtos" element={<Produtos />} />
          
          <Route path="/Fale_conosco" element={<Faleconosco />} />

          <Route path="/Usuario" element={<Usuario />} />

          <Route path="/Admin" element={<Admin />} />

          <Route path="/Detalhes" element={<Detalhes />} />

          <Route path="/Pagamento" element={<Pagamento />} />

          <Route path="/Finalziar" element={<Finalizar />} />

        </Routes>
      </AuthProvider>
      
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script src="app.js"></script>
      <Footer />
    </React.Fragment>
  );
}

export default AppRouter;