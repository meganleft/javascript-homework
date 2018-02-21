console.log('movies-and-jurassic-park.js is connected! woohoo!');
x = harryPotter;
console.log(x);

// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};

var guestOfHonor = snakewaterMontana.paleontologist;
console.log (guestOfHonor);

var cleverGirl = "$100";


// Do the tasks down here!

var harryPotter = {
  title: 'Harry Potter and the Prisoner of Azkaban',
  actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
  director: 'Need to add director',
  releaseYear: 2008,
  duration: 120,
}

console.log(harryPotter.title);
console.log(harryPotter.director);
console.log(harryPotter.releaseYear);

var x = 25;
harryPotter.duration = harryPotter.duration + x;

console.log ("New duration is: ", harryPotter.duration);


// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!
var nicaraguanSpecimens = ["Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"];
console.log (nicaraguanSpecimens);

var favoriteSpecimen = nicaragua.specimens [2];
console.log (favoriteSpecimen);

nicaragua.annual_budget = nicaragua.annual_budget + 250000;
console.log ("New budget is: ", nicaragua.annual_budget);


// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
  nicaragua: {
    depth: "200 meters",
    annual_budget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ],
  }
}

// Do the tasks down here!

console.log (hammondsMines.buenos_aires.depth);

mexicanMineDepth = hammondsMines.mexico.depth;
console.log (mexicanMineDepth);

buenosBudget = hammondsMines.buenos_aires.annual_budget;
console.log (buenosBudget);

console.log (hammondsMines.buenos_aires.specimens);

var x = hammondsMines.buenos_aires.annual_budget;
var y = hammondsMines.mexico.annual_budget;
var z = hammondsMines.nicaragua.annual_budget;

totalBudget = [x + y + z];
console.log (totalBudget);

var dino = hammondsMines.mexico.specimens [1];
console.log (dino);


