<?php

// Danh sách các tin nhắn ngẫu nhiên
$messages = [
    "Khi tin vào những gì bạn làm, không gì là không thể.",
    "Khi bạn tin vào bản thân, cả thế giới sẽ tin theo.",
    "Bình tĩnh tạo nên sự quý sờ tộc",
    "Mọi khó khăn đều có giải pháp, miễn là bạn không từ bỏ.",
    "Niềm tin là sức mạnh để bạn vượt qua mọi khó khăn.",
    "Không gì là không thể nếu bạn thực sự tin vào điều đó.",
    "Sống mỗi ngày với niềm tin và đam mê bạn là tác giả cuộc đời mình.",
    "Mất niềm tin là mất đi một nửa cuộc sống.",
    "Niềm tin là ngọn hải đăng soi sáng trong đêm tối.",
    "Tin vào tương lai, tương lai sẽ không phụ bạn.",
    "Niềm tin là sức mạnh vô hình thay đổi cuộc sống.",
    "Anh bị cận nên lận đận tình duyên",
    "Đừng ngại hỏi, đừng ngại phạm sai lầm.",
];

// Chọn một tin nhắn ngẫu nhiên
$randomMsg = $messages[array_rand($messages)];

// Chuẩn bị dữ liệu phản hồi
$response = [
    "code" => 200,
    "uid" => rand(1, 100), // Random UID từ 1 đến 100
    "msg" => $randomMsg,
    "length" => mb_strlen($randomMsg),
    "from" => "api.nguyenphuquyet.cn"
];

// Trả về JSON
header('Content-Type: application/json; charset=utf-8');
echo json_encode($response, JSON_UNESCAPED_UNICODE);
