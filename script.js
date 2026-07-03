// ======================================
// MENU RESPONSIVO
// ======================================

const hamburguer = document.getElementById("hamburguer");
const nav = document.querySelector("nav");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fecha o menu ao clicar em um link (mobile)

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ======================================
// CARROSSEL
// ======================================

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[indice].classList.add("active");

}

function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    mostrarSlide(slideAtual);

}

// Troca a cada 5 segundos

setInterval(proximoSlide, 5000);

// ======================================
// CONTADOR ANIMADO
// ======================================

const contadores = document.querySelectorAll(".contador");

const velocidade = 80;

function animarContadores() {

    contadores.forEach(contador => {

        const alvo = Number(contador.dataset.target);

        const atualizar = () => {

            const atual = Number(contador.innerText);

            const incremento = Math.ceil(alvo / velocidade);

            if (atual < alvo) {

                contador.innerText = atual + incremento;

                setTimeout(atualizar, 30);

            } else {

                contador.innerText = alvo;

            }

        };

        atualizar();

    });

}

let contadorExecutado = false;

window.addEventListener("scroll", () => {

    const secao = document.getElementById("sobre");

    const topo = secao.getBoundingClientRect().top;

    const alturaTela = window.innerHeight;

    if (topo < alturaTela - 150 && !contadorExecutado) {

        contadorExecutado = true;

        animarContadores();

    }

});

// ======================================
// VALIDAÇÃO DO FORMULÁRIO
// ======================================

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = formulario.querySelector('input[type="text"]').value.trim();

    const email = formulario.querySelector('input[type="email"]').value.trim();

    const mensagem = formulario.querySelector("textarea").value.trim();

    if (nome.length < 3) {

        alert("Digite um nome válido.");

        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido.");

        return;

    }

    if (mensagem.length < 10) {

        alert("A mensagem deve possuir pelo menos 10 caracteres.");

        return;

    }

    alert("Mensagem enviada com sucesso!\n\nEm breve entraremos em contato.");

    formulario.reset();

});

// ======================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// ======================================

const elementos = document.querySelectorAll(".card, .depoimento, .numero");

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

});

function revelarElementos() {

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revelarElementos);

window.addEventListener("load", revelarElementos);

// ======================================
// HEADER COM SOMBRA AO ROLAR
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "#111";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.3)";

    }

});