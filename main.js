const tituloEducacion = document.querySelector('.titulo-educacion');
const educacionLista = document.querySelector('.educacion-lista');
const tituloHabilidades = document.querySelector('.titulo-habilidades');
const habilidadesLista = document.querySelector('.habilidades-lista');
const Datos = document.querySelector('.Datos');
const DatosLista = document.querySelector('.Datos-lista');
const tituloExperiencia = document.querySelector('.titulo-experiencia');
const ExperienciaLista = document.querySelector('.experiencia-lista');
const botonesEscuelas = document.querySelectorAll('.Escuelas');


tituloEducacion.addEventListener('click', function() {
    tituloEducacion.classList.toggle('oculto');
});

tituloHabilidades.addEventListener('click', function(){
    tituloHabilidades.classList.toggle('oculto');
    tituloHabilidades.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

Datos.addEventListener('click', function() {
    Datos.classList.toggle('add');
});

tituloExperiencia.addEventListener('click', function(){
    tituloExperiencia.classList.toggle('oculto');
});

botonesEscuelas.forEach(function(boton) {
    boton.addEventListener('click', function() {
        const renglon = boton.parentElement;
        const contenedor = renglon.querySelector('.contenedor-items');
        
        if (contenedor) {
            contenedor.classList.toggle('oculto');
        }
    });
});