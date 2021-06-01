const formulario = document.querySelector('#formulario')
const imgPokemon = document.querySelector('#imgPokemon')
const idPokemon = document.querySelector('#idPokemon')
const namePokemon = document.querySelector('#namePokemon')
const typePokemon = document.querySelector('#typePokemon')

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarPokemon)
})

function buscarPokemon(e) {
    e.preventDefault()

    //Validar
    const pokemon = document.querySelector('#pokemon').value.toLowerCase()

    if (pokemon === '') {
        mostrarAlerta('Ingresa nombre o ID del pokemon')
        return
    }

    consultarAPI(pokemon)

}

function mostrarAlerta(msg) {
    const alerta = document.querySelector('.alert-danger')
    
    if(!alerta) {
        const alerta = document.createElement('div')
    
        alerta.classList.add('alert-danger', 'shadow', 'border-danger', 'bg-light', 'text-center', 'text-danger', 'p-3', 'm-1')
        alerta.innerHTML = `
            <strong class="text-danger text-center">¡Error!</strong><br>
            <span>${msg}</span> 
        `
    
        imgPokemon.appendChild(alerta)
        
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }

}

function consultarAPI(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML()
            mostrarPokemon(datos)
        })
        .catch(error => {
            console.log(error)
            mostrarAlerta('Pokemon no existe o está mal escrito')
        })
        
}


function mostrarPokemon(datos) {
    const {id, species: {name: nameSpecie}, sprites: {other: {dream_world: {front_default}}}, types:[type] } = datos
    backGroundType(type.type.name)

    const pokedexImg = document.createElement('img')
    pokedexImg.setAttribute("src", front_default)
    pokedexImg.innerHTML = ``
    pokedexImg.classList.add('card-img-top', 'img-fluid', 'pt-2')
    imgPokemon.appendChild(pokedexImg)

    const pokedexName = document.createElement('p')
    pokedexName.innerHTML = `${nameSpecie}`
    pokedexName.classList.add('m-0', 'p-3', 'text-center', 'text-capitalize')
    namePokemon.appendChild(pokedexName)

    const pokedexID = document.createElement('p')
    pokedexID.innerHTML = `ID: ${id}`
    idPokemon.appendChild(pokedexID)

    const pokedexType = document.createElement('p')
    pokedexType.innerHTML = `Type: ${type.type.name}`
    pokedexType.classList.add('bg-pokemon', 'p-2', 'border-rad', 'text-center')
    typePokemon.appendChild(pokedexType)

    
}

function limpiarHTML() {
    while (imgPokemon.firstChild) {
        imgPokemon.removeChild(imgPokemon.firstChild)
    }
    while(namePokemon.firstChild) {
        namePokemon.removeChild(namePokemon.firstChild)
    }
    while(idPokemon.firstChild) {
        idPokemon.removeChild(idPokemon.firstChild)
    }
    while(typePokemon.firstChild) {
        typePokemon.removeChild(typePokemon.firstChild)
    }
}

function backGroundType(type) {

    typePokemon

    switch (type) {
        case 'fighting':
            typePokemon.classList.add('bg-type-fight')
            break;
        case 'flying':
            typePokemon.classList.add('bg-type-fly')
            break;
        case 'poison':
            typePokemon.classList.add('bg-type-poison')
            break;
        case 'ground':
            typePokemon.classList.add('bg-type-ground')
            break;
        case 'rock':
            typePokemon.classList.add('bg-type-rock')
            break;
        case 'bug':
            typePokemon.classList.add('bg-type-bug')
            break;
        case 'ghost':
            typePokemon.classList.add('bg-type-ghost')
            break;
        case 'steel':
            typePokemon.classList.add('bg-type-steel')
            break;
        case 'fire':
            typePokemon.classList.add('bg-type-fire')
            break;
        case 'water':
            typePokemon.classList.add('bg-type-water')
            break;
        case 'grass':
            typePokemon.classList.add('bg-type-grass')
            break;
        case 'electric':
            typePokemon.classList.add('bg-type-electric')
            break;
        case 'psychic':
            typePokemon.classList.add('bg-type-psychic')
            break;
        case 'ice':
            typePokemon.classList.add('bg-type-ice')
            break;
        case 'dragon':
            typePokemon.classList.add('bg-type-dragon')
            break;
        case 'fairy':
            typePokemon.classList.add('bg-type-fairy')
            break;
        case 'dark':
            typePokemon.classList.add('bg-type-dark')
            break;
        case 'normal':
            typePokemon.classList.add('bg-type-normal')
            break;
        default:
            break;
    }

}

