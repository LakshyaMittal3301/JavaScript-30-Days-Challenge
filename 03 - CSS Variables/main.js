const controls = document.querySelectorAll(".controls input");

function change() {
    // dataset.sizing gives data-sizing atrribute set in html manually
    // Another way to do this without setting data-sizing attribute is to set all values
    // at each change (Exy : In everchange of color, you also set blur and spacing)
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}

controls.forEach((input) => {
    input.addEventListener("input", change);
});