function detectOS() { 
    var sUserAgent = navigator.userAgent; 
    return navigator.platform //+ '-' + navigator.userAgent
} 

var addCssRule = function() {
    // 创建一个 style， 返回其 stylesheet 对象
    function createStyleSheet() {
        var style = document.createElement('style');
        style.type = 'text/css';
        document.head.appendChild(style);
        return style.sheet;
    }
  
    // 创建 stylesheet 对象
    var sheet = createStyleSheet();
  
    // 返回接口函数
    return function(selector, rules, index) {
        index = index || 0;
        sheet.insertRule(selector + "{" + rules + "}", index);
    }
}();

os = detectOS()
console.log(os)
if (os.indexOf('Win') == 0)
{
    addCssRule('.generalcy .linenodiv', 'margin-left: -0.200rem;');
    // line number column
    addCssRule('.generalcy div.linenodiv pre', 'font-family: Consolas; \
                                                font-size: 0.678rem;        \
                                                line-height: 19.78px;          \
                                                margin-bottom: -10px;       \
               '
    );
    // code block
    addCssRule('.generalcy .highlight code', 'font-family: Consolas; \
                                                   font-size: 0.678rem;        \
                                                   line-height: 19.78px;          \
               '
    );
    // comment
    addCssRule('.generalcy .highlight .c1, .generalcy .highlight .cm, .generalcy .highlight .sd, .generalcy .highlight .ch, .generalcy .highlight .cs', 
                                                'color: #9991c4; \
                                                 font-family: Consolas-inside;  \
                                                 font-size: 0.662rem;          \
                                                 font-style: italic; \
                                                 line-height: 2px; \
               '
    );
    // inline code
    addCssRule('.md-typeset p code, .md-typeset li code', 'font-family: Consolas; ')
    // text shadow
    addCssRule('.generalcy', 'text-shadow:0 0 1.5px #ccc !important;')
}
else
{
    addCssRule('.generalcy .linenodiv', 'margin-left: -0.200rem;');
    addCssRule('.generalcy div.linenodiv pre', 'font-family: Monaco-inside; \
                                                font-size: 0.588rem;        \
                                                line-height: 23px;          \
                                                margin-bottom: -10px;       \
               '
    );
    addCssRule('.generalcy .highlight code', 'font-family: Monaco-inside; \
                                                   font-size: 0.588rem;        \
                                                   line-height: 23px;          \
               '
    );
    addCssRule('.generalcy .highlight .c1, .generalcy .highlight .cm, .generalcy .highlight .sd, .generalcy .highlight .ch, .generalcy .highlight .cs', 
                                                'color: #9991c4; \
                                                 font-family: Consolas-inside;  \
                                                 font-size: 0.661rem;          \
                                                 font-style: italic; \
                                                 line-height: 2px; \
               '
    );
    // inline code
    addCssRule('.md-typeset .generalcy p code, .md-typeset .generalcy li code', 'font-family: Monaco-inside; font-size: 0.596rem;')
}

/*
     default setting of code blocks 
*/ 

/* left table of code block */
// .generalcy .linenodiv {
// 	/* margin-top: -0.080rem; */
// 	margin-left: -0.200rem;
// }

// .generalcy div.linenodiv pre {
// 	font-family: Monaco-inside;
// 	font-size: 0.588rem;
//     line-height: 23px; 
//     margin-bottom: -10px; /* why: remaind a little tail at bottom */
// }

// .generalcy .highlighttable code {
// 	font-family: Monaco-inside;
// 	font-size: 0.588rem;
// 	line-height: 23px; 
// }

/* comments */
// .highlight .c1, .highlight .cm, .highlight .sd, .highlight .ch, .highlight .cs {
//     color: #9991c4;
//     font-family: Consolas-inside;
//     font-size: 0.622rem;
//     font-style: italic;
// 	line-height: 2px; 
// }
