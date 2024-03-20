function alert(alertText) {
    const alertBox = document.createElement('div');
    alertBox.textContent = alertText;
    alertBox.style.width = "400px";
    alertBox.style.height = "200px";
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "rgb(50, 50, 50)";
    alertBox.style.display = "flex";
    alertBox.style.justifyContent = "center";
    alertBox.style.alignItems = "center";
    alertBox.style.boxShadow = "0px 0px 15px black";
    alertBox.style.opacity = 0;
    alertBox.style.transition = "opacity 0.5s";

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Okay';
    closeButton.style.position = "absolute";
    closeButton.style.bottom = "15px";
    closeButton.style.left = "50%";
    closeButton.style.backgroundColor = "rgb(100, 100, 100)";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.padding = "5px 10px";
    closeButton.style.transform = "translate(-50%, 0px)";

    closeButton.onclick = function() {
        alertBox.style.opacity = 0;
        setTimeout(() => {
            alertBox.remove();
        }, 500);
    };

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = 1;
    }, 100);
}
