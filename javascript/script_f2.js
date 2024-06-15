
document.addEventListener("DOMContentLoaded", () => {
    contator = 0;
    const fundo1 = document.getElementById("fundoum");
    fundo1.innerHTML = '<img  src="img/Telafundo/fundo 1.png" width= 1500px height= 600px></img>'
    const gameArea1 = document.getElementById("areaPlantio");
    gameArea1.style.width = '0px';

    // Seleciona todos os objetos interativos e o lixo
    const objects = document.querySelectorAll(".latinha, .caixinha, .garrafa, .vidro");
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
            const remainingObjects = document.querySelectorAll(".latinha, .caixinha, .garrafa, .vidro");
            if (remainingObjects.length === 0) {
                alert("Parabéns! Você limpou todos os objetos do gramado!");
                // setTimeout(() => { transitionToNextPhase() }, 2000);



                c++;
                document.getElementById("dialogo").style.display = 'flex';
                if (c === 153) {
                    typeWriter();
                    c++;
                }
                gameArea1.style.width = '500px';
                gameArea1.style.height = '200px';




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





});
//texto do personagem
let index = 0;
var c = 0;
function typeWriter() {

    if (c < 152) {
        c++;
        var text = "Há sinais de deslizamento de terra!! Lixos acumulam água da chuva e pesam o solo. Clique nos lixos, depois clique na lixeira para limpar o terreno.    ";
    } else if (c > 152) {

        var text = "Se chover, pode ocorrer deslizamento de terra resultando em um possível desabamento da casa. O solo está fraco, a grama pode ajudar o solo a absorver a água. Clique no saco de sementes, depois clique 20 vezes no solo danificado para o plantio da grama.            ";
    }


    if (index < text.length) {
        document.getElementById("textdialogo").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (100ms per character)
        if (index % 70 == 0) {
            document.getElementById("textdialogo").innerHTML += ' <br> '
        }

    }
    if (index == 151 && c == 152) {
        document.getElementById("dialogo").style.display = 'none';
        index = 0;
        document.getElementById("textdialogo").innerHTML = '';
        // timer();
    }
    if (index == 258) {
        document.getElementById("dialogo").style.display = 'none';
        index = 0;
        document.getElementById("textdialogo").innerHTML = '';


    }
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
        // console.log(rect);
        // console.log(gameAreaRect);

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


document.addEventListener("DOMContentLoaded", () => {

    const gameArea1 = document.getElementById("areaPlantio");

    gameArea1.addEventListener("click", (event) => {

        const tree = document.createElement("div");
        tree.classList.add("tree");

        // Posição do clique dentro da área de jogo
        const x = event.clientX - gameArea1.getBoundingClientRect().left;
        const y = event.clientY - gameArea1.getBoundingClientRect().top;

        // Definindo a posição da árvore
        tree.style.left = `${x - 45}px`; // Centralizar a árvore horizontalmente
        tree.style.top = `${y - 45}px`; // Centralizar a árvore verticalmente

        gameArea1.appendChild(tree);



        updateTreeCount();
        if (c==1) {
            gameArea1.remove(tree);
        }
    });
var c=0
    function updateTreeCount() {
        const trees = document.querySelectorAll('.tree');
        const count = trees.length;


        if (count == 20) {
            setTimeout(() => { transitionToNextPhase() }, 2000);

            alert("Parabéns! Você plantou todas as sementes!");
            // window.location.href = '/tela3.html'
            gameArea1.style.width = '0px';
            c=1;
        }
    }


});

function transitionToNextPhase() {
    let pos = 0;
    const interval = setInterval(frame, 10);
    const fundo1 = document.getElementById("fundoum");


    // Substitua os caminhos para as novas imagens
    function frame() {
        if (pos >= 350) {

            fundo1.innerHTML = '<img src="img/Telafundo/CasaDepoisDoDeslizamento.png" width= 1500px height= 600px></img>'
            setTimeout(() => {window.location.href = '/tela3.html'},2000);
        } else {
            pos++;


        }
    }





}






// function timer() {
//     const timerElement = document.getElementById('timer');
//     let timeLeft = 60;

//     const countdown = setInterval(() => {
//         timeLeft--;
//         timerElement.textContent = timeLeft;

//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             alert("Tempo esgotado!");
//             window.location.href = '/tela3.html'
//         }else if(c>176){
//             clearInterval(countdown);
//             timerElement.style.display='none';
//         }
//     }, 1000);
// };