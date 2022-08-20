// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driv, name) {
    return (driv.filter(dName => dName.toLowerCase() === name.toLowerCase()))
  }
 
  function fuzzyMatch(driv, name) {
    return (driv.filter(dName => dName[0,1] === name[0,1]))
  } 
   function matchName(driv, name){
    return driv.filter(dName => dName.name === name)
   }