document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElements = document.querySelectorAll('.text-muted');
    const defaultLastUpdatedTime = new Date(document.lastModified);

    lastUpdatedElements.forEach(element => {
        // Get the last modified time from data attribute or use document's last modified time as fallback
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

    console.log(lastUpdatedElements);
});
