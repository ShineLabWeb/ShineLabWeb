let currentImageIndex = 0;
const maxImages = 6; // liczba wszystkich zdjęć

const photos = [];

// Tworzymy tablicę obiektów zdjęć
for (let i = 1; i <= maxImages; i++) {
  photos.push({
    src: `${i}.png`,
    alt: `Zdjęcie ${i}`
  });
}

function next() {
  if (currentImageIndex < maxImages - 2) {
    currentImageIndex++;
    updateGallery();
  }
}

function back() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateGallery();
  }
}

function updateGallery() {
  const img1 = document.getElementById("photo1");
  const img2 = document.getElementById("photo2");
  const img3 = document.getElementById("photo3");

  img1.src = photos[currentImageIndex].src;
  img1.alt = photos[currentImageIndex].alt;

  // Wyświetlamy zdjęcie nr 2 tylko jeśli jest dostępne
  if (currentImageIndex + 1 < maxImages) {
    img2.src = photos[currentImageIndex + 1].src;
    img2.alt = photos[currentImageIndex + 1].alt;
  } else {
    img2.src = "";
    img2.alt = "";
  }

  // Wyświetlamy zdjęcie nr 3 tylko jeśli jest dostępne
  if (currentImageIndex + 2 < maxImages) {
    img3.src = photos[currentImageIndex + 2].src;
    img3.alt = photos[currentImageIndex + 2].alt;
  } else {
    img3.src = "";
    img3.alt = "";
  }

  // Sprawdzamy, czy wyłączyć przycisk "Następne"
  const nextButton = document.getElementById("nextButton");
  if (currentImageIndex >= maxImages - 3) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  // Sprawdzamy, czy wyłączyć przycisk "Poprzednie"
  const prevButton = document.getElementById("prevButton");
  if (currentImageIndex <= 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
}

updateGallery(); // aktualizacja galerii przy starcie strony