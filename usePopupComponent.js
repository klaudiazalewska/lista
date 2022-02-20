const managePopupVisibility = (popup) => {
    window.addEventListener('click', (e) => {
        if (e.target.dataset.email) {
            if (popup.style.visibility === 'hidden') {
                popup.style.visibility = 'visible';
            } else {
                popup.style.visibility = 'hidden';
            }

            popup.style.left = `${e.clientX}px`;
            popup.style.top = `${e.clientY}px`;
        } else {
            popup.style.visibility = 'hidden';
        }
    })
}

const createPopup = () => {
    const foundPopup = document.getElementById('popup');

    if (foundPopup) {
        return foundPopup;
    }

    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.width = "100px";
    popup.style.height = "100px";
    popup.style.backgroundColor = "blue";
    popup.style.position = "fixed";
    popup.style.visibility = 'hidden';
    document.body.appendChild(popup);

    return popup;
}

function usePopupComponent() {
    const popup = createPopup();
    managePopupVisibility(popup);
}

