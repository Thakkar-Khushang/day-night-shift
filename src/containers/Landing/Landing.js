import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { AnimeInstance } from "animejs";
import './Landing.scss';
import { AiOutlineArrowDown } from "react-icons/ai";
import AboutHackulus from "../../components/AboutHackulus";
import Header from "../../components/Header/Header";
import { arrowAppear } from "../../animations/arrow.animations";
import { moveBackToLanding, moveToAbout } from "../../animations/aboutHackulus.animations";
import StarParticles, { initStarParticles } from "./StarParticles";
import { tsParticles } from "tsparticles";


const Landing = () => {

    const BackgroundRef = useRef(null);    
    const hackulusTextRef = useRef(null);
    const arrowRef = useRef(null);
    const AboutHackulusRef = useRef(null);
    const HeaderRef = useRef(null);

    const dayColor = "#132B47";
    const nightColor = "#fff";

    const [rotateBy, addRotateBy] = useState(-180);
    const [day, setDay] = useState(true);
    
    const [moveToAvailable, setMoveToAvailable] = useState(true);

    
    
    const initializeStartingHackulusLanding = () => {
        anime({
            targets: hackulusTextRef.current.querySelectorAll("svg g path"),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1250,
            delay: function(el, i) { return i * 250 },
            // direction: 'alternate',
            // loop: true,
            complete: fillHackulus
        });    
    }   

    const fillHackulus = () =>{
        anime({
            targets: hackulusTextRef.current.querySelector('.Hackulus-logo #Group'),
            fill: [{value:"rgba(19,43,71,0)"},{value: dayColor}],
            duration: 1000,
            easing: 'easeInOutSine',
            complete: showDates
        });
    }

    const showDates = () =>{
        anime({
            targets: hackulusTextRef.current.querySelectorAll('h4'),
            opacity: [{value: 0},{value: 1}],
            duration: 1000,
            easing: 'easeInOutSine',
        })
        arrowAppear(arrowRef)
    }

    const animateDayNight = () =>{  
        const particles = tsParticles.domItem(0);
        anime({
            targets: BackgroundRef.current.querySelector('img'),
            rotate: rotateBy,
            scale: [2,2],
            duration: 1000,
            easing: 'easeInOutSine',
        });

        if(day){
            particles.play()
            //Animate color of Hackulus logo
            anime({
                targets: hackulusTextRef.current.querySelector('.Hackulus-logo #Group'),
                fill: [{value:dayColor},{value:nightColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });
            
            // Animate color change of all text tags
            anime({
                targets: document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p'),
                color: [{value:dayColor},{value:nightColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });

            //Animate color change of arrow
            anime({
                targets: arrowRef.current.querySelector('.ArrowDown'),
                fill: [{value: dayColor},{value:nightColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });

        } else{
            particles.pause()
            //Animate color of Hackulus logo
            anime({
                targets: hackulusTextRef.current.querySelector('.Hackulus-logo #Group'),
                fill: [{value:nightColor},{value: dayColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });

            // Animate color change of all text tags
            anime({
                targets: document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p'),
                color: [{value:nightColor},{value: dayColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });

            //Animate color change of arrow
            anime({
                targets: arrowRef.current.querySelector('.ArrowDown'),
                fill: [{value:nightColor},{value: dayColor}],
                duration: 1000,
                easing: 'easeInOutSine',
            });
        }
        addRotateBy(rotateBy - 180);
        
    }
    

    useEffect(()=>{
        // if(arrowRef.current!=null 
        //     && hackulusTextRef.current!=null
        //     && BackgroundRef.current!=null
        //     && AboutHackulusRef.current!=null
        //     && HeaderRef.current!=null){
        //         console.log(arrowRef.current, hackulusTextRef.current, BackgroundRef.current, AboutHackulusRef.current, HeaderRef.current);
                initializeStartingHackulusLanding();
                initStarParticles(BackgroundRef);
            // }
    },[])

    return (
        <div className="Landing">
            <div ref={BackgroundRef} className="Background">
                <img src={require('../../assets/Desktop.jpg')} alt="background" />
                <div id="tsparticles"></div>
            </div>

            <Header 
                animateDayNight={animateDayNight} 
                day={day}
                setDay={setDay}
                ref={HeaderRef}/>
            
            <div ref={hackulusTextRef} className="Hackulus-center">
                <svg className="Hackulus-logo" width="505" height="90" viewBox="0 0 505 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask-1">
                        <path fill="#fff" d="M148 29H134.5V34.5C127.207 29.1685 123.271 28.0124 116.5 29C100.462 29.4763 89.5 43 89 58C88.3667 77 102.54 87.9901 116.5 87.5C125.359 87.4637 128.856 85.5903 134.5 81.5V87.5H148V29Z" stroke="#fff"/>
                        <path fill="#000" d="M134 66V58V49.5C128.5 43.5 124.5 41 119 41C107.5 41 102 49.5 102 58C102 66.5 108.5 74.5 119 74.5C126.5 75.5 132.5 68 134 66Z"/>
                    </mask>
                    <mask id="mask-2">
                        <path fill="#000" d="M134 66V58V49.5C128.5 43.5 124.5 41 119 41C107.5 41 102 49.5 102 58C102 66.5 108.5 74.5 119 74.5C126.5 75.5 132.5 68 134 66Z"/>
                    </mask>
                    <g id="Group" fill="transparent">
                        <path d="M14.5 1.5H1V88H14.5V46H60.5V88H74.5V1.5H60.5V32.5H14.5V1.5Z" stroke="black"/>
                        <path style={{mask: "url(#mask-1)"}} d="M148 29.5H134.5V35C127.207 29.6685 123.271 28.5124 116.5 29.5C100.462 29.9763 89.5 43.5 89 58.5C88.3667 77.5 102.54 88.4901 116.5 88C125.359 87.9637 128.856 86.0903 134.5 82V88H148V29.5Z" stroke="black"/>
                        <path d="M204 47L213.5 38.5C205.071 30.5256 200.14 28.5152 191 29C173.5 29 162 41 161 59C161 68.5 168.5 88.5 191 89.5C207.5 88 213.5 81 213.5 77.5L204 71C199.062 74.6645 196.218 75.8249 191 76C179.5 74 174.5 67.5 174.5 59C174.5 50.5 178.169 44.2993 191 41.5C196.746 41.8965 199.504 43.3336 204 47Z" stroke="black"/>
                        <path d="M239 1.5H225L224.5 88H239V68L245 63L265 88H281L254.5 53.5L275 33H256.5L239 50V1.5Z" stroke="black"/>
                        <path d="M303.5 29.5H289.5V65C290.5 76.5 300 89.5 317.5 89.5C333 89.5 342.5 78 344.5 65.5V29.5H330.5V65.5C328 79.5 304.5 77.5 303.5 65V29.5Z" stroke="black"/>
                        <path d="M377 1H363V88H377V1Z" stroke="black"/>
                        <path d="M408 29.5H394V65C395 76.5 404.5 89.5 422 89.5C437.5 89.5 447 78 449 65.5V29.5H435V65.5C432.5 79.5 409 77.5 408 65V29.5Z" stroke="black"/>
                        <path d="M485 29C492.338 29.3093 496.064 30.4469 501.5 35.5L494 43.5C489.881 41.2703 487.936 40.505 485.5 40.5C480 40.5 479.5 46 482 49L496 59C501.717 63.1652 503.137 66.2089 503.5 72.5C502.401 82.3201 498 88.5 482.5 89C473.5 90 464 83.5 462.5 79.5L470.5 71.5C474.384 74.4086 476.648 75.9566 482.5 77C487 77.5 491.5 73 486.5 68L469 54C466.804 51.0166 465.696 49.2804 466 45C467.5 34.5 473 29 485 29Z" stroke="black"/>
                    </g>
                    <g id="Group_2" fill="transparent">
                        <path d="M134 66V58V49.5C128.5 43.5 124.5 41 119 41C107.5 41 102 49.5 102 58C102 66.5 108.5 74.5 119 74.5C126.5 75.5 132.5 68 134 66Z" stroke="black"/>
                    </g>
                </svg>
                <h4 className="dates">9th and 10th April 2021</h4>
            </div>

            <div 
                onClick={()=>{
                    moveToAvailable 
                    ? moveToAbout(setMoveToAvailable, hackulusTextRef, arrowRef, AboutHackulusRef ) 
                    : moveBackToLanding( setMoveToAvailable, hackulusTextRef, arrowRef, AboutHackulusRef )
                }} 
                ref={arrowRef} 
                className={"Arrow-container pointer"}>
                <AiOutlineArrowDown className="ArrowDown" size={30} fill={dayColor}/>
            </div>

            <AboutHackulus ref={AboutHackulusRef}/>
        </div>
    )
}

export default Landing;