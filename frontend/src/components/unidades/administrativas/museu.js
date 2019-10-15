import React, { Component } from "react";

export default class museu extends Component {
  render() {
    return (
      <div className="container div-main center">
        <h1> Museu da Polícia Militar – MPMSE </h1>

        <br />
        <br />

        <div className="row justify-content-center">
          <div className="card  mb-3 col-sm-6 col-md-4 col-lg-4  card-especializadas">
            <div className="card-body text-success">
              <figure className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "img/MPMSE-300x189.jpg"}
                  className="img-fluid img-top"
                  alt=""
                />
              </figure>
              <h5 className="card-title">Fachada do Museu em São Cristóvão.</h5>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h3>Histórico</h3>
        <br />

        <p>
          Criado em 1969, inicialmente funcionando no Quartel do Comando da
          Polícia Militar – Rua itabaiana, 336, centro, Aracaju. Em 2012 foi
          transferido para a rua Ivo do Prado São Cristóvão/SE. Museu de
          temática militar com o acervo composto principalmente por armas,
          equipamentos, fardamentos e documentos. O museu possui dois programas
          sociais que são: Produção do Conhecimento no Museu, Biblioteca com
          documentos militares, sala de projeção e sala de exposição para
          artistas plásticos visando a valorização do artista sergipano.
        </p>
        <br />
        <h3>Missão</h3>
        <br />

        <p>
          O MPMSE tem por missão principal preservar e divulgar a memória, a
          história e a cultura material da Polícia Militar de Sergipe esta
          ultima representada pelo seu acervo histórico e de suas co-irmãs e
          outras, com as quais tenha realizado intercâmbio cultural. E por
          objetivo de trabalho no campo social promover e realizar, através de
          programas, atividades lúdico-educacionais com a participação das
          unidades de ensino da rede pública Estadual, Municipal e particular.
          Esses programas de integração com a comunidade estudantil visam: o
          resgate e divulgação da história da Polícia Militar de Sergipe,
          mostrar o papel da instituição policial militar na sociedade sergipana
          e enaltecer os valores éticos, morais e cívicos defendidos pela
          Corporação. Incentivar e divulgar as atividades do Programa
          Educacional de Resistência às Drogas e à Violência (PROERD) e outras
          atividades ou programas cívico-sociais vinculados à atividade fim da
          Polícia Militar.
        </p>
        <p>
          O MPMSE tem, ainda, por missão promover acesso às fontes e aos
          recursos disponíveis necessários às atividades de pesquisas em suas
          dependências, apoiando o trabalho de profissionais e estudantes das
          diversas áreas da ciência, no sentido de incentivar o desenvolvimento
          da investigação e da produção do conhecimento científico em Sergipe.
        </p>
        <br />
        <h3>Acervo</h3>
        <br />

        <p>
          <b>Armamentos:</b> Acervo composto por armas brancas e de fogo do
          século XIX e XX, usadas na Corporação.
        </p>
        <p>
          <b>Fardamentos:</b> Uniformes históricos e contemporâneos adotados na
          Instituição nos séculos XIX, XX e XXI.
        </p>
        <p>
          <b>Equipamentos:</b> Diversos materiais, tais como: Equipamentos de
          comunicação, de transporte, de carga e de campanha, compõe esta
          temática.
        </p>
        <p>
          <b>Documentos: </b>O arquivo de documentos do museu é composto por:
          Leis, decretos, boletins regimentais e internas, além de fotografias e
          croquis.
        </p>
        <br />
        <h3>Contato</h3>
        <br />
        <p>
          Endereço: Rua Ivo do Prado, nº 64, São Cristóvão/SE, CEP: 49100-000.
        </p>
        <p>Telefone: (79) 3261-1123 | 98149-1659 (Diretor)</p>
        <p>
          E mail:{" "}
          <a href="mailto:dilsonferraz@hotmail.com">dilsonferraz@hotmail.com</a>
        </p>
        <br />
        <h3>Horário de Funcionamento:</h3>
        <br />
        <p>09h às 16h (Todos os dias, inclusive feriados).</p>
      </div>
    );
  }
}
