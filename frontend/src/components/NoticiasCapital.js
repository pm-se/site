import React from 'react';

export default class NoticiasCapital extends React.Component<> {

    render() {

        return(
            <div className="container div-main">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <figure className="thumbnail">
                            <img src={process.env.PUBLIC_URL + 'img/bprp.jpg'}
                                 className="img-fluid"
                                 alt=""
                            />
                            <figcaption className="caption">
                                <h5>PM prende no bairro Santos Dumont homem que responde a diversos processos judiciais</h5>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <figure className="thumbnail">
                            <img src={process.env.PUBLIC_URL + 'img/presmil.jpg'}
                                 className="img-fluid"
                                 alt=""
                            />
                            <figcaption className="caption">
                                <h5>Presídio Militar promove Palestra de Sensibilização sobre uso abusivo de substâncias psicoativas</h5>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <figure className="thumbnail">
                            <img src={process.env.PUBLIC_URL + 'img/motos.jpg'}
                                 className="img-fluid"
                                 alt=""
                            />
                            <figcaption className="caption">
                                <h5>Policia Militar realiza mais uma edição da Operação Sergipe Mais Seguro</h5>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        );
    }
}