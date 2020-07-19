# Assignment 3

### 1. forEach VS map
forEach() method doesn’t actually return anything (undefined). It simply calls a provided callback function on each element in your array. This callback is allowed to mutate the calling array.       
map() method will also call a provided callback function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.       

### 2. Our objective: get the total score of force users only(map, reduce, filter).  
```
var personnel = [

  {

    id: 5,

    name: "Luke Skywalker",

    pilotingScore: 98,

    shootingScore: 56,

    isForceUser: true,

  },

  {

    id: 82,

    name: "Sabine Wren",

    pilotingScore: 73,

    shootingScore: 99,

    isForceUser: false,

  },

  {

    id: 22,

    name: "Zeb Orellios",

    pilotingScore: 20,

    shootingScore: 59,

    isForceUser: false,

  },

  {

    id: 15,

    name: "Ezra Bridger",

    pilotingScore: 43,

    shootingScore: 67,

    isForceUser: true,

  },

  {

    id: 11,

    name: "Caleb Dume",

    pilotingScore: 71,

    shootingScore: 85,

    isForceUser: true,

  },

];
```
page: [get total score](./getTotalScore.html)

### 3. display all employee names from the json data
page: [get names](./getNames.html)
 

 

