const calculate = document.getElementById("calculate")

calculate.addEventListener('click', function(){
    const number = document.getElementById('inputTabuada').value
    const list = document.getElementById('list');
    list.innerText = ''
    list.innerText = '\nTabuada do ' + number + ":\n\n"
    for (let i=1; i<=10; i++){
        let div = document.createElement('div');
        div.innerText = i + " * " + number + " = " + number * i;
        list.appendChild(div)
    }
    document.getElementById('inputTabuada').value = ''
})