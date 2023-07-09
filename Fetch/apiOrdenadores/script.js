window.onload = () => {
    const containerCard = document.getElementById('containerCard')
    let listPC = []

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
    .then(res => res.json())
    .then(res => {
        res.results.map((PC) =>{
        containerCard.innerHTML += `
        <div>
            <i class="container-img">
            <img src="${PC.thumbnail}">
            </i>
          <h3>${PC.title}</h3>
          <span>
            Price: $${PC.price}
          </span>
        </div>
        `
    })
    })
    .catch(err => console.error(err))
}

