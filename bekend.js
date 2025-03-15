const image = document.getElementById("uploaded-image");
const input = document.getElementById("image-upload");
const colorInfo = document.getElementById("color-info");
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const colorBox = document.getElementById("color-box");

input.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            image.hidden = false;
            colorInfo.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

image.addEventListener("click", function(event) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
    
    const x = event.offsetX;
    const y = event.offsetY;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
    hexColor.textContent = hex.toUpperCase();
    rgbColor.textContent = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = hex;
    colorInfo.style.display = 'block';
});

function copyToClipboard() {
    const text = hexColor.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(`Warna disalin: ${text}`);
    });
}


// test

/* const image = document.getElementById("uploaded-image");
const input = document.getElementById("image-upload");
const colorInfo = document.getElementById("color-info");
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const colorBox = document.getElementById("color-box");

input.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            image.hidden = false;
            colorInfo.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

image.addEventListener("click", function(event) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
    
    const x = event.offsetX;
    const y = event.offsetY;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = pixel;
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
    hexColor.textContent = hex.toUpperCase();
    rgbColor.textContent = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = hex;
    colorInfo.style.display = 'block';
});

function copyToClipboard() {
    const text = hexColor.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(`Warna disalin: ${text}`);
    });
}
