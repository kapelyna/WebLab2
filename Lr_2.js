

function generateTable() {
    const rowCount = parseInt(document.getElementById("rowCount").value);
    const colCount = parseInt(document.getElementById("colCount").value);
    const table = document.getElementById("myTable");
    
    // Очищаємо попередню таблицю
    table.innerHTML = "";

    for (let i = 1; i <= rowCount; i++) {
        const row = table.insertRow(i - 1);
        for (let j = 1; j <= colCount; j++) {
            const cell = row.insertCell(j - 1);
            const value = -5 * i + 3 * j;
            cell.innerHTML = value;
        }
    }
}
function countSameRowCol(){
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        sum += parseInt(cells[i].textContent);;
    }
    alert(`Сума елементів, порядковий номер рядка та стовпця яких співпадають: ${sum}`);
}