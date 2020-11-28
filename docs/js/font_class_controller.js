var generalcy = document.getElementsByClassName('generalcy')[1]
var font_class_modules = generalcy.getElementsByTagName('font')

function px2rem(px) {
    return String(Number(px) * 0.05) + 'rem'
}

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
        if (func_elements.length >= 2)
            if (func_elements[1] == 'l')
                f_float = 'left'
        var f_margin_left = "0", f_margin_right = "0"
        var f_margin_top = "4", f_margin_bottom = "8"
        var f_margin_top_whole = "4", f_margin_bottom_whole = "8"
        if (f_float == 'left')
            f_margin_right = "6"

        for (var remain_i = 1; remain_i < func_elements.length; ++remain_i) {
            if (func_elements[remain_i][0] == 'a') {
                var nums = func_elements[remain_i].substring(1).split('&')
                f_margin_top_whole = nums[0]
                f_margin_bottom_whole = nums[1]
            } 
            else if (func_elements[remain_i][0] == 'b') {
                var nums = func_elements[remain_i].substring(1).split('&')
                f_margin_left = nums[0]
                f_margin_right = nums[1]
                //console.log(f_margin_left, f_margin_right)
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
        
        if (!hl) {
            hl = font_class_modules[i].getElementsByClassName('highlight')[0]
            cb = hl.getElementsByTagName('pre')[0] // notice the button
        }
        else {
            cb = hl
        }
        //console.log(cb)
        hl.style.float = f_float
        hl.style.marginTop = px2rem(f_margin_top)
        hl.style.marginBottom = px2rem(f_margin_bottom)
        cb.style.marginLeft = px2rem(f_margin_left)
        cb.style.marginRight = px2rem(f_margin_right)
    }
}