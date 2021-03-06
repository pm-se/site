import React from 'react';
import {Link} from 'react-router-dom';

export default class Noticia extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        return(
            <div>
                <Link to={"noticia/"+this.props.id}>
                    <div>
                        <figure className="thumbnail">
                            <img src={this.props.srcImagem}
                                className="img-fluid"
                                alt=""
                            />
                            <figcaption className="caption">
                                <h5>{this.props.titulo}</h5>
                            </figcaption>
                        </figure>
                    </div>
                </Link>
            </div>

        );
    }
}