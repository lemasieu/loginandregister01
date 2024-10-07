document.addEventListener("DOMContentLoaded", function() {
    let hopphai = document.querySelector('.dtdangky');
    let hoptrai = document.querySelector('.dtdangnhap');

    let linkphai = document.querySelector('#nhayphai');
    let linktrai = document.querySelector('#nhaytrai');

    function doihop() {
        hopphai.classList.toggle("andk");
        hoptrai.classList.toggle("hiendk");
    }

    linktrai.addEventListener("click", doihop);
    linkphai.addEventListener("click", doihop);
});

function togglePasswordVisibility(toggleElement) {
    const icon = toggleElement.querySelector("i");
    const inputSelector = toggleElement.getAttribute("toggle");
    const input = document.querySelector(inputSelector);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye-fill");
        icon.classList.add("bi-eye-slash"); // Thay đổi icon khi hiển thị mật khẩu
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye-fill"); // Thay đổi icon khi ẩn mật khẩu
    }
}

// Gán sự kiện click cho tất cả các icon
document.querySelectorAll(".field-icon").forEach(function(element) {
    element.addEventListener("click", function() {
        togglePasswordVisibility(this);
    });
});

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Biểu thức chính quy kiểm tra email
    return re.test(String(email).toLowerCase());
}

document.getElementById("login").addEventListener("click", function(event) {
    const username = document.getElementById("usernamedn");
    const password = document.getElementById("passworddn");
    const errorMessage = document.getElementById("login-error-message");

    let valid = true;
    errorMessage.style.display = "none"; // Ẩn thông báo trước khi kiểm tra

    if (!username.value) {
        valid = false;
        errorMessage.innerText = "Tên đăng nhập là bắt buộc.";
    } else if (!password.value) {
        valid = false;
        errorMessage.innerText = "Mật khẩu là bắt buộc.";
    }

    if (!valid) {
        event.preventDefault(); // Ngăn chặn gửi biểu mẫu
        errorMessage.style.display = "block"; // Hiện thông báo lỗi
    }
});

document.getElementById("register").addEventListener("click", function(event) {
    const username = document.getElementById("usernamedk");
    const password = document.getElementById("passworddk");
    const email = document.getElementById("emaildk");
    const errorMessage = document.getElementById("register-error-message");

    let valid = true;
    errorMessage.style.display = "none"; // Ẩn thông báo trước khi kiểm tra

    if (!username.value) {
        valid = false;
        errorMessage.innerText = "Tên đăng nhập là bắt buộc.";
    } else if (!password.value) {
        valid = false;
        errorMessage.innerText = "Mật khẩu là bắt buộc.";
    } else if (!email.value) {
        valid = false;
        errorMessage.innerText = "Địa chỉ email là bắt buộc.";
    } else if (!isValidEmail(email.value)) {
        valid = false;
        errorMessage.innerText = "Địa chỉ email không hợp lệ.";
    }

    if (!valid) {
        event.preventDefault(); // Ngăn chặn gửi biểu mẫu
        errorMessage.style.display = "block"; // Hiện thông báo lỗi
    }
});