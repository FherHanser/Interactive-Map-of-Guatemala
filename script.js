// JSON con la información de los departamentos
var departamentosJSON = {
    "departamentos": []
};

// Función para cargar el JSON desde un archivo externo
function cargarJSON(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                console.error('Error al cargar el JSON:', xhr.status);
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

// Llamar a la función cargarJSON con la URL del archivo JSON
cargarJSON('dataGT.json', function (data) {
    // Asignar los datos del archivo JSON al objeto departamentosJSON
    departamentosJSON.departamentos = data.departamentos;
    console.log('Datos cargados desde dataGT.json:', departamentosJSON);

});


// Función para mostrar la información del departamento al hacer clic en el mapa
document.getElementById('features').addEventListener('click', function (event) {
    // Verificar si se hizo clic en un elemento de departamento
    if (event.target.tagName === 'path') {
        // Obtener el nombre del departamento del atributo 'name'
        var nombreDepartamento = event.target.getAttribute('name');
        // Buscar la información del departamento en el JSON
        var departamento = departamentosJSON.departamentos.find(function (depto) {
            return depto.nombre === nombreDepartamento;
        });
        // Mostrar la información del departamento en el div
        if (departamento) {
            document.getElementById('infoDepartamento').innerHTML = `
                <h3>${departamento.nombre}</h3>
                <p><strong>Cabecera:</strong> ${departamento.cabecera}</p>

            `;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var departamentos = document.querySelectorAll(".mapaDiv path");
    
    departamentos.forEach(function(departamento) {
        departamento.addEventListener("click", function() {
            // Remover la clase 'selected' de todos los departamentos
            departamentos.forEach(function(dep) {
                dep.classList.remove("selected");
            });
            // Agregar la clase 'selected' al departamento clickeado
            this.classList.add("selected");
        });
    });
});

