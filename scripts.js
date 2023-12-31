const API = 'https://swapi.dev/api/people/'

function personaje(texto,id) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let h1_id = document.createTextNode(id)
    let h2 = document.createElement('h1')
    h2.appendChild(h1_id)
    div.appendChild(h2)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${API}${id}`)
        return personaje( await response.json(), id )
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}

for (let i=1; i<=100; i++) {
    obtener_personaje(i)
}