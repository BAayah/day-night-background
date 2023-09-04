

const onAdd = () => {
    block.classList.add('lamp')
    document.body.style.backgroundImage ='url(michael-held-6fRHGqbp1_4-unsplash.jpg)'
    block.innerHTML='Good morning!'
    block.style.color='black'
}

const onRemove = () => {
    block.classList.remove('lamp')
    document.body.style.backgroundImage = 'url(alexis-antonio-TFth26tEjss-unsplash.jpg)'
    block.innerHTML='Good night!'
    block.style.color='yellow'
}

// const onToggle = () => {
//     block.classList.toggle('lamp')   
//     // alert('salam')
// }