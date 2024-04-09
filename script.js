let items = []; // To store the item names

function addItems() {
    const itemInput = document.getElementById('itemInput');
    const inputItems = itemInput.value.split('\n'); // Split input by new lines

    inputItems.forEach(item => {
        if (item.trim() !== '') {
            items.push(item.trim()); // Add non-empty items
        }
    });

    itemInput.value = ''; // Clear input field after adding
    itemInput.focus(); // Put the focus back to the input field
}

function generateTable() {
    const container = document.getElementById('tableContainer');
    container.innerHTML = ''; // Clear previous table if any

    if (items.length > 0) {
        const table = document.createElement('table');
        items.forEach((item, index) => {
            const row = table.insertRow();
            const cellNumber = row.insertCell(0);
            const cellItem = row.insertCell(1);
            cellNumber.innerHTML = index + 1 + '.';
            cellItem.innerHTML = item;
        });
        container.appendChild(table);
    }
}

function exportItemsToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    items.forEach((item, index) => {
        csvContent += `${index + 1}, ${item}\n`; // CSV format
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dd_table_items.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
