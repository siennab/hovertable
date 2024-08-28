document.addEventListener('DOMContentLoaded', () => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error loading data:', error));
});

function populateTable(data) {
    const tableBody = document.querySelector('#dataTable tbody');
    const headers = ['Name', 'Age', 'Email', 'Phone'];
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="${headers[0]}">${item.name}</td>
            <td data-label="${headers[1]}">${item.age}</td>
            <td class="hidden-cell" data-label="${headers[2]}">${item.email}</td>
            <td class="hidden-cell" data-label="${headers[3]}">${item.phone}</td>
        `;
        tableBody.appendChild(row);
    });

    // Remove hover event listeners as we're handling it in CSS now
}