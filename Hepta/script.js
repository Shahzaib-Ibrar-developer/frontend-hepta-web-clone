document.getElementById("barButton").addEventListener("click", function() {
    document.getElementById("navbar").classList.add("active");
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("navbar").classList.remove("active");
});
