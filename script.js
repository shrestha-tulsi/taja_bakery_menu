// Tab functionality
function openCakeCategory(evt, categoryId) {
    // Hide all cake categories
    var categories = document.getElementsByClassName("cake-category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.remove("active");
    }
    
    // Remove active class from all tab buttons
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    // Show the selected category and mark its tab as active
    document.getElementById(categoryId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
    
    // Automatically click the first tab to ensure it's active
    document.getElementsByClassName("tab-button")[0].click();
});
