import React from 'react';
import {Link} from "react-router-dom";
import Noticia from "./Noticia";

export default class MuralNoticias extends React.Component<> {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        console.log('Did Mount');
        //TODO vai no backend e traz as ultimas 4 noticias

        let bootstrapGridCss = "col-12 col-sm-4 col-md-4 col-lg-4"
        let news = [
            {
                titulo: "PM prende no bairro Santos Dumont homem que responde a diversos processos judiciais",
                srcImagem: process.env.PUBLIC_URL + 'img/bprp.jpg',
                grid: "col-sm-9 col-md-9 col-lg-9",
                id: 4
            },
            {
                titulo: "Presídio Militar promove Palestra de Sensibilização sobre uso abusivo de substâncias psicoativas",
                srcImagem: process.env.PUBLIC_URL + 'img/presmil.jpg',
                grid: bootstrapGridCss,
                id: 5
            },
            {
                titulo: "Presídio Militar promove Palestra de Sensibilização sobre uso abusivo de substâncias psicoativas",
                srcImagem: process.env.PUBLIC_URL + 'img/motos.jpg',
                grid: bootstrapGridCss,
                id: 6
            },
            {
                titulo: "Policia Militar realiza mais uma edição da Operação Sergipe Mais Seguro",
                srcImagem: process.env.PUBLIC_URL + 'img/bprp.jpg',
                grid: bootstrapGridCss,
                id: 7
            }
        ];
        this.setState({news: news});
    }

    render() {
        console.log('Render');
        const {news} = this.state;
        let carregando = '';
        if (!news) {
            carregando = <div> Carregando... </div>;
        }
        return (
            <div>
                {carregando}
            <section className="container"  style={{marginTop: '20px', marginBottom: '20px'}}>
                {news.map( (v, k) => {
                    return (
                        <Noticia key={k} id={v.id} titulo={v.titulo} srcImagem={v.srcImagem} grid={v.grid}/>
                    );

                } )}
                    {/*<div className="row justify-content-center">*/}
                    {/*    <Noticia*/}
                    {/*        titulo="PM prende no bairro Santos Dumont homem que responde a diversos processos judiciais"*/}
                    {/*        srcImagem={process.env.PUBLIC_URL + 'img/bprp.jpg'}*/}
                    {/*        id={4}/>*/}

                    {/*</div>*/}

                    {/*<div className="row justify-content-center">*/}
                    {/*    <div className="col-12 col-sm-4 col-md-4 col-lg-4">*/}
                    {/*        <figure className="thumbnail">*/}
                    {/*            <img src={process.env.PUBLIC_URL + 'img/presmil.jpg'}*/}
                    {/*                 className="img-fluid"*/}
                    {/*                 alt=""*/}
                    {/*            />*/}
                    {/*            <figcaption className="caption">*/}
                    {/*                <h5>Presídio Militar promove Palestra de Sensibilização sobre uso abusivo de substâncias psicoativas</h5>*/}
                    {/*            </figcaption>*/}
                    {/*        </figure>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-12 col-sm-4 col-md-4 col-lg-4">*/}
                    {/*        <figure className="thumbnail">*/}
                    {/*            <img src={process.env.PUBLIC_URL + 'img/presmil.jpg'}*/}
                    {/*                 className="img-fluid"*/}
                    {/*                 alt=""*/}
                    {/*            />*/}
                    {/*            <figcaption className="caption">*/}
                    {/*                <h5>Presídio Militar promove Palestra de Sensibilização sobre uso abusivo de substâncias psicoativas</h5>*/}
                    {/*            </figcaption>*/}
                    {/*        </figure>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-12 col-sm-4 col-md-4 col-lg-4">*/}
                    {/*        <figure className="thumbnail">*/}
                    {/*            <img src={process.env.PUBLIC_URL + 'img/motos.jpg'}*/}
                    {/*                 className="img-fluid"*/}
                    {/*                 alt=""*/}
                    {/*            />*/}
                    {/*            <figcaption className="caption">*/}
                    {/*                <h5>Policia Militar realiza mais uma edição da Operação Sergipe Mais Seguro</h5>*/}
                    {/*            </figcaption>*/}
                    {/*        </figure>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
            </section>
                <div className="jumbotron">
                    <div className="text-lg-center">
                        <h3><Link to="/">MAIS NOTÍCIAS</Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}
