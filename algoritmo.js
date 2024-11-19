// algoritmo que utiliza la suma entre dos valores ingresados por el usuario
function suma(){
    let a
    let b 
    let s 

    a= parseInt(prompt ("ingrese el primer valor: "))
    b= parseInt(prompt ("ingrese el segundo valor: "))

    s = a+b

    console.log ("El resultado de la suma " + s)
    alert("el resultado de la suma es " + s)
}


function opBasica(){
    //algoritmo que determina la suma, resta, multiplicacion y divicion entre dos valores ingresados por el usuario
    let a
    let b
    let s
    let r
    let m 
    let d 

    a = parseInt(prompt ("Ingrese el primer numero"))
    b = parseInt(prompt ("Ingrese el segundo numero"))
     
    s = a+b
    r = a-b
    m = a*b
    d = a/b

    console.log ("El resultado de la suma es " + s )
    alert("el resultado de la suma es " + s)

    console.log ("El resultado de la resta es " + r)
    alert("el resultado de la resta es " + r)

    console.log ("El resultado de la Multiplicacion es " + m)
    alert("el resultado de la multiplicacion es " + m)

    console.log ("El resultado de la Division es " + d)
    alert("el resultado de la Division es " + d)
}
//realizar un algoritmo que determine un area de un cuadrado de un numero por el usuario
function cuadrado(){
    let a
    let b = 2
    let c

    a = parseInt(prompt("Ingrese el primer numero"))

    c = a ** b

    console.log ("El area del cuadrado del numero es " + c)
    alert("El area del cuadrado del numero es " + c)
}

//realizar un algoritmo que  determine el area de un triangulo apartir de la base y altura ingresados por el usuario
function triangulo(){
    let a
    let b 
    let t 

    a = parseInt(prompt("Ingrese el primer numero"))
    b = parseInt(prompt("Ingrese el segundo numero"))

    t = a*b/2

    console.log ("El area del triangulo es " + t)
    alert("El area del triangulo es " + t)
}

//realizar un algoritmo que determine los kilometros, pulgadas y metros de un valor dado en centimentros
function convercion(){
    let k
    let p 
    let m 
    let c
    
    k = parseInt(prompt("Ingrese el numero"))
    
    p = k / 100000
    m = k / 100
    c = k / 2.54

    console.log ("kilometros" + p)
    alert("kilometros" + p)

    console.log ("metros" + m)
    alert("metros" + m)

    console.log ("pulgadas" + c)
    alert("pulgadas" + c)

}

//realizar un algoritmo que determine el numero mayor de dos numeros ingresados por el usuario
function mayor2(){
    let a 
    let b 
    
    a = parseInt(prompt("Ingrese el numero"))
    b = parseInt(prompt("Ingrese el otro numero"))

    if (a>b){
        console.log("El numero " + a + " es mayor que " + b)
        alert("el numero " + a + " es mayor que " + b)
    }
    else if (a<b){
        console.log("El numero " + b + " es mayor que " + a)
        alert("el numero " + b + " es mayor que " + a)
    }
    else {
        console.log("El numero " + a + " es igual que " + b)
        alert("el numero " + a + " es igual que " + b)
    }
}

//realizar un algoritmo que determine el numero menor de dos numeros ingresados por el usuario
function menor3(){
    let a 
    let b 
    let c 

    a = parseInt(prompt("Ingrese un numero"))
    b = parseInt(prompt("Ingrese otro numero"))
    c = parseInt(prompt("ingrese otro numero"))


    if (a && b > c){
        console.log("El numero " + a + " y el numero " + b +" son mayores que " + c + " por lo tanto el numero es menor es " + c) 
        alert("El numero " + a + " y el numero " + b + " son mayores que " + c + " por lo tanto el numero es menor es " + c) 
    }
    else if (a && b < c){
        console.log("El numero " + a + " y el numero " + c +" son mayores que " + b + " por lo tanto el numero es menor es " + b) 
        alert("El numero " + a + " y el numero " + c + " son mayores que " + b + " por lo tanto el numero es menor es " + b) 
    }
    else if (c && b < a){
        console.log("El numero " + b + " y el numero " + c +" son mayores que " + a + " por lo tanto el numero es menor es " + a) 
        alert("El numero " + b + " y el numero " + c + " son mayores que " + a + " por lo tanto el numero es menor es " + a) 
    }
    else {
        console.log("El numero ingresado es el mismo valor ") 
        alert("El numero ingresado es el mismo valor ") 
    }
}

//realizar un algoritmo que solicte al estudiantes su nombr la materia y 8 calificaciones de la misma entre 1-10, determinar con esta informacion si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con  6.2 en adelante
function notas(){
    let n 
    let m 
    let c1
    let c2
    let c3
    let c4
    let c5
    let c6
    let c7
    let c8
    let r

    n = prompt("Ingrese el nombre del estudiante")
    m = prompt("Ingrese la materia")
    c1 = parseInt(prompt("Ingrese la primera nota"))
    c2 = parseInt(prompt("Ingrese la segunda nota"))
    c3 = parseInt(prompt("Igrese la tercera nota"))
    c4 = parseInt(prompt("Ingrese la cuarta nota"))
    c5 = parseInt(prompt("Ingrese la quinta nota"))
    c6 = parseInt(prompt("Ingrese la sexta nota"))
    c7 = parseInt(prompt("Ingrese la septima nota"))
    c8 = parseInt(prompt("Ingrese la octavaba nota"))

    r = (c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8) / 8

    if (r >= 6.2){
        console.log("El estudiante " + n +  " aprobo la materia " + m + " El resultado de sus califiaciones es: " + r) 
        alert("El estudiante " + n +  " aprobo la materia " + m + " El resultado de sus califiaciones es: " + r) 
    }
    else {
        console.log("El estudiante " + n +  " reprobo la materia " + m + " El resultado de sus califiaciones es: " + r) 
        alert("El estudiante " + n +  " reprobo la materia " + m + " El resultado de sus califiaciones es: " + r) 
    }
}
//determinar si un numero ingresado por el esuadiante es par o impar
function par_impar(){
    let n 

    n = prompt("Ingresa un número");

    if (n % 2 === 0) {
        console.log("El número es par")
        alert("El número es par")
    } else {
        console.log("El número es impar")
        alert("El número es impar")
    }
    }

//un individuo decide invertir en un banco y requiere saber cuanto dinera ganara despues de n numeros de años teniendo en cuenta que el banco paga un interes mensual del 0,7%
function inversion(){
    let ci
    let a
    let im
    let meses
    let cf

    ci = parseFloat(prompt("Ingresa el capital inicial"));
    a = parseInt(prompt("Ingresa la cantidad de años:"));

    im = 0.007;
    meses = a * 12;
    cf = ci * (1 + im) ** meses;

    console.log("El capital después de " + a + " años será: ");
    alert("El capital después de " + a + " años será: " + cf);
}
//realizar un algoritmo que solicite  al usuario un rango entre 2 valores y muestre los numeros que hay entre ellos
function rango(){
    let inicio
    let fin
    
    inicio = parseInt(prompt("Ingresa el valor inicial del rango"));
    fin = parseInt(prompt("Ingresa el valor final del rango"));
    if (inicio < fin) {
    for (let i = inicio + 1; i < fin; i++) {
        console.log(i);
        alert(i);
    }}
    else {
        console.log("El valor inicial debe ser menor que el valor final.");
        alert("El valor inicial debe ser menor que el valor final.");
    }

}
