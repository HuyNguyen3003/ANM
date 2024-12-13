const fs = require("fs");

function createFakeFile() {
  fs.writeFileSync("fake_file.txt", "This is a fake file.");
}

// Ẩn dấu bằng cách không gọi hàm
// createFakeFile();
