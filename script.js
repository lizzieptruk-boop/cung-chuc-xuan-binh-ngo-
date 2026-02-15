const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const popup = document.getElementById("result-popup");
const closeBtn = document.getElementById("close-btn");
const wishText = document.getElementById("wish-text");
const fwSound = document.getElementById("firework-sound");

const wishes = [
    "1. Chúc năm mới an khang, tâm sáng – trí vững – đường dài thênh thang, việc gì cũng hanh thông.",
    "2. Năm mới chúc gia đình luôn bình an, nhà cửa ấm êm, tài lộc gõ cửa mỗi ngày.",
    "3. Chúc một năm đủ sức khỏe để sống trọn, đủ bình an để an lòng và đủ thành công để tự hào.",
    "4. Mong năm mới mang đến nhiều cơ hội mới, quyết định đúng đắn và những bước tiến vững vàng.",
    "5. Chúc mọi dự định ấp ủ đều nảy mầm, mọi cố gắng đều được đền đáp xứng đáng.",
    "6. Năm mới vạn sự như ý, tâm thế an nhiên, sự nghiệp thăng hoa, gia đạo thuận hòa.",
    "7. Chúc mỗi ngày trong năm đều có niềm vui nhỏ, may mắn lớn và những người tử tế bên cạnh.",
    "8. Mong năm mới nhẹ lòng với chuyện cũ, mạnh mẽ cho chặng đường mới và rực rỡ theo cách riêng của bạn.",
    "9. Chúc khởi đầu thuận lợi, giữa năm rực rỡ, cuối năm viên mãn.",
    "10. Năm mới kính chúc sức khỏe dồi dào, tinh thần vững vàng, tiền vào như nước và cuộc sống ngày càng thăng hoa."
];

// Màu đỏ tươi và vàng sáng xen kẽ
const colors = ["#ff0000", "#ffdb4d", "#ff0000", "#ffdb4d", "#ff0000", "#ffdb4d", "#ff0000", "#ffdb4d", "#ff0000", "#ffdb4d"];
let currentRotation = 0;
let isSpinning = false;

function drawWheel() {
    const sliceAngle = (2 * Math.PI) / 10;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, i * sliceAngle, (i + 1) * sliceAngle);
        ctx.fill();
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(i * sliceAngle + sliceAngle / 2);
        ctx.fillStyle = (i % 2 === 0) ? "#fff" : "#800000";
        ctx.font = "bold 35px Arial";
        ctx.textAlign = "right";
        ctx.fillText(i + 1, 220, 15);
        ctx.restore();
    }
}

spinBtn.onclick = () => {
    if (isSpinning) return;
    isSpinning = true;
    
    const randomSpin = Math.floor(Math.random() * 3600) + 2000;
    currentRotation += randomSpin;
    
    canvas.style.transition = "transform 4s cubic-bezier(0.1, 0, 0.2, 1)";
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        const actualDeg = currentRotation % 360;
        const index = Math.floor(((360 - actualDeg + 270) % 360) / 36);
        
        // Hiển thị lời chúc
        wishText.innerText = wishes[index];
        popup.classList.remove("hidden");
        
        // Hiệu ứng pháo hoa và âm thanh
        fwSound.play();
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ffd700', '#ffffff']
        });

        isSpinning = false;
    }, 4000);
};

closeBtn.onclick = () => {
    popup.classList.add("hidden");
};

drawWheel();