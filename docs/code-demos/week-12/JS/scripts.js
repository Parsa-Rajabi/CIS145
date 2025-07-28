// JavaScript code for the form demo 
// This code will handle the form submission, reset, and preview functionality
// We will use event listeners to handle the button clicks and form submission
// We will also use console.log to print out values to the browser console for debugging purposes

document.getElementById('reset-button').addEventListener('click', function() {
    // OK = true 
    // Cancel = false
    // we can use console.logs to print out values to the browser console which can help us debug our code, especially when working with conditionals
    // console.log("Checking to see if the confirm pop-up is true/false", confirm('Are you sure you want to reset the form?'));
    if (confirm('Are you sure you want to reset the form?')) {
        console.log("The user has said OK, we are now processing the reset form")
        document.getElementById('feedback-form').reset();
        document.getElementById('preview-content').innerHTML = '';
        document.getElementById('submit-button').style.display = 'none';
        console.log("we have reset the form and the preview section, ready to display alert")
        alert('The form has been reset.');
    } else {
        // nothing will happen
    }
});

// Event listener for the preview button   
// This function will gather the form data and display it in the preview section
document.getElementById('preview-button').addEventListener('click', function() {
    console.log("hello from the preview function")
    // Declare variables to hold the values 
    // We can use let or const instead of var, but for this demo we will use var
    var username = document.getElementById("user-name").value;
    console.log("my username value is " + username);
    var phone = document.getElementById('phone-number').value;
    var email = document.getElementById('email').value;
    
    // conditional statement for radio buttons. 
    if (document.getElementById("recommend-yes").checked) {
        // if the radio button with id recommend-yes is checked, then we will set the variable recommend to Yes
        recommend = 'Yes';
    } else if (document.getElementById('recommend-maybe').checked) {
        // if the radio button with id recommend-maybe is checked, then we will set the variable recommend to Maybe
        recommend = 'Maybe';
    } else if (document.getElementById('recommend-no').checked) {
        // if the radio button with id recommend-no is checked, then we will set the variable recommend to No
        recommend = 'No';
    } else {
        // if no radio button is checked, we will set the variable recommend to No selection has been made
        recommend = 'No selection has been made';
    }

    // Get the value of the rating select element
    // We can use the value property to get the selected option's value
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;
    // Check if the newsletter checkbox is checked
    // If it is checked, we will set the variable newsletter to Yes, otherwise No
    if (document.getElementById('newsletter').checked) {
        newsletter = 'Yes';
    } else {
        newsletter = 'No';
    }
    
    // Create the preview content using template literals
    // Template literals allow us to embed expressions inside a string using ${expression}
    // We can also use backticks (`) to create multi-line strings
    // This is a more modern way to create strings in JavaScript
    // We will use the variables we declared above to create the preview content
    var formContent = `
        <p><span class="preview-titles">Name: </span> ${username}</p>
        <p><span class="preview-titles">Phone Number:</span> ${phone}</p>
        <p><span class="preview-titles">Email:</span> ${email}</p>
        <p><span class="preview-titles">Would recommend:</span> ${recommend}</p>
        <p><span class="preview-titles">Rating:</span> ${rating}</p>
        <p><span class="preview-titles">Comments:</span> ${comments}</p>
        <p><span class="preview-titles">Subscribed to newsletter:</span> ${newsletter}</p>
    `;

    // Display the preview content in the preview section 
    // We will use the innerHTML property to set the content of the preview section
    // This will replace the existing content of the preview section with the new content
    // We will also display the submit button
    // We will use the style property to set the display property of the submit button to block
    // This will make the submit button visible
    document.getElementById('preview-content').innerHTML = formContent;
    document.getElementById('submit-button').style.display = 'block';
});