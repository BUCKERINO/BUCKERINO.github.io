const portfolioContainer = document.querySelector('.portfolio-items')

portfolioContainer.addEventListener("click", e =>{
    //console.log(e)
    //e.preventDefault()

    const modalToggle = e.target.closest(".portfolio-link")
    //console.log(modalToggle)

    if(!modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.modal-close')

    modal.classList.add('is-open')

    closeButton.addEventListener("click", _ => {
        modal.classList.remove('is-open')
    })
})