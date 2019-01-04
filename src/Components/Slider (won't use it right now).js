import React, {Component} from 'react'

class SliderWonTUseItRightNow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
            <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-auto" src="https://pp.userapi.com/c847217/v847217001/1287b6/SKgQLVndbio.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-auto" src="https://pp.userapi.com/c847217/v847217001/12878f/be5IrCYpSo4.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-auto" src="https://pp.userapi.com/c850724/v850724057/54a7d/m6_4V1dU5oo.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        )
    }
}
export default SliderWonTUseItRightNow