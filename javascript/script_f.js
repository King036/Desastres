
document.addEventListener("DOMContentLoaded", () => {
    contator = 0;


    // Seleciona todos os objetos interativos e o lixo
    const objects = document.querySelectorAll(".latinha, .banana, .caixinha, .garrafa, .maca, .papelao, .sacola, .vidro, .lixo");
    const trash = document.querySelector(".lixeira");
    let selectedObject = null;

    // Adiciona evento de clique para cada objeto
    objects.forEach(object => {
        object.addEventListener("click", () => {
            if (selectedObject) {
                selectedObject.style.border = "none"; // Remove borda do objeto previamente selecionado
            }
            selectedObject = object;
            selectedObject.style.border = "2px solid black"; // Adiciona borda ao objeto selecionado
        });
    });

    // Adiciona evento de clique ao lixo
    trash.addEventListener("click", () => {
        if (selectedObject) {
            selectedObject.remove(); // Remove o objeto selecionado
            selectedObject = null;

            // Verifica se todos os objetos foram removidos
            const remainingObjects = document.querySelectorAll(".latinha, .banana, .caixinha, .garrafa, .maca, .papelao, .sacola, .vidro");
            if (remainingObjects.length === 0) {
                alert("Parabéns! Você limpou todos os objetos da água!");
                for (let index = 0; index < 21; index++) {

                    setTimeout(() => { transitionToNextPhase() }, 2000);

                }


            }
        } else {
            alert("Selecione um objeto primeiro!");

        }
    });




    // Menu 
    const menuIcon = document.querySelector(".menu");
    const menuScreen = document.getElementById("menuScreen");

    menuIcon.addEventListener("click", () => {
        menuScreen.style.display = "flex"; // Exibe a tela de menu
    });

    menuScreen.addEventListener("click", () => {
        menuScreen.style.display = "none"; // Oculta a tela de menu
    });

    // Função para transição para a próxima ètapa da fase
    function transitionToNextPhase() {
        let pos = 0;
        const interval = setInterval(frame, 20);
        const fundo = document.getElementById("video");

        // Substitua os caminhos para as novas imagens
        function frame() {
            if (pos >= 350) {
                clearInterval(interval);
            } else {
                pos++;
                fundo.style.marginTop = pos+'%';
            }
        }





    }



});
const text = "O bairro está alagado por conta do excesso de lixo,o que podemos fazerpara resolver isso?Click no lixo e depois na lixeira para recolher-los          ";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("textdialogo").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (100ms per character)
        if (index % 70 == 0) {
            document.getElementById("textdialogo").innerHTML += ' <br> '
        }

    }
    if (index == 150) {
        document.getElementById("dialogo").style.display = 'none';
    }
    console.log(index);
}

document.addEventListener("DOMContentLoaded", typeWriter);