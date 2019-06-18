import React from 'react';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import Principal from './components/Principal';
import Historia from './components/Historia';
import Missao from './components/Missao';
import ComandanteGeral from './components/ComandanteGeral';
import Organizacao from './components/Organizacao';
import HinosCancoes from './components/HinosCancoes';
import Cursos from './components/Curso';
import Legislacao from './components/Legislacao';
import ExComandantesGerias from './components/ExComandantesGerais';
import Contratos from './components/Contrato';
import Licitacoes from './components/Licitacao';
import Despesas from './components/Despesa';
import Convenios from './components/Convenio';
import Diarias from './components/Diaria';
import NoticiasAcaoSocial from './components/NoticiasAcaoSocial';
import NoticiasCapital from './components/NoticiasCapital';
import NoticiasInterior from './components/NoticiasInterior';
import NoticiasEspecializadas from './components/NoticiasEspecializada';

import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <Topo/>
            <Route path="/" exact component={Principal}/>
            <Route path="/historia" component={Historia}/>
            <Route path="/missao" component={Missao}/>
            <Route path="/comandante_geral" component={ComandanteGeral}/>
            <Route path="/organizacao" component={Organizacao}/>
            <Route path="/hinos_e_cancoes" component={HinosCancoes}/>
            <Route path="/cursos" component={Cursos}/>
            <Route path="/legislacao" component={Legislacao}/>
            <Route path="/ex-comandantes_gerais" component={ExComandantesGerias}/>
            <Route path="/contratos" component={Contratos}/>
            <Route path="/licitacoes" component={Licitacoes}/>
            <Route path="/despesas" component={Despesas}/>
            <Route path="/convenios" component={Convenios}/>
            <Route path="/diarias" component={Diarias}/>
            <Route path="/acoes_sociais" component={NoticiasAcaoSocial}/>
            <Route path="/capital" component={NoticiasCapital}/>
            <Route path="/interior" component={NoticiasInterior}/>
            <Route path="/especializadas" component={NoticiasEspecializadas}/>
            <Rodape/>
        </Router>
    );
}

export default App;
