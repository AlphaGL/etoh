const adminPassword = 'ETOHBEEB'; // Set your secure admin password here

        document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const enteredPassword = document.getElementById('adminPassword').value;
        
            if (enteredPassword === adminPassword) {
                localStorage.setItem('adminLoggedIn', 'true');
                window.location.href = 'etoh.html'; // Redirect to the admin section
            } else {
                alert('Incorrect admin password!');
            }
        });