import React from 'react';
import './Topbar.css';


export function Topbar() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-xl navbar-light">
            <a className="navbar-brand" href="/"><img src="Logo.png" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/*
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Searc"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
            </form>
            */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/Login">Login <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/Cadastro">Cadastre-se <span className="sr-only"></span></a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Carrinho">Carrinho</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Todas as categorias
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/#">Action</a>
                    <a className="dropdown-item" href="/#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </header>
    );
}