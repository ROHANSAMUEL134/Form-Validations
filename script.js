//Confirm Password match
document.getElementById('confirm_password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    if (password !== confirmPassword) {
        this.setCustomValidity('Passwords do not match.');
    } else {
        this.setCustomValidity('');
    }
});