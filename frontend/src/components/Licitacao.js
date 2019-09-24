import React from 'react';

export default class Licitacao extends React.Component {

    render() {

        return (
            <div className="container div-main">
                <h1> Licitações </h1>
                <br></br>
                <br></br>

                <iframe
                    title="Licitacoes"
                    src="https://sistema.comprasnet.se.gov.br/publico/ProcessosOrgaos.aspx?pOrgao=pmse"
                    width="100%"
                    height="690"
                    frameborder="0"
                    scrolling="alt"></iframe>


                <br></br>
                <br></br>

                <h1>Contratos</h1>

                <br></br>
                <br></br>

                <iframe
                    title="Contratos"
                    src="https://sistema.comprasnet.se.gov.br/publico/Contratos.aspx?pOrgao=PMSE"
                    width="100%"
                    height="800px"
                    frameborder="0"
                    scrolling="alt"></iframe>


            </div>
        );
    }
}