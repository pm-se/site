import React from 'react';

export default class ComandanteGeral extends React.Component {

    render() {

        return (
            <div className="container div-main">
                <h1> Comandante Geral </h1>

                <br></br>
                <br></br>


                <figure className="thumbnail">
                    <img src={process.env.PUBLIC_URL + 'img/cmdGeral.jpg'}
                         className="img-fluid"
                         alt=""
                    />
                    <figcaption className="caption"></figcaption>
                </figure>

                <br></br>
                <h5>CURRÍCULO</h5>
                <br></br>

                <p><b>I – DADOS PESSOAIS</b></p>

                <p>– Nome: Marcony Cabral Santos;</p>
                <p>– Data de nascimento: 18 de Fevereiro de 1969;</p>
                <p>– Naturalidade: Aracaju/SE.</p>

                <br></br>

                <p><b>II – DADOS PROFISSIONAIS</b></p>
                <p>– Data de ingresso na PMSE: 04 de Fevereiro de 1990;</p>
                <p>– Grau hierárquico: Coronel PM;</p>
                <p>– Quadro: QOPM;</p>
                <p>– Data da última promoção: 21 de Abril de 2013.</p>

                <br></br>

                <p><b>III – FUNÇÕES EXERCIDAS NA PMSE</b></p>
                <p>– Instrutor do CFAP;</p>
                <p>– Subcomandante da 2ª Companhia do 3º Batalhão de Polícia Militar – Lagarto/SE;</p>
                <p>– Comandante do Pelotão de Comando e Serviço do 3º Batalhão de Polícia Militar – Itabaiana/SE;</p>
                <p>– Comandante da 1ª Companhia do 3º Batalhão de Polícia Militar – Itabaiana/SE;</p>
                <p>– Comandante da 2ª Companhia do 3º Batalhão de Polícia Militar – Itabaiana/SE;</p>
                <p>– Comandante da 3ª Companhia do 1º Batalhão de Polícia Militar – Aracaju/SE;</p>
                <p>– Comandante da Companhia de Polícia Rodoviária Estadual– CPRv/PMSE;</p>
                <p>– Comandante do 3º Batalhão de Polícia Militar – Itabaiana/SE;</p>
                <p>– Comandante do 7º Batalhão de Polícia Militar – Lagarto/SE;</p>
                <p>– Subcomandante do CFAP;</p>
                <p>– Comandante do CFAP;</p>
                <p>– Chefe de Gabinete do Comandante-Geral da PMSE;</p>
                <p>– Chefe da 5ª Seção do Estado Maior Geral da PMSE (Relações Públicas);</p>
                <p>– Ajudante-Geral da PMSE;</p>
                <p>– Comandante do Policiamento Militar do Interior – CPMI;</p>
                <p>– Diretor do Presídio Militar da PMSE – PRESMIL.</p>

                <br></br>

                <p><b>IV – CURSOS NA ÁREA MILITAR</b></p>
                <p>– Bacharelado em Segurança Pública na Polícia Militar do Ceará – 1990 – 1992;</p>
                <p>– Curso de Aperfeiçoamento de Oficiais na Polícia Militar do Ceará – 2002;</p>
                <p>– Especialização em Gestão Estratégica em Segurança Pública (Curso Superior de Polícia), na
                    Universidade Federal de Sergipe – 2004 – 2005;</p>
                <p>– Curso de Motociclista Operacional na Polícia Militar do Ceará – 1992;</p>
                <p>– Estágio de atualização para líderes de Conselhos Comunitários de Segurança,</p>
                <p>realizado na Polícia Militar do Estado de São Paulo – 1999;</p>
                <p>– Curso de Educação Física – Licenciatura plena, na Polícia Militar do Ceará – 2005 – 2006.</p>

                <br></br>

                <p><b>V – CURSOS CIVIS</b></p>
                <p>– Curso de árbitro de futebol profissional pela Federação Sergipana de Futebol – 1999 – 2000;</p>
                <p>– Curso de Personal Trainner pela Faculdade Integrada do Ceará (FIC) – 2005;</p>
                <p>– Curso de Ginástica Laboral – Recreação para terceira idade e Hidroginástica Avançada (FIC) –
                    2005;</p>
                <p>– Instrutor de arbitragem – FIFA.</p>

                <br></br>

                <p><b>VI – OBRAS PUBLICADAS</b></p>
                <p>– A importância da atualização profissional dos Oficiais da PMSE para a formação de multiplicadores
                    de conhecimento – PMSE – 2002 (Monografia apresentada no Curso de Aperfeiçoamento de Oficiais);</p>
                <p>– A criação do Batalhão de Policiamento em Eventos Especiais na PMSE – 2005 (Monografia apresentada
                    no Curso de Especialização em Gestão Estratégica em Segurança Pública – CSP/UFS;</p>
                <p>– A importância da caminhada para a autonomia do idoso – 2006 (Monografia apresentada no Curso de
                    Licenciatura em Educação Física na Polícia Militar do Ceará).</p>

                <br></br>

                <p><b>VII – CONDECORAÇÕES</b></p>
                <p>– Medalha de 10 Anos de Tempo de Serviço da PMSE – Grau Bronze;</p>
                <p>– Medalha de 20 Anos de Tempo de Serviço da PMSE – Grau Prata;</p>
                <p>– Medalha do Mérito Policial Militar da Polícia Militar de Sergipe;</p>
                <p>– Medalha Tiradentes da PMSE.</p>
            </div>
        );
    }
}