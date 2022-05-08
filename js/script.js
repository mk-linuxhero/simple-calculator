let input = document.getElementById("inputext");

let calculate = (number) => {
  input.value = input.value + number;
};

let result = () => {
  try {
    input.value = Function('"use strict";return (' + input.value + ")")();
  } catch (err) {
    alert("Enter the valid result");
  }
};

function clr() {
  input.value = " ";
}

function del() {
  input.value = input.value.slice(0, -1);
}

// Enter

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  }
});
