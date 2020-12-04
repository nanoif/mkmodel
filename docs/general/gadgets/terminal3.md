<style>@import url('../../../css/gadgets/termynal.css');</style>

<style>
    body {
        --color-bg: #ddd;
        --color-text: #1a1e24;
        --color-text-subtle: #D76D77;
    }
</style>

<div id="termynal"></div>

<script src="../../../js/gadgets/termynal.js" data-termynal-container="#termynal"></script>
<script>
    var termynal = new Termynal('#termynal', {
    typeDelay: 40,
    lineDelay: 700,
    lineData: [
        { type: 'input', prompt: '▲', value: 'npm uninstall react' },
        { value: 'Are you sure you want to uninstall \'react\'?' },
        { type: 'input',  typeDelay: 1000, prompt: '(y/n)', value: 'y' },
        { type: 'progress', progressChar: '·' },
        { value: 'Uninstalled \'react\'' },
        { type: 'input', prompt:'▲', value: 'node' },
        { type: 'input', prompt: '>', value: `Array(5).fill('🦄 ')` },
        { value: `['🦄', '🦄', '🦄', '🦄', '🦄']` },
        { type: 'input', prompt: '▲', value: 'cd ~/repos' },
        { type: 'input', prompt: '▲ ~/repos', value: ' git checkout branch master' },
        { type: 'input', prompt: '▲ ~/repos (master)', value: 'git commit -m \'Fix things\'' },
    ]
    });
</script>

