<?php
// Định nghĩa thư mục cần kiểm tra
$directory = __DIR__; // Thư mục hiện tại của script

// Hàm để duyệt qua tất cả các file và thư mục
function scanDirectory($dir) {
    if (!is_dir($dir)) {
        echo "<div class=\"error\">Thư mục không tồn tại.</div>";
        return;
    }

    // Mở thư mục
    $files = scandir($dir);
    // Biến đếm số thứ tự

    echo "<ul class=\"file-list\">";

    foreach ($files as $file) {
        if ($file === '.' || $file === '..' || $file === 'index.php') {
            continue;
        }

        $filePath = $dir . DIRECTORY_SEPARATOR . $file;

        if (is_dir($filePath)) {
            echo "<li class=\"directory\"><strong>[Thư mục]</strong> $file</li>";
            // Đệ quy để kiểm tra các thư mục con
            scanDirectory($filePath);
        } else {
            $fileUrl = "http://" . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . "/" . $file;
            echo "<li class=\"file\"><a href=\"$fileUrl\" target=\"_blank\">$file</a> </li>";
            }
    }

    echo "</ul>";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Explorer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h3 {
            color: #333;
        }
        .file-list {
            list-style: none;
            padding: 0;
        }
        .file-list li {
            margin: 5px 0;
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .file-list li a {
            text-decoration: none;
            color: #007bff;
        }
        .file-list li a:hover {
            text-decoration: underline;
        }
        .directory {
            font-weight: bold;
            color: #5c9210;
        }
        .file {
            color: #333;
        }
        .error {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <?php
    // Gọi hàm để scan thư mục
    scanDirectory($directory);
    ?>
</body>
</html>
