function toggleCheckbox(num) {
            let icon = document.getElementById(`icon${num}`);
            let isChecked = icon.classList.contains("fa-check-square");
            
            if (!isChecked) {
                showNotification("loading", "Đang xử lý...");

                icon.classList.remove("fa-square", "fa-check-square");
                icon.classList.add("fa-spinner", "fa-spin");

                setTimeout(() => {
                    icon.classList.remove("fa-spinner", "fa-spin");
                    icon.classList.add("fa-check-square");
                    showNotification("success", "Thành công!");
                }, 3000);
            } else {
                icon.classList.remove("fa-check-square");
                icon.classList.add("fa-square");
            }
        }

        function showNotification(type, text) {
            let notification = document.getElementById("notification");
            let notifIcon = document.getElementById("notifIcon");
            let notifText = document.getElementById("notifText");

            if (type === "loading") {
                notifIcon.className = "fa-solid fa-spinner fa-spin notif-icon";
                notification.style.background = "#444";
            } else if (type === "success") {
                notifIcon.className = "fa-solid fa-check-circle notif-icon";
                notification.style.background = "#28a745";
            }

            notifText.innerText = text;
            notification.classList.add("show");

            setTimeout(() => {
                notification.classList.remove("show");
            }, 3000);
        }