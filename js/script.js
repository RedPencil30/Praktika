const sliderLine = document.querySelector('.slider-line');
let a = 0;

sliderLine.style.left = '0%';

document.getElementById('one').style.backgroundColor = '#8A4A44';

//Кнопки
document.getElementById('one').addEventListener('click', function(){
    sliderLine.style.left = '0%';
    a = 100;
});

document.getElementById('two').addEventListener('click', function(){
    sliderLine.style.left = '-100%';
    a = 0;
});

document.getElementById('three').addEventListener('click', function(){
    sliderLine.style.left = '-200%';
    a = -100;
});

document.getElementById('four').addEventListener('click', function(){
    sliderLine.style.left = '-300%';
    a = -200;
});

document.getElementById('five').addEventListener('click', function(){
    sliderLine.style.left = '-400%';
    a = -300;
});

//Функция авто-слайда
function autoSlide(){
    a -= 100;   
    sliderLine.style.left = a + '%';
    if(sliderLine.style.left == '-400%'){
        a = 100;
    }

}

setInterval(autoSlide, 5000);


//Изменение цвета кнопок
function pointColor(){
    if(sliderLine.style.left == '-400%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#8A4A44';
    }
    else if(sliderLine.style.left == '-300%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#8A4A44';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '-200%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#8A4A44';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '-100%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#8A4A44';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '0%'){
        document.getElementById('one').style.backgroundColor = '#8A4A44';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
}

setInterval(pointColor, 1);


const logBlock = document.querySelector('.slider');

logBlock.addEventListener('touchstart', handleTouchStart, false);
logBlock.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

//Определение начальных координат касания
function handleTouchStart(event){
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}

function handleTouchMove(event){
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let xRes = x2 - x1;

    if(xRes < 0){
        if(sliderLine.style.left == '0%'){
            sliderLine.style.left = '-100%';
        }
        else if(sliderLine.style.left == '-100%'){
            sliderLine.style.left = '-200%';
        }
        else if(sliderLine.style.left == '-200%'){
            sliderLine.style.left = '-300%';
        }
        else if(sliderLine.style.left == '-300%'){
            sliderLine.style.left = '-400%';
        }
        else if(sliderLine.style.left == '-400%'){
            sliderLine.style.left = '0%';
        }
        
    }
    else if(xRes > 0){
        if(sliderLine.style.left == '0%'){
            sliderLine.style.left = '-400%';
        }
        else if(sliderLine.style.left == '-100%'){
            sliderLine.style.left = '0%';
        }
        else if(sliderLine.style.left == '-200%'){
            sliderLine.style.left = '-100%';
        }
        else if(sliderLine.style.left == '-300%'){
            sliderLine.style.left = '-200%';
        }
        else if(sliderLine.style.left == '-400%'){
            sliderLine.style.left = '-300%';
        }
        
    }

    x1 = null;
}
