## When set up a new site:

#### set color scheme

- make a scheme and adjust color in `general.css`
- set the scheme in `themes - palette`

#### change icons

- if used navigation.tabs, and need to change icons when changing tab
    - set `tabs.changeicon` in `features`
    - set `tab name <-> icon name` mapping below (`home` is occupied and must be set)
- else
    - set in `icon - logo`
- some icons sites
    - https://www.flaticon.com/
    - https://www.iconfinder.com/
    - https://thenounproject.com/
    - https://icons8.com/icons/

#### code blocks

- make a new one:  `extra/code-blocks.css`
- change the `line-height` for the main language cb of this site will use:
    -  `code_style.js` for __Win__ and __Others__
- supported language: https://pygments.org/languages/
    - concrete names: https://pygments.org/docs/lexers/
- set interal `<blockquote>` style 

#### word wrap

- `word-break: break-all;`
- `word-wrap: break-word; overflow: hidden;`

#### blockquote text

- set tag for text in blockquotes in `font.js` (default: `<p>`)


## Subset Font SourceHan Automatically

#### install dependency

https://github.com/fonttools/fonttools

```pip
pip install fonttools

# if woff2 is activated:
pip install brotli
```
#### set git hook

in `pre-commit`
```
#!/bin/bash
python ./utils/extract_chinese.py
git add -f *
```