function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function() {
    var scrollHeight, totalHeight, scrollY;
    
    scrollHeight = document.body.scrollHeight; // Height of the entire document
    totalHeight = window.scrollY + window.innerHeight; // Y position from top + browser height
    scrollY = window.scrollY;

    // Display button if user has scrolled past 500px from the top of the page
    if (scrollY > 500 || totalHeight >= scrollHeight) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }

    
};
