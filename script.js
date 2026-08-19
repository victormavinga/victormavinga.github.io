function showMessage() {
    alert("Thank you for visiting my portfolio! You can contact me at victormavinga0@gmail.com");
}
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("darkModeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}