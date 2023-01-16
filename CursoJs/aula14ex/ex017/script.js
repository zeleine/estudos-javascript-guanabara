function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
      window.alert('Por favor, digite um número.')
    } else {
      let n = Number(num.value) //converter o número
        //essa variável n vai ser o número que a pessoa digitou
      let c = 1
     
      tab.innerHTML = '' //esse comando limpa a tabuada anterior para mostrar a próxima
      
      while (c <= 10) {
          let item = document.createElement('option') //como se tivesse colocado lá no html
          item.text = `${n} x ${c} = ${n*c}` //template string. ele vai fazer a conta e colocar na tela
          item.value = `tab${c}` //isso só implicará em algo quando for usar outra linguagem de programação, como php
          tab.appendChild(item) //appendChild é adicionar um elemento filho em JS
          c++
      }
    }
    
}