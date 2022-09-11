import React from 'react';
import { Carrosel } from '../Home/Carrosel/Carrosel';
import { Produtos } from '../Home/Produtos/Produtos';
import { Marcas } from '../Home/Marcas/Marcas';
import { Banner } from '../Home/Banner/Banner';
import { Categorias } from '../Home/Categorias/Categorias';



export function Home() {

    return (
      <React.Fragment>
        <Carrosel />
        <Produtos />
        <Marcas />
        <Banner />
        <Categorias />
        <Categorias />

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <script src="app.js"></script>
      </React.Fragment>
  
    );
  }