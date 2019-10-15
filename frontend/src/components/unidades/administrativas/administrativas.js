import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class administrativas extends Component {
    render() {
        return (
          <div className="container div-main center">
            <h1> Unidades Administrativas </h1>
    
            <br />
            <br />
    
            <p>
            A PMSE possui não só unidades operacionais como também unidades administrativas que operam para administrar e dar suporte aos mais diversos serviços que a PMSE executa. Porém em casos excepcionais também podem ser usadas no emprego operacional.
            </p>
    
            <br />
            <br />
    
            <div className="row justify-content-center">
    
            <div className="card  mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" align="center">
                <Link to ="/almoxarifado" className="btn btn-primary">ALMOXARIFADO</Link>
                <div className="card-body text-success center">
                <Link to="/almoxarifado">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">ALMOXARIFADO GERAL</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4 center card-especializadas" >
                <Link to ="/cfap" className="btn btn-primary">CFAP</Link>
                <div className="card-body text-success">
                <Link to="/cfap">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_cfap-200x224.png"}
                      className="img-fluid img-top"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">CENTRO DE FORMAÇÃO E APERFEIÇOAMENTO DE PRAÇAS</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/corregedoria" className="btn btn-primary">CORREGEDORIA</Link>
                <div className="card-body text-success">
                <Link to="/corregedoria">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">CORREGEDORIA DA PMSE</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/csm" className="btn btn-primary">CSM</Link>
                <div className="card-body text-success">
                <Link to="/csm">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">CENTRO DE SUPRIMENTO E MANUTENÇÃO</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/cgcc" className="btn btn-primary">CGCC</Link>
                <div className="card-body text-success">
                <Link to="/cgcc">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">GABINETE DE GESTÃO DE CRISES E CONFLITOS</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/hpm" className="btn btn-primary">HPM</Link>
                <div className="card-body text-success">
                <Link to="/hpm">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_hpm-200x221.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">HOSPITAL DA POLÍCIA MILITAR</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/museu" className="btn btn-primary">MPMSE</Link>
                <div className="card-body text-success">
                <Link to="/museu">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_mpmse.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">MUSEU DA POLÍCIA MILITAR</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/smcom" className="btn btn-primary">SMCOM</Link>
                <div className="card-body text-success">
                <Link to="/smcom">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">SEÇÃO DE MANUTENÇÃO E COMUNICAÇÃO</h5>
                </div>
              </div>
    
              <div className="card mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas" >
                <Link to ="/presmil" className="btn btn-primary">PRESMIL</Link>
                <div className="card-body text-success">
                <Link to="/presmil">
                  <figure className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "img/logo_pmse_zoom-200x227.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  </Link>
                  <h5 className="card-title">PRESÍDIO MILITAR</h5>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    