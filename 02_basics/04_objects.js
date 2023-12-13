const tinderUser = new Object();
// const tinderUser={}

tinderUser.id = "123qwe";
tinderUser.name = "Aman";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //{}

const regularUser = {
  email: "some@email.com",
  fullName: {
    userfullName: {
      firstName: "Lucky",
      lastName: "Kumar",
    },
  },
};

// console.log(regularUser.fullName.userfullName.firstName);
// console.log(regularUser.fullName?.userfullName?.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = { obj1, obj2 }; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj4 = Object.assign({}, obj1, obj2, obj3); //(target,source)
// const obj4 = Object.assign([], obj1, obj2);//[ <1 empty item>, 'a', 'b', 'c', 'd' ]
const obj4 = { ...obj1, ...obj2 };

// console.log(obj4);

const users = [
  {
    id: 1,
    email: "luck1@gmail.com",
  },
  {
    id: 2,
    email: "luck2@gmail.com",
  },
  {
    id: 3,
    email: "luck3@gmail.com",
  },
];

// console.log(users);
// console.log(tinderUser); //{ id: '123qwe', name: 'Aman', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123qwe', 'Aman', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123qwe' ], [ 'name', 'Aman' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

// ----------/--------------

const course = {
  coursename: "javascript",
  price: "99",
  courseInstructor: "Hitesh Chaudhary",
};

// course.courseInstructor
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// will be understood in react js
// const navbar = ({ company }) => {};
// navbar((company = "youtube"));

//Api------------
// --JSON--
// {
//     "name": "Lucky",
//         "coursename": "Javascript",
//         "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ];
