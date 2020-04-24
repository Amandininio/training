let ms1 = 0,ms2 = 0, s1 = 0, s2 = 0, min1= 0, min2 = 0, h = 0;
let t;
const msGap = 10;
timeElements = document.getElementsByTagName('span');
buttons = document.getElementsByTagName('button');

function enableAll(){
    buttons[0].disabled = false;
    buttons[0].style.background = '#3498db';
    buttons[1].disabled = false;
}

function start(e){
    enableAll();
    t = window.setInterval(updateChrono,msGap);
    e.disabled = true;
    e.style.backgroundColor = 'rgba(169,169,169,0.3)';
}

function stop(){
    clearInterval(t);
    enableAll();
}

function reset(e){
    stop();
    ms1 = 0;
    timeElements[2].innerHTML= `00.000s`; //00.000s
    timeElements[1].innerHTML= `00min`; // 00min
    timeElements[0].innerHTML= `0h`;
}

function updateChrono(){
    ms1 += 1;
    if( ms1 === 10){
        ms1 = 0; // 1 = 10ms
        ms2 += 1;
    }
    if( ms2 === 10){
        ms2 = 0; // 1 = 100ms
        s1 += 1;
    }
    if( s1 === 10){
        s1 = 0;
        s2 += 1;
    }
    if( s2 === 6){
        s2 = 0;
        min1 += 1;
    }
    if( min1 === 10){
        min1 = 0;
        min2 += 1;
    }
    if( min2 === 6){
        min2 = 0;
        h += 1;
    }

    timeElements[2].innerHTML= `${s2}${s1}.${ms2}${ms1}0s`; //00.000s
    timeElements[1].innerHTML= `${min2}${min1}min`; // 00min
    timeElements[0].innerHTML= `${h}h`;
}

