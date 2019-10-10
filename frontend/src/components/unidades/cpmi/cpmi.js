import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class cpmi extends Component {
  render() {
    return (
      <div className="container div-main center">
        <h1> Comando do Policiamento Militar do Interior – CPMI </h1>
        <br />
        <br />
        <p>
          Coordena as ações de policiamento ostensivo dos municípios do interior
          do Estado de Sergipe.
        </p>
        <br />
        <h5>Comandante</h5>
        <br />
        <p>Coronel QOPM Fábio Fonseca Rolemberg</p>
        <p>Funcional Comandante: (79) 98867-6051</p>
        <br />
        <h5>Contato</h5>
        <br />
        <p>Local: Quartel do Comando Geral (QCG)</p>
        <p>End: Rua Itabaiana, n° 336, Bairro Centro, Aracaju/SE</p>
        <p>CEP: 49.010-170</p>
        <p>Tel: (79) 3211-7156</p>
        <p>Email: <a href="mailto:cpmi@pm.se.gov.br">cpmi@pm.se.gov.br</a></p>
        <br />
        <h5>Horário de funcionamento</h5>
        <br />
        <p>Expediente administrativo: 07h às 13h</p>
        <p>Expediente operacional: 24 horas</p>

        <div className="text-center">
          <h3>Unidades Subordinadas</h3>
        </div>
        
        <br />
        <br />
        <p>
          <Link to="/segundobpm">
            2º Batalhão de Polícia Militar (2º BPM) – Sede em Propriá
          </Link>
        </p>
        <p>
          <Link to="/terceirobpm">
            3º Batalhão de Polícia Militar (3º BPM) – Sede em Itabaiana
          </Link>
        </p>
        <p>
          <Link to="/quartobpm">
            4º Batalhão de Polícia Militar (4º BPM) – Sede em Canindé de São
            Francisco
          </Link>
        </p>
        <p>
          <Link to="/sextobpm">
            6º Batalhão de Polícia Militar (6º BPM) – Sede em Estância
          </Link>
        </p>
        <p>
          <Link to="/setimobpm">
            7º Batalhão de Polícia Militar (7º BPM) – Sede em Lagarto
          </Link>
        </p>
        <p>
          <Link to="/nonobpm">
            9° Batalhão de Polícia Militar (9°BPM) – Sede em Carmópolis
          </Link>
        </p>
        <p>
          <Link to="/decimobpm">
            10° Batalhão de Polícia Militar (10°BPM) – Sede em Nossa Senhora das
            Dores
          </Link>
        </p>
        <p>
          <Link to="/decimoprimeirobpm">
            11º Batalhão de Polícia Militar (11º BPM) – Sede em Tobias Barreto
          </Link>
        </p>
        <br />
        <h5>Companhias Independentes de Policia Militar</h5>
        <br />
        
        <p>
          <Link to="http://www.pm.se.gov.br/unidades/cpmi/4cipm/">
            4ª Companhia de Independente de Polícia Militar (4ª CIPM) – Sede em
            Simão Dias
          </Link>
        </p>
        <p>
          <Link to="http://www.pm.se.gov.br/unidades/cpmi/5cipm/">
            5ª Companhia de Independente de Polícia Militar (5ª CIPM) – Sede em
            Neópolis
          </Link>
        </p>
      </div>
    );
  }
}
