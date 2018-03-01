//Jancok Skill
//Each attack has 25% of dealing critical strike with 2.5x multiplier

function attack (d){

  let chance = Math.floor(Math.random()*100);
  let damage = d*2.5                                    // <=change multiplier
  if (chance>=100-10){console.log(damage+' damage!!')}  // <=change chance & string output when critical triggered
  	else {console.log('Nope!!')                         // <=change string output when critical not occur
  }
  return chance
}

attack(76)
