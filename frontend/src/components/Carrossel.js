import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Carrossel extends React.Component<> {
    constructor(props) {
        super(props);
        this.state = {
            imagens: [],
        };
    }

    componentDidMount() {
        //TODO fazer o fetch das imagens
        // fetch('backend/imagens')
        //     .then(res => res.json())
        //     .then(data => this.setState({imagens: data}));

    }


    render() {
        let imgs = new Array();

        imgs.push({'src': process.env.PUBLIC_URL+'img/01.jpg', 'label': 'Getan 01'});
        imgs.push({'src': process.env.PUBLIC_URL+'img/01.jpg', 'label': 'Getan 01'});
        imgs.push({'src': process.env.PUBLIC_URL+'img/01.jpg', 'label': 'Getan 01'});
        imgs.push({'src': process.env.PUBLIC_URL+'img/01.jpg', 'label': 'Getan 01'});

        return (
            <OwlCarousel items={1} margin={10} autoplay={true} nav={true}>
                {
                    imgs.map((v, k) => {
                        return (
                            <div className="item" style={{marginTop: '160px'}} key={k}>
                                {/*<h4>{v.label}</h4>*/}
                                <img src={v.src} alt={v.label}/>
                            </div>
                        );
                    })
                }
            </OwlCarousel>

        );
    }
}