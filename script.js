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

document.addEventListener("DOMContentLoaded", function () {
    var departamentos = document.querySelectorAll(".mapaDiv path");

    departamentos.forEach(function (departamento) {
        departamento.addEventListener("click", function () {
            // Remover la clase 'selected' de todos los departamentos
            departamentos.forEach(function (dep) {
                dep.classList.remove("selected");
            });
            // Agregar la clase 'selected' al departamento clickeado
            this.classList.add("selected");
        });
    });
});


// Data de los departamentos
var departamentosJSON =
{
    "departamentos": [
        {
            "nombre": "Guatemala",
            "cabecera": "Ciudad de Guatemala",
            "region": "Región Metropolitana"
        },
        {
            "nombre": "El Progreso",
            "cabecera": "Guastatoya",
            "region": "Región Central"
        },
        {
            "nombre": "Sacatepéquez",
            "cabecera": "Antigua Guatemala",
            "region": "Región Central"
        },
        {
            "nombre": "Chimaltenango",
            "cabecera": "Chimaltenango",
            "region": "Región Central"
        },
        {
            "nombre": "Escuintla",
            "cabecera": "Escuintla",
            "region": "Región Central"
        },
        {
            "nombre": "Santa Rosa",
            "cabecera": "Cuilapa",
            "region": "Región Central"
        },
        {
            "nombre": "Sololá",
            "cabecera": "Sololá",
            "region": "Región Occidental"
        },
        {
            "nombre": "Totonicapán",
            "cabecera": "Totonicapán",
            "region": "Región Occidental"
        },
        {
            "nombre": "Quetzaltenango",
            "cabecera": "Quetzaltenango",
            "region": "Región Occidental"
        },
        {
            "nombre": "Suchitepéquez",
            "cabecera": "Mazatenango",
            "region": "Región Suroccidental"
        },
        {
            "nombre": "Retalhuleu",
            "cabecera": "Retalhuleu",
            "region": "Región Suroccidental"
        },
        {
            "nombre": "San Marcos",
            "cabecera": "San Marcos",
            "region": "Región Suroccidental"
        },
        {
            "nombre": "Huehuetenango",
            "cabecera": "Huehuetenango",
            "region": "Región Occidental"
        },
        {
            "nombre": "Quiché",
            "cabecera": "Santa Cruz del Quiché",
            "region": "Región Occidental"
        },
        {
            "nombre": "Baja Verapaz",
            "cabecera": "Salamá",
            "region": "Región Central"
        },
        {
            "nombre": "Alta Verapaz",
            "cabecera": "Cobán",
            "region": "Región Norte"
        },
        {
            "nombre": "Petén",
            "cabecera": "Flores",
            "region": "Región Norte"
        },
        {
            "nombre": "Izabal",
            "cabecera": "Puerto Barrios",
            "region": "Región Norte"
        },
        {
            "nombre": "Zacapa",
            "cabecera": "Zacapa",
            "region": "Región Nororiental"
        },
        {
            "nombre": "Chiquimula",
            "cabecera": "Chiquimula",
            "region": "Región Nororiental"
        },
        {
            "nombre": "Jutiapa",
            "cabecera": "Jutiapa",
            "region": "Región Suroriental"
        },
        {
            "nombre": "Jalapa",
            "cabecera": "Jalapa",
            "region": "Región Suroccidental"
        }
    ]
};

