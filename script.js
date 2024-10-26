const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Function to handle pagination click events
function setupPagination() {
    const paginationLinks = document.querySelectorAll('#pagination a'); // Select all links within the pagination section
    paginationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetPage = this.getAttribute('href'); // Get the target page from href

            // Show a loading message or spinner
            const loadingMessage = document.createElement('div');
            loadingMessage.innerText = 'Loading...'; // Customize your loading message
            loadingMessage.style.position = 'fixed';
            loadingMessage.style.top = '50%';
            loadingMessage.style.left = '50%';
            loadingMessage.style.transform = 'translate(-50%, -50%)';
            loadingMessage.style.zIndex = '9999'; // Bring it to front
            document.body.appendChild(loadingMessage);

            // Navigate to the target page
            window.location.href = targetPage; // Navigate to the target page
        });
    });
}

// Call the setupPagination function when the document is ready
document.addEventListener('DOMContentLoaded', setupPagination);
