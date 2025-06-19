// form validation 
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting normally
    
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    
    // validation
    if(name.length < 2) {
        alert('Name must be at least 2 characters');
        return;
    }
    
    if(message.length < 10) {
        alert('Message must be at least 10 characters');
        return;
    }
    
    // If validation passes
    alert('Message sent successfully!');
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});