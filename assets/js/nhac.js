let audio = null; // Biến để lưu trữ đối tượng Audio
let isPlaying = false; // Cờ để kiểm tra xem nhạc đã được phát chưa
let isPageLoaded = false; // Cờ để kiểm tra trạng thái tải của trang

// Sự kiện khi trang tải xong
window.addEventListener('load', function() {
    isPageLoaded = true; // Đánh dấu trang đã tải xong
});

// Thêm sự kiện click cho toàn trang
document.body.addEventListener('click', function() {
    if (!isPageLoaded) {
        console.log('Trang chưa tải xong, không thể phát nhạc.');
        return; // Dừng lại nếu trang chưa tải xong
    }

    if (isPlaying) {
        console.log('Nhạc đã đang phát, không phát lại.');
        return; // Dừng lại nếu nhạc đã được phát
    }

    // Nếu đã có một đối tượng audio đang phát, dừng nó trước khi tạo mới
    if (audio) {
        audio.pause(); // Dừng bài nhạc hiện tại
        audio.currentTime = 0; // Reset thời gian phát về đầu
        audio = null; // Đặt lại audio về null
        isPlaying = false; // Reset cờ phát nhạc
    }

    // Tạo và phát nhạc chỉ khi người dùng click lần đầu tiên
    audio = new Audio('https://quyetdz210.x10.mx/api/nhacngaunhien.php');
    audio.loop = true; // Lặp lại bài nhạc nếu cần

    audio.play().then(() => {
        isPlaying = true; // Đặt cờ thành true khi nhạc bắt đầu phát
        console.log('Nhạc đang phát...');
    }).catch(function(error) {
        console.log('Không thể phát nhạc: ' + error.message);
    });

    // Đặt sự kiện khi nhạc dừng
    audio.addEventListener('ended', function() {
        isPlaying = false; // Reset cờ khi nhạc kết thúc
        console.log('Nhạc đã kết thúc.');
        audio = null; // Đặt lại audio về null để chuẩn bị cho lần phát sau
    });
});
