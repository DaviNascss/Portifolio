let btnvoltar = document.getElementById("voltar");
let telaproj = document.getElementById("trabview");

let imgproj = document.getElementById("imgproj");
let data = document.getElementById("dataTrab");
let nome = document.getElementById("tituloproj");
let descri = document.getElementById("descriproj");
let abrirproj = document.getElementById("btn1");
let link = document.getElementById("btn2");

let ht = document.getElementById("ht");
let cs = document.getElementById("cs");
let js = document.getElementById("js");
let re = document.getElementById("re");
let fi = document.getElementById("fi");
let be = document.getElementById("be");

btnvoltar.addEventListener("click", voltar);

function Voltar() {
      telaproj.classList.toggle("hide");
}

function alerta(){
    alert("Mensagem enviada");
}

class Projetos {
    constructor(imgproj, nome, descri, data, abrirproj, link, id) {
        this.imgproj = imgproj;
        this.nome = nome;
        this.descri = descri;
        this.data = data;
        this.abrirproj = abrirproj;
        this.link = link;
        this.id = id;
    }
}

projeto1 = new Projetos(
    'img/trabalhos/systemwave.png',
    'System Wave',
    'Projeto desenvolvido por membros de uma empresa que visa facilitar e divulgar ao mundo empresas com pouco reconhecimento, desenvolvendo sua Identidade Visual, Website, entre outros.',
    'Janeiro 2025',
    'https://systemwave.com.br/',
    'https://github.com/DaviNascss/SystemWave',
    'systemwave'  // <-- identificador
);

projeto2 = new Projetos(
    'img/trabalhos/gub.png',
    'GUB',
    'Projeto desenvolvido por membros de um grupo / empresa (GUB) de trabalho de conclusão de curso (Jogos Digitais), cujo o objetivo foi recriar de forma criativa o jogo Cadillac and dinosaurs, assim surgindo o Komb and Dinodsaurs.',
    'Janeiro 2024',
    'https://davin4sciment0.github.io/Kombi_And_Attack_Dinosaurs/',
    'https://github.com/DaviNascss/GUB',
    'gub' // <-- identificador
);

projeto3 = new Projetos(
    'img/trabalhos/charge.png',
    'GUB',
    'Trabalhio de conclusão de módulo (TCM) que tinha como objetivo desenvolver uma Página Web para uma empresa que tivesse o objetivo de sanar algum problema, neste caso o processo para alugar carros elétricos.',
    'Janeiro 2024',
    'https://systemwave.com.br/',
    'https://github.com/DaviNascss/Charge',
    'charge' // <-- identificador
);

projeto4 = new Projetos(
    'img/trabalhos/plantsp.png',
    'Plantsp',
    'Trabalho de conclusão de curso (TCC) do curso de Desenvolvimento de Sistema que tinha como objetivo desenvolver um sistema de E-comerce de acordo com o nixo do mercado selecionado pelo professor, neste caso um E-comerce de Palntas.',
    'Janeiro 2024',
    'Abrir Projeto',
    'https://github.com/DaviNascss',
    'plantsp' // <-- identificador
);

projeto5 = new Projetos(
    'img/trabalhos/cap.png',
    'Escudo',
    'Projeto desenvolvido durante o curso de modelagem 3D no software Blender, cujo o bjetvo foi fazer uma réplica do escudo do vingador Capitão América',
    'Maio 2021',
    'https://github.com/DaviNascss',
    'https://github.com/DaviNascss',
    'escudo' // <-- identificador
);


projeto6 = new Projetos(
    'img/trabalhos/foxy.png',
    'Foxy',
    'Projeto desenvolvido durante o curso de modelagem 3D no software Blender, cujo o bjetvo foi fazer uma réplica do Animatronic Foxy, um jogo de terror muito popular pelo público infantil.',
    'Julho 2021',
    'https://github.com/DaviNascss',
    'https://github.com/DaviNascss',
    'foxy' // <-- identificador
);

projeto7 = new Projetos(
    'img/trabalhos/walle.png',
    'Wall E',
    'Projeto desenvolvido durante o curso de modelagem 3D no software Blender, cujo o bjetvo foi fazer uma réplica do robô Wall-E da Pixar, procurando levar o máximo de detalhes a obra.',
    'Julho 2023',
    '../pags/walle.html',
    'https://systemwave.com.br/',
    'walle' // <-- identificador
);



const grupo = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7];

function Troca(projId) {
    const projeto = grupo.find(p => p.id === projId);

    if (!projeto) {
        alert('Projeto não encontrado!');
        return;
    }

    telaproj.classList.toggle("hide");
    imgproj.src = projeto.imgproj;
    nome.innerHTML = projeto.nome;
    descri.innerHTML = projeto.descri;
    data.innerHTML = projeto.data;
    abrirproj.href = projeto.abrirproj;
    link.href = projeto.link;

    if (projId==='systemwave'){
          be.classList.add("hide");
          re.classList.add("hide");
    }
    else if (projId==='gub'){
            be.classList.add("hide");
            re.classList.add("hide");
            js.classList.remove("hide");
    } else if (projId==='charge'){
            be.classList.add("hide");
            re.classList.add("hide");
            js.classList.remove("hide");
    }else if (projId==='plantsp'){
            be.classList.add("hide");
            re.classList.remove("hide");
    }else if (projId==='escudo'){
            ht.classList.add("hide");
            cs.classList.add("hide");
            js.classList.add("hide");
            fi.classList.add("hide");
            re.classList.add("hide");
            // abrirproj.onclick = alerta();
    }else if (projId==='foxy'){
            ht.classList.add("hide");
            cs.classList.add("hide");
            js.classList.add("hide");
            fi.classList.add("hide");
            re.classList.add("hide");
            // abrirproj.onclick = alerta();
    }else if (projId==='walle'){
            ht.classList.add("hide");
            cs.classList.add("hide");
            js.classList.add("hide");
            fi.classList.add("hide");
            re.classList.add("hide");
            // abrirproj.onclick = alerta();
    }
}

