export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students.some((element) => typeof element !== 'string')) {
      throw TypeError('Students must be an array');
    } else this._students = students;
  }
}

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

// try {
//   const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
// } catch (err) {
//   console.log(err);
// }
