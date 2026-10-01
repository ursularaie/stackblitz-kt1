const hetkeKursused = {
    kursus1: ["Kursus 1", 80],
    kursus2: ["Kursus 2", 50],
    kursus3: ["Kursus 3", 22]
};
const saadavalKursused = ["Kursus 4", "Kursus 5"];

let hetkeKursusedDiv = document.getElementById("hetke_kursused");
let saadavalKursusedDiv = document.getElementById("saadaval_kursused");
let progressTemplate = document.getElementById("progress_template");

function lisaHetkelKaivKursusEkraanile(kursus) {
    const kloon = progressTemplate.content.cloneNode(true);

    kloon.querySelector("#kursuse_nimi").innerHTML = kursus[0];
    kloon.querySelector("#kursuse_protsent_progress").innerHTML = " progress: " + kursus[1] + "%";

    const terveProgressBarLaius = kloon.querySelector("#kursuse_progress_bar").offsetWidth; // see tagastab hetkel 0
    console.log(terveProgressBarLaius);
    const tehtudProgressiLaius = parseInt(terveProgressBarLaius, 10) * parseInt(kursus[1], 10) / 100;
    const jaak = parseInt(terveProgressBarLaius, 10) - parseInt(tehtudProgressiLaius, 10); // tegemata progress
    console.log(tehtudProgressiLaius, jaak);

    kloon.querySelector("#kursuse_tehtud_progress").style.width = tehtudProgressiLaius + "px";
    kloon.querySelector("#vaja_teha_progress").style.width = jaak + "px";

    hetkeKursusedDiv.appendChild(kloon);
}

function naitaKoikiKursuseid() {
    Object.values(hetkeKursused).forEach(element => {
        lisaHetkelKaivKursusEkraanile(element);
    });
}

naitaKoikiKursuseid();