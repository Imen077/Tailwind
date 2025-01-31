const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        
    }
});