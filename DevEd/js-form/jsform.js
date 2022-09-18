function animatedForm() {
    const arrows = document.querySelectorAll(".fa-circle-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            // validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            }
            else if(input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            }
            else if(input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm)
            }
            else {
                parent.style.animation = "shake 0.5s ease"
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        })
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('not enough characters');
        error('rgb(189,87,87)');
    }
    else {
        error('darkslategray');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
        error('darkslategray');
        return true
    }
    else {
        error('rgb(189,87,87)');
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();