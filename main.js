
//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype

function Dog (name, status, color, hungry) {
  this.name = name
  this.status = status
  this.color = color
  this.hungry = hungry
}

const sadie = new Dog ("Sadie", "normal", "black", false)
const moonshine = new Dog ("Moonshine", "NA", "NA", true)
const atticus = new Dog ("Atticus", "NA", "NA", true)



// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name
  this.cool = cool
}

Human.prototype.pet = function(doggies){
  doggies.status = "happy"
}

Human.prototype.feed = function(doggies){
  doggies.hungry = false;
}

const mason = new Human("Mason", false)
const julia = new Human("Julia", true)

// Instances of Human
// Needed: mason, julia
