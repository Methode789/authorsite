function openSynopsis(arg) {
    const synopsisText = document.getElementById("synopsisText");

    if (typeof arg === "string") {
        synopsisText.textContent = arg;
    } else {
        synopsisText.innerHTML =
            arg.parentElement.querySelector(".synopsis-content").innerHTML;
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
function togglePoem(button) {
    const content = button.parentElement.querySelector(".poem-content");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Hide poem";
    } else {
        content.style.display = "none";
        button.textContent = "Read poem";
    }
}
