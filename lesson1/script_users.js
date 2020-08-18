// Задание:
// 1. Определить сколько пользователей в онлайн.
// 2. Определить сколько пользователей младше 18 лет
// 3. Сделать новый массив todosNotComplete невыполненых задач. 


// Дано:
let toDo = [{
    title: "Сходить в магазин",
    completed: false
}, {
    title: "Встретить друга",
    completed: true
}, {
    title: "Позвонить маме",
    completed: false
}];

let users = [{
    skills: ["html", "css", "js", "wordpress", "react"],
    name: "Иван",
    age: 20,
    weight: 80,
    height: 184,
    address: {
        city: "Харьков",
        street: "ул. Шевченко",
        house: 65
    },
    online_status: true
}, {
    skills: ["html", "css", "js", "wordpress", "react"],
    name: "Петя",
    age: 20,
    weight: 76,
    height: 182,
    address: {
        city: "Харьков",
        street: "ул. Шевченко",
        house: 65
    },
    online_status: true
}, {
    skills: ["html", "css", "js", "wordpress", "react"],
    name: "Иван",
    age: 25,
    weight: 80,
    height: 184,
    address: {
        city: "Харьков",
        street: "ул. Шевченко",
        house: 65
    },
    online_status: false
}];

// console.log(users);
// console.log(todo1[title]);
// console.log(todos[0].title);
// console.log(users[2].address.city);

// console.log(users[1].skills[4]);
// console.log(users[1].skills.length - 1);

// const user = users[0];

// const lastSkill = user.skills.length - 1
// console.log(user.skills[lastSkill])

// console.log((users[0].age+users[1].age+users[2].age)/users.length)

// let oldestUserAge = userAge1
// console.log(userAge1 > userAge2)
// console.log(userAge1 > userAge3)

// if (oldestUserAge < userAge2) {
//   oldestUserAge = userAge2
// }

// if (oldestUserAge < userAge3 ) {
//   oldestUserAge = userAge3
// }

let oldestUserAge = users[0].age;

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].age);

//     if (oldestUserAge < users[i].age) {
//         oldestUserAge = users[i].age;
//     }
// }

// let i = 0;
// while (i < users.length) {
//   console.log(users[i].age);
//   if(oldestUserAge < users[i].age){
//     oldestUserAge = users[i].age;
//   }
//   i++
// }

// console.log(oldestUserAge)

// Решение:
// 1.
let onlineUsers = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].online_status == true) {
        onlineUsers++;
    }
};
console.log('Пользователей онлайн:', onlineUsers);

// 2.
let parentsControl = 0;
for (i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
        parentsControl++;
    }
};
console.log('Пользователей младше 18-ти:', parentsControl);

// 3.
let n = 0;
let toDoNotCompleted = [];
// console.log('Осталось сделать:');  //для проверки
while (n < toDo.length) {
    if (toDo[n].completed == false) {
        // console.log(toDo[n].title);  //для проверки
        toDoNotCompleted = toDoNotCompleted.concat(toDo[n].title);
    }
    n++
};

console.log('Осталось сделать:', toDoNotCompleted);