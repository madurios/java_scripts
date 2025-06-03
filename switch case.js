Códigos
let idade=17

switch(idade &gt;=18){
case true:
console.log(&quot;Ele é maior de idade&quot;)
break

default:
console.log(&quot;Ele é de menor de idade&quot;)
}

let hora = 20

switch(true){
case(hora &gt;= 6 &amp;&amp; hora &lt; 12):
console.log(&quot;Bom dia!&quot;)
break

case(hora &gt;= 12 &amp;&amp; hora &lt; 18):

console.log(&quot;Boa tarde!&quot;)
break

case(hora &gt;= 18 ||hora&lt; 6):
console.log(&quot;Boa noite!&quot;)
break

default:
console.log(&quot;Hora inválida&quot;)
}

let idade=25

switch(idade &gt;=18){
case true:
console.log(&quot;Ele pode entrar&quot;)
break

default:
console.log(&quot;Ele não pode entrar&quot;)

}

let numero1 = 5
let numero2 = 12

switch(true){
case( numero1 &gt; numero2):
console.log(&quot;numero1 é maior&quot;)
break

case(numero2 &gt; numero1):
console.log(&quot;numero2 é maior&quot;)
break

default:
console.log(&quot;Os dois números são iguais&quot;)
}

let temp= 10

switch(true){
case(temp &lt; 15):
console.log(&quot;Frio&quot;)
break
case(temp &gt; 25):
console.log(&quot;Calor&quot;)
break

default:
console.log(&quot;Temperatura invalida&quot;)

}

let verificapalavra = &quot;Amor&quot;

switch(verificapalavra){
case &quot;Felicidade&quot;:
console.log(&quot;Palavra correta&quot;)
break

default:
console.log(&quot;Palavra incorreta&quot;)
}

let moedas = 5

switch(true){
case(moedas &lt; 10):
console.log(&quot;Poucas moedas&quot;)
break

case (moedas &gt;= 10 &amp;&amp; moedas &lt;= 20):
console.log(&quot;Quantidade média&quot;)
break

case (moedas &gt; 20):
console.log(&quot;Muitas moedas&quot;)
break

default:

console.log(&quot;Valor inválido&quot;)
}

let temperatura = 15

switch (true) {
case (temperatura &gt; 30):

console.log(&quot;Muito