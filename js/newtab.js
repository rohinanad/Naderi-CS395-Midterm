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
function displayResume() {
    var pdfPath = 'assets/Rohina_Naderi_Resume.pdf';
  
    window.open(pdfPath, '_blank');
  }
  function goToAnotherPage(name) {
    window.location.href = name;
  }
  function openLink(link) {
    window.open(link, '_blank');
  }
  function goHome() {
    window.location.href = '../newtab.html';
  }