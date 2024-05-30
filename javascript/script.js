window.addEventListener("load", getSize);
window.addEventListener("resize", getSize);

function getSize() {
    console.log(window.innerHeight);
    heightWindow = window.innerHeight;
    let estilo = document.getElementById("botao");
    let ph = 80;
    if (heightWindow < 601) {
        ph = 40
    } else if (heightWindow < 800) {
        ph = 80
    } else if (heightWindow < 850) {
        ph = 50
    }
    else if (heightWindow < 900) {
        ph = 80
    } else if (heightWindow < 1000) {
        ph = 110
    } else if (heightWindow < 1100) {
        ph = 70
    }
    else if (heightWindow < 1200) {
        ph = 80
    }
    estilo.style.marginTop = ph + "%";
}
function updateOrientationMessage() {
    const orientationMessage = document.getElementById('tudo');
    if (window.innerHeight > window.innerWidth) {
        orientationMessage.style.marginTop = '80%';
        orientationMessage.style.backgroundColor = 'red';
        orientationMessage.style.width = '100%';
        orientationMessage.style.height = '100%';



        orientationMessage.textContent = "Muda a tela para o modo paisagem e recarregue a página.";

    } else {

        window.addEventListener('resize', updateOrientationMessage);
        window.addEventListener('load', updateOrientationMessage);

    }

}



updateOrientationMessage(); 