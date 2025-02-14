function toggleMenu() {
            var menu = document.getElementById("modMenu");
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
        }

        function toggleCheckbox(element) {
            var notification = document.getElementById("notification");

            // Hiện thông báo xử lý
            notification.innerHTML = '<i class="fa-solid fa-spinner loading-icon"></i> Đang xử lý...';
            notification.style.background = "rgba(255, 165, 0, 0.9)"; // Màu cam
            notification.style.display = "block";

            setTimeout(function () {
                // Hoàn thành xử lý, đổi icon thành tích xanh
                notification.innerHTML = '<i class="fa-solid fa-circle-check checkmark"></i> Thành công!';
                notification.style.background = "rgba(0, 255, 0, 0.9)"; // Màu xanh lá
                element.classList.toggle("active");

                // Ẩn thông báo sau 3s
                setTimeout(() => { notification.style.display = "none"; }, 2000);
            }, 2000);
        }