function onClick() {
    let pitanja = document.getElementsByClassName("odgovor");
    let postojeci = document.getElementById("odgParagraf");
    if (postojeci) {
        postojeci.remove();
    }
    let srednja = 0;
    Array.from(pitanja).forEach((element) => {
        srednja += parseInt(element.options[element.selectedIndex].value);
    });
    srednja /= pitanja.length;
    let odgDiv = document.getElementsByClassName("dugme")[0];
    let odgParagraf = document.createElement("p");
    odgParagraf.appendChild(document.createTextNode(srednja));
    odgParagraf.id = "odgParagraf";
    odgParagraf.style.color = colorFactory(srednja)
    odgDiv.appendChild(odgParagraf);
}

function colorFactory(ocena) {
    if (ocena < 2) return "red";
    else if(ocena < 4) return "orange";
    else return "green";
}