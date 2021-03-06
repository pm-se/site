import React from "react";
import { Link } from "react-router-dom";

export default class Topo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: "contrast",
      eVisivel: true
    };

    const pagina = document.location.toString();
    if (pagina.split("/").length <= 4) {
      this.state.home = "active";
    } else {
      this.state.home = "";
    }
  }

  toggle = () => {
    this.setState(prevState => ({ eVisivel: !prevState.eVisivel }));
  };

  render() {
    const { home, eVisivel, addClass } = this.state;
    const div_root = document.getElementById("root");

    return (
      <div
        className={`${
          eVisivel
            ? div_root.classList.remove(addClass)
            : div_root.setAttribute("class", addClass)
        }`}
      >
        <div className="click-closed" />
        <header role="banner">
          <nav
            className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top"
            role="navigation"
          >
            <div className="container">
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarDefault"
                aria-controls="navbarDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
              <Link className="navbar-brand text-brand" to="/">
                <img
                  src={process.env.PUBLIC_URL + "img/brasaoPMSE2.png"}
                  alt="logo da pmse"
                />
              </Link>
              <button
                type="button"
                className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-expanded="false"
                onClick={this.toggle}
              >
                <span className="fa fa-wheelchair fa-2x" aria-hidden="true" />
              </button>
              <div
                className="navbar-collapse collapse justify-content-center"
                id="navbarDefault"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className={"nav-link " + home} to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Institucional
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="/historia" className="dropdown-item">
                        História
                      </Link>
                      <Link to="/missao" className="dropdown-item">
                        Missão
                      </Link>
                      <Link to="/comandante_geral" className="dropdown-item">
                        Comandante Geral
                      </Link>
                      <Link to="/organizacao" className="dropdown-item">
                        Organização
                      </Link>
                      <Link to="/hinos_e_cancoes" className="dropdown-item">
                        Hinos e Canções
                      </Link>
                      <Link to="/legislacao" className="dropdown-item">
                        Legislação
                      </Link>
                      <Link to="/artigos" className="dropdown-item">
                        Artigos, Monografias e Ensaios
                      </Link>
                      <Link
                        to="/ex-comandantes_gerais"
                        className="dropdown-item"
                      >
                        Ex-Comandantes Gerais
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Acesso à Informação
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="/efetivo" className="dropdown-item">
                        Efetivo
                      </Link>
                      <Link to="/licitacoes" className="dropdown-item">
                        Licitações
                      </Link>
                      <Link to="/despesas" className="dropdown-item">
                        Despesas
                      </Link>
                      <Link to="/convenios" className="dropdown-item">
                        Convênios
                      </Link>
                      <Link to="/diarias" className="dropdown-item">
                        Diárias
                      </Link>
                      <a
                        href="http://www.transparenciasergipe.se.gov.br/TRS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                      >
                        Transparência
                      </a>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Notícias
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="/acoes_sociais" className="dropdown-item">
                        Ações Sociais
                      </Link>
                      <Link to="/capital" className="dropdown-item">
                        Capital
                      </Link>
                      <Link to="/interior" className="dropdown-item">
                        Interior
                      </Link>
                      <Link to="/especializadas" className="dropdown-item">
                        Especializadas
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Unidades
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        to="/unidades_administrativas"
                        className="dropdown-item"
                      >
                        Administrativas
                      </Link>
                      <Link to="/unidades_cpmc" className="dropdown-item">
                        CPMC - Capital
                      </Link>
                      <Link to="/unidades_cpmi" className="dropdown-item">
                        CPMI - Interior
                      </Link>
                      <Link
                        to="/unidades_especializadas"
                        className="dropdown-item"
                      >
                        Especializadas
                      </Link>
                      <Link to="/qcg" className="dropdown-item">
                        QCG - Quartel do Comando Geral
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Para o PM
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        href="http://187.17.2.14/portalservidor/#/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                      >
                        Contracheque
                      </a>
                      <Link
                        to="/aquisicao_armamentos"
                        className="dropdown-item"
                      >
                        Aquisição de Armamentos
                      </Link>
                      <a
                        href="http://intranet.pm.se.gov.br/portal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                        alt="Portal da PMSE"
                      >
                        Portal
                      </a>
                      <a
                        href="http://portal.ead.senasp.gov.br/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                      >
                        Rede EaD
                      </a>
                      <a
                        href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                      >
                        Sinesp
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-link nav-search navbar-toggle-box-collapse d-none d-md-block"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-expanded="false"
                onClick={this.toggle}
              >
                <span className="fa fa-wheelchair fa-2x" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
