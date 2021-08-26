'use strict';


function Student(name, house, houseImg, message) {
  this.name = name;
  this.house = house;
  this.houseImg = houseImg;
  this.message = message;
}

Student.allStudents = [];

Student.prototype.renderHouse = function() {
  const sectionElem = document.getElementById('home');
  const houseImgElem = document.createElement('img');
  houseImgElem.src = this.houseImg;
  houseImgElem.id = 'house-img';
  sectionElem.appendChild(houseImgElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.house;
  sectionElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  pElem.textContent = this.message;
  sectionElem.appendChild(pElem);
  const aElem = document.createElement('a');
  aElem.setAttribute('href', './houses.html');
  aElem.textContent = 'Join your house!';
  sectionElem.appendChild(aElem);
}


Student.allStudents.push(new Student('sara', 'Ravenclaw', './img/ravenclaw.png', 'congratulations, you are a ravenclaw!'));