import React from 'react';
import Carrossel from './Carrossel';
// import Mural from './MuralNoticias';
import Estatistica from './Estatistica';
import Leitor from './Leitor';

export default class Principal extends React.Component {

  render() {
    return (
      <div>
        <Carrossel/>
        {/* <Mural/> */}
        <Leitor/>
        <Estatistica/>
      </div>
    );
  }
}
