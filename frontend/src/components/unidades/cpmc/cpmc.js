import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class cpmc extends Component {
  render() {
    return (
      <div className="container div-main center">
        <h1> Comando do Policiamento Militar da Capital – CPMC </h1>

        <br />
        <br />

        <p>
          Responsável por coordenar as ações de policiamento na capital e grande
          Aracaju. Compreendido pelos municípios de <b>Aracaju</b>,{" "}
          <b>São Cristóvão</b>, <b>Nossa Senhora do Socorro</b>,{" "}
          <b>Barra dos Coqueiros</b>, <b>Itaporanga D’Ajuda</b>,{" "}
          <b>Laranjeiras</b>, <b>Divina Pastora</b>, <b>Riachuelo</b>,{" "}
          <b>Maruim</b> e <b>Santo Amaro das Brotas</b>.
        </p>

        <br />

        <div className="text-center">
          <h3>Unidades Subordinadas</h3>
        </div>

        <br />
        <br />

        <div className="row justify-content-center">
          <div className="card  mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/primeirobpm" className="btn btn-primary">
              1º BPM
            </Link>
            <div className="card-body text-success center">
              <Link to="/primeirobpm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_1bpm-200x253.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">1º Batalhão de Polícia Militar</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4 center card-especializadas">
            <Link to="/quintobpm" className="btn btn-primary">
              5º BPM
            </Link>
            <div className="card-body text-success">
              <Link to="/quintobpm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_5bpm-200x255.png"
                    }
                    className="img-fluid img-top"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">5º Batalhão de Polícia Militar</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/oitavobpm" className="btn btn-primary">
              8º BPM
            </Link>
            <div className="card-body text-success">
              <Link to="/oitavobpm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_8bpm-200x258.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">
              8º Batalhão de Polícia Militarl
              </h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/primeiracipm" className="btn btn-primary">
              1ª CIPM
            </Link>
            <div className="card-body text-success">
              <Link to="/primeiracipm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">1ª Companhia Independente de Polícia Militar</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/segundacipm" className="btn btn-primary">
              2ª CIPM
            </Link>
            <div className="card-body text-success">
              <Link to="/segundacipm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">
              2ª Companhia Independente de Polícia Militar
              </h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/terceiracipm" className="btn btn-primary">
              3ª CIPM
            </Link>
            <div className="card-body text-success">
              <Link to="/terceiracipm">
                <figure className="thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">3ª Companhia Independente de Polícia Militar</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <Link to="/sextacipm" className="btn btn-primary">
              6ª CIPM
            </Link>
            <div className="card-body text-success">
              <Link to="/sextacipm">
                <figure className="thumbnail">
                  <img
                    src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </Link>
              <h5 className="card-title">6ª Companhia Independente de Polícia Militar</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
