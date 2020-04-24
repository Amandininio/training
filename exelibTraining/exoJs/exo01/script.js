// Il faut obligatoirement lancer la fonction avec une fonction ??? (element) => changeStyleValue(element)
elementTestStyles = document.getElementById('inputTest').style;

function updateValue(element){
    switch(element.id){
        case 'color':
            elementTestStyles.backgroundColor = element.value;
            break;
        case 'padding':
            elementTestStyles.padding = `${element.value}px`;
            break;
        case 'height':
            elementTestStyles.height = `${element.value}px`;
            break;
        case 'width':
            elementTestStyles.width = `${element.value}px`;
            break;
        case 'radius':
            elementTestStyles.borderRadius = `${element.value}px`;
            break;
        case 'rotation':
            elementTestStyles.transform = `rotate(${element.value}deg)`;
            break;
        default:
            console.log('Oupsii !');
            
    } 
}

function reset(){
        elementTestStyles.backgroundColor = 'lightblue';
        elementTestStyles.padding = `0px`;
        elementTestStyles.height = `0px`;
        elementTestStyles.width = `0px`;
        elementTestStyles.borderRadius = `0px`;
        elementTestStyles.transform = `rotate(0deg)`;
        console.log('Done !');
        
}