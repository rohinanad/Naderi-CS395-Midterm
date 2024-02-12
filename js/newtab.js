document.addEventListener('DOMContentLoaded', function () {
   slideInNameDisplay('name-display');
   slideInNameDisplay('bio');
   slideInNameDisplay('about-me');
   slideInProfilePhoto();
});

function slideInNameDisplay(elementID) {
    var nameDisplayElement = document.getElementById(elementID);

    if (nameDisplayElement) {
        // Add a class to trigger the sliding animation
        nameDisplayElement.style.left = '0';
    } else {
        console.error('Element not found');
    }
}
function slideInProfilePhoto() {
    var photoElement = document.getElementById('profile-photo');

    if (photoElement) {
        photoElement.style.right = '0';
    } else {
        console.error('Element not found');
    }
}