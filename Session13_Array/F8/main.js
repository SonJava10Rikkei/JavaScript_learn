/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()

*/

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 0,
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 1,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 1,
    },
    {
        id: 4,
        name: "PHP",
        coin: 200

    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 1
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 12
    }
];

function courseHandler(course, index) {

    // console.log(course);
    // return {
    //     id: course.id,
    //     name: `Khoa hoc: ${course.name}`,
    //     coin: course.coin,
    //     coiText: `Gia ${course.coin}`,
    //     index: index,
    //     originArray: course,
    // }

    return course.name;
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
