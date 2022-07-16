
//alert ("Hola mundo")

let opciones = prompt("Si querés sumar, poné + \nSi querés restar poné - \nSi querés dividir poné / \nSi querés multiplicar poné * " )


 console.log (opciones)

 if(opciones == "-"){
    let n1= parseInt(prompt("Poné el primer número"))
   // console.log (n1)
    let n2= parseInt(prompt("Poné el segundo número"))
    //console.log (n2)
    let resultado = (n1-n2)
    alert (resultado)
    console.log (resultado)
 }
    else if (opciones == "+"){
        let n1= parseInt(prompt("Poné el primer número"))
        // console.log (n1)
         let n2= parseInt(prompt("Poné el segundo número"))
         //console.log (n2)
         let resultado = (n1+n2)
         alert (resultado)
         console.log (resultado)
    }
    else if (opciones == "*"){
        let n1= parseInt(prompt("Poné el primer número"))
        // console.log (n1)
         let n2= parseInt(prompt("Poné el segundo número"))
         //console.log (n2)
         let resultado = (n1*n2)
         alert (resultado)
         console.log (resultado)
    }
    else if (opciones == "/"){
        let n1= parseInt(prompt("Poné el primer número"))
        // console.log (n1)
         let n2= parseInt(prompt("Poné el segundo número"))
         //console.log (n2)
         let resultado = (n1/n2)
         alert (resultado)
         console.log (resultado)
    }
 else {
    alert ("Claramente no querés hacer caso")
}

let n1= parseInt(0)
let n2= parseInt(0)


 