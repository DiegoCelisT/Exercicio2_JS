let Nome1 = prompt ("Olá!, qual é o seu nome?");
let Idade1 = prompt (Nome1+", qual é a sua idade?");
let Nome2 = prompt (Nome1+", qual seu/sua personagem favorit@?");
let Idade2 = prompt ("Quantos anos você acha que "+Nome2+" têm?");
let Nome3 = prompt (Nome1+", me da o nome de seu/sua músic@ favorit@");
let Idade3 = prompt ("Quantos anos você acha que "+Nome3+" têm?");
Number(Idade1);
Number(Idade2);
Number(Idade3);

/*TABELA NORMAL*/
/*
console.log ("Vamos ver todos esses dados de maneira organizada na seguinte tabela:")
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
*/

/*LISTA ALTERNATIVA USANDO OBJETOS (Achei melhor esta para este caso)*/

let lista = [
            {Nome: Nome1, Idade:Idade1},
            {Nome: Nome2, Idade:Idade2},
            {Nome: Nome3, Idade:Idade3},
]
console.table (lista);


// VERSÃO COM 3 CONDIÇÕES (if dentro de if)

if (Idade1>Idade2)  /*Bloco1*/
{ 
    if (Idade1>Idade3)
    {
        if (Idade2>Idade3)
        {
            console.log (`${Nome1}, você é @ mais velh@ d@s três, e ${Nome2} é mais velh@ que ${Nome3}`)
        }
        else if (Idade2==Idade3)
        {
            console.log (`${Nome1}, você é @ mais velh@ d@s três. ${Nome2} e ${Nome3} têm a mesma idade`)    
        }
        else if (Idade2<Idade3)
        {
            console.log (`${Nome1}, você é @ mais velh@ d@s três, e ${Nome2} é mais nov@ que ${Nome3}`)
        }
    }
    else if (Idade1==Idade3)
    {
        if (Idade2>Idade3) /*Nunca vai se cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2==Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2<Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome1}, você e ${Nome3} têm a mesma idade, e ${Nome2} é mais nov@ que vocês`)
        }
    }
    else if (Idade1<Idade3)
    {
        if (Idade2>Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2==Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2<Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome3} é mais velh@ que você, ${Nome1}...e você é mais velho que ${Nome2}`)
        }
    } 
}
else if (Idade1==Idade2)  /*Bloco2*/
{ 
    if (Idade1>Idade3)
    {
        if (Idade2>Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome1}, você e ${Nome2} têm a mesma idade e são mais velhos que ${Nome3}`)
        }
        else if (Idade2==Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")    
        }
        else if (Idade2<Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
    }
    else if (Idade1==Idade3)
    {
        if (Idade2>Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2==Idade3){ /*Deve cumprir-se*/
            console.log (`${Nome1}, você têm a mesma idade que ${Nome2} e ${Nome3}`)
        }
        else if (Idade2<Idade3){ /*Nunca se vai cumprir*/
            console.log ("Erro")
        }
    }
    else if (Idade1<Idade3)
    {
        if (Idade2>Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2==Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
        else if (Idade2<Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome1}, você e ${Nome2} têm a mesma idade e são mais novos que ${Nome3}`)
        }
    } 
}
else if (Idade1<Idade2)  /*Bloco3*/
{ 
    if (Idade1>Idade3)
    {
        if (Idade2>Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome1}, você é mais novo que ${Nome2} e mais velh@ que ${Nome3}`)
        }
        else if (Idade2==Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")    
        }
        else if (Idade2<Idade3) /*Nunca se vai cumprir*/
        {
            console.log ("Erro")
        }
    }
    else if (Idade1==Idade3)
    {
        if (Idade2>Idade3) /*Deve cumprir-se*/
        {
            console.log (`${Nome1}, você e ${Nome3} têm a mesma idade e são mais novos que ${Nome2}`)
        }
        else if (Idade2==Idade3){ /*Nunca se vai cumprir*/
            console.log ("Erro")
        }
        else if (Idade2<Idade3){ /*Nunca se vai cumprir*/
            console.log ("Erro")
        }
    }
    else if (Idade1<Idade3)
    {
        if (Idade2>Idade3)
        {
            console.log (`${Nome1}, você é @ mais nov@ d@s três, e ${Nome2} é mais velh@ que ${Nome3}`)
        }
        else if (Idade2==Idade3)
        {
            console.log (`${Nome1}, você é @ mais nov@ d@s três. ${Nome2} e ${Nome3} têm a mesma idade`)
        }
        else if (Idade2<Idade3)
        {
            console.log (`${Nome1}, você é @ mais nov@ d@s três, e ${Nome3} é mais velh@ que ${Nome2}`)
        }
    } 
}



/* VERSÃO SIMPLES SÓ COM DUAS CONDIÇÕES


if ((Idade1>Idade2) && (Idade1>Idade3))
{
    console.log (`${Nome1}, você é o mais velho dos três`);
}
else if ((Idade1>Idade2) && (Idade1==Idade3)){
    console.log (`${Nome1}, você e ${Nome3} têm a mesma idade, e ${Nome2} é mais novo que vocês`);
}
else if ((Idade1>Idade2) && (Idade1<Idade3)){
    console.log (`${Nome1}, você é mais velho que ${Nome2}, porém mais novo que ${Nome3}`);
}



else if ((Idade1==Idade2) && (Idade1>Idade3)){
    console.log (`${Nome1}, você e ${Nome2} têm a mesma idade, e ${Nome3} é mais novo que vocês`);
}
else if ((Idade1==Idade2) && (Idade1==Idade3)){
    console.log (`${Nome1}, ${Nome2}, e ${Nome3} têm a mesma idade`);
}
else if ((Idade1==Idade2) && (Idade1<Idade3)){
    console.log (`${Nome1}, você e ${Nome2} têm a mesma idade, e ${Nome3} é mais velho que vocês`);
}




else if ((Idade1<Idade2) && (Idade1>Idade3)){
    console.log (`${Nome1}, você é mais novo que ${Nome2}, porém, mais velho que ${Nome3}`);
}
else if ((Idade1<Idade2) && (Idade1==Idade3)){
    console.log (`${Nome1}, você e ${Nome3} têm a mesma idade, e ${Nome2} é mais velho que vocês`);
}
else if ((Idade1<Idade2) && (Idade1<Idade3)){
    console.log (`${Nome1}, você é o mais novo dos três`);
}

*/