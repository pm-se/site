import React from 'react';

export default class Despesa extends React.Component<> {

    render() {

        return (
            <div className="container div-main">
                <h1> Despesas </h1>

                <br></br>
                <br></br>

                <iframe
                    title="Despesas"
                    src="http://www.transparenciasergipe.se.gov.br/TRS/Despesas/ElementoPorOrgao.xhtml?unidade=251011&unidadeO=25101&mes=10&ano=2018&orgao=13128798003038"
                    name="consulta?Categoria=consulta"
                    width="100%"
                    height="800px"
                    frameborder="0">
                    scrolling="alt"
                </iframe>
            </div>
        );
    }
}