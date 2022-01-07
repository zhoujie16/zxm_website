(function (window) {
  var Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = Base64._utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output =
          output +
          this._keyStr.charAt(enc1) +
          this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) +
          this._keyStr.charAt(enc4);
      }
      return output;
    },
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    },
  };
  var env = "prod";
  var baseUrl = "http://t.abczzz.cn:781/spm/spm";
  var href = window.location.href;
  if (
    href.indexOf("localhost") != -1 ||
    href.indexOf("127.0.0.1") != -1 ||
    href.indexOf("0.0.0.0") != -1
  ) {
    baseUrl = "http://127.0.0.1:781/spm/spm";
    env = "test";
  }
  var guid2 = function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  };
  var getUUID = function () {
    var uuid = localStorage.getItem("spm_uuid");
    if (!uuid) {
      uuid = guid2();
      localStorage.setItem("spm_uuid", uuid);
    }
    return uuid;
  };
  var encodeParams = function (type, spm, log_data) {
    var spmData = Object.assign(
      {
        spm: "",
        uuid: getUUID(),
        type: "spm",
        page: window.location.href,
        log_time: new Date().getTime(),
        log_data: JSON.stringify({}),
      },
      {
        spm: spm,
        type: type,
        log_data: JSON.stringify(log_data),
      }
    );
    var params = Base64.encode(encodeURIComponent(JSON.stringify(spmData)))
      .split("")
      .reverse()
      .join("");
    if (env === "test") {
      console.log("打点数据", JSON.stringify(spmData, null, 1));
      console.log("编码后参数", params);
    }
    return params;
  };
  var sendSpm = function (params) {
    var tmpBlob = new Blob([params]);
    if (tmpBlob.size <= 4096) {
      var url = baseUrl + "?p=" + params;
      var img = document.createElement("img");
      img.style.display = "none";
      img.src = url;
      document.body.appendChild(img);
      document.body.removeChild(img);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", baseUrl);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(
        JSON.stringify({
          p: params,
        })
      );
    }
  };
  var spm = function (spm, log_data, type) {
    if (!spm) return;
    if (spm.split(".").lengtn == 1) return;
    var typeArr = ["spm", "log", "err"];
    var params = encodeParams(
      typeArr.indexOf(type) != -1 ? type : "spm",
      spm,
      log_data
    );
    sendSpm(params);
  };
  var spmErr = function (spm, log_data) {
    if (!spm) return;
    if (spm.split(".").lengtn == 1) return;
    var params = encodeParams("err", spm, log_data);
    sendSpm(params);
  };
  var spmLog = function (spm, log_data) {
    if (!spm) return;
    if (spm.split(".").lengtn == 1) return;
    var params = encodeParams("log", spm, log_data);
    sendSpm(params);
  };
  spm.log = spmLog;
  spm.err = spmErr;
  window.spm = spm;
})(window);
