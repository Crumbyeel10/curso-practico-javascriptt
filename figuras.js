//codigo del cuadrado

console.group('Cuadrado')

const lado = 5

console.log('Los lados del cuadrado miden ' + 5)

const areaCuadrado = lado * 4;

const perimetro = lado * lado

console.log('El perimetro del cuadrado es ' + areaCuadrado + 'cm' )

console.log('El perimetro del cuadrado es ' + perimetro + 'cm' )

console.groupEnd()

//codigo del Triangulo

console.group('triangulos')
const ladoTriangulo1 = 6

const ladoTriangulo2 = 6 

const baseTriangulo = 4

const alturaTriangulo = 5.5

 const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;




console.log(
    'Los lados del triangulo miden ' 
    + ladoTriangulo1 + 'cm ' 
    + ladoTriangulo2 + 'cm ' 
    +  baseTriangulo + 'cm'
    )


console.log('La altura del triangulo es  ' + alturaTriangulo + 'cm' )


console.log('El area del Triangulo ' + areaTriangulo + 'cm' )

console.groupEnd()


//codigo del Circulo

console.group('Circulo')

//Radio
const radioCirculo  = 4 
console.log('El radio del circulo es: ' + radioCirculo + ' cm')

//Diametro Circulo

const diametroCirculo =  radioCirculo * 2
console.log('El diametro del circulo es: ' + diametroCirculo + ' cm')

//PI

const PI = Math.PI
 
// Circunferencia

const perimetroCirculo =  diametroCirculo * PI

//Area 

const areaCirculo = (radioCirculo + radioCirculo) * PI

console.groupEnd()
