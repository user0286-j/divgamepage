const divisiones = document.querySelector('.divisiones');
const division = document.querySelector('.division');
const img = document.querySelectorAll('.img_division');

let cambio = [false,false,false,false];

divisiones.addEventListener('mouseover', ()=>{

    //& Volver a gris
    for (let i = 0; i < img.length; i++){
        if (!cambio[i]) img[i].style.filter = 'grayscale(100%)';

    }
})

divisiones.addEventListener('mouseout', ()=>{
    //& Volver a color

    for (let i = 0; i < img.length; i++){
        img[i].style.filter = 'grayscale(0%)';
    }
})

for (let i = 0; i < img.length; i++){
    img[i].addEventListener('mouseover', ()=>{
        img[i].style.filter = 'grayscale(0%)';
        cambio[i] = true;
    });
    img[i].addEventListener('mouseout', ()=>{
        cambio[i] = false;
    });
}