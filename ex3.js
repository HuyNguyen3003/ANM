const os = require("os");
const dgram = require("dgram");

function sendSystemInfo() {
  const info = {
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
  };
  const message = Buffer.from(JSON.stringify(info));
  const client = dgram.createSocket("udp4");
  client.send(message, 0, message.length, 12345, "server_ip", (err) => {
    client.close();
  });
}

// Ẩn dấu bằng cách không gọi hàm
// sendSystemInfo();
