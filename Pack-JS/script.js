//  validation function
function contactForm(phone) {
    const phoneInput = document.getElementById(contactForm);
    const phoneValue = phone.value;
    
    //  Phone validation 
    const Pattern = /^\d{10}$/;

    if (!Pattern.test(phoneValue)) {
        alert('Invalid Phone Number. Please enter a valid Phone Number.');
        return false; 
    } else {
        alert('Thank you! Your form has been successfully submitted.');
        return true; 
    }
}