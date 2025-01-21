// Function for Burger Menu


export function burgerAnimation(burger, linkUl, window) {
    let isAnimating = false;
    const breakpoint = 786;
        
    // Reset menu
    if (window.innerWidth > breakpoint) {
        linkUl.style.display = 'flex';
        linkUl.classList.remove('slide-in', 'slide-out');
    } else if (!linkUl.classList.contains('slide-in')) {
        // Hide menu if it's not explicitly opened
        linkUl.style.display = 'none';
        linkUl.classList.remove('slide-in', 'slide-out');
    }



    // Handle burger click
    burger.addEventListener('click', () => {
      if (isAnimating) return; // Prevent animation interruption
      
      const isMenuVisible = linkUl.classList.contains('slide-in');
      
      // Clean up previous animation classes
      linkUl.classList.remove('slide-in', 'slide-out');
      // Force a reflow to ensure animations work consistently
      void linkUl.offsetWidth;
      
      if (isMenuVisible) {
        requestAnimationFrame(() => {
            linkUl.style.display = "flex";
            linkUl.classList.add('slide-out');
            isAnimating = true;
            linkUl.addEventListener('animationend', () => {
                linkUl.style.display = "none";
                isAnimating = false;
            }, {once: true})});

      } else {
        requestAnimationFrame(() => {
            linkUl.style.display = "flex";
            linkUl.classList.add('slide-in');
            isAnimating = true;
            linkUl.addEventListener('animationend', () => {
                isAnimating = false;
            }, {once: true})});
      }
    });


    
    // Handle window resize
    window.addEventListener('resize', () => {
        const breakpoint = 786;
        
        // Reset menu
        if (window.innerWidth > breakpoint) {
          linkUl.style.display = 'flex';
          linkUl.classList.remove('slide-in', 'slide-out');
        } else if (!linkUl.classList.contains('slide-in')) {
          // Hide menu if it's not explicitly opened
          linkUl.style.display = 'none';
          linkUl.classList.remove('slide-in', 'slide-out');
        }
      });
}
    