import React from 'react';
import { Link } from "react-router-dom";

export default class Topo extends React.Component<> {
    constructor(props) {
        super(props);
        this.state = {
            home: 'active',
        };
        const pagina = document.location.toString();
        if (pagina.split('/').length <= 4) {
            this.state.home = 'active';
        } else {
            this.state.home = '';
        }
    }

    componentDidMount() {

    }

    render() {
        const {home} = this.state;
        return (
            <div>
                <div className="click-closed"></div>

                <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link className="navbar-brand text-brand" to="/">
                            <img src={ process.env.PUBLIC_URL  + 'img/brasaoPMSE2.png'} alt="logo da pmse" />
                        </Link>
                        <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
                            <span className="fa fa-wheelchair fa-2x" aria-hidden="true"></span>
                        </button>
                        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={"nav-link "+ home} to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Institucional
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/historia" className="dropdown-item">História</Link>
                                        <Link to="/missao" className="dropdown-item">Missão</Link>
                                        <Link to="/comandante_geral" className="dropdown-item">Comandante Geral</Link>
                                        <Link to="/organizacao" className="dropdown-item">Organização</Link>
                                        <Link to="/hinos_e_cancoes" className="dropdown-item">Hinos e Canções</Link>
                                        <Link to="/cursos" className="dropdown-item">Cursos</Link>
                                        <Link to="/legislacao" className="dropdown-item">Legislação</Link>
                                        <Link to="/ex-comandantes_gerais" className="dropdown-item">Ex-Comandantes Gerais</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Acesso à Informação
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/contratos" className="dropdown-item" >Contratos</Link>
                                        <Link to="/licitacoes" className="dropdown-item" >Licitações</Link>
                                        <Link to="/despesas" className="dropdown-item" >Despesas</Link>
                                        <Link to="/convenios" className="dropdown-item" >Convênios</Link>
                                        <Link to="/diarias" className="dropdown-item" >Diárias</Link>
                                        <a href="http://www.transparenciasergipe.se.gov.br/TRS/" target="_blank" rel="noopener noreferrer" className="dropdown-item">Transparência</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Notícias
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/acoes_sociais" className="dropdown-item">Ações Sociais</Link>
                                        <Link to="/capital" className="dropdown-item">Capital</Link>
                                        <Link to="/interior" className="dropdown-item">Interior</Link>
                                        <Link to="/especializadas" className="dropdown-item">Especializadas</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Concursos
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/como_ingressar" className="dropdown-item">Como ingressar</Link>
                                        <Link to="/" className="dropdown-item">Formulário</Link>
                                        <Link to="/" className="dropdown-item">Etapas</Link>
                                        <Link to="/" className="dropdown-item">Edital</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
                            <span className="fa fa-wheelchair fa-2x" aria-hidden="true"></span>
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}
