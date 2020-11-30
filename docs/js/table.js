var generalcy = document.getElementsByClassName('generalcy')[1]
if (generalcy) {
    var all_tables = generalcy.getElementsByTagName('table')

    // add some class names for table elements
    for (var i = 0; i < all_tables.length; ++i) {
        var class_name = all_tables[i].getAttribute('class')
        if (! class_name) { // locate empty-class table
            first_table_head = all_tables[i].getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].getElementsByTagName('th')[0]
            first_table_head.className = 'firsthead'
            table_body_rows = all_tables[i].getElementsByTagName('tbody')[0].getElementsByTagName('tr')
            for (var j = 0; j < table_body_rows.length; ++j) {
                first_td_col = table_body_rows[j].getElementsByTagName('td')[0]
                first_td_col.className = 'firstcol'
            }
        }
    }
}