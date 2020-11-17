
function addTag(str, start, len, head, tail) {
    return str.substr(0, start) + head + str.substr(start, len) + tail + str.substr(start + len)
}

var generalcy = document.getElementsByClassName('generalcy')[1]
var ptag = generalcy.getElementsByTagName('p')
var litag = generalcy.getElementsByTagName('li')
var dest_tags = new Array(ptag, litag)

for (var ti = 0; ti < dest_tags.length; ++ti) {
    for (var i = 0; i < dest_tags[ti].length; ++i) {
        if (!dest_tags[ti][i])
            continue;
        var str = dest_tags[ti][i].innerHTML;
        var pattern = new RegExp("(([a-zA-Z0-9])([a-zA-Z0-9]|\\s|\\n)*)|<[a-zA-Z0-9]\\s*[^>]*>(.|\\n)*</[a-zA-Z0-9]*>|((\\$((.|\n)+?)\\$))|(\\$\\$((.|\n)+?)\\$\\$)|<br>|<img.*>","g");
        var result;
        var nstr = str;
        var offset = 0
        var head = "<cy>", tail = "</cy>"
        while ((result = pattern.exec(str)) != null)  {
            if (result[0].substring(0, 1) == '<' || result[0].substring(0, 1) == '$')
                continue;
            var idx = result.index, len = result[0].length;
            var start = idx + offset;
            nstr = addTag(nstr, start, len, head, tail);
            offset += (head.length + tail.length);
        }
        dest_tags[ti][i].innerHTML = nstr;
        // console.log(nstr);
    }
}

var table_margin_classes = generalcy.getElementsByTagName('font')
for (var i = 0; i < table_margin_classes.length; ++i) {
    var class_name = table_margin_classes[i].getAttribute('class')
    if (class_name) {
        var m_numbers = class_name.split(' ')[0]
        var m_patt = new RegExp("^-?\\d+(_-?\\d+)*$", 'g')
        if (! m_patt.test(m_numbers))
            continue
        var margin_table = table_margin_classes[i].getElementsByTagName('table')[0]
        // ← ↑ ↓ →
        if (margin_table) {
            m_numbers_sp = m_numbers.split('_')
            margin_table.style.marginLeft = m_numbers_sp[0] + 'px'
            if (m_numbers_sp.length >= 2)
                margin_table.style.marginTop = m_numbers_sp[1] + 'px'
            if (m_numbers_sp.length >= 3)
                margin_table.style.marginBottom = m_numbers_sp[2] + 'px'
            if (m_numbers_sp.length >= 4)
                margin_table.style.marginRight = m_numbers_sp[3] + 'px'
        }
    }
}

// var str = "是吗\n 你的 slide e 在 mm<ab style=\"ax:10px\"> 的 cd</ab> rr 中 densed a.。 "; 
// var str2 = '是吗 $abcd$ haha $efgh$ $$ abc \n efg asf\n afs$$'
// var pattern = new RegExp("(([a-zA-Z0-9])([a-zA-Z0-9]|\\s|\\n)*)|<[a-zA-Z0-9]\\s*[^>]*>(.|\\n)*</[a-zA-Z0-9]*>|((\\$((.)+?)\\$))|(\\$\\$((.|\n)+?)\\$\\$)","g");
// var result;
// var nstr = str2;
// var offset = 0
// var head = "<hod>", tail = "</hod>"

// //var pattern = new RegExp("\\$", "g");

// while ((result = pattern.exec(str2)) != null)  {
//     if (result[0].substring(0, 1) == '<')
//         continue;
//     var idx = result.index, len = result[0].length;
//     var start = idx + offset;
//     nstr = addTag(nstr, start, len, head, tail);
//     offset += (head.length + tail.length);
//     console.log(result)
// }
// console.log('last')
// console.log(nstr)

