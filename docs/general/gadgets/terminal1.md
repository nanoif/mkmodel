

<style>@import url('../../../css/gadgets/termynal.css');</style>
<style>
    /* body {
        padding: 0; margin: 0;
        background: #1a1e24;
        width: 100%;
        min-height: 100vh;
        display: -webkit-box; display: -ms-flexbox; display: flex;
        -webkit-box-align: center; -ms-flex-align: center; align-items: center;
        -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center;
        -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    } */
</style>


<!-- the termynal container -->
<div id="termynal" data-termynal>
    <span data-ty="input">pip install spacy</span>
    <span data-ty="progress"></span>
    <span data-ty>Successfully installed spacy</span>
    <span data-ty></span>
    <span data-ty="input">python -m spacy download en</span>
    <span data-ty="progress"></span>
    <span data-ty>Installed model 'en'</span>
    <span data-ty></span>
    <span data-ty="input">python</span>
    <span data-ty="input" data-ty-prompt=">>>">import spacy</span>
    <span data-ty="input" data-ty-prompt=">>>">nlp = spacy.load('en')</span>
    <span data-ty="input" data-ty-prompt=">>>">doc = nlp(u'Hello world')</span>
    <span data-ty="input" data-ty-prompt=">>>">print([(w.text, w.pos_) for w in doc])</span>
    <span data-ty>[('Hello', 'INTJ'), ('world', 'NOUN')]</span>
</div>

<!-- include and initialise termynal.js -->
<script src="../../../js/gadgets/termynal.js" data-termynal-container="#termynal"></script>

