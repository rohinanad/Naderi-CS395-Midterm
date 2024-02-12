document.addEventListener('DOMContentLoaded', function () {
   slideInNameDisplay('name-display');
   slideInNameDisplay('bio');
   slideInProfilePhoto('icon-cont');
   slideInProfilePhoto('profile-photo');
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
function slideInProfilePhoto(elementID) {
    var photoElement = document.getElementById(elementID);

    if (photoElement) {
        photoElement.style.right = '0';
    } else {
        console.error('Element not found');
    }
}