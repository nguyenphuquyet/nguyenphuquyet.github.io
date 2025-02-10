let audio = null; // Biến để lưu trữ đối tượng Audio
let isPlaying = false; // Cờ để kiểm tra xem nhạc đã được phát chưa

// Đảm bảo sự kiện click chỉ kích hoạt sau khi trang đã tải xong
window.addEventListener('load', function() {

        if (isPlaying) {
            console.log('Nhạc đã đang phát, không phát lại.');
            return; // Dừng lại nếu nhạc đã được phát
        }

        // Tạo và phát nhạc
        audio = new Audio('https://api.quyetdev.me/nhac-ngau-nhien.php');
        audio.loop = true; // Lặp lại bài nhạc nếu cần
        audio.play().then(() => {
            isPlaying = true; // Đặt cờ thành true khi nhạc bắt đầu phát
        }).catch(function(error) {
            console.log('Không thể phát nhạc: ' + error.message);
        });

        // Đặt sự kiện khi nhạc dừng
        audio.addEventListener('ended', function() {
            isPlaying = false; // Reset cờ khi nhạc kết thúc
        });
    });