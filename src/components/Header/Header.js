import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import './Header.scss'
import Siam from '../../assets/SiamLogo.svg';
import dayLogo from '../../assets/logo-dark.png';
import nightLogo from '../../assets/logo-light.png';

const Header = React.forwardRef((props, ref) => {

    const sunPoints="M28 1.00014C12.5 0.945505 1.00001 12.5 1 27.5001C0.999995 42.5003 13.5 54.5513 28 54.5001C42.5 54.449 54 42.5 54 27.5C54 12.5 42 1.04949 28 1.00014Z"
    const moonPoints="M28 1.00017C12.5 0.945535 0.99999 12.5 0.999985 27.5002C0.99998 42.5003 13.5 54.5513 28 54.5002C42.5 54.4491 53.9999 42.5 53.9999 27.5C28 64.5 -9 24 28 1.00017Z"
    const sunColor = "#F8CA29";
    const moonColor = "#FFF383";

    const iconRef = useRef();
    const cloudRef = useRef();
    const cloudPath = useRef();
    const siamDayRef = useRef();
    const siamNightRef = useRef();

    const [animFinished, setFinished] = useState(false);

    const { animateDayNight, day, setDay} = props;

    const IconAnimation = () => {
        setFinished(false)
        animateDayNight()
        if(day){
            anime({
                targets: iconRef.current,
                d: [
                    {value: sunPoints},
                    {value: moonPoints}    
                ],
                fill: [
                    {value: sunColor, duration: 0},
                    {value: moonColor, duration: 1000}
                ],
                duration: 1000,
                complete: () => setFinished(true)
                // easing: 'easeInOutElastic'
            })

            anime({
                targets: cloudRef.current,
                right: 85,
                top: 65,
                duration: 1000,
                easing: 'easeInOutQuad'
            })

            anime({
                targets: cloudPath.current,
                fill: [
                    {value: '#fff', duration: 0},
                    {value: '#848484', duration: 1000}
                ],
                easing: 'easeInOutQuad'
            })

            anime({
                targets: siamDayRef.current,
                opacity: [{value: 1}, {value: 0}],
                duration: 1000,
                easing: 'easeInOutQuad'
            })
            anime({
                targets: siamNightRef.current,
                opacity: [{value: 0}, {value: 1}],
                duration: 1000,
                easing: 'easeInOutQuad'
            })
        } else{
            anime({
                targets: iconRef.current,
                d: [
                    {value: moonPoints},    
                    {value: sunPoints}
                ],
                fill: [
                    {value: moonColor, duration: 0},    
                    {value: sunColor, duration: 1000}
                ],
                duration: 1000,
                easing: 'easeOutQuad',
                complete: () => setFinished(true)
            })
            
            anime({
                targets: cloudRef.current,
                right: 45,
                top: 70,
                duration: 1000,
                easing: 'easeInOutQuad'
            })

            anime({
                targets: cloudPath.current,
                fill: [
                    {value: '#848484', duration: 0},
                    {value: '#fff', duration: 1000},
                ],
                easing: 'easeInOutQuad'
            })
            anime({
                targets: siamDayRef.current,
                opacity: [{value: 0}, {value: 1}],
                duration: 1000,
                easing: 'easeInOutQuad'
            })
            anime({
                targets: siamNightRef.current,
                opacity: [{value: 1}, {value: 0}],
                duration: 1000,
                easing: 'easeInOutQuad'
            })
        }
        setDay(!day);
    }

    

    useEffect(() => {
        anime({
            targets: cloudRef.current,
            right: [
                {value: -100, duration: 0},
                {value: 45, duration: 3000}
            ],
            easing: 'easeInOutQuad',
            complete: () => {
                setFinished(true)
            }
        })
    },[])

    return(
        <header ref={ref} className="Header">
            <img ref={siamDayRef} src={dayLogo} className="day Siam-logo"/>
            <img ref={siamNightRef} src={nightLogo} className="night Siam-logo"/>
            <div onClick={animFinished ? IconAnimation : null} className={animFinished ?"pointer":null}>
                <svg  id="day-night-svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <path ref={iconRef} fill={sunColor} d={sunPoints} stroke="black"/>
                </svg>

                <svg ref={cloudRef} id="cloud" width="39" height="17" viewBox="0 0 39 17" fill="none">
                    <path ref={cloudPath} d="M9.87789 6.62247C3.29287 2.31016 -2.96476 13.362 4.15178 15.6619C18.7205 16.1481 25.687 16.0759 37.118 15.6619C39.4085 13.0745 37.118 5.59981 31.6371 6.62247C32.496 2.31016 24.7658 -0.564733 21.6164 3.74759C16.4629 -1.4272 10.6351 1.37723 9.87789 6.62247Z" fill="white" stroke="black"/>
                </svg>
            </div>
        </header>
        
    )
})

export default Header;