import React from "react";

import { Carousel, CarouselItem } from "../components/carousel";

export default class HomePage extends React.Component {
    render () {
        return <div id="homepage">
            <SectionHeader />
            <SectionAbout />
        </div>;
    }
}

class SectionHeader extends React.Component {
    render () {
        return <section className="header">
        <Carousel className="fade" interval={ 4000 }>
            <div className="img" style={{ backgroundImage: "url(images/001.jpg)"}}>

            </div>
            <div className="img" style={{ backgroundImage: "url(images/002.jpg)"}}>
                
            </div>
            <div className="img" style={{ backgroundImage: "url(images/003.jpg)"}}>
                
            </div>
        </Carousel>
        <div className="content">
            <img src="images/white_vertical.svg" />
        </div>
    </section>;
    }
}

class SectionAbout extends React.Component {
    render () {
        return <section className="about">
            <h2>農業 &times; 物連網</h2>
            <div className="container">
                <div className="block">
                    <div className="info"></div>
                    <div className="image"></div>
                </div>
            </div>
        </section>;
    }
}