function toggleMode() {

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "white";
        const elements = document.querySelectorAll("*");
        elements.forEach(element => {
            element.style.color = "black";
        });
        document.body.classList.remove("dark-mode");
    }
    else {
        document.body.style.backgroundColor = "rgb(44, 43, 43)";
        const elements = document.querySelectorAll("*");
        elements.forEach(element => {
        element.style.color = "white";
        });
        document.body.classList.add("dark-mode");
    }
}