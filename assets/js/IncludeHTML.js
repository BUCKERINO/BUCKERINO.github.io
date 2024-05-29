// Function to include HTML content
function includeHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        });
}

// Include doodle
includeHTML('doodle.html', 'doodle');
