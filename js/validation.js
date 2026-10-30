
function validate(){

    //Clear the data stored in the session if the user wishes to register again
    sessionStorage.clear();
    // Clear previous error messages before validating again
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";

    // Retrieve the values entered by the user
    let gitName = document.getElementById("gitname").value;
    let fullName = document.getElementById("Fname").value;
    let image = document.getElementById("Pfp").files[0];
    let email = document.getElementById("email").value;

    // Assume no account has been created
    let trueAccount = false;

    // Assume the initial details entry to be valid/true
    let valid = true;

    // Check whether the GitHub username field is empty
    if(gitName.length == 0){
        document.getElementById("error1").innerHTML = "This field is required";
        valid = false;
    }

    // Check whether the GitHub username starts with '@'
    else if(gitName.charAt(0) != '@'){
        document.getElementById("error1").innerHTML = "GitHub Name must start with the '@' symbol";
        valid = false;
    }

    // Check whether the full name field is empty
    if(fullName.length == 0){
        document.getElementById("error2").innerHTML = "Full Name field cannot be empty";
        valid = false;
    }

    // Check whether the user uploaded an image
    if (!image) {
        document.getElementById("error4").innerHTML = "Please upload an image";
        valid = false;
    }
    // Check whether the user uploads an image with an extension different from the accepted
    else if (image && !["image/png", "image/jpeg"].includes(image.type)) {
        document.getElementById("error4").innerHTML = "Please upload a PNG or JPEG image";
        valid = false;
    }else if (image.size >= 500 * 1024) { // Check whether the uploaded image is 500 KB or larger
        document.getElementById("error4").innerHTML = "Image must be less than 500 KB";
        valid = false;
    }

    // Check whether the email field is empty
    if(email.length == 0){
        document.getElementById("error3").innerHTML = "This field is required!";
        valid = false;

        console.log("I ran!");
    }

    // Check whether the email follows the expected email format ('some set of characters' followed by the '@' symbol followed by 'a domain'.com)
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        document.getElementById("error3").innerHTML = "Email must include the '@' followed by a domain";
        valid = false;
    }

    // Stop the function if any validation check failed
    if(valid == false){
        return;
    }
    else{
        trueAccount = true;
        // Create a FileReader to read the uploaded image
        let reader = new FileReader();

        // Run this function after the image has been read successfully
        reader.onload = function () {

            // Store the image data so it can be displayed on ticket.html
            sessionStorage.setItem("profilePicture", reader.result);

            // Redirect the user to the ticket page after the image is ready
            window.location.href = "ticket.html";
        };

        // Store the registration details in sessionStorage
        sessionStorage.setItem("fullName", fullName);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("gitName", gitName);
        sessionStorage.setItem("event", document.getElementById("events").value);
        sessionStorage.setItem("existingAccount", trueAccount);

        // Read the uploaded image and convert it into a Data URL
        reader.readAsDataURL(image);
    }

}
