const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const popup = document.getElementById("result-popup");
const wishText = document.getElementById("wish-text");
const audio = document.getElementById("firework-audio");

const wishes = [
"🧧 Chúc năm mới an khang, tâm sáng – trí vững – đường dài thênh thang, việc gì cũng hanh thông",
"🧧 Năm mới chúc gia đình luôn bình an, nhà cửa ấm êm, tài lộc gõ cửa mỗi ngày",
"🧧 Chúc một năm đủ sức khỏe để sống trọn, đủ bình an để an lòng và đủ thành công để tự hào",
"🧧 Mong năm mới mang đến nhiều cơ hội mới, quyết định đúng đắn và những bước tiến vững vàng",
"🧧 Chúc mọi dự định ấp ủ đều nảy mầm, mọi cố gắng đều được đền đáp xứng đáng",
"🧧 Năm mới vạn sự như ý, tâm thế an nhiên, sự nghiệp thăng hoa, gia đạo thuận hòa",
"🧧 Chúc mỗi ngày trong năm đều có niềm vui nhỏ, may mắn lớn và những người tử tế bên cạnh",
"🧧 Mong năm mới nhẹ lòng với chuyện cũ, mạnh mẽ cho chặng đường mới và rực rỡ theo cách riêng của bạn",
"🧧 Chúc khởi đầu thuận lợi, giữa năm rực rỡ, cuối năm viên mãn",
"🧧 Năm mới kính chúc sức khỏe dồi dào, tinh thần vững vàng, tiền vào như nước và cuộc sống ngày càng thăng hoa"
];

const colors = ["#ff0000", "#ffd700", "#ff0000", "#ffd700", "#ff0000", "#ffd700", "#ff0000", "#ffd700", "#ff0000", "#ffd700"];
let rotation = 0;

function draw() {
const angle = (2 * Math.PI) / 10;
for (let i = 0; i < 10; i++) {
ctx.beginPath();
ctx.fillStyle = colors[i];
ctx.moveTo(250, 250);
ctx.arc(250, 250, 250, i * angle, (i + 1) * angle);
ctx.fill();
ctx.save();
ctx.translate(250, 250);
ctx.rotate(i * angle + angle / 2);
ctx.fillStyle = (i % 2 === 0) ? "white" : "#b30000";
ctx.font = "bold 40px Arial";
ctx.textAlign = "center";
ctx.fillText(i + 1, 180, 15);
ctx.restore();
}
}

spinBtn.onclick = () => {
spinBtn.disabled = true;
const extra = Math.floor(Math.random() * 360) + 3600;
rotation += extra;
canvas.style.transition = "transform 4s cubic-bezier(0.1, 0, 0.2, 1)";
canvas.style.transform = rotate(${rotation}deg);
setTimeout(() => {
const actualDeg = rotation % 360;
const index = Math.floor(((360 - actualDeg + 270) % 360) / 36);
wishText.innerText = wishes[index % 10];
popup.classList.remove("hidden");
audio.play();
confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
spinBtn.disabled = false;
}, 4000);
};

document.getElementById("close-btn").onclick = () => popup.classList.add("hidden");
draw();

