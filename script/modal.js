const modal = document.getElementById("quoteModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal after page loads
window.addEventListener("load", () => {
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000); // 1 second delay
});

// Close when clicking X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

if (!localStorage.getItem("modalShown")) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            modal.style.display = "flex";
            localStorage.setItem("modalShown", "true");
        }, 1000);
    });
}