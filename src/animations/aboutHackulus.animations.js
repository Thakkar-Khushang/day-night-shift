 import { arrowRotate } from "./arrow.animations";
 import anime from "animejs";

 export const moveToAbout = (setMoveToAvailable, hackulusTextRef, arrowRef, AboutHackulusRef) =>{
    anime({
        targets: hackulusTextRef.current,
        top: -200,
        easing: 'easeInOutElastic',
        duration: 2500,
        complete: () => {
            setMoveToAvailable(false);
        }
    });

    anime({
        targets: arrowRef.current,
        bottom: {value: "87%", duration: 2500},
        easing: 'easeInOutElastic',
        complete: () => arrowRotate(arrowRef, 0,180)
    });

    anime({
        targets: AboutHackulusRef.current,
        bottom: [{value: "15%", duration: 2500}],
        easing: 'easeInOutElastic',
        complete: ()=>appearTextOnAbout(AboutHackulusRef)
    })
}

const appearTextOnAbout = (AboutHackulusRef) =>{
    anime({
        targets: AboutHackulusRef.current.querySelectorAll(".AboutHackulusText"),
        opacity: [{value: 1, duration: 2000}],
        easing: 'easeInOutSine',
        delay: function(el, i) { return i * 1000 },
    });
}

export const moveBackToLanding = (setMoveToAvailable, hackulusTextRef, arrowRef, AboutHackulusRef) => {
    anime({
        targets: hackulusTextRef.current,
        top: '45%',
        easing: 'easeInOutElastic',
        duration: 2500,
        complete: () => {
            setMoveToAvailable(true);
        }
    });

    anime({
        targets: arrowRef.current,
        bottom: {value: "20%", duration: 2500},
        easing: 'easeInOutElastic',
        complete: () => arrowRotate(arrowRef, 180,0)
    });

    anime({
        targets: AboutHackulusRef.current,
        bottom: [{value: "-70%", duration: 2500}],
        easing: 'easeInOutElastic',
    })
}