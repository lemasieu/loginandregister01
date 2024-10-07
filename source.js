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

// Kiểm tra email hợp lệ
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Lắng nghe sự kiện khi nhấn nút Đăng nhập
document.getElementById("login").addEventListener("click", function(event) {
    const username = document.getElementById("usernamedn");
    const password = document.getElementById("passworddn");
    const errorMessage = document.getElementById("register-error-message");
    const popup = document.getElementById("register-error-popup");

    let valid = true;
    errorMessage.innerText = ''; // Xóa thông báo lỗi cũ
    popup.style.display = 'none'; // Ẩn pop-up trước khi kiểm tra

    if (!username.value) {
        valid = false;
        errorMessage.innerText = "Lỗi: Chưa nhập tên đăng nhập.";
    } else if (!password.value) {
        valid = false;
        errorMessage.innerText = "Lỗi: Chưa nhập mật khẩu.";
    }

    if (!valid) {
        event.preventDefault(); // Ngừng gửi biểu mẫu
        popup.style.display = 'flex'; // Hiện pop-up thông báo lỗi
    }
});

// Lắng nghe sự kiện khi nhấn nút Đăng ký
document.getElementById("register").addEventListener("click", function(event) {
    const username = document.getElementById("usernamedk");
    const password = document.getElementById("passworddk");
    const email = document.getElementById("emaildk");
    const errorMessage = document.getElementById("register-error-message");
    const popup = document.getElementById("register-error-popup");

    let valid = true;
    errorMessage.innerText = ''; // Xóa thông báo lỗi cũ
    popup.style.display = 'none'; // Ẩn pop-up trước khi kiểm tra

    if (!username.value) {
        valid = false;
        errorMessage.innerText = "Lỗi: Chưa nhập tên đăng nhập.";
    } else if (!password.value) {
        valid = false;
        errorMessage.innerText = "Lỗi: Chưa nhập mật khẩu.";
    } else if (!email.value) {
        valid = false;
        errorMessage.innerText = "Lỗi: Chưa nhập địa chỉ email.";
    } else if (!isValidEmail(email.value)) {
        valid = false;
        errorMessage.innerText = "Lỗi: Địa chỉ email không hợp lệ.";
    }

    if (!valid) {
        event.preventDefault(); // Ngừng gửi biểu mẫu
        popup.style.display = 'flex'; // Hiện pop-up thông báo lỗi
    }
});

// Đóng pop-up khi nhấn vào nút X
document.getElementById("closePopupBtn").addEventListener("click", function() {
    document.getElementById("register-error-popup").style.display = 'none';
});

// Đóng pop-up nếu người dùng nhấp ra ngoài vùng pop-up
window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("register-error-popup")) {
        document.getElementById("register-error-popup").style.display = 'none';
    }
});