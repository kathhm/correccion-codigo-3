// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];


const $i = document.querySelector("input"); //se le quita el punto al input AQUI CAPTURO TODO LO QUE INGRESA EL USUARIO
const li = document.getElementById("lista-de-productos") //CAMBIAMOS A QUERY SELECTOR, PORQUE TENEMOS UN ID Y NO UN NAME - AQUI IRAN MIS PRODUCTOS

for (let i = 0; i < productos.length; i++) { //crea un div para cada producto
  let d = document.createElement("div"); // d es el padre
  d.classList.add("producto"); //agrega producto a d

  let ti = document.createElement("p") //crea un elemento p que servirá como título
  ti.classList.add("titulo") //agrega titulo al parráfo creado
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img"); //crea un elemento img que se le asignará la imagen
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti) //se agrega el titulo y la imagen dentro del div que presenta el producto
  d.appendChild(imagen)

  li.appendChild(d)
  }



const botonDeFiltro = document.querySelector("button"); //accede al primer button que vea y lo guarda en boton de filtro

const botonFiltro= () => { //defino la función de boton filtro
  
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  