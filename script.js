const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const popup = document.getElementById("result-popup");
const wishText = document.getElementById("wish-text");
const audio = document.getElementById("firework-audio");

const wishes = [
"🧧 Chúc năm mới an khang thịnh vượng!",
"🧧 Chúc gia đình luôn bình an hạnh phúc!",
"🧧 Chúc sức khỏe dồi dào, vạn sự như ý!",
"🧧 Mong năm mới mang đến nhiều cơ hội mới!",
"🧧 Chúc mọi dự định đều thành công rực rỡ!",
"🧧 Năm mới vạn sự hanh thông, tài lộc đầy nhà!",
"🧧 Chúc mỗi ngày đều tràn ngập niềm vui!",
"🧧 Chúc bạn rực rỡ trên chặng đường mới!",
"🧧 Chúc khởi đầu thuận lợi, viên mãn!",
"🧧 Chúc tiền vào như nước, thăng hoa rực rỡ!"
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
ctx.fillText(i + 1, 180, 15);
ctx.restore();
}
}

spinBtn.onclick = () => {
spinBtn.disabled = true;
rotation += Math.floor(Math.random() * 360) + 3600;
canvas.style.transition = "transform 4s cubic-bezier(0.1, 0, 0.2, 1)";
canvas.style.transform = rotate(${rotation}deg);

};

document.getElementById("close-btn").onclick = () => popup.classList.add("hidden");
draw();
