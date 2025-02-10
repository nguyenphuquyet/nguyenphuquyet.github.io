<?php
header('Content-Type: application/json');

$data = [
    [
        "errorCode" => 0,
        "titleTracks" => "Có Thể Hay Không",
        "musicUrl" => "https://quyetdz210.x10.mx/api/nhac/C%C3%B3%20Th%E1%BB%83%20Hay%20Kh%C3%B4ng%20-%20Thazh%20Remix%20-%20Nh%E1%BA%A1c%20Hot%20Tik%20Tok%20Remix%20M%E1%BB%9Bi%20Nh%E1%BA%A5t%202024.mp3"
    ],
    [
        "errorCode" => 0,
        "titleTracks" => "Phép Màu Tình Yêu",
        "musicUrl" => "https://quyetdz210.x10.mx/api/nhac/Ph%C3%A9p%20m%C3%A0u%20t%C3%ACnh%20y%C3%AAu%20remix%20-%20Haiyang%20Ft%20HyyLee%20-%20Nh%E1%BA%A1c%20Trung%20Hot%20Tiktok%202024.mp3"
    ],
    [
        "errorCode" => 0,
        "titleTracks" => "一个人想着一个人",
        "musicUrl" => "https://quyetdz210.x10.mx/api/nhac/%E3%80%90%E6%AD%8C%E6%9B%B2%E6%8E%A8%E8%8D%90%E3%80%91%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%83%B3%E7%9D%80%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%AF%B4%E5%94%B1%E7%89%88.mp3"
    ]
];

// Chọn ngẫu nhiên một bài hát
$randomTrack = $data[array_rand($data)];

// Thêm thông tin tự động tính toán
$randomTrack["totalTracks"] = count($data);
$randomTrack["titleLength"] = mb_strlen($randomTrack["titleTracks"], 'UTF-8');

echo json_encode($randomTrack, JSON_UNESCAPED_UNICODE);
