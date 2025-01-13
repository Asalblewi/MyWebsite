// جلب العناصر
const shareButton = document.getElementById("shareButton");
const shareModal = document.getElementById("shareModal");
const closeButton = document.querySelector(".close");

// فتح النافذة
shareButton.onclick = function () {
    shareModal.style.display = "block";
};

// غلق النافذة
closeButton.onclick = function () {
    shareModal.style.display = "none";
};

// غلق النافذة عند الضغط خارجها
window.onclick = function (event) {
    if (event.target === shareModal) {
        shareModal.style.display = "none";
    }
};

// نسخ الرابط
function copyLink() {
    const link = document.getElementById("shareLink");
    link.select();
    navigator.clipboard.writeText(link.value);
    alert("Link copied!");
}


function copyLink() {
    const shareLink = document.getElementById("shareLink");
    shareLink.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
}

document.querySelectorAll('.modal .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // منع التداخل مع الطبقات الأخرى
    });
});
