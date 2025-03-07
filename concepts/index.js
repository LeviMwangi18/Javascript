let myBtn = document.getElementById('changeBtn');
let textChange = document.getElementById('myText');
const defaultTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates sint animi enim voluptas sed officia.Voluptates cum quod voluptatem.Voluptatum optio maxime dolore ullam alias,maiores harum sequi eum quibusdam!'

let isTextChanged = false;

myBtn.addEventListener('click', function(){
    if(isTextChanged){
        resetText();
    }
    else{
        changeText();
    }

    isTextChanged = !isTextChanged;
})

function changeText(){
    textChange.textContent = 'I hope this works for real this time!'
}

function resetText(){
    textChange.textContent = defaultTxt;
}
