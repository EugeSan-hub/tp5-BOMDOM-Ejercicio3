const inputTarea = document.getElementById('inputTarea');
const btnAgregarTarea = document.getElementById('btnAgregarTarea');
const listaTareas = document.getElementById('listaTareas');

// Función para agregar una tarea
function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    
    if (textoTarea !== '') {
        // Crear un nuevo elemento de la lista
        const itemTarea = document.createElement('li');
        itemTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
        // Agregar el texto de la tarea
        itemTarea.textContent = textoTarea;

        // Crear un botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => itemTarea.remove();

        // Agregar el botón al elemento de la lista
        itemTarea.appendChild(botonEliminar);

        // Agregar el elemento a la lista de tareas
        listaTareas.appendChild(itemTarea);

        // Limpiar el input
        inputTarea.value = '';
    }
}

// con add event listener le damos funcion al boton 
btnAgregarTarea.addEventListener('click', agregarTarea);

// agregamos la tarea debajo del input 
inputTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});