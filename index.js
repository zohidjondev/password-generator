// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// prettier-ignore

let generateBtn = document.querySelector("#generate-btn");
let output1 = document.querySelector("#output-1 p");
let output2 = document.querySelector("#output-2 p");

function generatePassword() {
  let password = "";
  for (let i = 0; i < 16; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

generateBtn.addEventListener("click", function () {
  let password1 = generatePassword();
  output1.textContent = password1;
  let password2 = generatePassword();
  output2.textContent = password2;
});
