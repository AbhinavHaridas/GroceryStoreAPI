
const CryptoJS = require("crypto-js");

//Password Encryption Algorithm


const encryptWithAES = (text) => {
  const passphrase = process.env.ENCRYPTION_PASSPHRASE;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};



const decryptWithAES = (ciphertext) => {
  const passphrase = process.env.ENCRYPTION_PASSPHRASE;
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

module.exports = { encryptWithAES, decryptWithAES };
