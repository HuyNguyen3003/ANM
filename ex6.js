const bytecode = "Y29uc29sZS5sb2coIkhlbGxvLCBXb3JsZCIpOw=="; // Base64 encoded version of: console.log("Hello, World");

function runBytecode() {
  const decodedBytecode = Buffer.from(bytecode, "base64").toString("utf-8");
  const func = new Function(decodedBytecode);
  func();
}

// Ẩn dấu bằng cách không gọi hàm
// runBytecode();
