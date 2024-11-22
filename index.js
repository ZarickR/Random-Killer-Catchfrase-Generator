//Arrays for the names of the Killers, Phrases, Actions and Locations

const killers = ["Freddy Krueger", 
                 "Jason Voorhees", 
                 "Michael Myers", 
                 "Ghostface", 
                 "Chucky"];
const phrases = ["Welcome to prime time!", 
                 "Sweet dreams.", 
                 "Every town has an Elm Street!", 
                 "I am eternal.", 
                 "This is God.", 
                 "What's your favorite scary movie?", 
                 "Do you like scary movies?", 
                 "Hello, Sidney.", 
                 "I want to play a game.", 
                 "This is the last person you're ever going to see alive.", 
                 "Hi, I'm Chucky. Wanna play?", 
                 "Friends till the end!", 
                 "It's your friend till the end!", 
                 "You've been very naughty.", 
                 "This is the end, friend!"];
 const actions = ["Heavy breathing", 
                  "Footsteps in the woods", 
                  "Breaking branches", 
                  "Ki ki ki, ma ma ma", 
                  "Head tilt", 
                  "Slow methodical walking", 
                  "Standing still while observing", 
                  "Heavy breathing behind mask"];
const locations = ["Elm Street", 
                   "Dream World",
                   "the Boiler Room",
                   "Camp Crystal Lake",
                   "Haddonfield, Illinois",
                   "Woodsboro, California",
                   "Toy Store"];

// Random catchphrase generator main program.

document.getElementById("GenButton").onclick = function(){

    //Killer random selector
    let killerRandom = Math.floor(Math.random() * killers.length);
    let killer = killers[killerRandom];
    let killerSelect = `Your killer is ${killer}.`;    
    
    //Phrase or Action random selector
    let phrase = Math.floor(Math.random() * phrases.length);
    let action = Math.floor(Math.random() * actions.length);

    if(killer === "Jason Voorhees" || killer === "Michael Myers") {
        phraseOrActionSelect = `You will happen to ${actions[action]} before finishing off your victim...`;
    }
    else {
        phraseOrActionSelect = `You will say: "${phrases[phrase]}" before you finish off your victim!`;
    }
    
    // Playground random selector
    let location = Math.floor(Math.random() * locations.length);
    let locationSelect = `Your playground is ${locations[location]}.`;

    document.getElementById("killer").textContent = killerSelect;
    document.getElementById("phrase").textContent = phraseOrActionSelect;
    document.getElementById("location").textContent = locationSelect;
}