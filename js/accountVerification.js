let trueAccount = sessionStorage.getItem("existingAccount");

// Function to validate whether or not a user has an existing account via sessionStorage variable
function validateAcc(){
    if(trueAccount == "true"){
        //Redirect user to view there existing ticket
        window.location.href = "ticket.html";
    }else{
        //Redirect user to the home page at the bottom to register an account
        window.alert("Must register an account before viewing a ticket");
        window.location.href = "index.html#HowTo";
    }
}