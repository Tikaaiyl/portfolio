import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.txt';

const Services = () => {
    return (
        <div className="Services" id="Services">

            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Suspendisse elementum mattis ante id tempus.<br />
                    Donec pharetra et ligula ut elementum. <br/>
                    Integer et ipsum porttitor, hendrerit felis quis, commodo tortor.</span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>

            <div className="cards">

                <div style={{left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Lightworks"}
                    />
                </div>

                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JS, React"}
                    />
                </div>

                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Some random text that I had to write as placeholder."}
                    />
                </div>

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

            </div>

        </div>
    )
}

export default Services