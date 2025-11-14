const frases = [
    "Não importa o que você decidiu, o que importa é que isso te faça feliz!",
    "Todos os dias você se supera de alguma forma e isso já é o suficiente!",
    "Algumas vezes, coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver!",
    "Não tenha medo de mudar, tenha medo de daqui um ano estar reclamando dos mesmos problemas!",
    "Você é mais corajoso do que pensa, mais forte do que parece e mais esperto do que acredita!",
    "Não é sobre quantas vezes você foi rejeitado, caiu e teve que levantar. É sobre quantas vezes você fica em pé, levanta a cabeça e segue em frente!",
    "Quando algo ruim acontece, você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte!",
    "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite, lute e conquiste tudo que puder!",
    "Valorize as pequenas vitórias, o sucesso é a soma de pequenos esforços!"

];

const frase = document.querySelector('#frase');
const btn = document.querySelector('#btn');

function gerarFrase(){
    const randomizar = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[randomizar];
}
btn.addEventListener('click', gerarFrase);