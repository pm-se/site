import React from 'react';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import Principal from './components/Principal';
import Historia from './components/Historia';
import Missao from './components/Missao';
import ComandanteGeral from './components/ComandanteGeral';
import Organizacao from './components/Organizacao';
import HinosCancoes from './components/HinosCancoes';
import Monografias from './components/Monografias';
import AquisicaoArma from './components/AquisicaoArma';
import Legislacao from './components/Legislacao';
import ExComandantesGerias from './components/ExComandantesGerais';
import Efetivo from './components/Efetivo';
import Licitacoes from './components/Licitacao';
import Despesas from './components/Despesa';
import Receitas from './components/Receita';
import Relatorios from './components/Relatorios';
import Convenios from './components/Convenio';
import Diarias from './components/Diaria';
import NoticiasAcaoSocial from './components/NoticiasAcaoSocial';
import NoticiasCapital from './components/NoticiasCapital';
import NoticiasInterior from './components/NoticiasInterior';
import NoticiasEspecializadas from './components/NoticiasEspecializada';
import Noticia from './components/Noticia';
import UnidadesEspecializadas from './components/unidades/especializadas/especializadas';
import BPChoque from './components/unidades/especializadas/bpchoque';
import BPGD from './components/unidades/especializadas/bpgd';
import BESP from './components/unidades/especializadas/besp';
import BPRP from './components/unidades/especializadas/bprp';
import BPRV from './components/unidades/especializadas/bprv';
import BPTur from './components/unidades/especializadas/bptur';
import COE from './components/unidades/especializadas/coe';
import CPTran from './components/unidades/especializadas/cptran';
import CIOPAC from './components/unidades/especializadas/ciopac';
import CIPCaes from './components/unidades/especializadas/cipcaes';
import EPMon from './components/unidades/especializadas/epmon';
import GETAM from './components/unidades/especializadas/getam';
import GATI from './components/unidades/especializadas/gati';
import PPAmb from './components/unidades/especializadas/ppamb';

import { BrowserRouter as Router, Route} from "react-router-dom";
import CPMC from './components/unidades/cpmc/cpmc';
import primeiroBPM from './components/unidades/cpmc/primeirobpm';
import quintoBPM from './components/unidades/cpmc/quintobpm';
import oitavoBPM from './components/unidades/cpmc/oitavobpm';
import primeiraCIPM from './components/unidades/cpmc/primeiracipm';
import segundaCIPM from './components/unidades/cpmc/segundacipm';
import terceiraCIPM from './components/unidades/cpmc/terceiracipm';
import sextaCIPM from './components/unidades/cpmc/sextacipm';
import CPMI from './components/unidades/cpmi/cpmi';
import segundoBPM from './components/unidades/cpmi/segundobpm';
import terceiroBPM from './components/unidades/cpmi/terceirobpm';
import quartoBPM from './components/unidades/cpmi/quartobpm';
import sextoBPM from './components/unidades/cpmi/sextobpm';
import setimoBPM from './components/unidades/cpmi/setimobpm';
import nonoBPM from './components/unidades/cpmi/nonobpm';
import decimoBPM from './components/unidades/cpmi/decimobpm';
import decimoPrimeiroBPM from './components/unidades/cpmi/decimoprimeirobpm';
import QCG from './components/unidades/qcg/qcg';


function App() {
    return (
        <Router>
            <Topo/>
            <Route path="/" exact component={Principal}/>
            <Route path="/historia" component={Historia}/>
            <Route path="/missao" component={Missao}/>
            <Route path="/comandante_geral" component={ComandanteGeral}/>
            <Route path="/organizacao" component={Organizacao}/>
            <Route path="/unidades_cpmc" component={CPMC}/>
            <Route path="/primeirobpm" component={primeiroBPM}/>
            <Route path="/quintobpm" component={quintoBPM}/>
            <Route path="/oitavobpm" component={oitavoBPM}/>
            <Route path="/primeiracipm" component={primeiraCIPM}/>
            <Route path="/segundacipm" component={segundaCIPM}/>
            <Route path="/terceiracipm" component={terceiraCIPM}/>
            <Route path="/sextacipm" component={sextaCIPM}/>
            <Route path="/unidades_cpmi" component={CPMI}/>
            <Route path="/segundobpm" component={segundoBPM}/>
            <Route path="/terceirobpm" component={terceiroBPM}/>
            <Route path="/quartobpm" component={quartoBPM}/>
            <Route path="/sextobpm" component={sextoBPM}/>
            <Route path="/setimobpm" component={setimoBPM}/>
            <Route path="/nonobpm" component={nonoBPM}/>
            <Route path="/decimobpm" component={decimoBPM}/>
            <Route path="/decimoprimeirobpm" component={decimoPrimeiroBPM}/>
            <Route path="/unidades_especializadas" component={UnidadesEspecializadas}/>
            <Route path="/bpchoque" component={BPChoque}/>
            <Route path="/bpgd" component={BPGD}/>
            <Route path="/besp" component={BESP}/>
            <Route path="/bprp" component={BPRP}/>
            <Route path="/bprv" component={BPRV}/>
            <Route path="/bptur" component={BPTur}/>
            <Route path="/coe" component={COE}/>
            <Route path="/cptran" component={CPTran}/>
            <Route path="/ciopac" component={CIOPAC}/>
            <Route path="/cipcaes" component={CIPCaes}/>
            <Route path="/epmon" component={EPMon}/>
            <Route path="/getam" component={GETAM}/>
            <Route path="/gati" component={GATI}/>
            <Route path="/ppamb" component={PPAmb}/>
            <Route path="/qcg" component={QCG}/>
            <Route path="/hinos_e_cancoes" component={HinosCancoes}/>
            <Route path="/artigos" component={Monografias}/>
            <Route path="/aquisicao_armamentos" component={AquisicaoArma}/>
            <Route path="/legislacao" component={Legislacao}/>
            <Route path="/ex-comandantes_gerais" component={ExComandantesGerias}/>
            <Route path="/efetivo" component={Efetivo}/>
            <Route path="/licitacoes" component={Licitacoes}/>
            <Route path="/despesas" component={Despesas}/>
            <Route path="/receitas" component={Receitas}/>
            <Route path="/convenios" component={Convenios}/>
            <Route path="/diarias" component={Diarias}/>
            <Route path="/relatorios" component={Relatorios}/>
            <Route path="/acoes_sociais" component={NoticiasAcaoSocial}/>
            <Route path="/capital" component={NoticiasCapital}/>
            <Route path="/interior" component={NoticiasInterior}/>
            <Route path="/especializadas" component={NoticiasEspecializadas}/>
            <Route path="/noticia" render={(props) => <Noticia {...props} name='id' />}/>
            {/* <Route path="noticia" component={Noticia} /> */}
            <Rodape/>
        </Router>
       
    );
}

export default App;
