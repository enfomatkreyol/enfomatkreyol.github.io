const scriptURL = 'https://script.google.com/macros/s/AKfycbxS0HLzRsScc9no3-dU5SVzdXtH4vMxndUyFjyGEwCQSdDmlQHMFcEagj35hQDuMXfq5g/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("myForm").style.display = "none")
    .then(response => window.location = document.getElementById('lien'))
    .then(response => document.getElementById('none').value = '')
    .then(response => document.getElementById('phone').value = '')
    .catch(error => console.error('Error!', error.message))
 
}); 

function openForm() {
    document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }