document.getElementById('reset-button').addEventListener('click', function() {
    // OK = true 
    // Cancel = false
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

document.getElementById('preview-button').addEventListener('click', function() {
    console.log("hello from the preview function")
    var username = document.getElementById('user-name').value;
    console.log("my username value is " + username);
    var phone = document.getElementById('phone-number').value;
    var email = document.getElementById('email').value;
    
    // conditional statement for radio button
    if (document.getElementById('recommend-yes').checked) {
        recommend = 'Yes';
    } else if (document.getElementById('recommend-maybe').checked) {
        recommend = 'Maybe';
    } else if (document.getElementById('recommend-no').checked) {
        recommend = 'No';
    } else {
        recommend = 'No selection has been made';
    }

    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;
    if (document.getElementById('newsletter').checked) {
        newsletter = 'Yes';
    } else {
        newsletter = 'No';
    }
    
    var previewContent = `
        <p><span class="preview-titles">Name: </span> ${username}</p>
        <p><span class="preview-titles">Phone Number:</span> ${phone}</p>
        <p><span class="preview-titles">Email:</span> ${email}</p>
        <p><span class="preview-titles">Would recommend:</span> ${recommend}</p>
        <p><span class="preview-titles">Rating:</span> ${rating}</p>
        <p><span class="preview-titles">Comments:</span> ${comments}</p>
        <p><span class="preview-titles">Subscribed to newsletter:</span> ${newsletter}</p>
    `;

    document.getElementById('preview-content').innerHTML = previewContent;
    document.getElementById('submit-button').style.display = 'block';
});