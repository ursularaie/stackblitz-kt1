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

    kloon.querySelector("#kursuse_tehtud_progress").style.width = kursus[1] + "%";
    kloon.querySelector("#vaja_teha_progress").style.width = 100 - kursus[1] + "%";

    hetkeKursusedDiv.appendChild(kloon);
}

function lisaSaadavalKursusEkraanile(kursus) {
    const kloon = progressTemplate.content.cloneNode(true);

    kloon.querySelector("#kursuse_nimi").innerHTML = kursus;
    kloon.querySelector("#kursuse_protsent_progress").innerHTML = " progress: 0%";

    kloon.querySelector("#kursuse_tehtud_progress").style.width = "0%";
    kloon.querySelector("#vaja_teha_progress").style.width = "100%";

    saadavalKursusedDiv.appendChild(kloon);
}

function naitaKoikiKursuseid() {
    Object.values(hetkeKursused).forEach(element => {
        lisaHetkelKaivKursusEkraanile(element);
    });

    saadavalKursused.forEach(element => {
        lisaSaadavalKursusEkraanile(element);
    })
}

naitaKoikiKursuseid();