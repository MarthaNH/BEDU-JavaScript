//Arrow functions

const suma = (a,b) => {return a + b}

const firstNames = [ 'John', 'Jane', 'Mark'];

function getFullNames(names) {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

const fullNames = getFullNames(firstNames)

console.log(fullNames); 
