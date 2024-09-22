import '../css/componentes.css';
import otter from '../assets/img/otter.jpeg';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    //Creando imagen
    //const img= document.createElement('img');
    //img.src = otter;
    //document.body.append(img);
}
