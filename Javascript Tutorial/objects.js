var Dog=
{
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything"]
}

Dog.name="Good Dog"
console.log(Dog.name);

Dog.favTreat="Chicken Strips"
console.log(Dog.favTreat)

// var SpaceShuttle=function(targetPlanet)
// {
//     this.targetPlanet=targetPlanet
// }

class SpaceShuttle
{
    constructor(name){this.targetPlanet=name}
} 
var zeus=new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);