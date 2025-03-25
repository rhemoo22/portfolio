// function toggleAds(index) {
//     let ads = document.querySelectorAll(".ads");

//     // Close any currently open ad
//     ads.forEach((ad, i) => {
//         if (i === index) {
//             ad.style.display = ad.style.display === "flex" ? "none" : "flex";
//         } else {
//             ad.style.display = "none";
//         }
//     });
// }

// function closeAds(event) {
//     if (event.target.classList.contains("ads")) {
//         event.target.style.display = "none";
//     }
// }

// // Attach the closeAds function to all `.ads` divs
// document.querySelectorAll(".ads").forEach(ad => {
//     ad.addEventListener("click", closeAds);
// });

const adData = [
    ["images/uline1.png", "images/uline2.png", "images/uline3.png"], // Ads for Brand 1
    ["images/pyrex_1.png", "images/pyrex_2.png", "images/pyrex_3.png"], // Ads for Brand 2
    ["images/hiyo1.png", "images/hiyo2.png", "images/hiyo3.png"]  // Ads for Brand 3
];

function openModal(index) {
    let modal = document.getElementById("modal");
    let adImagesContainer = document.getElementById("adImages");

    // Clear previous images
    adImagesContainer.innerHTML = "";

    // Add new images dynamically
    adData[index].forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Ad Image";
        adImagesContainer.appendChild(img);
    });

    // Show modal
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}