// Declaracióin array
let productos = [
  { id: 1, nombre: "Pantalon Jean", precio: 75000, stock: 100 },
  { id: 2, nombre: "Camisa Bordo", precio: 150000, stock: 5 },
  { id: 3, nombre: "Remera Blanca", precio: 50000, stock: 20 },
  { id: 4, nombre: "Camisa Negra", precio: 150000, stock: 1 },
  { id: 5, nombre: "Pantalon Vestir", precio: 170000, stock: 3 }
];

//Operaciones Básicas y Acceso

//Imprimir la longitud total del array productos.

console.log(`La longitud total del array productos es: ${productos.length} \n`);

//Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.

console.log(`El nombre del segundo elemento del array es: ${productos[1].nombre}`);
console.log(`El nombre del tercer elemento del array es: ${productos[3].nombre} \n`);

//Recorrido del Array

//Recorrer   el   array  productos  utilizando   un   bucle   for...of   e   imprimir   el nombre  y   el  precio  de   cada  elemento.

for(const producto of productos){
  console.log(`${producto.nombre} | $${producto.precio}`);
};

//Recorre el array  productos  utilizando el método forEach() e imprimir la misma información que en el  punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]")

console.log(`\n`);
productos.forEach(producto => {
  console.log(`Nombre: ${producto.nombre} | Precio: $${producto.precio}`);
});

//Manipulación de Arrays
// 1. Agregar dos elementos al final del array productos utilizando push().
productos.push(
  {id: 6, nombre: "Chaleco Beige", precio: 45000, stock: 12},
  {id: 7, nombre: "Montgomery", precio: 135000, stock: 8});
        
console.log(productos);

// Eliminar el último elemento del array productos utilizando pop(). 
productos.pop();
console.log(productos);
// Agregar un nuevo elemento al inicio del array productos utilizando unshift().
productos.unshift(
  {id:0, nombre: "Campera Cuero",precio:95000, stock:4});
console.log(productos);
// Elimina el primer elemento del array productos utilizando shift().
productos.shift();
console.log(productos);
