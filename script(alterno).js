//EM ESTA VERSÃO USEI "ELSE IF" SIMPLES, COM OPERAÇÕES LÓGICAS (&&)

let Nome1 = prompt ("Olá!, qual é o seu nome?");
let Idade1 = prompt (Nome1+", qual é a sua idade?");
let Nome2 = prompt (Nome1+", qual seu/sua personagem favorit@?");
let Idade2 = prompt ("Quantos anos você acha que "+Nome2+" têm?");
let Nome3 = prompt (Nome1+", me da o nome de seu/sua músic@ favorit@");
let Idade3 = prompt ("Quantos anos você acha que "+Nome3+" têm?");
Number(Idade1);
Number(Idade2);
Number(Idade3);

console.log ("Vamos ver todos esses dados de maneira organizada na seguinte tabela:")

/*TABELA NORMAL*/

console.table(
    {
        "Seu nome": Nome1,
        "Sua idade": Idade1,
        "Personagem favorit@": Nome2,
        "Idade do personagem": Idade2,
        "Músic@ favorit@": Nome3,
        "Idade d@ Músic@": Idade3

    }
)


/*VERSÃO COM TRÊS CONDIÇÕES USANDO &&*/

/*Bloco1*/

if ((Idade1>Idade2) && (Idade1>Idade3) && (Idade2>Idade3))
{
    console.log (`${Nome1}, você é @ mais velh@ d@s três, e ${Nome2} é mais velh@ que ${Nome3}`);
}
else if ((Idade1>Idade2) && (Idade1>Idade3) && (Idade2==Idade3)){
    console.log (`${Nome1}, você é @ mais velh@ d@s três. ${Nome2} e ${Nome3} têm a mesma idade`) ;
}
else if ((Idade1>Idade2) && (Idade1>Idade3) && (Idade2<Idade3)){
    console.log (`${Nome1}, você é @ mais velh@ d@s três, e ${Nome2} é mais nov@ que ${Nome3}`);
}


else if ((Idade1>Idade2) && (Idade1==Idade3)) { //Obrigatoriamente Idade2<Idade3
    console.log (`${Nome1}, você e ${Nome3} têm a mesma idade, e ${Nome2} é mais nov@ que vocês`);
}

else if ((Idade1>Idade2) && (Idade1<Idade3)) { //Obrigatoriamente Idade2<Idade3
    console.log (`${Nome3} é mais velh@ que você, ${Nome1}...e você é mais velho que ${Nome2}`);
}

//Bloco 2

else if ((Idade1==Idade2) && (Idade1>Idade3)) //Obrigatoriamente Idade2>Idade3
{
    console.log (`${Nome1}, você e ${Nome2} têm a mesma idade e são mais velhos que ${Nome3}`)
}

else if ((Idade1==Idade2) && (Idade1==Idade3)){ //Obrigatoriamente Idade2=Idade3
    console.log (`${Nome1}, você têm a mesma idade que ${Nome2} e ${Nome3}`)
}

else if ((Idade1==Idade2) && (Idade1<Idade3)) { //Obrigatoriamente Idade2<Idade3
    console.log (`${Nome1}, você e ${Nome2} têm a mesma idade e são mais novos que ${Nome3}`)
}

//Bloco 3

else if ((Idade1<Idade2) && (Idade1>Idade3)) //Obrigatoriamente Idade2>Idade3
{
    console.log (`${Nome1}, você é mais novo que ${Nome2} e mais velh@ que ${Nome3}`)
}

else if ((Idade1<Idade2) && (Idade1==Idade3)){ //Obrigatoriamente Idade2>Idade3
    console.log (`${Nome1}, você e ${Nome3} têm a mesma idade e são mais novos que ${Nome2}`)
}

else if ((Idade1<Idade2) && (Idade1<Idade3) && (Idade2>Idade3)){
    console.log (`${Nome1}, você é @ mais nov@ d@s três, e ${Nome2} é mais velh@ que ${Nome3}`)
}
else if ((Idade1<Idade2) && (Idade1<Idade3) && (Idade2==Idade3)){
    console.log (`${Nome1}, você é @ mais nov@ d@s três. ${Nome2} e ${Nome3} têm a mesma idade`)
}
else if ((Idade1<Idade2) && (Idade1<Idade3) && (Idade2<Idade3)){
    console.log (`${Nome1}, você é @ mais nov@ d@s três, e ${Nome3} é mais velh@ que ${Nome2}`)
}