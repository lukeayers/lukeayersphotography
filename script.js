document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file loaded correctly.");

    let categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", function (event) {
            console.log("Category clicked!");

            // Toggle expanded class
            category.classList.toggle("expanded");

            let galleryContent = category.querySelector(".gallery-content");
            if (galleryContent) {
                galleryContent.style.display = galleryContent.style.display === "flex" ? "none" : "flex";
            }

            // Re-bind click event to images inside expanded category
            let images = category.querySelectorAll(".gallery-content img");
            images.forEach(img => {
                img.addEventListener("click", function (e) {
                    e.stopPropagation(); // Prevent category click from triggering again
                    openModal(img);
                });
            });
        });
    });
});

// Open Modal Function
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src; // Set modal image to clicked image
    caption.innerHTML = image.alt || "Photo"; // Optional caption

    console.log("Opened modal for image:", image.src);
}

// Close Modal Function
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
