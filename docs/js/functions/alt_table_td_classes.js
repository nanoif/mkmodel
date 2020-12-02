export function alterTableTdClasses(startBlock) {
    let allTables = startBlock.getElementsByTagName('table');

    for (let i = 0; i < allTables.length; ++i) {
        var className = allTables[i].getAttribute('class')
        if (className) { // locate empty-class table
            continue;
        }
        
        var firstTableHead = allTables[i].getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].getElementsByTagName('th')[0]
        firstTableHead.className = 'firsthead'
        var tableBodyRows = allTables[i].getElementsByTagName('tbody')[0].getElementsByTagName('tr')
        for (var j = 0; j < tableBodyRows.length; ++j) {
            var firstTdCol = tableBodyRows[j].getElementsByTagName('td')[0]
            firstTdCol.className = 'firstcol'
        }
    }
}