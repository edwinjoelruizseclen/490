document.addEventListener('DOMContentLoaded', function() {
    // Activar las estrellas para la valoración
    const estrellas = document.querySelectorAll('.estrella');
    let valoracion = 0;

    // Cuando se hace clic en una estrella
    estrellas.forEach(estrella => {
        estrella.addEventListener('click', () => {
            valoracion = estrella.getAttribute('data-value');
            actualizarEstrellas();
        });
    });

    // Actualiza el color de las estrellas basadas en la valoración
    function actualizarEstrellas() {
        estrellas.forEach(estrella => {
            if (estrella.getAttribute('data-value') <= valoracion) {
                estrella.classList.add('selected');
            } else {
                estrella.classList.remove('selected');
            }
        });
    }

    // Cuando se envía el formulario
    document.getElementById('reseñas-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Previene el envío estándar del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        // Verifica si todos los campos están llenos y si se ha seleccionado una valoración
        if (!nombre || !comentario || valoracion === 0) {
            alert("Por favor, completa todos los campos y selecciona una valoración.");
            return;
        }

        // Crear una nueva reseña y agregarla al DOM
        const nuevaReseña = document.createElement('div');
        nuevaReseña.classList.add('reseña');
        nuevaReseña.innerHTML = `
            <h4>${nombre} - ${valoracion} Estrella(s)</h4>
            <p>${comentario}</p>
        `;

        // Añadir la reseña a la lista de reseñas
        document.getElementById('reseñas-lista').appendChild(nuevaReseña);

        // Limpiar el formulario después de enviarlo
        document.getElementById('reseñas-form').reset();
        valoracion = 0;
        actualizarEstrellas();
    });
});
