let input = document.getElementById("inputext");

let calculate = (number) => {
  input.value = input.value + number;
};

let result = () => {
  try {
    input.value = eval(input.value);
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
