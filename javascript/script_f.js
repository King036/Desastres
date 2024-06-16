
document.addEventListener("DOMContentLoaded", () => {
    contator = 0;
    const gameArea1 = document.getElementById("areaPlantio");
    gameArea1.style.width = '0px';

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
                setTimeout(() => { transitionToNextPhase() }, 2000);

                c++;
                document.getElementById("dialogo").style.display = 'flex';
                if (c === 177) {
                    typeWriter();
                    c++;
                }
                gameArea1.style.width = '1400px';



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
        const fundo1 = document.getElementById("fundo");
        const gameArea = document.getElementById("personagem");


        // Substitua os caminhos para as novas imagens
        function frame() {
            if (pos >= 350) {
                
                fundo1.style.backgroundImage = "url(img/Telafundo/CasaDepoisDaInundação.png)"
                gameArea.style.marginTop = '-357%';
                gameArea.style.display = 'flex';
            } else {
                pos++;
                fundo.style.marginTop = pos + '%';
                gameArea.style.display = 'none';

            }
        }





    }



});
//texto do personagem
let index = 0;
var c = 0;
function typeWriter() {

    if (c < 176) {
        c++;
        console.log(c);
        var text = "O bairro está alagado por conta do excesso de lixo,o que podemos fazerpara resolver isso?Click no lixo e depois na lixeira no canto direito superior para recolher-los          ";
    } else if (c > 176) {
        
        var text = "O alagamento acabou!Para evitar esse tipo de desastre, além de deixar as ruas limpas, outra forma é deixar a água fluir para o solo, e plantas também são ótimas em absorve a água!Então plante as 10 flores ao clicar na grama                     ";
    }


    if (index < text.length) {
        document.getElementById("textdialogo").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (100ms per character)
        if (index % 70 == 0) {
            document.getElementById("textdialogo").innerHTML += ' <br> '
        }

    }
    if (index == 176 && c == 176) {
        document.getElementById("dialogo").style.display = 'none';
        index = 0;
        document.getElementById("textdialogo").innerHTML = '';
        timer();
    }
    if (index == 238) {
        document.getElementById("dialogo").style.display = 'none';
        index = 0;
        document.getElementById("textdialogo").innerHTML = '';
        

    }
    console.log(index);
}

document.addEventListener("DOMContentLoaded", typeWriter);
//movimento do personagem

document.addEventListener("DOMContentLoaded", () => {
    const character = document.getElementById("imgPerson");
    const gameArea = document.getElementById("personagem");
    const step = 10; // Número de pixels que o personagem se moverá a cada passo

    document.addEventListener("keydown", (event) => {
        const rect = character.getBoundingClientRect();
        const gameAreaRect = gameArea.getBoundingClientRect();
        console.log(rect);
        console.log(gameAreaRect);

        switch (event.key) {
            case "w":
                if (rect.top - step >= gameAreaRect.top) {
                    character.style.top = rect.top - step - gameAreaRect.top + "px";
                }
                break;
            case "s":
                if (rect.bottom + step <= gameAreaRect.bottom) {
                    character.style.top = rect.top + step - gameAreaRect.top + "px";
                }
                break;
            case "a":
                if (rect.left - step >= gameAreaRect.left) {
                    character.style.left = rect.left - step - gameAreaRect.left + "px";
                }
                break;
            case "d":
                if (rect.right + step <= gameAreaRect.right) {
                    character.style.left = rect.left + step - gameAreaRect.left + "px";
                }
                break;
        }
    });
});
//plantar arvores

document.addEventListener("DOMContentLoaded", () => {
    const gameArea1 = document.getElementById("areaPlantio");

    gameArea1.addEventListener("click", (event) => {
        const tree = document.createElement("div");
        tree.classList.add("tree");

        // Posição do clique dentro da área de jogo
        const x = event.clientX - gameArea1.getBoundingClientRect().left;
        const y = event.clientY - gameArea1.getBoundingClientRect().top;

        // Definindo a posição da árvore
        tree.style.left = `${x - 15}px`; // Centralizar a árvore horizontalmente
        tree.style.top = `${y + 380}px`; // Centralizar a árvore verticalmente

        gameArea1.appendChild(tree);

        updateTreeCount();
    });

    function updateTreeCount() {
        const trees = document.querySelectorAll('.tree');
        const count = trees.length;
        if (count == 10) {
            alert("Parabéns! Você plantou todas as flores!");
             window.location.href = 'tela3.html'
        }
    }

    // Atualiza a contagem inicial
    updateTreeCount();
});

function timer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 60;

    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Tempo esgotado!");
            window.location.href = 'tela3.html'
        }else if(c>176){
            clearInterval(countdown);
            timerElement.style.display='none';
        }
    }, 1000);
};