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
// JavaScript để kéo menu với tính năng đầy đủ
        const menu = document.getElementById("modMenu");
        let isDragging = false;
        let offsetX, offsetY;
// Xử lý hiển thị và ẩn marquee sau 5 giây
        setTimeout(() => {
            marquee.style.display = "none";
        }, 20000);
        menu.addEventListener('pointerdown', (e) => {
            // Bắt đầu kéo khi chuột nhấn vào
            isDragging = true;
            offsetX = e.clientX - menu.getBoundingClientRect().left;
            offsetY = e.clientY - menu.getBoundingClientRect().top;
            menu.style.cursor = "grabbing";
            e.preventDefault(); // Ngừng sự kiện mặc định
        });

        document.addEventListener('pointermove', (e) => {
            // Di chuyển menu khi chuột di chuyển
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                const maxX = window.innerWidth - menu.offsetWidth;
                const maxY = window.innerHeight - menu.offsetHeight;

                // Giới hạn di chuyển menu trong cửa sổ trình duyệt
                menu.style.left = Math.min(Math.max(x, 0), maxX) + 'px';
                menu.style.top = Math.min(Math.max(y, 0), maxY) + 'px';
            }
        });

        document.addEventListener('pointerup', () => {
            // Dừng kéo khi thả chuột
            if (isDragging) {
                isDragging = false;
                menu.style.cursor = "grab";
            }
        });