import React, {Component} from 'react'

export default class Receita extends Component {
    render() {
        return (
            <div className="container div-main">
                <h1> Receitas </h1>

                <br></br>
                <br></br>

                <iframe
                    title="Receitas"
                    src="http://transparenciasergipe.se.gov.br/TRS/Receitas/ReceitasMensalPorOrgaoEspecifico.xhtml?orgao=13128798003038"
                    width="100%"
                    height="800px"
                    frameborder="0">scrolling="alt"
                </iframe>
            </div>
        )
    }
}
