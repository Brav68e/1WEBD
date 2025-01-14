// Function for Burger Menu


export function burgerAnimation(burger, linkUl){
    burger.addEventListener('click', () => {
        if(linkUl.classList.contains('slide-in')){
            // replacement of void linkUl.offsetWidth, force the DOM and prevent optimisation
            requestAnimationFrame(() => {
                // Remove the old animation class
                linkUl.classList.remove('slide-in');
                requestAnimationFrame(() => {
                    linkUl.classList.add('slide-out');
                    linkUl.addEventListener('animationend', () => {
                        linkUl.style.display = "none";
                    }, {once: true});
                });
            });
        } else {
            linkUl.style.display = "flex";
            linkUl.classList.remove('slide-out');
            linkUl.classList.add('slide-in');
        }
    });
}


// Fix : nav li not being display if we reduce the screen size and then increase it back
export function hidden_burger(window, linkUl){
    window.addEventListener('resize', () => {
        if(window.innerWidth > 786){
                linkUl.style.display = "flex"
            }
            else{
                linkUl.style.display = "none"
                linkUl.classList.remove('slide-in')
                linkUl.classList.remove('slide-out')
            }
        })
}
