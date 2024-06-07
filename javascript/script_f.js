document.addEventListener("DOMContentLoaded", () => {
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
                transitionToNextPhase(); // Transição para a próxima fase
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
        const fundo = document.getElementById("fundo");
        const alagado = document.getElementById("alagado");

        // Substitua os caminhos para as novas imagens
        fundo.src = "htmlcssjsFASE1\imgs\Rectangle 17.png";
        alagado.src = "imgs/novo_alagado.png";
    }

    
 
});
const text = "Para inserirmos uma tag âncora através do JavaScript podemos criar uma variável, que chamamos no exemplo abaixo de element, e atribuir à ela o que estiver dentro de um elemento html , por meio do comando document.getElementById(), identificado pelo seu id, que no exemplo chamamos de identificacao.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("textdialogo").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (100ms per character)
        if (index%70==0) {
            document.getElementById("textdialogo").innerHTML += ' <br> '
        }
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);