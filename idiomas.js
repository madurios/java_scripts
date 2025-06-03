let idioma =&quot;Espanhol&quot;

switch(idioma){
case&quot;Português&quot;:
console.log(&quot;Olá!&quot;)
break

case&quot;Inglês&quot;:
console.log(&quot;Hello!&quot;)
break

case&quot;Espanhol&quot;:
console.log(&quot;¡Hola!&quot;)
break

default:
console.log(&quot;Idioma desconhecido&quot;)
}

let dia = 5

switch (dia){
case 1:
console.log(&quot;Domingo&quot;)
break

case 2:
console.log(&quot;Segunda&quot;)
break

case 3:

console.log(&quot;Terça&quot;)
break

case 4:
console.log(&quot;Quarta&quot;)
break

case 5:
console.log(&quot;Quinta&quot;)
break

case 6:
console.log(&quot;Sexta&quot;)
break

case 7:
console.log(&quot;Sabádo&quot;)
break

default:
console.log(&quot;Número desconhecido&quot;)

}

let transportes = 5

switch(transportes){
case 1:
console.log(&quot;Carro&quot;)
break

case 2:
console.log(&quot;Ônibus&quot;)
break

case 3:
console.log(&quot;Trem&quot;)
break

case 4:
console.log(&quot;Avião&quot;)
break

default:
console.log(&quot;Transporte desconhecido&quot;)
}

let urgência= 3

switch(urgência){
case 1:
console.log(&quot;Urgência baixa&quot;)
break

case 2:
console.log(&quot;Urgência média&quot;)
break

case 3:
console.log(&quot;Urgência alta&quot;)
break

default:
console.log(&quot;Nível invalido&quot;)
}

let mês = 1

switch(mês){
case 1:
case 2:
console.log(&quot;Lua nova predominante&quot;)
break

case 3:
case 4:
console.log(&quot;Quarto crescente predominate&quot;)
break

case 5:
case 6:
console.log(&quot;Lua cheia&quot;)
break

case 7:
case 8:
console.log(&quot;Quarto minguante predominante&quot;)
break

default:
console.log(&quot;Mês inválido ou fase inválido&quot;)
}

let categorias = &quot;Compacto&quot;

switch(categorias){
case &quot;Compacto&quot;:
console.log(&quot;Veículo compacto&quot;)
break

case &quot;SUV&quot;:
console.log(&quot;Veículo esportivo&quot;)
break

case &quot;Caminhão&quot;:
console.log(&quot;Veículo de carga&quot;)
break

default:
console.log(&quot;categoria inválida&quot;)
}

let horas = 6
let tarifa

switch(true){
case(horas &lt;= 1):
tarifa = 5
break

case(horas &lt;= 6):
tarifa = 15
break

case(horas &gt; 3):
tarifa = 10
break

default:
console.log(&quot;Tempo inválido&quot;)
}

let servico = &quot;Yoga&quot;

switch(servico){
case&quot;Musculação&quot;:
consolo.log(&quot;Área de musculação&quot;)
break

case&quot;Yoga&quot;:
console.log(&quot;Aula de yoga&quot;)
break

case&quot;Personal trainer&quot;:
console.log(&quot;Acompanhamento com o personal&quot;)
break

default:
console.log(&quot;Serviço não encontrado&quot;)
}
let idade = 13

switch ( true ){
case(idade &lt; 18):
console.log(&quot;Nível básico&quot;)

break

case(idade &gt;= 18 &amp;&amp; idade &lt;= 50):
console.log(&quot;Nível intermediário&quot;)
break

case(idade &gt; 50):
console.log(&quot;Nível leve&quot;)
break

default:
console.log(&quot;Idade inválida&quot;)
}

let genero = &quot;Samba&quot;

switch (genero){
case&quot;Samba&quot;:
console.log(&quot;Instrumento pandeiro&quot;)
break

case&quot;Rock&quot;:
console.log(&quot;Instrumento guitarra&quot;)
break

case&quot;Sertanejo&quot;:
console.log(&quot;Instrumento violã&quot;)
break

default:
console.log(&quot;Gênero musical não reconhecido&quot;)

}

let area = &quot;Mobile&quot;

switch(area){
case&quot;Mobile&quot;:
console.log(&quot;Curso: React Native, Flutter&quot;)
break

case&quot;Back-end&quot;:
console.log(&quot;Curso: Node.js, Python, Banco de Dados&quot;)
break

case&quot;Front-end&quot;:
console.log(&quot;Curso: HTML, CSS, JavaScrip&quot;)
break

default:
console.log(&quot;Área não encontrada&quot;)
}

let categoria = &quot;Avançado&quot;
switch(categoria){
case&quot;Básico&quot;:
console.log(&quot;Soma e subtração&quot;)
break

case&quot;Intermediário&quot;:
console.log(&quot;Multiplicação e divisão&quot;)

break

case&quot;Avançado&quot;:
console.log(&quot;Equações e lógica&quot;)
break

default:
console.log(&quot;Categoria não encontrada&quot;)
}
let idade = 13

switch( true ){
case idade &lt;= 10:
console.log(&quot;Categoria infatil&quot;)
break

case idade &lt;= 13:
console.log(&quot;Categoria pré-adolecente&quot;)
break

case idade &lt;= 18:
console.log(&quot;Categoria juvenil&quot;)
break

case idade &gt; 18:
console.log(&quot;Categoria adulto&quot;)
break

default:
console.log(&quot;Idade inválida&quot;)

}