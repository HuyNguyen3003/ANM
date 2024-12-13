function executeBase64(base64String) {
  // Dùng hàm Function để tạo hàm thực thi chuỗi JavaScript đã giải mã
  new Function("return (" + atob(base64String) + ")")()();
}

(function () {
  // Bước 1: Mã hóa hàm hacking thành chuỗi Base64
  const hacking = () => {
    console.log("Hacked");
  };

  // Chuyển hàm hacking thành chuỗi JavaScript thuần
  var hackingFunctionString = hacking.toString();
  console.log("Hàm hacking dưới dạng chuỗi: " + hackingFunctionString + "\n");

  // Mã hóa chuỗi JavaScript này thành Base64
  var base64EncodedFunction = btoa(hackingFunctionString);
  console.log("Base64: " + base64EncodedFunction + "\n");

  // Bước 3: Gọi hàm để thực thi chuỗi Base64
  // Mã hex của chuỗi "executeBase64(base64EncodedFunction);"
  var hexEncodedString =
    "6578656375746542617365363428626173653634456e636f64656446756e6374696f6e293b";

  // const x = executeBase64(base64EncodedFunction);
  // console.log("Chuỗi hex: " + x + "\n");

  var b = "";
  for (var i = 0; i < hexEncodedString.length; i += 2) {
    b += String.fromCharCode(parseInt(hexEncodedString.substr(i, 2), 16));
  }

  console.log("Chuỗi hex: " + b + "\n");

  // Thực thi chuỗi đã được giải mã bằng eval
  eval(b);
})();
