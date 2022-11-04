plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
num = document.querySelector(".num");


let a = 0;



plus.addEventListener("click", () => {
  a++;


  num.innerText = a;

  

  // console.log(a);

  result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText) ;

  // console.log(result);

  value = document.querySelector(".num-3");

  value.innerText = result;
});



minus.addEventListener("click", () => {
  if (a > 0) {
    a--;

    num.innerText = a;

    // console.log(a);
    result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText);

    console.log(result);

    value = document.querySelector(".num-3");

    value.innerText = result;
  }
});






plus1 = document.querySelector(".plus-1");
minus1 = document.querySelector(".minus-1");
num1 = document.querySelector(".num-1");

let b = 0;

plus1.addEventListener("click", () => {
  b++;

  num1.innerText = b;
  result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText);

  console.log(result);

  value = document.querySelector(".num-3");

  value.innerText = result;
});

minus1.addEventListener("click", () => {
  if (b > 0) {
    b--;

    num1.innerText = b;

    result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText);

    console.log(result);

    value = document.querySelector(".num-3");

    value.innerText = result;
  }
});








plus2 = document.querySelector(".plus-2");
minus2 = document.querySelector(".minus-2");
num2 = document.querySelector(".num-2");

let c = 0;

plus2.addEventListener("click", () => {
  c++;

  num2.innerText = c;
  result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText);

  console.log(result);

  value = document.querySelector(".num-3");

  value.innerText = result;
});

minus2.addEventListener("click", () => {
  if (c > 0) {
    c--;

    num2.innerText = c;

    result = parseInt(num1.innerText) + parseInt(num.innerText) + parseInt(num2.innerText);

    console.log(result);

    value = document.querySelector(".num-3");

    value.innerText = result;
  }
});







