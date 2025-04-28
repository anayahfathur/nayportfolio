const menubar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menubar.addEventListener("click", function() {
    // Toggle menu-active untuk menunjukkan menu
    menuNav.classList.toggle("menu-active");

    // Toggle clicked untuk animasi hamburger
    menubar.classList.toggle("clicked");

    // Untuk melihat apakah JavaScript berfungsi, bisa log ke konsol
    console.log("Hamburger menu clicked!");
});

// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

