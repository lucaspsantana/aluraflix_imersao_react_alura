import React from 'react';
import Menu from '../../components/Menu/'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'
import dadosIniciais from '../../components/data/dados_iniciais.json'

function App() {
  return (
    <div >
      <Menu/>

      <BannerMain 
      videoTitle = {dadosIniciais.categorias[0].videos[0].title}
      url = {dadosIniciais.categorias[0].videos[0].url}
      videoDescription = {"Este é um video muito bom, assita!"}
      />
      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[0]}
      />
       <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[3]}
      />
      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[4]}
      />
      <Footer
      />
    </div>
  );
}

export default App;
