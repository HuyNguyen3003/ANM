const { exec } = require("child_process");

function scanNetwork() {
  exec("ping -c 4 192.168.1.1", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error scanning network: ${error}`);
      return;
    }
    console.log(stdout);
  });
}

// Ẩn dấu bằng cách không gọi hàm
// scanNetwork();
