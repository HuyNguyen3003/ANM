const { exec } = require("child_process");

function executeFile() {
  exec("malicious_file.exe", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing file: ${error}`);
      return;
    }
    console.log(stdout);
  });
}

// Ẩn dấu bằng cách không gọi hàm
// executeFile();
