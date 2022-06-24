import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div className="intro">

            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''} }>I am</span>
                    <span>livestreaming Talha</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse elementum mattis ante id tempus.
                        Donec pharetra et ligula ut elementum.
                        Integer et ipsum porttitor, hendrerit felis quis, commodo tortor.
                        Ut rutrum sit amet magna id consectetur.
                        Etiam at tincidunt risus. Vivamus laoreet sodales bibendum.
                        Proin sed imperdiet mauris.
                    </span>
                </div>

                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <a href='#'> <img src={Github} alt="" /> </a>
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>

            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="" />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}
                    className='floating-div'>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </motion.div>

                <div style={{ top: '18rem', left: '0rem' }} className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>

                {/* blur divs */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}> </div>
                <div className='blur' style={{ background: '#c1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}> </div>

            </div>

        </div>

    )
}

export default Intro