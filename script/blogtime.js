// Function to update last modified time
function updateLastModifiedTime(element) {
    const lastUpdatedTime = new Date();
    const timeDiff = (new Date() - lastUpdatedTime) / 1000; // in seconds
    const minutes = Math.floor(timeDiff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) {
        element.textContent = `Last updated just now`;
    } else if (minutes < 60) {
        element.textContent = `Last updated ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        element.textContent = `Last updated ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        element.textContent = `Last updated ${days} day${days > 1 ? 's' : ''} ago`;
    }
    element.setAttribute('data-last-modified', lastUpdatedTime.toISOString());
}

// Update last modified time on card change
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElements = document.querySelectorAll('.text-muted');
    const cards = document.querySelectorAll('.card'); // Assuming .card is the class for card elements

    // Initialize last modified time
    lastUpdatedElements.forEach(element => {
        const lastModifiedStr = element.getAttribute('data-last-modified') || document.lastModified;
        const lastUpdatedTime = new Date(lastModifiedStr);
        const timeDiff = (new Date() - lastUpdatedTime) / 1000; // in seconds
        const minutes = Math.floor(timeDiff / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (minutes < 1) {
            element.textContent = `Last updated just now`;
        } else if (minutes < 60) {
            element.textContent = `Last updated ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            element.textContent = `Last updated ${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            element.textContent = `Last updated ${days} day${days > 1 ? 's' : ''} ago`;
        }
    });

    // Update last modified time when card content changes
    cards.forEach(card => {
        // Assuming you're updating card content using some method, you can call updateLastModifiedTime function
        // For example, if you're using a button to save changes
        const saveButton = card.querySelector('.save-button'); // Replace with actual selector
        saveButton.addEventListener('click', function() {
            const lastUpdatedElement = card.querySelector('.text-muted'); // Assuming .text-muted is inside the card
            updateLastModifiedTime(lastUpdatedElement);
        });
    });
});
