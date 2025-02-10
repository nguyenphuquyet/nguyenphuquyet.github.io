<?php
header('Content-Type: application/json');

$data = [
    [
        "titleTracks" => "Chắc Em Đã Quên Rồi",
        "musicUrl" => "https://files.catbox.moe/g4a1wq.mp3"
    ],
    [
        "titleTracks" => "Một Bước Yêu Vạn Dặm Đau",
        "musicUrl" => "https://files.catbox.moe/xyz123.mp3"
    ],
    [
        "titleTracks" => "Sao Em Nỡ",
        "musicUrl" => "https://files.catbox.moe/abc456.mp3"
    ],
    [
        "titleTracks" => "Hơn Cả Yêu",
        "musicUrl" => "https://files.catbox.moe/def789.mp3"
    ]
];

// Chọn ngẫu nhiên một bài hát
$randomTrack = $data[array_rand($data)];

// Tính toán số lượng bài hát và độ dài tiêu đề
$randomTrack["errorCode"] = 0;
$randomTrack["totalTracks"] = count($data);
$randomTrack["titleLength"] = mb_strlen($randomTrack["titleTracks"], 'UTF-8');

echo json_encode($randomTrack, JSON_UNESCAPED_UNICODE);
