'use strict';


function House(name, message, image, students) {
  this.name = name;
  this.message = message;
  this.image = image;
  this.students = students
}

const hufflepuff = new House('Hufflepuff', 'Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. Hufflepuffs are known to have a strong moral code, and a sense of right and wrong. Hufflepuffs are usually accepting of everyone. Students in Hufflepuff are known to value everyone and treat them as equal.', './img/hufflepuff.png', ['Bryce', 'David', 'Joe', 'Angela']);

const slytherin = new House('Slytherin', 'Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. Slytherins tend to take charge, they are often self-assured and confident of their own competence and can be very loyal. According to Albus Dumbledore, the qualities which Salazar valued in the students he had chosen included cleverness, resourcefulness, determination, and "a certain disregard for the rules". Dumbledore noted that all of these were qualities possessed by Harry Potter, who was a Gryffindor but was almost placed in Slytherin.', './img/slytherin.png', ['Jonathan', 'Dario', 'Steve', 'Valton']);

const gryffindor = new House('Gryffindor', 'Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage and determination. The Gryffindor house emphasises these traits as well as "daring, nerve, and chivalry", and thus its members are generally regarded as brave, though sometimes to the point of recklessness.', './img/gryffindor.png', ['Roop', 'Andrea', 'George', 'Zack', 'Anthony']);

const ravenclaw = new House('Ravenclaw', 'Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students. They also pride themselves on being original in their ideas, and methods. It is not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun.', './img/ravenclaw.png', ['Cameron', 'Jacob', 'Katy', 'Brian']);

House.allHouses = [gryffindor, hufflepuff, slytherin, ravenclaw];

House.prototype.renderStudents = function(houseName) {
  const ulElem = document.getElementById(houseName);
  console.log(ulElem);
  for (let student of this.students) {
    const liElem = document.createElement('li');
    liElem.textContent = student;
    ulElem.appendChild(liElem);
  }
}

function Student(name, house) {
  this.name = name;
  this.house = house.name;
  this.houseImg = house.image;
  this.message = house.message;
}

Student.allStudents = [];

Student.prototype.renderHouse = function() {
  const imageDivElem = document.getElementById('picture-box');
  const contentDivElem = document.getElementById('card-content');
  const houseImgElem = document.createElement('img');
  houseImgElem.src = this.houseImg;
  houseImgElem.id = 'house-img';
  imageDivElem.appendChild(houseImgElem);
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.house;
  contentDivElem.appendChild(h2Elem);
  const pElem = document.createElement('p');
  pElem.textContent = this.message;
  contentDivElem.appendChild(pElem);
  const aElem = document.createElement('a');
  aElem.setAttribute('href', './houses.html');
  aElem.textContent = 'click to join your house!';
  contentDivElem.appendChild(aElem);
}

function instantiateStudents() {
  Student.allStudents.push(new Student('cameron', ravenclaw));
  Student.allStudents.push(new Student('katy', ravenclaw));
  Student.allStudents.push(new Student('jacob', ravenclaw));
  Student.allStudents.push(new Student('brian', ravenclaw));
  Student.allStudents.push(new Student('bryce', hufflepuff));
  Student.allStudents.push(new Student('david', hufflepuff));
  Student.allStudents.push(new Student('joe', hufflepuff));
  Student.allStudents.push(new Student('angela', hufflepuff));
  Student.allStudents.push(new Student('jonathan', slytherin));
  Student.allStudents.push(new Student('valton', slytherin));
  Student.allStudents.push(new Student('dario', slytherin));
  Student.allStudents.push(new Student('steve', slytherin));
  Student.allStudents.push(new Student('zack', gryffindor));
  Student.allStudents.push(new Student('andrea', gryffindor));
  Student.allStudents.push(new Student('anthony', gryffindor));
  Student.allStudents.push(new Student('roop', gryffindor));
  Student.allStudents.push(new Student('george', gryffindor));
}

instantiateStudents();

