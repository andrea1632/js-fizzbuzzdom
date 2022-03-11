let container = document.getElementById("rowId");
console.log(container);
//ciclo for per determinare se il numero è multiplo di 3/5/3 && 5;
for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      console.log("FizzBuzz");
      container.innerHTML += `<div class="p-3 bg-danger col">FizzBuzz</div>`
    }
    else if ( i % 3 == 0 ) {
      console.log("Fizz");
      container.innerHTML += `<div class="p-3 bg-success col">Fizz</div>`
    }
    else if ( i % 5 == 0 ) {
      console.log("Buzz");
      container.innerHTML += `<div class="p-3 bg-warning col">Buzz</div>`
    }
    else {
      console.log(i);
      container.innerHTML += `<div class="p-3 bg-primary col">${i}</div>`
    }
   }