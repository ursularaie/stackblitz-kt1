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

    //const terveProgressBarLaius = document.getElementById("kursuse_progress_bar").width;
    //const tehtudProgressiLaius = terveProgressBarLaius * kursus[1] / 100;
    //const jaak = terveProgressBarLaius - tehtudProgressiLaius; // tegemata progress

    //kloon.querySelector("#kursuse_tehtud_progress").width = tehtudProgressiLaius;
    //kloon.querySelector("#vaja_teha_progress").width = jaak;

    hetkeKursusedDiv.appendChild(kloon);
}

function naitaKoikiKursuseid() {
    Object.values(hetkeKursused).forEach(element => {
        lisaHetkelKaivKursusEkraanile(element);
    });
}

naitaKoikiKursuseid();