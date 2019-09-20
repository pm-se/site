import React, {Component} from 'react'

export default class Efetivo extends Component {
    render() {
        return (
            <div className="container div-main">

                <h1>Oficiais</h1>
                <br></br>

                <h4>Previstos</h4>
                <br></br>

                <table className="table table-striped" width="100%">
                    <tbody>
                    <tr>
                        <td style={{textAlign: 'center'}} rowSpan="2" width="112"><strong>Posto</strong></td>
                        <td style={{textAlign: 'center'}} rowSpan="2" width="75"><strong>Abreviação</strong></td>
                        <td style={{textAlign: 'center'}} colSpan="8" width="502"><strong>Quadros</strong></td>
                        <td rowSpan="2" width="38"><em>Total</em></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>QOPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOMPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOOPM</strong></td>
                        <td><strong>QOMVPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOCPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOAPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOMPM<span
                            style={{color: '#0000ff'}}>*</span></strong>
                        </td>
                        <td style={{textAlign: 'center'}}><strong>QOEPMAS</strong></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Coronel</strong></td>
                        <td style={{textAlign: 'center'}}>CEL</td>
                        <td style={{textAlign: 'center'}}>13</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>15</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Tenente</strong> <strong>Coronel</strong></td>
                        <td style={{textAlign: 'center'}}>TEN CEL</td>
                        <td style={{textAlign: 'center'}}>31</td>
                        <td style={{textAlign: 'center'}}>03</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>35</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Major</strong></td>
                        <td style={{textAlign: 'center'}}>MAJ</td>
                        <td style={{textAlign: 'center'}}>51</td>
                        <td style={{textAlign: 'center'}}>05</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>05</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>67</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Capitão</strong></td>
                        <td style={{textAlign: 'center'}}>CAP</td>
                        <td style={{textAlign: 'center'}}>100</td>
                        <td style={{textAlign: 'center'}}>14</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>30</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>152</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>1º Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>1º TEN</td>
                        <td style={{textAlign: 'center'}}>75</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>75</td>
                        <td style={{textAlign: 'center'}}>01</td>
                        <td style={{textAlign: 'center'}}>03</td>
                        <td style={{textAlign: 'center'}}>172</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>2º Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>2º TEN</td>
                        <td style={{textAlign: 'center'}}>100</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>100</td>
                        <td style={{textAlign: 'center'}}>02</td>
                        <td style={{textAlign: 'center'}}>04</td>
                        <td style={{textAlign: 'center'}}>206</td>
                    </tr>
                    <tr>
                        <td><em>Total</em></td>
                        <td></td>
                        <td style={{textAlign: 'center'}}>370</td>
                        <td style={{textAlign: 'center'}}>38</td>
                        <td style={{textAlign: 'center'}}>07</td>
                        <td style={{textAlign: 'center'}}>03</td>
                        <td style={{textAlign: 'center'}}>04</td>
                        <td style={{textAlign: 'center'}}>210</td>
                        <td style={{textAlign: 'center'}}>05</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}><strong>647</strong></td>
                    </tr>
                    </tbody>
                </table>

                <br></br>
                <br></br>

                <h4>Ocupados</h4>
                <br></br>

                <table className="table table-striped" width="100%">
                    <tbody>
                    <tr>
                        <td style={{textAlign: 'center'}} rowSpan="2" width="112"><strong>Posto</strong></td>
                        <td style={{textAlign: 'center'}} rowSpan="2" width="75"><strong>Abreviação</strong></td>
                        <td style={{textAlign: 'center'}} colSpan="8" width="502"><strong>Quadros</strong></td>
                        <td rowSpan="2" width="38"><em>Total</em></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>QOPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOMPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOOPM</strong></td>
                        <td><strong>QOMVPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOCPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOAPM</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOMPM<span style={{color: '#0000ff'}}>*</span></strong></td>
                        <td style={{textAlign: 'center'}}><strong>QOEPMAS</strong></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Coronel</strong></td>
                        <td style={{textAlign: 'center'}}>CEL</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>17</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Tenente</strong> <strong>Coronel</strong></td>
                        <td style={{textAlign: 'center'}}>TEN CEL</td>
                        <td style={{textAlign: 'center'}}>44</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>48</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Major</strong></td>
                        <td style={{textAlign: 'center'}}>MAJ</td>
                        <td style={{textAlign: 'center'}}>55</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>66</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Capitão</strong></td>
                        <td style={{textAlign: 'center'}}>CAP</td>
                        <td style={{textAlign: 'center'}}>96</td>
                        <td style={{textAlign: 'center'}}>26</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>25</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>149</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>1º Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>1º TEN</td>
                        <td style={{textAlign: 'center'}}>8</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>75</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>89</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>2º Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>2º TEN</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>100</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>103</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}><em>Total</em></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>219</td>
                        <td style={{textAlign: 'center'}}>36</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>0</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>203</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}><strong>472</strong></td>
                    </tr>
                    </tbody>
                </table>

                <br></br>

                Legenda:<br></br>
                <strong>QOPM</strong>: QUADRO DE OFICIAIS POLICIAIS MILITARES<br></br>
                <strong>QOMPM</strong>: QUADRO DE OFICIAIS MÉDICOS POLICIAIS MILITARES<br></br>
                <strong>QOOPM</strong>: QUADRO DE OFICIAIS ODONTÓLOGOS POLICIAIS MILITARES<br></br>
                <strong>QOMVPM</strong>: QUADRO DE OFICIAIS MÉDICOS VETERINÁRIOS POLICIAIS MILITARES<br></br>
                <strong>QOCPM</strong>: QUADRO DE OFICIAIS CAPELÃES POLICIAIS MILITARES<br></br>
                <strong>QOAPM</strong>: QUADRO DE OFICIAIS DE ADMINISTRAÇÃO POLICIAIS MILITARES<br></br>
                <strong>QOMPM</strong><span style={{color: '#0000ff'}}><em>*</em></span>: QUADRO DE OFICIAIS MÚSICOS POLICIAIS MILITARES<br></br>
                <strong>QOEPMAS</strong>: QUADRO DE OFICIAIS ESPECIALISTAS POLICIAIS MILITARES AUXILIARES DE SAÚDE

                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <h1>Praças</h1>
                <br></br>

                <h4>Previstos</h4>
                <br></br>

                <table className="table table-striped" width="100%">
                    <tbody>
                    <tr>
                        <td style={{textAlign: 'center'}} rowSpan="2"><strong>Graduação</strong></td>
                        <td style={{textAlign: 'center'}} rowSpan="2"><strong>Abreviação</strong></td>
                        <td style={{textAlign: 'center'}} colSpan="9"><strong>Quadros</strong></td>
                        <td rowSpan="2"><em>Total</em></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>QPMP-0</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-1</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-2</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-3</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-4</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-5</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-6</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-7</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-E</strong></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Sub Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>SUB TEN</td>
                        <td style={{textAlign: 'center'}}>95</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>14</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>113</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>1º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>1º SGT</td>
                        <td style={{textAlign: 'center'}}>184</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>18</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>225</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>2º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>2º SGT</td>
                        <td style={{textAlign: 'center'}}>261</td>
                        <td style={{textAlign: 'center'}}>7</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>23</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>327</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>3º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>3º SGT</td>
                        <td style={{textAlign: 'center'}}>678</td>
                        <td style={{textAlign: 'center'}}>17</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>25</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>44</td>
                        <td style={{textAlign: 'center'}}>780</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Cabo</strong></td>
                        <td style={{textAlign: 'center'}}>CB</td>
                        <td style={{textAlign: 'center'}}>1425</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>25</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>1483</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Soldado</strong></td>
                        <td style={{textAlign: 'center'}}>SD</td>
                        <td style={{textAlign: 'center'}}>2995</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>2995</td>
                    </tr>
                    <tr>
                        <td><em>Total</em></td>
                        <td></td>
                        <td style={{textAlign: 'center'}}>5638</td>
                        <td style={{textAlign: 'center'}}>35</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>95</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>65</td>
                        <td style={{textAlign: 'center'}}>15</td>
                        <td style={{textAlign: 'center'}}>60</td>
                        <td style={{textAlign: 'center'}}><strong>5923</strong></td>
                    </tr>
                    </tbody>
                </table>

                <br></br>
                <br></br>

                <h4>Ocupados</h4>
                <br></br>

                <table className="table table-striped" width="100%">
                    <tbody>
                    <tr>
                        <td style={{textAlign: 'center'}} rowSpan="2"><strong>Graduação</strong></td>
                        <td style={{textAlign: 'center'}} rowSpan="2"><strong>Abreviação</strong></td>
                        <td style={{textAlign: 'center'}} colSpan="9"><strong>Quadros</strong></td>
                        <td rowSpan="2"><em>Total</em></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>QPMP-0</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-1</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-2</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-3</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-4</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-5</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-6</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-7</strong></td>
                        <td style={{textAlign: 'center'}}><strong>QPMP-E</strong></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Sub Tenente</strong></td>
                        <td style={{textAlign: 'center'}}>SUB TEN</td>
                        <td style={{textAlign: 'center'}}>99</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>11</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>6</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>122</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>1º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>1º SGT</td>
                        <td style={{textAlign: 'center'}}>224</td>
                        <td style={{textAlign: 'center'}}>8</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>22</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>12</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>274</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>2º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>2º SGT</td>
                        <td style={{textAlign: 'center'}}>244</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>14</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>3</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>285</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>3º Sargento</strong></td>
                        <td style={{textAlign: 'center'}}>3º SGT</td>
                        <td style={{textAlign: 'center'}}>675</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>7</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>701</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Cabo</strong></td>
                        <td style={{textAlign: 'center'}}>CB</td>
                        <td style={{textAlign: 'center'}}>1643</td>
                        <td style={{textAlign: 'center'}}>1</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>14</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>1660</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'center'}}><strong>Soldado</strong></td>
                        <td style={{textAlign: 'center'}}>SD</td>
                        <td style={{textAlign: 'center'}}>1224</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>–</td>
                        <td style={{textAlign: 'center'}}>1224</td>
                    </tr>
                    <tr>
                        <td><em>Total</em></td>
                        <td></td>
                        <td style={{textAlign: 'center'}}>4109</td>
                        <td style={{textAlign: 'center'}}>31</td>
                        <td style={{textAlign: 'center'}}>11</td>
                        <td style={{textAlign: 'center'}}>6</td>
                        <td style={{textAlign: 'center'}}>49</td>
                        <td style={{textAlign: 'center'}}>2</td>
                        <td style={{textAlign: 'center'}}>44</td>
                        <td style={{textAlign: 'center'}}>10</td>
                        <td style={{textAlign: 'center'}}>4</td>
                        <td style={{textAlign: 'center'}}><strong>4266</strong></td>
                    </tr>
                    </tbody>
                </table>

                <br></br>
               

                Legenda:<br></br>
                <strong>QPMP-0</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES COMBATENTE<br></br>
                <strong>QPMP-1</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES MANUTENÇÃO EM ARMAMENTO<br></br>
                <strong>QPMP-2</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES OPERADOR DE COMUNICAÇÕES<br></br>
                <strong>QPMP-3</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES MANUTENÇÃO DE MOTOMECANIZAÇÃO<br></br>
                <strong>QPMP-4</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES MÚSICO<br></br>
                <strong>QPMP-5</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES MANUTENÇÃO DE COMUNICAÇÕES<br></br>
                <strong>QPMP-6</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES AUXILIAR DE SAÚDE<br></br>
                <strong>QPMP-7</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES CORNETEIRO<br></br>
                <strong>QPMP-E</strong>: QUALIFICAÇÕES POLICIAIS MILITARES PARTICULARES ESPECIALISTA


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p>Obs <span style={{color: '#000000'}}>1</span>: De acordo com o parágrafo 4º do artigo 1º da lei nº 7.823, as vagas constantes do Quadro de Oficiais Capelães (QOCPM) somente devem ser ocupadas por novo integrante quando da passagem dos atuais integrantes para a reserva remunerada.</p>
                <p>Obs 2: As vagas das seguintes Qualificações Policiais Militares Particulares QPMP-1, QPMP-2, QPMP-3, QPMP-5 e QPMP-E; devem ser transferidas para a Qualificação Policial Militar Particular Combatente (QPMP-0), à medida que não haja policiais militares das referidas qualificações em condições de ocupá-las.</p>
                <p>Obs 3: As vagas das Qualificações Policiais Militares Particulares Corneteiro (QPMP-7) devem ser transferidas para a Qualificação Policial Militar Particular de Músico (QPMP-4), à medida que não haja policiais militares da referida qualificação em condições de ocupá-las.</p>
                <p>Obs<span style={{color: '#000000'}}> 4</span>: De acordo com o artigo 3º da lei nº 8.384, a alteração das vagas dos quadros QOMPM<span style={{color: '#0000ff'}}>*</span> e QPMP-4 entra em vigor na data da sua publicação, produzindo os seus efeitos, para início da aquisição de direitos e pagamento de vantagens nela previstos, a partir do primeiro dia do quadrimestre seguinte aquele em que a despesa de pessoal do Poder Executivo Estadual, apurada na forma dos arts. 18 e seguintes da Lei Complementar (Federal) n° 101, de 04 de maio de 2000, retornar a patamar inferior a 46,55% (quarenta e seis inteiros e cinquenta e cinco centésimos por cento) da Receita Corrente Líquida do Estado de Sergipe, ressalvado o disposto nos §§ 5º, 6º e 7º do art. 1º da Lei nº 7.823, de 04 de abril de 2014, com a redação dada pelo art. 1º desta Lei, que produz seus efeitos a partir da sua publicação.</p>
                <p>Efetivo total previsto: <strong>6.600</strong></p>
                <p>Efetivo total ocupado:<strong> 4.738</strong></p>
                <p><a href="http://pm.se.gov.br/wp-content/uploads/2019/06/lei_7823_2014.pdf">Lei de fixação do efetivo (Lei nº 7.823/2014)</a></p>
                <p><a href="http://pm.se.gov.br/lei_8384_2018/">Alteração nos quadros QOMPM e QPMP-4 (Lei nº 8.384/2018)</a></p>
                <p><a href="http://pm.se.gov.br/lei_8-448_2018/">Alteração nos quadros QOPM e QOAPM (Lei nº 8.445/2018)</a></p>



            </div>
        )
    }
}
