'use strict';

console.log('Petrificus Totalus');

const formElem = document.querySelector('form');

const getStudent = (name) => {
  return Student.allStudents.filter(student => student.name === name.toLowerCase());
}


const hideElements = () => {
  const sortingHatElem = document.getElementById('home');
  sortingHatElem.textContent = '';
}

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const student = getStudent(e.target.name.value)[0];
  hideElements();
  student.renderHouse();
});