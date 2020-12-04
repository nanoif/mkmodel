<style>@import url('../../../css/gadgets/termynal.css');</style>

<style>
    body {
        --color-bg: #ddd;
        --color-text: #1a1e24;
        --color-text-subtle: #D76D77;
    }
</style>

<div id="termynal" data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700">
    <span data-ty="input" data-ty-prompt="▲">npm uninstall react</span>
    <span data-ty>Are you sure you want to uninstall 'react'?</span>
    <span data-ty="input" data-ty-typeDelay="1000" data-ty-prompt="(y/n)">y</span>
    <span data-ty="progress" data-ty-progressChar="·"></span>
    <span data-ty>Uninstalled 'react'</span>
    <span data-ty="input" data-ty-prompt="▲">node</span>
    <span data-ty="input" data-ty-prompt=">">Array(5).fill('🦄 ')</span>
    <span data-ty>['🦄', '🦄', '🦄', '🦄', '🦄']</span>
    <span data-ty="input" data-ty-prompt="▲">cd ~/repos</span>
    <span data-ty="input" data-ty-prompt="▲ ~/repos"> git checkout branch master</span>
    <span data-ty="input" data-ty-prompt="▲ ~/repos (master)">git commit -m "Fix things"</span>
</div>

<!-- include and initialise termynal.js -->

<script src="../../../js/gadgets/termynal.js" data-termynal-container="#termynal"></script>
