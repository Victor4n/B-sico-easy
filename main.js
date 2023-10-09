const imagenes = ["https://images6.alphacoders.com/909/thumb-1920-909641.png", "https://wallpapercave.com/wp/wp6138945.jpg", "https://wallpaperaccess.com/full/5733834.jpg"];

let indice = 0;

function imagen_change(){
    const imagen_element = document.getElementById("imagen1");
    imagen_element.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

setInterval(imagen_change, 3000);