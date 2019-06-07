import React from 'react';

export default class Estatisticas extends React.Component<> {

    render() {
        return (
            <section className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                <div className="row">
                  <div className="card col-sm-3 tamanho-minimo-estatisticas" style={{width: '18rem'}}>
                    <img className="card-img-top "
                      src={process.env.PUBLIC_URL + '/img/001.png'}
                      alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                  <div className="card col-sm-3 tamanho-minimo-estatisticas" style={{width: '18rem'}}>
                  <img className="card-img-top"
                    src={process.env.PUBLIC_URL + '/img/002.png'}
                    alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                  <div className="card col-sm-3 tamanho-minimo-estatisticas" style={{width: '18rem'}}>
                  <img className="card-img-top"
                    src={process.env.PUBLIC_URL + '/img/003.png'}
                    alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                  <div className="card col-sm-3 tamanho-minimo-estatisticas" style={{width: '18rem'}}>
                  <img className="card-img-top"
                    src={process.env.PUBLIC_URL + '/img/004.png'}
                    alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                </div>
            </section>
        );
    }
}
