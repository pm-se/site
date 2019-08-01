import React from 'react';
import {Link} from 'react-router-dom';

export default class Rodape extends React.Component {

    render() {
        return (
            <div>

                <section className="section-footer" role="contentinfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">Quartel do Comando Geral - QCG</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="color-a">
                                                <span className="color-text-a">Rua Itabaiana, </span> 336<span className="color-text-a">, Centro</span>
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a"> Aracaju-SE, CEP :</span> 49010-170
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">CNPJ :</span> 13.128.798/0030-38
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">Telefone :</span> (79) 3226-7100
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">E-mail :</span> pm5@pm.se.gov.br
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">Instituições Parceiras</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <div className="w-body-a">
                                            <ul className="list-unstyled">
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://agencia.se.gov.br/" target="_blank" rel="noopener noreferrer">Agência Sergipe de Notícias</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://www.ssp.se.gov.br/" target="_blank" rel="noopener noreferrer">Secretaria de Segurança Pública</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://www.policiacivil.se.gov.br/" target="_blank" rel="noopener noreferrer">Polícia Civil</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="https://www.cbm.se.gov.br/" target="_blank" rel="noopener noreferrer">Corpo de Bombeiros Militar</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://www.detran.se.gov.br/novo_inicio.asp" target="_blank" rel="noopener noreferrer">Detran</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://www.ipesaude.se.gov.br/ipesaude/inicio.aspx" target="_blank" rel="noopener noreferrer">Ipesaúde</a>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-chevron-circle-right"></i> <a href="http://187.17.2.14/portalservidor/#/login" target="_blank" rel="noopener noreferrer">SEAD/Contracheque</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">Transparência</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <Link to="/Organizacao">Estrutura Organizacional</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <Link to="/legislacao">Legislação</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Licitações e Contratos</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Receitas</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Despesas</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Relatórios e Prestação de Contas</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Planejamento</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-chevron-circle-right"></i> <a href="/">Pessoal</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                            <a href="http://lai.se.gov.br/" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/lai.png'}
                                     className="image-fluid img"
                                     alt="lei de acesso a informacao"
                                     width="100%"
                                     height="auto" />
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                            <a href="http://www.transparenciasergipe.se.gov.br/TRS/" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/transparencia.png'}
                                     className="image-fluid img"
                                     alt="transparencia sergipe"
                                     width="100%"
                                     height="auto"/>
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                            <a href="http://www.expresso.se.gov.br" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/expresso.png'}
                                     className="image-fluid img"
                                     alt="expresso e-mail"
                                     width="100%"
                                     height="auto"/>
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <a href="http://edoc.se.gov.br/" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/edoc.png'}
                                     className="image-fluid img"
                                     alt="edoc"
                                     width="100%"
                                     height="auto"/>
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                            <a href="http://igesp.sefaz.gov-se/sfi_com_sca/PRMontarMenuAcesso" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/igesp.png'}
                                     className="image-fluid img"
                                     alt="igesp"
                                     width="100%"
                                     height="auto"/>
                            </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                            <a href="http://www.emgetis.se.gov.br" target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/emgetis2.png'}
                                     className="image-fluid img"
                                     alt="empresa sergipana de tecnologia da informacao"
                                     width="100%"
                                     height="auto"/>
                            </a>
                        </div>
                    </div>
                </div>

                <footer role="complementary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Redes Sociais</p>
                                <div className="socials-a">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://www.instagram.com/pmsergipe/" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/sergipepm" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.youtube.com/user/pmsergipe" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://twitter.com/pmsergipe" target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-footer">
                                    <p className="copyright color-text-a">
                                        &copy; Copyright -
                                        <span className="color-a"> PMSE</span> todos os direitos reservados.
                                    </p>
                                </div>
                                <div className="credits">
                                    Desenvolvido pelo <a href="/">NTI - Núcleo de Tecnologia da Informação</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            </div>
        );

    }

}
