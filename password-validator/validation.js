const Username = document.getElementById("userInput");
const password = document.getElementById("passwordInput");
const displayForm = document.querySelector(".display-validation");
const displayUpperText = document.getElementById("UpperCase");
const displayLowerText = document.getElementById("LowerCase");
const displayNumeric = document.getElementById("Numeric");
const displaySpecialNumeric = document.getElementById("Special-Character");


function displayform(event) {
  console.log(event.target);
  console.log(event.type);
  if (event.type === "focusin") {
    displayForm.style.cssText = `
      display:flex;
      flex-direction:column;
      `;
  } else if (event.type === "focusout") {
    displayForm.style.cssText = `
     display:none;
    `;
  }
}

function checkPassword(event) {
  event.stopPropagation();

  console.log(event.type);
  displayForm.style.cssText = `
    display:flex;
    flex-direction:column;
  `;

  let text = password.value;

  // Check for uppercase letters
  if (/[A-Z]/.test(text)) {
    displayUpperText.innerText = "Contains an uppercase letter: ✅";
    displayUpperText.style.color = "green";
  } else {
    displayUpperText.innerText = "No uppercase letters: ❌";
    displayUpperText.style.color = "red";
  }

  if (/[a-z]/.test(text)) {
    displayLowerText.innerText = "Contains a lowercase letter: ✅";
    displayLowerText.style.color = "green";
  } else {
    displayLowerText.innerText = "No lowercase letters: ❌";
    displayLowerText.style.color = "red";
  }

  // Check for numeric characters
  if (/[0-9]/.test(text)) {
    displayNumeric.innerText = "Contains a number: ✅";
    displayNumeric.style.color = "green";
  } else {
    displayNumeric.innerText = "No numbers: ❌";
    displayNumeric.style.color = "red";
  }

  // Check for special characters

  ///[.${*(\+)|?<>]/ ]:- this will not work because some of these character have special meaning so
  //to use these character we need to escape this charcter and it can be done by adding "\" chracter
  // at the end of beggining of all these special chracter
  if (/[\.\$\{\*\(\+\)\|\?<>\]]/.test(text)) {
    displaySpecialNumeric.innerText = "Contains a special character: ✅";
    displaySpecialNumeric.style.color = "green";
  } else {
    displaySpecialNumeric.innerText = "No special characters: ❌";
    displaySpecialNumeric.style.color = "red";
  }
}

password.addEventListener("focusin", displayform);
password.addEventListener("focusout", displayform);

password.addEventListener("input", checkPassword);
