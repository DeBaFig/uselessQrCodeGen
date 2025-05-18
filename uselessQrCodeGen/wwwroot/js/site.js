const qrcodeCanvas = document.getElementById("qrcodeCanvas");
const indicationCanvas = document.getElementById("indicationCanvas");
const generateQRCodeButton = document.getElementById("generateQRCode");
const timerDisplay = document.getElementById("timerDisplay");

const uselessWebsites = [
    "https://theuselessweb.com/",
    "https://www.koalastothemax.com/",
    "http://www.republiquedesmangues.fr/",
    "https://pointerpointer.com/",
    "http://www.movenowthinklater.com/",
    "http://www.randomwebsite.com/",
    "https://www.boredbutton.com/",
    "https://findtheinvisiblecow.com/",
    "http://endless.horse/",
    "https://www.trypapertoss.com/",
    "https://www.staggeringbeauty.com/",
    "http://iloveyoulikeafatkidlovescake.com/",
    "http://www.ismycomputeron.com/",
    "http://www.fallingfalling.com/",
    "http://www.thequietplaceproject.com/",
    "http://www.partridgegetslucky.com/",
    "https://puginarug.com/",
    "http://www.koalastothemax.com/",
    "https://remoji.com/",
    "http://smashthewalls.com/",
    "https://www.donothingfor2minutes.com/",
    "http://www.yesno.wtf/",
    "http://www.blankwindows.com/",
    "http://www.speedtest.net/",
    "https://www.duolingo.com/",
    "https://www.google.com/",
];

let drawing = false;
let currentColor = "#000000";
let brushSize = 2;
let qrCodeData = [];
let canvasWidth = 0;
let paintedPixels = 0;
let totalPixelsToPaint = 0;
let timerInterval;
let elapsedSeconds = 0;
let seconds = 0;
let minutes = 0;
let paintedPositions = new Set();
const ctx = indicationCanvas.getContext('2d');
let cellSize = 0;

function drawPixel(x, y) {
    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);
    const positionKey = `${gridX}-${gridY}`;

    if (qrCodeData[gridY] && qrCodeData[gridY][gridX] && !paintedPositions.has(positionKey)) {
        const rectX = gridX * cellSize;
        const rectY = gridY * cellSize;
        ctx.fillStyle = currentColor;
        ctx.fillRect(rectX, rectY, cellSize, cellSize);
        paintedPixels++;
        paintedPositions.add(positionKey);

        if (paintedPixels === 1) {
            startTimer();
        }

        if (paintedPixels === totalPixelsToPaint) {
            stopTimer();
        }
    }
}

indicationCanvas.addEventListener("mousedown", (e) => {
    drawing = true;
    drawPixel(e.offsetX, e.offsetY);
    e.preventDefault();
});

indicationCanvas.addEventListener("mousemove", (e) => {
    if (drawing) {
        drawPixel(e.offsetX, e.offsetY);
        e.preventDefault();
    }
});

indicationCanvas.addEventListener("mouseup", () => {
    drawing = false;
});

indicationCanvas.addEventListener("mouseleave", () => {
    drawing = false;
});

indicationCanvas.addEventListener("touchstart", (e) => {
    drawing = true;
    const touch = e.touches[0];
    const rect = indicationCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    drawPixel(x, y);
    e.preventDefault();
}, { passive: false });

indicationCanvas.addEventListener("touchmove", (e) => {
    if (drawing) {
        const touch = e.touches[0];
        const rect = indicationCanvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        drawPixel(x, y);
        e.preventDefault();
    }
}, { passive: false });

indicationCanvas.addEventListener("touchend", () => {
    drawing = false;
});

indicationCanvas.addEventListener("touchcancel", () => {
    drawing = false;
});
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = n => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function startTimer() {
    elapsedSeconds = 0;
    timerInterval = setInterval(() => {
        elapsedSeconds++;
        timerDisplay.textContent = `Tempo: ${formatTime(elapsedSeconds)}`;
    }, 1000);
}

function stopTimer() {
    document.getElementById('rankingForm').style.display = 'block';
    document.getElementById('rankingForm').addEventListener('submit', function (e) {
        e.preventDefault();

        fetch('/RankingList/AddRanking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name: document.getElementById('userName').value,
                LostTime: elapsedSeconds
            })
        })
            .then(response => response.ok ? response.text() : Promise.reject())
            .then(() => {
                document.getElementById('rankingMessage').textContent = 'Ranking enviado com sucesso!';
                document.getElementById('rankingForm').style.display = 'none';
            })
            .catch(() => {
                document.getElementById('rankingMessage').textContent = 'Erro ao enviar ranking.';
            });
    });
    clearInterval(timerInterval);
}

generateQRCodeButton.addEventListener("click", () => {
    document.getElementById('rankingMessage').textContent = '';
    const randomWebsite = uselessWebsites[Math.floor(Math.random() * uselessWebsites.length)];

    qrcodeCanvas.getContext('2d').clearRect(0, 0, qrcodeCanvas.width, qrcodeCanvas.height);
    indicationCanvas.getContext('2d').clearRect(0, 0, indicationCanvas.width, indicationCanvas.height);
    paintedPixels = 0;
    seconds = 0;
    minutes = 0;
    timerDisplay.textContent = `Tempo: 00:00`;
    paintedPositions.clear();

    const qr = qrcode(0, 'M');
    qr.addData(randomWebsite);
    qr.make();

    canvasWidth = 256;
    qrcodeCanvas.width = canvasWidth;
    qrcodeCanvas.height = canvasWidth;
    indicationCanvas.width = canvasWidth;
    indicationCanvas.height = canvasWidth;

    const ctx = qrcodeCanvas.getContext('2d');
    const indCtx = indicationCanvas.getContext('2d');
    cellSize = canvasWidth / qr.getModuleCount();

    qrCodeData = [];
    totalPixelsToPaint = 0;
    for (let row = 0; row < qr.getModuleCount(); row++) {
        qrCodeData[row] = [];
        for (let col = 0; col < qr.getModuleCount(); col++) {
            qrCodeData[row][col] = qr.isDark(row, col);
            if (qr.isDark(row, col)) {
                totalPixelsToPaint++;
            }
        }
    }

    for (let row = 0; row < qr.getModuleCount(); row++) {
        for (let col = 0; col < qr.getModuleCount(); col++) {
            if (qr.isDark(row, col)) {
                ctx.fillStyle = "#000000";
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);

                indCtx.fillStyle = "rgba(0, 0, 0, 0.1)";
                indCtx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                indCtx.strokeStyle = "#000000";
                indCtx.lineWidth = 1;
                indCtx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
            } else {
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
});