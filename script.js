function openSynopsis(arg) {

    if (arg instanceof HTMLElement) {
        const content = arg.parentElement.querySelector(".synopsis-content").innerHTML;
        document.getElementById("synopsisText").innerHTML = content;
    } else {
        document.getElementById("synopsisText").textContent = arg;
    }

    document.getElementById("synopsisModal").style.display = "block";
}

function closeSynopsis() {
    document.getElementById("synopsisModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("synopsisModal");
    if (event.target === modal) {
        closeSynopsis();
    }
}
