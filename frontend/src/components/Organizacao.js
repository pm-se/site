import React from 'react';

export default class Organizacao extends React.Component {

    render() {

        return (
            <div className="container div-main">
                <img
                    src={process.env.PUBLIC_URL + '/img/2018-organograma.jpg'}
                    className="img-fluid"
                    alt=""
                />
            </div>
        );
    }
}