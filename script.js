// for, while, do while

// for (начало; условие ; шаг){

// }

// for (let i = 0; i < 10; i++){//1,2,3,4,5,6,7,8,9,10
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(i);
//     i++
// }while(i<10)

// let n = Number(prompt('vvedite chislo'));//1024

// let s = 1;//2

// while (n > s) { //1024>2,1024>4,1024>8,1024>16... 1024>1000
//   s = s * 2; // 1*2=2/ 2*2=4/
// }
// if (n == s) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

//bit ++

// let n = prompt('vvedite kol operacii') //1
// let x = 0
// for (let i = 0; i < n; i++) {
//   let operaciya = prompt('vvedite operaciyu') //1
//   if (operaciya === '++x' || operaciya === 'x++') {
//     x++
//   } else {
//     --x
//   }
// }
// console.log(x);

//slishkom dlinnye slova

// let n = Number(prompt('vvedite kol slov'))//1

// for (let i = 0; i < n; i++) { //localization
//   let x = prompt('vvedite slovo' + (i+1)) //localization - 2  word

//   if (x.length > 10) {//localization > 10

//         //для нахождения динамичной последней буквы используем 'sting'['string'.length-1]

//     console.log(x[0] + (x.length - 2) + x[x.length -1]);// l10n
//   } else {
//     console.log(x); //word
//   }
// }

//ukladka dominoshkami
// let m = prompt('vvedite pervyi razmer')
// let n = prompt('vvedite vtoroi razmer')

// console.log(Math.floor(m*n/2));

//function

// function sayHello(name) {
//   alert('hello'+ ' ' + name) //hello azat
// }

// sayHello('azat')

// let value = true
// console.log(typeof value);

// value = String(value)
// console.log(typeof value);

// value = Number(value)
// console.log(typeof value);

// let word1 = prompt('Vvedite slovo1: ').toLocaleLowerCase()
// let word2 = prompt('Vvedite slovo2: ').toLocaleLowerCase()

// if (word1 < word2){
//     console.log(-1);
// }else if (word2 < word1){
//     console.log(1);
// } else{
//     console.log(0);
// }

// switch (word1,word2) {
//   case word1 < word2:
//     console.log(-1);
//     break;
//   case word2 < word1:
//     console.log(1);
//     break;
//   default:
//     console.log(0);
// }

// //!!function decloration //функция объявления

// function sayHello(a,b) {
//   //telo
//   return a+b
// }

// //? function expressions // функция выражения // анонимная функция

// let sayHello = function (parametr) {
//   //telo
//   return
// }

// //! arrow functions // стрелочные функции

// let func = (parametr) => {
//   //telo
//   return
// }

// function reverse(name) { //'azat'
//   let num = '' // 0
//   console.log(num);
//   for (let i = name.length - 1; i >= 0; i--){
//     num = num + name[i] // t a z a
//   }
//   console.log(num);
// }
// reverse('azat')

// function polindrome(string) {//level
//   let emptyString = ''

//   for (let i = string.length - 1; i >= 0; i--) {
//     emptyString = emptyString + string[i] // l e v el
//   }
//   return emptyString === string ? 'yes' : 'no'
// }
// polindrome('azat')

// if (emptyString === string) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// // //! vlojennyi cikl 111222333444555666777888999

// for (let i = 1; i < 10; i++) { // 1 2 3 4 5 6 7 8 9
//   for (let j = 0; j < 3; j++) { // 111 222 333 444 555 666 777 888 999
//     // console.log(i);
//     document.write(i);
//   }
// }

// // //? 11 12 13 21 22 23 31 32 33
// let str = ''
// for (let i = 1; i <= 3; i++) { //1 2 3
//   for (let j = 1; j <= 3; j++) { //1 2 3/
//     str = str + String(i) + String(j) + ' ' // 31  32 33
// //    // document.write(str)
//   }
// }

// console.log(str);

// function alphabetical(string) {// 'azat'
//   let string2 = string.split(''); // ['a','z','a','t']

//   for (let i = 0; i < string2.length  - 1; i++) {
//     for (let j = 0; j < string2.length - 1; j++) {
//       if (string2[j] > string2[j + 1]) {
//         let swap = string2[j]
//         string2[j] = string2[j + 1]
//         string2[j + 1] = swap
//       }
//     }
//   }
//   return string2.join('')

// }

// alphabetical('asdaaaf')

// let value = +prompt('Введите число 1 или 2');

// if (value == 1) {
//   alert('Вы ввели число 1');
// } else if (value == 2) {
//   alert('Вы ввели число 2');
// } else {
//   alert('Вы ввели неправильное значение');
// }

// switch (value) {
//   case value == 1:
//     alert('Вы ввели число 1');
//   case value == 2:
//     alert('Вы ввели число 2');
//   default:
//     alert('Вы ввели неправильное значение');
// }

// for (let i = 1; i < 10; i++){ //!1 2 3 4 5 6 7 8 9 //1*1,1*2,1*3,
//     console.log('Таблица умножения на ' + i);
//     console.log('');

//     for (let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//         console.log(i + '*'+ j + '=' + i*j); // !! 1 * 1 = otvet
//     }
//     console.log('');
// }

/* <body> 
    <pre> 
        Задание: 
        Напишите сценарий, который найдет минимальное, максимальное значения массива,  
        а также выведет сумму всех элементов массива. 
    </pre> 
    <script> 
        let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3]; 
    </script> 
</body> */

//?? first answer

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;
// for (let index = 0; index < values.length; index++){
//      const element = values[index];
//      if (element > max){
//        max = element;
//      }
//    }
//    console.log('Maximum: ' + max);

// let min = values[0];
// for (let index = 0; index < values.length; index++){
//         const element = values[index];
//         if (element < min){
//           min = element;
//         }
// }
// console.log('Minimum: ' + min);
// let summ=0;
// for (let index = 0; index < values.length; index++){
//     summ+=values[index];
// }
// console.log('Сумма равна: '+summ);

//?? second answer
// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;
// let min = Number.MAX_VALUE;
// let sum = 0;

// for (let index = 0; index < values.length; index++) {
//   const element = values[index];
//   if (element > max) {
//     max = element;
//   }
//   if (element < min) {
//     min = element;
//   }

//   sum += element;
// }

// console.log('Максимальное значение массива - ' + max);
// console.log('Минимальное значение массива - ' + min);
// console.log('Сумма всех элементов - ' + sum);

// {/* <body>
//     <pre>
//         Задание:
//         Дано массив. Создайте на основе значений этого массива два новых массива. В один массив поместите все четные значения, а во второй все нечетные.
//         Выведите на экран значения, которые вошли в первый массив и во второй массив.
//     </pre>
//     <script>
//         let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
//     </script>
// </body> */}
//?first answer
// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// let positive = [];
// let negative = [];
// for (let index=0; index<values.length; index++){
//      if (values[index]%2===0){
//       positive += values[index]
//      } else{
//       negative += values[index];
//      }
// }
// console.log('positive ' + positive);
// console.log('negative ' + negative);
//?? second answer
// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
//         let oddValues = [];
//         let evenValues = [];
//         let oddValuesPosition = 0;
//         let evenValuesPosition = 0;

//         for (let value of values) {
//             if (value % 2 == 0) {
//                 evenValues[evenValuesPosition] = value;
//                 evenValuesPosition++;
//             }
//             else {
//                 oddValues[oddValuesPosition] = value;
//                 oddValuesPosition++;
//             }
//         }

//         console.log("Нечетные значения");
//         for (let oddVal of oddValues) {
//             console.log(oddVal);
//         }

//         console.log("Четные значения");
//         for (let evenVal of evenValues) {
//             console.log(evenVal);
//         }

// {/* <body>
//     <pre>
//         Задание:
//         Найдите первый положительный элемент массива и выведите его на экран.
//     </pre>
//     <script>
//         let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
//     </script>
// </body> */}
//?? first answer
// let values1 = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
// let positiveNum = [];
// for (let i = 0; i<values1.length; i++){
//  if (values1[i]>=0){
//   positiveNum += values1[i];
//  }
// }
// console.log('Positive number ' + positiveNum[0]);

//? second answer

// let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
//         for (let i = 0; i < values.length; i++) {
//             if (values[i] > 0) {
//                 alert(`Значение ${values[i]} по индексу ${i} - первое положительное в массиве`);
//                 break; // нет смысла продолжать цикл, так как значение найдено
//             }
//         }
// {/* <body>
//     <pre>
//         Задание:
//         Попросите у пользователя ввести название города. Удалите этот город из элементов массива.
//         Если города нет в массиве, сообщите об этом пользователю.
//         Выведите массив на экран после удаления элементов.
//     </pre>
//     <script>
//         let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];
//     </script>
// </body> */}
//? first answer
// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];
// let city = String(prompt("vvedite city: "))//! тут и так стринг преобразование не нужно//

// for(let i=0; i<cities.length; i++){
//   if (cities[i]!=city){
//     console.log('City is absent');
//   } else{
//     cities==cities.pop(city);//!cities.splice(city, 1);
//     console.log(cities);
//   }
// }
//? second answer
// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];

//         let input = prompt("Введите название города");
//         let index = cities.indexOf(input);

//         if (index == -1) {
//             alert("Указанный город не найден.");
//         }
//         else {
//             cities.splice(index, 1);
//         }

//         for (const city of cities) {
//             console.log(city);
//         }

// Задание:
//         Выведите на экран свойства first и last из вложенного объекта name. Поменяйте значение свойства balance на '$2000'. Удалите свойство email.
//         Выведите на экран все содержимое объекта с помощью кода console.log(user)

// let user = {
//   balance: '$1,250.89',
//   age: 24,
//   name: {
//     first: 'Golden',
//     last: 'Clements',
//   },
//   company: 'EWAVES',
//   email: 'golden.clements@ewaves.io',
//   friends: [
//     {
//       id: 0,
//       name: 'Buchanan Austin',
//     },
//     {
//       id: 1,
//       name: 'Richmond Garrison',
//     },
//     {
//       id: 2,
//       name: 'Burns Cook',
//     },
//     {
//       id: 3,
//       name: 'Sally Mcpherson',
//     },
//   ],
//   favoriteFruit: 'strawberry',
// };
//?answer
// console.log("First Name " + user.name.first);
// console.log("Last Name " + user.name.last);
// user.balance = "$2000";
// delete user.email;
// console.log(user);

// Задание:
//         Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName
//         с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства
//         lastName и firstName полученного объекта на экраn
//? answer
// let obj1 = new Object();
// obj1.firstName = "Jhon";
// obj1.lastName = "Doe";

// let obj2 = {
//     firstName: "JHON",
//     lastName: "DOE"
// };

// function print(obj) {
//     console.log("First Name: " + obj.firstName);
//     console.log("Last Name: " + obj.lastName);
// }

// print(obj1);
// print(obj2);

// Задание:
//         Поменяйте сценарий. Выведите информацию только о тех пользователях, кто работает в компании Keebler LLC

// let users = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496',
//       },
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets',
//     },
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618',
//       },
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains',
//     },
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653',
//       },
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications',
//     },
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990',
//       },
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems',
//     },
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342',
//       },
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems',
//     },
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-71.4197',
//         lng: '71.7478',
//       },
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications',
//     },
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984',
//       },
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems',
//     },
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {
//         lat: '-14.3990',
//         lng: '-120.7677',
//       },
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers',
//     },
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889',
//       },
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies',
//     },
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232',
//       },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models',
//     },
//   },
// ];

// for (const user of users) {
// console.log(user.name + " from " + user.address.city);
// }

// const companyName = 'Keebler LLC';
// for (const user of users) {
//   if (user.company.name == companyName) console.log(user.name + ' from ' + user.address.city);
// }



//! Найдите на странице все параграфы с классом border и добавьте для них сплошную красную рамку толщиной в 1px
// let pElements = document.querySelectorAll("p.border");
// for (const p of pElements) {
//     p.style.border = "1px solid red";
//}
// !Найдите на странице все элементы li, которые находятся в ul с классом border
//! и добавьте для них сплошную красную рамку толщиной в 1px
// let pElements = document.querySelectorAll("ul.border>li");
// for (const p of pElements) {
//     p.style.border = "1px solid red";
// }

//! getRandomColor функция, которая возвращает случайно сгенерированный цвет в фомрмате #001122
//! Используя функцию getRandomColor добавьте для каждого параграфа рамку случайного цвета
//? function getRandomColor() {
//?     var letters = '0123456789ABCDEF';
//?     var color = '#';
//?     for (var i = 0; i < 6; i++) {
//?         color += letters[Math.floor(Math.random() * 16)];
//?     }
//?     return color;
//? }

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// let pElements = document.querySelectorAll("p");
// for (const p of pElements) {
//     p.style.border = "3px solid " + getRandomColor();
// }

//! Задание:
//!         Поменяйте вызовы методов getElementById, getElementsByName, getElementsByTagName, getElementsByClassName
//!         на вызовы методов querySelector или querySelectorAll так, чтобы поведение сценария не изменилось.

// let paragraph = document.querySelector("#first");
// paragraph.style.border = "2px solid red";

// let radioButtons = document.querySelectorAll("[name='answer']");
// for (const button of radioButtons) {
//     button.checked = !button.checked;
// }

// let listItems = document.querySelectorAll("li");
// for (const item of listItems) {
//     item.style.margin = "2px";
//     item.style.border = "2px solid green";
// }

// let lists = document.querySelectorAll(".my-list");
// for (const list of lists) {
//     list.style.border = "2px solid blue";
// }

//! Задание:
//!     Для первого и последнего элемента li для всех ul на данной странице
//!     добавьте сплошную красную рамку толщиной в 1px

// let pElements = document.querySelectorAll("li:first-child, li:last-child");
//     for (const p of pElements) {
//         p.style.border = "1px solid red";
//     }