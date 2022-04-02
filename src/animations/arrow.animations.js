import anime from "animejs";

export const arrowAppear = (arrowRef) =>{
    anime({
        targets: arrowRef.current,
        bottom: {value: "20%", duration: 1000},
        // rotate: {value : 0, duration: 2000},
        easing: 'easeInOutSine',
        complete: () => arrowRotate(arrowRef,180,0)
    });
}

export const arrowRotate = (arrowRef, from, to) =>{
    anime({
        targets: arrowRef.current.querySelector('.ArrowDown'),
        rotate:[{value : from, duration: 0},{value : to, duration: 1000}],
        complete: () => {
            if(from==0){
                stopArrowAnimation(arrowRef)
            } else{
                arrowShake(arrowRef)
            }
        }
    });
}

const arrowShake = (arrowRef) =>{
    anime({
        targets: arrowRef.current,
        translateX: {value: "-50%", duration: 0},
        translateY: [{value: -5},{value: 5},{value: 0},{value: 5},{value: 0}],
        duration: 1000,
        delay: 1000,
        easing: 'easeInOutSine',
        complete: ()=>{arrowShake(arrowRef)}
    });
}

const stopArrowAnimation = (arrowRef) =>{
    anime.remove(arrowRef.current);
}