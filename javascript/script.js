window.addEventListener("load", getSize);
window.addEventListener("resize", getSize);
var ph = 80; /*valor da margimtop do botão*/
var pimg = 300;/*valor da tamanho das imagens da tela2*/
var pfase = 300;/*valor da tamanho das imagens da tela3*/
var pagina = 0;/*identificar as paginas */
// Exemplo de como usar window.location
function checkPage() {
    const url = window.location.href; // Obtém a URL completa
    const pathname = window.location.pathname; // Obtém o caminho do URL

    console.log(`URL completa: ${url}`);
    console.log(`Caminho do URL: ${pathname}`);

    // Verifique o caminho para identificar a página atual
    if (pathname === '/tela2.html') {
        pagina = 1;
        console.log(`1`);
    } else if (pathname === '/tela3.html') {
        pagina = 2;
        console.log(`2`);

    }else {
        console.log('Página desconhecida.');
    }
    if (pathname != '/telainundacao.html') {
        pagina = 0;
        console.log(`0`);
    }
}

// Chama a função para verificar a página atual
checkPage();

function getSize() {
    console.log(window.innerHeight);
    heightWindow = window.innerHeight;
    /*inicio da alteração do local do botão*/
   
    if (pagina === 0) {
        const estilo = document.getElementById('botao');
        if (heightWindow < 350) {
            ph = 30
        } else if (heightWindow < 601) {
            ph = 40
        } else if (heightWindow < 800) {
            ph = 40
        } else if (heightWindow < 850) {
            ph = 50
        }
        else if (heightWindow < 900) {
            ph = 40
        } else if (heightWindow < 1000) {
            ph = 40
        } else if (heightWindow < 1300) {
            ph = 50
        }
        estilo.style.marginTop = ph + "%";
        /*fim da alteração do local do botão*/

        /*inicio da alteração do local do das imagens na tela2*/
    } else if (pagina === 1) {
        const estilo_img = document.getElementById('coluna');
        const estilo_img_t = document.getElementById('teclado');
        const estilo_img_m = document.getElementById('mouse');

        if (heightWindow < 400) {
            pimg = 250
        } else if (heightWindow < 550) {
            pimg = 280
        } else if (heightWindow < 601) {
            pimg = 400
        } else if (heightWindow < 800) {
            pimg = 400
        } else if (heightWindow < 850) {
            pimg = 500
        }
        else if (heightWindow < 900) {
            pimg = 80
        } else if (heightWindow < 1000) {
            pimg = 500
        }
        estilo_img.style.width = pimg + "px";
        estilo_img.style.height = pimg + "px";
        estilo_img_t.style.width = pimg - 100 + "px";
        estilo_img_t.style.height = pimg - 100 + "px";
        estilo_img_m.style.width = pimg + "px";
        estilo_img_m.style.height = pimg - 100 + "px";
        /*fim da alteração do local do das imagens na tela2*/
    } else if (pagina === 2) {
        /*inicio da alteração do local do das imagens na tela3*/
        const estilo_img_fs = document.getElementById('fase');
        const estilo_img_d = document.getElementById('deslizamento');
        const estilo_img_d1 = document.getElementById('deslizamento1');
        const estilo_img_d2 = document.getElementById('deslizamento2');




        if (heightWindow < 400) {
            pfase = 230;
        } else if (heightWindow < 550) {
            pfase = 250;
        } else if (heightWindow < 701) {
            pfase = 260;
        } else if (heightWindow < 800) {
            pfase = 280;

        } else if (heightWindow < 1000) {
            pfase = 330;
        } else if (heightWindow < 1100) {
            pfase = 350;
        }
        else if (heightWindow < 1200) {
            pfase = 280;
        } else if (heightWindow < 1400) {
            pfase = 350;
        } else if (heightWindow < 1600) {
            pfase = 250;
        }


        estilo_img_fs.style.width = pfase + "px";
        estilo_img_fs.style.height = pfase - 150 + "px";
        estilo_img_d.style.width = pfase + "px";
        estilo_img_d.style.height = pfase - 150 + "px";
        estilo_img_d1.style.width = pfase + "px";
        estilo_img_d1.style.height = pfase - 150 + "px";
        estilo_img_d2.style.width = pfase + "px";
        estilo_img_d2.style.height = pfase - 150 + "px";
        console.log("45")

        /*fim da alteração do local do das imagens na tela3*/

    }
}
/*Saber qual é a horientação da página */
function updateOrientationMessage() {
    const orientationMessage = document.getElementById('tudo');
    if (window.innerHeight > window.innerWidth) {
        orientationMessage.style.marginTop = '80%';
        orientationMessage.style.backgroundColor = 'red';
        orientationMessage.style.width = '100%';
        orientationMessage.style.height = '100%';
        orientationMessage.style.fontSize = '30px';



        orientationMessage.textContent = "Muda a tela para o modo paisagem e recarregue a página.";

    } else {

        window.addEventListener('resize', updateOrientationMessage);
        window.addEventListener('load', updateOrientationMessage);

    }

}


updateOrientationMessage(); 