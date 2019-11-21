let takeoff = null;
let landing = null;
let missionAbort = null;
let button = null;
let rocket = null;

function init (){
takeoff = document.getElementById("takeoff");
land = document.getElementById("landing");
missionAbort  = document.getElementById("missionAbort");
button = document.querySelectorAll("button");
rocket = document.getElementById("rocket");
rocket.style.position= 'relative'; 
rocket.style.top = '250px'; 
rocket.style.right = '0px';

// take off button on click
takeoff.addEventListener("click", function (event){
// A window confirm 
    confirm = confirm('Confirm that the shuttle is ready for takeoff.');
// If user clicks OK, change parts b-d.
    if (confirm == true){
// The flight status should change to "Shuttle in flight."
        flightStatus.innerHTML = "Shuttle in flight";
// change color of the shuttle flight screen blue.
        shuttleBackground.style.backgroundColor = "blue";
// The shuttle height should increase by 10,000 miles.
        spaceShuttleHeight.value = 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeight.value;
    } // end if
}); // end takeoff on click


// "Land" button is clicked
land.addEventListener("click", function (event){
// window alert 
    alert("The shuttle is landing. Landing gear engaged.");
// The flight status should change to "The shuttle has landed."
    flightStatus.innerHTML = "The shuttle has landed.";
// The background color of the shuttle flight screen should change from blue to green.
    shuttleBackground.style.backgroundColor = "green";
// The shuttle height should go down to 0.
    spaceShuttleHeight.value = 0;
    spaceShuttleHeight.innerHTML = spaceShuttleHeight.value;
}); // end land on click

// abort on click
missionAbort.addEventListener("click", function (event){
    //  window confirm 
        confirm = confirm("Confirm that you want to abort the mission."); 
    //If the user wants to abort the mission, then add parts b-d.
        if (confirm == true){
    // The flight status should change to "Mission aborted."
        flightStatus.innerHTML = "Mission aborted.";
    // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = "green";
    // The shuttle height should go to 0.
        spaceShuttleHeight.value = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeight.value;
         } // end if 
    });// end abort on click

    // up button on click
    button[0].addEventListener("click", function (event){
        // shuttle height inc by 10k mi
        spaceShuttleHeight.value += 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeight.value;
        rocket.style.top = parseInt(rocket.style.top) - 5 + 'px';
    });
    // down button on click
    button[1].addEventListener("click", function(event){
       //shuttle height dec by 10k mi
       spaceShuttleHeight.value -= 10000;
       spaceShuttleHeight.innerHTML = spaceShuttleHeight.value;
       //rocket img dec by 10px
       rocket.style.top = parseInt(rocket.style.top) + 5 + 'px';
   });
    // right on click
    button[2].addEventListener("click", function(event){
        rocket.style.right = parseInt(rocket.style.right) - 5 + 'px';
    });
    // left on click
    button[3].addEventListener("click", function(event){
        rocket.style.right = parseInt(rocket.style.right) + 5 + 'px';
    });

    preventDefault();
} // end init

window.onload = init;
