// Grab the ID of the article and store it inside server storage when the button is click

export function storeID_onClick(buttons, articles){

    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            sessionStorage.setItem("ID", articles[i].getAttribute('id'));
        })
    }
}