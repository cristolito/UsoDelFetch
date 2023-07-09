window.onload = () => {
    const containerCard = document.getElementById('containerCard')

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(ditto => {
      console.log(ditto)
        containerCard.innerHTML = `
        <div>
            <i class="container-img">
            <img src="${ditto.sprites.front_default}">
            </i>
          <h3>${ditto.name}</h3><br/>
          <span>
            Habilidades: 
            <ul>
              <li>
              --${ditto.abilities[0].ability.name}
              </li>
              <li>
              --${ditto.abilities[1].ability.name}
              </li>
            </ul>
          </span>
          <span><br/>
            Altura: ${ditto.height/10} m <br/>
            Peso: ${ditto.weight/10} kg
          </span>
        </div>
        `
    })
    .catch(err => console.error(err))
}

