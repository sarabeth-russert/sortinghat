'use strict';

for (let house of House.allHouses) {
  console.log(house);
  house.renderStudents(house.name.toLowerCase());
}