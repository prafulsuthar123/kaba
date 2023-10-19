// signin signup slider

const main_box = document.querySelector('.main_box');
const main_content_1 = document.querySelector('.main_content_1');
const main_content_2 = document.querySelector('.main_content_2');

const input_box = document.querySelector('.input_box');
const input_content_1 = document.querySelector('.input_content_1');
const input_content_2 = document.querySelector('.input_content_2');

const change = document.getElementById('change');
const unchange = document.getElementById('unchange');

const changeBoxes = () =>{
    input_box.style.transform = 'translate(-100%)';
    main_box.style.transform = 'translate(100%)';
    main_content_1.style.display = 'none';
    input_content_1.style.display = 'none';
    main_content_2.style.display = 'block';
    input_content_2.style.display = 'inline-flex'; 
};
const changeBoxesAgain = () =>{
    input_box.style.transform = 'translate(0%)';
    main_box.style.transform = 'translate(0%)';
    main_content_2.style.display = 'none';
    input_content_2.style.display = 'none';
    main_content_1.style.display = 'block';
    input_content_1.style.display = 'inline-flex';
};

change.addEventListener('click',() =>{
    changeBoxes();
});

unchange.addEventListener('click',() =>{
    changeBoxesAgain();
});