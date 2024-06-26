const portfolioContainer = document.querySelector('.portfolio-items');
const header = document.getElementById('header');

portfolioContainer.addEventListener("click", e => {
    e.preventDefault();
    console.log(e);
    console.log(header);
    const modalToggle = e.target.closest(".portfolio-link");

    if (!modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector('.modal-close');

    const modalOpen = () => {
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 500ms forwards';
        document.body.style.overflowY = 'hidden';
    };

    const modalClose = () => {
        modal.classList.remove('is-open');
        modal.removeEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll'; // Enable scrolling on the body
    };

    closeButton.addEventListener("click", () => {
        modal.style.animation = 'modalOut 500ms forwards';
        modal.addEventListener('animationend', modalClose);
    });

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
        }
    });

    modalOpen();
});