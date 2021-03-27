const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    if (mode == null || mode == true) this.mode = "direct";
    else if (mode == false) this.mode = "reverse";
  }

  mode;

  directMashine(message, key, action) {
    let encryptedMessage = [];
    let messageToNumber = [];
    let keyToNumber = [];
    let i, j;
    let crypto = [];

    message = message.toLowerCase();
    key = key.toLowerCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i] >= "a" && message[i] <= "z")
        messageToNumber[i] = message.charCodeAt(i) - 97;
      else messageToNumber[i] = message[i];
    }
    for (let i = 0; i < key.length; i++) {
      keyToNumber[i] = key.charCodeAt(i) - 97;
    }
    switch (action) {
      case "encrypt":
        for (i = 0, j = 0; i < message.length; i++) {
          if (j == keyToNumber.length) j = 0;
          if (message[i] >= "a" && message[i] <= "z") {
            if (messageToNumber[i] + keyToNumber[j] < 26) {
              encryptedMessage[i] = messageToNumber[i] + keyToNumber[j];
            } else {
              encryptedMessage[i] = messageToNumber[i] + keyToNumber[j] - 26;
            }
            j++;
          } else encryptedMessage[i] = messageToNumber[i];
        }
        break;
      case "decrypt":
        for (i = 0, j = 0; i < message.length; i++) {
          if (j == keyToNumber.length) j = 0;
          if (message[i] >= "a" && message[i] <= "z") {
            if (messageToNumber[i] - keyToNumber[j] >= 0) {
              encryptedMessage[i] = messageToNumber[i] - keyToNumber[j];
            } else {
              encryptedMessage[i] = messageToNumber[i] - keyToNumber[j] + 26;
            }
            j++;
          } else encryptedMessage[i] = messageToNumber[i];
        }
        break;
    }
    for (i = 0; i < encryptedMessage.length; i++) {
      if (message[i] >= "a" && message[i] <= "z") {
        crypto[i] = String.fromCharCode(encryptedMessage[i] + 97);
      } else crypto[i] = encryptedMessage[i];
    }
    return crypto;
  }

  encrypt(message, key) {
    if (message == null || key == null) throw new Error("error");

    switch (this.mode) {
      case "direct":
        return this.directMashine(message, key, "encrypt")
          .join("")
          .toUpperCase();
        break;
      case "reverse":
        return this.directMashine(message, key, "encrypt")
          .reverse()
          .join("")
          .toUpperCase();
        break;
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) throw new Error("error");

    switch (this.mode) {
      case "direct":
        return this.directMashine(encryptedMessage, key, "decrypt")
          .join("")
          .toUpperCase();
        break;
      case "reverse":
        return this.directMashine(encryptedMessage, key, "decrypt")
          .reverse()
          .join("")
          .toUpperCase();
        break;
    }
  }
}

module.exports = VigenereCipheringMachine;
