function openSynopsis(text) {
    document.getElementById("synopsisText").textContent = text;
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