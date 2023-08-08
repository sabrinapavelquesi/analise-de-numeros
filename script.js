let array = []

document.getElementById('num').addEventListener('keyup', function(e){
    console.log(e)
    let key = e.key
    if (key == 'Enter') {
      adicionar(num)
    }
  });

function adicionar(num) {
    if (num.value.length == 0) {
        num.value = ''
        num.focus()
       return window.alert('Você não digitou nenhum número!')
    } 
    
    let n = Number(num.value)
    if (n < 1 || n > 100) {
        num.value = ''
        num.focus()
       return window.alert('Número inválido! Escolha entre 1 e 100.')
    } 
    
    if (array.indexOf(n) != -1) {
        num.value = ''
        num.focus()
       return window.alert('Esse número já está na lista!')
    }

    criarOption(n)   
}

function criarOption(n) {
    array.push(n)
    
    let lista = document.querySelector('#lista')
    let list = document.createElement('option')
    list.text = `Valor ${n} adicionado`
    lista.appendChild(list)

    let res = document.querySelector('#res')
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizar() {
    if (array.length == 0) {
        num.value = ''
        num.focus()
       return window.alert('Adicione valores antes de finalizar!')
    }

    res.classList.remove("hidden");


    res.innerHTML = `<p>Ao todo, temos <strong>${array.length}</strong> números cadastrados.</p>`
    
    array.sort(function(a, b) {return a - b})

    res.innerHTML += `<p>Os números cadastrados, em ordem crescente, foram: <strong>${array.toString()}.</strong></p>`

    res.innerHTML += `<p>O menor valor informado foi <strong>${array[0]}.</strong></p>`
    res.innerHTML += `<p>O maior valor informado foi <strong>${array[array.length - 1]}.</strong></p>`

    // let sum = 0
    // for (let s = 0; s < array.length; s++) {
    //     sum += array[s]
    // }
    
    let sum = 0
    array.forEach( num => {
        sum += num
    })

    res.innerHTML += `<p>Somando todos os valores, teremos <strong>${sum}.</strong></p>`

    res.innerHTML += `<p>A média dos valores digitados é <strong>${(sum/array.length).toFixed(0)}.</strong></p>`
}

function limpar() {
    num.value = ''
    num.focus()
    res.innerHTML = ''
    res.classList.add("hidden");
    array = []
    lista.options.length = 0;
}