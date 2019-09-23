import React from 'react';

export default class Organizacao extends React.Component {

    render() {

        return (
            <div className="container div-main">
                <img
                    src={process.env.PUBLIC_URL + '/img/organograma.png'}
                    className="img-fluid"
                    alt=""
                />
            </div>
        );
    }
}