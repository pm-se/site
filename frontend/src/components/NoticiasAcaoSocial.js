import React from 'react';

export default class NoticiasAcaoSocial extends React.Component {

    render() {

        return (
            <div className="container div-main">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <a href={process.env.PUBLIC_URL + 'img/choque.jpg'}>
                            <figure className="thumbnail">
                                <img src={process.env.PUBLIC_URL + 'img/choque.jpg'}
                                     className="img-fluid"
                                     alt=""
                                />
                                <figcaption className="caption">
                                    <h5>Criança realiza sonho com o Batalhão de Choque</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <a href={process.env.PUBLIC_URL + 'img/combate.jpg'}>
                            <figure className="thumbnail">
                                <img src={process.env.PUBLIC_URL + 'img/combate.jpg'}
                                     className="img-fluid"
                                     alt=""
                                />
                                <figcaption className="caption">
                                    <h5>Atleta do projeto social A Escola Vai ao Batalhão de Choque intensifica
                                        preparação para o Mundial Escolar de Combate Games</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <a href={process.env.PUBLIC_URL + 'img/criancas.jpg'}>
                            <figure className="thumbnail">
                                <img src={process.env.PUBLIC_URL + 'img/criancas.jpg'}
                                     className="img-fluid"
                                     alt=""
                                />
                                <figcaption className="caption">
                                    <h5>Polícia Militar celebra a formatura 524 estudantes no Programa Educacional de
                                        Resistência às Drogas e à Violência (Proerd)</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}