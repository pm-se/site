import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class especializadas extends Component {
  render() {
    return (
      <div className="container div-main center">
        <h1> Unidades de Policiamento Especializado </h1>

        <br />
        <br />

        <p>
          Na PMSE além do policiamento convencional, existe unidades que são
          especializadas em determinados tipos de serviços e que são
          extremamente necessários no apoio as demais unidades e para o emprego
          específico.
        </p>

        <br />
        <br />

        <div className="row justify-content-center">

        <div className="card  mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" align="center">
            <Link to ="/bpchoque" className="btn btn-primary">BPCHOQUE</Link>
            <div className="card-body text-success center">
            <Link to="/bpchoque">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão de Polícia de Choque</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4 center card-especializadas" >
            <Link to ="/bpgd" className="btn btn-primary">BPGD</Link>
            <div className="card-body text-success">
            <Link to="/bpgd">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid img-top"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão de Polícia de Guarda</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/besp" className="btn btn-primary">BESP</Link>
            <div className="card-body text-success">
            <Link to="/besp">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão Especial de Segurança Patrimonial</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/bprp" className="btn btn-primary">BPRP</Link>
            <div className="card-body text-success">
            <Link to="/bprp">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão de Polícia de Radiopatrulha</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/bprv" className="btn btn-primary">BPRV</Link>
            <div className="card-body text-success">
            <Link to="/bprv">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão de Polícia Rodoviária Estadual</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/bptur" className="btn btn-primary">BPTUR</Link>
            <div className="card-body text-success">
            <Link to="/bptur">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Batalhão de Policiamento Turístico</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/coe" className="btn btn-primary">COE</Link>
            <div className="card-body text-success">
            <Link to="/coe">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_coe-200x233.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Comando de Operações Especiais</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/cptran" className="btn btn-primary">CPTRAN</Link>
            <div className="card-body text-success">
            <Link to="/cptran">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_cptran-200x229.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Companhia de Polícia de Trânsito</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/ciopac" className="btn btn-primary">CIOPAC</Link>
            <div className="card-body text-success">
            <Link to="/ciopac">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Companhia Independente de Operações Policiais em Área de Caatinga</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/cipcaes" className="btn btn-primary">CIPCAES</Link>
            <div className="card-body text-success">
            <Link to="/cipcaes">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Companhia Independente de Policiamento com Cães</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/epmon" className="btn btn-primary">EPMON</Link>
            <div className="card-body text-success">
            <Link to="/epmon">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/brasao_epmon-200x217.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Esquadrão de Polícia Montada</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/getam" className="btn btn-primary">GETAM</Link>
            <div className="card-body text-success">
            <Link to="/getam">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_getam-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Grupamento Especial Tático de Motos</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/gati" className="btn btn-primary">GATI</Link>
            <div className="card-body text-success">
            <Link to="/gati">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Grupo de Ações Táticas do Interior</h5>
            </div>
          </div>

          <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
            <Link to ="/ppamb" className="btn btn-primary">PPAMB</Link>
            <div className="card-body text-success">
            <Link to="/ppamb">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                  className="img-fluid"
                  alt=""
                />
              </figure>
              </Link>
              <h5 className="card-title">Pelotão de Polícia Ambiental</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
