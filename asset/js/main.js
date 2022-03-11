let container = document.getElementById("rowId");
console.log(container);
//ciclo for per determinare se il numero è multiplo di 3/5/3 && 5;
for (var i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
      container.innerHTML += `<div class="p-3 m-2 bg-danger col-2 sizingCols d-flex align-items-center justify-content-center fw-bold">FizzBuzz</div>`
    }
    else if ( i % 3 == 0 ) {
      container.innerHTML += `<div class="p-3 m-2 bg-success col-2 sizingCols d-flex align-items-center justify-content-center fw-bold">Fizz</div>`
    }
    else if ( i % 5 == 0 ) {
      container.innerHTML += `<div class="p-3 m-2 bg-warning col-2 sizingCols d-flex align-items-center justify-content-center fw-bold">Buzz</div>`
    }
    else {
      container.innerHTML += `<div class="p-3 m-2 bg-primary col-2 sizingCols d-flex align-items-center justify-content-center fs-2 fw-bold">${i}</div>`
    }
   }