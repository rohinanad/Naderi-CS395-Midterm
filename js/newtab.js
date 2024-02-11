document.addEventListener('DOMContentLoaded', function () {
   slideInNameDisplay();
});

function slideInNameDisplay() {
    var nameDisplayElement = document.getElementById('name-display');

    if (nameDisplayElement) {
        // Add a class to trigger the sliding animation
        nameDisplayElement.style.left = '0';
    } else {
        console.error('Element not found');
    }
}
function slideInProfilePhoto() {
    var nameDisplayElement = document.getElementById('profile-photo');

    if (nameDisplayElement) {
        // Add a class to trigger the sliding animation
        nameDisplayElement.style.right = '0';
    } else {
        console.error('Element not found');
    }
}