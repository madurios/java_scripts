Código usando switch case e if else

console.log(&quot;opção 1: instagram&quot;)
console.log(&quot;opção 2: facebook&quot;)

let opcao = prompt(&quot;Digite a opção:&quot;)

if (opcao == 1){
console.log(&quot;Bem-vindo ao instagram&quot;)
let comando = prompt(&quot;Digite o comando:&quot;)
switch(true){
case comando == &quot;Ao vivo&quot;:
console.log(&quot;live em ao vivo&quot;)
break

case comando == &quot;storys&quot;:
console.log(&quot;Storys postado!&quot;)
break

default:
console.log(&quot;Erro de digitação&quot;)
}
}else if(opcao == 2){
console.log(&quot;Bem-vindo ao facebook&quot;)
let comando = prompt(&quot;Digite o comando:&quot;)
switch(true){
case comando ==&quot;Música&quot;:
console.log(&quot;Qual música para o seu dia?&quot;)
break

case comando ==&quot;like&quot;:

console.log(&quot;Você deu like nesse post!&quot;)
break

default:
console.log(&quot;Erro de digitação&quot;)
}
}else{
console.log(&quot;Erro&quot;)
}