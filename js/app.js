'use strict';

console.log('Petrificus Totalus');

const formElem = document.querySelector('form');

const getStudent = (name) => {
  return Student.allStudents.filter(student => student.name === name.toLowerCase());
}


const hideElements = () => {
  const imageDivElem = document.getElementById('picture-box');
  imageDivElem.textContent = '';
  const contentDivElem = document.getElementById('card-content');
  contentDivElem.textContent = '';
}

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const student = getStudent(e.target.name.value)[0];
  hideElements();
  student.renderHouse();
});