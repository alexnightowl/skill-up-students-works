function showAlert(mesege){
    alert (mesege)
}

const textBlock =document.querySelector('.js-textRebock')

textBlock.onclick =function( ) {
    console.log(textBlock.innerTEXT)
}

const textField =document.querySelector('.js-textRebock')

textField.addEventListener('click',function name(params) {
    textField.style.backgroundColor =("red")
})

textField.addEventListener('input',function name(event) {
    console.log(this)
    textField.style.backgroundColor ="elou"
})

textField.addEventListener('blur',function name(params) {
    textField.style.backgroundColor =("red")
})

const button =document.getElementById('btn')
    button.addEventListener('click',function (event) {
        let.mesege =this,this.parentElement.value;
        console,log(event.target.value)
        console.log(mesege);
    })


