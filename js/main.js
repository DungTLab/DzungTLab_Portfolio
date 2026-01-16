// 1. Logic cho Theme Toggle (Sáng/Tối)
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const body = document.body;

// Hàm cập nhật icon
function updateIcon(isLight) {
    if (isLight) {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
}

// Kiểm tra LocalStorage xem người dùng đã chọn theme chưa
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateIcon(true);
} else {
    updateIcon(false);
}

// Sự kiện click nút đổi màu
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    // Lưu vào localStorage
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // Đổi icon
    updateIcon(isLight);
});

// 2. Hiệu ứng Scroll Reveal (Trượt lên khi cuộn)
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85; // Điểm kích hoạt

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });
}

// Chạy ngay khi load và khi scroll
window.addEventListener('scroll', checkReveal);
checkReveal(); // Gọi lần đầu để hiện phần tử đầu trang

// 3. Hiệu ứng gõ chữ (Typewriter)
const textElement = document.getElementById('typewriter');
const phrases = ["Software Engineer", "Problem Solver", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Xoá nhanh hơn
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Gõ bình thường
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Đợi 2s trước khi xoá
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Đợi 0.5s trước khi gõ từ mới
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);