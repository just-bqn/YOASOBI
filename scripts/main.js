let useRomaji = false;

function updateRomaji() {
    let i, japContent, romContent;

    japContent = document.querySelectorAll(".jap");
    romContent = document.querySelectorAll(".rom");

    if (useRomaji) {
        for (i = 0; i < japContent.length; i++)
            japContent[i].style.display = "none";
        for (i = 0; i < romContent.length; i++)
            romContent[i].style.display = "block";
    }
    else {
        for (i = 0; i < japContent.length; i++)
            japContent[i].style.display = "block";
        for (i = 0; i < romContent.length; i++)
            romContent[i].style.display = "none";
    }
}
function openTab(tabName)
{
    let i, elements;

    elements = document.getElementsByClassName("tab-content");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        if (elements[i].classList.contains(tabName))
            elements[i].style.display = "block";
    }

    elements = document.getElementsByClassName("tab-links");
    for (i = 0; i < elements.length; i++) {
        elements[i].className = elements[i].className.replace(" active", "");
        if (elements[i].classList.contains(tabName))
            elements[i].className += " active";
    }

    if (tabName === 'about') {
        document.body.style.backgroundColor = "#902432";
    }
    if (tabName === 'the-book') {
        document.body.style.backgroundColor = "#886060";
    }
    if (tabName === 'e-side') {
        document.body.style.backgroundColor = "#BD3D42";
    }
    if (tabName === 'the-book-2') {
        document.body.style.backgroundColor = "#507254";
    }
    if (tabName === 'e-side-2') {
        document.body.style.backgroundColor = "#4F48DF";
    }
    if (tabName === 'the-book-3') {
        document.body.style.backgroundColor = "#716E2C";
    }
    if (tabName === 'biri-biri') {
        document.body.style.backgroundColor = "#826709";
    }
    if (tabName === 'calculator') {
        document.body.style.backgroundColor = "#902432";
    }

    updateRomaji();
}

function toggleRomaji() {
    useRomaji = !useRomaji;
    updateRomaji();
}

function openLyricsTab(songName) {
    window.open("https://genius.com/yoasobi-" + songName + "-lyrics");
}

document.getElementById("default-tab").click();