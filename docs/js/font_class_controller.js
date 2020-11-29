var generalcy = document.getElementsByClassName('generalcy')[1]
var font_class_modules = generalcy.getElementsByTagName('font')

function px2rem(px) {
    return String(Number(px) * 0.05) + 'rem'
}

var font_dict = {'cons': 'Consolas-inside', 'inh': 'inherit', 'msf': 'msf', 'mtt': 'mtt'}

for (var i = 0; i < font_class_modules.length; ++i) {
    var class_name = font_class_modules[i].getAttribute('class')
    if (!class_name)
        continue
    var func_elements = class_name.split('_')
    var e0 = func_elements[0].split('%')
    if (e0.length != 2)
        continue
    var func_type = e0[0]
    var func_name = e0[1]
    
    if (func_type == 'c') {
        font_class_modules[i].className = func_name
        if (font_class_modules[i].getElementsByTagName('*').length == 0)
            continue
        // set parameters
        var f_float = 'right'
        var f_margin_left = "0", f_margin_right = "0"
        var f_margin_top = "4", f_margin_bottom = "8"
        var f_margin_top_whole = "4", f_margin_bottom_whole = "8"
        var font = ''


        for (var remain_i = 1; remain_i < func_elements.length; ++remain_i) {
            var keyparam_name = func_elements[remain_i].split('%')[0]
            var nidx = keyparam_name.length + 1
            if (keyparam_name == 'a') {
                var nums = func_elements[remain_i].substring(nidx).split('&')
                f_margin_top_whole = nums[0]
                f_margin_bottom_whole = nums[1]
            } 
            else if (keyparam_name == 'b') {
                var nums = func_elements[remain_i].substring(nidx).split('&')
                f_margin_left = nums[0]
                f_margin_right = nums[1]
                //console.log(f_margin_left, f_margin_right)
            }
            else if (keyparam_name == 'l') {
                f_float = 'left'
                f_margin_right = "6"
            }
            else if (keyparam_name == 'f') {
                font = font_dict[func_elements[remain_i].substring(nidx)]
                if (!font)
                    font = ''
            }
        }
        // injecting
        var new_div = document.createElement("div")
        new_div.style.marginTop = px2rem(f_margin_top_whole)
        new_div.style.marginBottom = px2rem(f_margin_bottom_whole)
        new_div.innerHTML = font_class_modules[i].innerHTML
        font_class_modules[i].innerHTML = ""
        font_class_modules[i].appendChild(new_div)
        var end_div = document.createElement("div")
        end_div.style.clear = "both"
        font_class_modules[i].appendChild(end_div)

        // set float, margin-top, margin-bottom of highlight / highlight table
        var hl = font_class_modules[i].getElementsByClassName('highlighttable')[0]
        var fontbs = []
        
        if (!hl) {
            hl = font_class_modules[i].getElementsByClassName('highlight')[0]
            cb = hl.getElementsByTagName('pre')[0] // notice the button
            fontbs.push(cb.getElementsByTagName('code')[0])
        }
        else {
            cb = hl
            fontbs.push(hl.getElementsByClassName('linenos')[0].getElementsByTagName('pre')[0])
            fontbs.push(hl.getElementsByClassName('highlight')[0].getElementsByTagName('code')[0])
        }
        //console.log(cb)
        hl.style.float = f_float
        hl.style.marginTop = px2rem(f_margin_top)
        hl.style.marginBottom = px2rem(f_margin_bottom)
        cb.style.marginLeft = px2rem(f_margin_left)
        cb.style.marginRight = px2rem(f_margin_right)
        if (font != '')
            for (var bsi = 0; bsi < fontbs.length; ++bsi) {
                fontbs[bsi].style.fontFamily = font       
            }
    }
}