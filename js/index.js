
//Retrieve the registration details stored in sessionStorage
let fullName = sessionStorage.getItem("fullName"); // Get the user's full name
let email = sessionStorage.getItem("email"); // Get the user's email address
let gitName = sessionStorage.getItem("gitName"); // Get the user's GitHub username
let eventS = sessionStorage.getItem("event"); // Get the selected event
let image = sessionStorage.getItem("profilePicture"); // Get the uploaded profile picture

// Generate a random ticket number between 0 and 10,000
let num = Math.floor(Math.random() * 10001);

// Display a congratulation message using the user's full name
document.getElementById("Congrats").innerHTML = `Congrats, <span style="color: #FF6A00;" >${fullName}!</span> <br> Your ticket is ready.`;

// Display a confirmation message containing the user's email address
document.getElementById("Confirmation").innerHTML = `We've emailed your ticket to <br> <span style="color: #FF6A00;">${email}</span> and will send updates <br> in the run up to the event.`;

// Display the event's date, location, and selected event
document.getElementById("Event").innerHTML = `January 31, 2027  /  Kingston, JA -  ${eventS}`;

// Display the user's full name on the ticket
document.getElementById("ticketName").innerHTML = `${fullName}`;

// Display the user's GitHub username on the ticket
document.getElementById("ticketEmail").innerHTML = `${gitName}`;

// Display the randomly generated ticket number with a # symbol
document.getElementById("TicketNo").innerHTML = `#${num}`;

// Display the uploaded profile picture on the ticket
document.getElementById("ProfilePic").src = image;