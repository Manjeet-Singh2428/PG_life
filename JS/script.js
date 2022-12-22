// let dog = {
//     breed: 'golden ret.',
//     height: '4ft',
//     age: 2,
//     display: function () {
//         console.log(this.breed + " " + this.height + this.age);

//     }
// };

// dog.display();


// "use strict"

// const arr = [2, 3, 4, 5, 6];
// arr.forEach(function (element) {
//     // document.write(element + " ") ;  ---> this line is used to check result in  browser
//     console.log(element + " ");
// })


// "use strict "

// let numbers = [1, 2, 3, 4, 5];
// let square = numbers.map(x => x * x);

// square.forEach(function (element) {
//     console.log(element + " ");
// }
// );

// " use strict "

// let numbers = [1, 2, 3, 4, 5];
// let evenNumber = numbers.filter(x => (x * x) % 2 == 0);

// evenNumber.forEach(function (element) {
//     console.log(element + " ");
// });

// "use strict"
// let name = "avada  kederva!!";
// // let a = `hello ${name}`;
// // console.log(a);
// console.log(name.length);

// let el = document.getElementById("abc");
// alert(el.innerHTML);

// el.innerHTML = "this is some new content.";
// el.style.color = "red";


let el = document.getElementById("abc");
el.onclick = function () {
    // alert("Element  clicked .")
    el.innerHTML = " This is some new content";
    el.style.color = "red";
}
