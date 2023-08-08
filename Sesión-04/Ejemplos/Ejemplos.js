//Ejemplo funcion
function myFunction (param1) {
    return param1 * 2
} 

console.log(myFunction(25))

//Ejemplo01

function calculateAge(birthYear) {
    const age = 2023 - birthYear;
    return age;
}

const ageAlejandra = calculateAge(1998)
const ageOscar = calculateAge(1521)
const ageSamuel = calculateAge(1999)

console.log(ageAlejandra)
console.log(ageOscar)
console.log(ageSamuel)

function yearsUntilRetirement(year, name) {
    const age = calculateAge(year);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years.`);
  }

  yearsUntilRetirement(1998, "Alejandra")
  yearsUntilRetirement(1521, "Oscar")
  yearsUntilRetirement(1999, "Samuel")

  //Ejemplo02

  const whatDoYouDo = function(job, name) {
    switch (job) {
        case 'developer' :
            return `${name} develops cool apps`;
        case 'designer':
            return `${name} designs awesome websites`;
        default :
            return `${name} does something else`
    }
  }

  console.log(whatDoYouDo('developer','Marko'))

  //FuncionReclusiva

  const arr = [function(a,b){return a+b}]

  
  //Ejemplo 3 IIFE (Inmediately Invoked Function Expression)

  function logName() {
    const name = "John Doe";
    console.log(name);
  }
  
  logName()
