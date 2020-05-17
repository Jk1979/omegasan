{extends 'file:templates/layoutprod.tpl'}
{block 'navcatalog'}
    [[$navcatalog? &class_navcat=`container-fluid`]]
{/block}
{block 'content'}
    <h1 class="innerpagetitle">[[*longtitle]] </h1>
    <section class="s-inner">
        [[*content]]
    </section>
{/block}
{block 'scripts'}
    {include 'file:chunks/scripts.tpl'}
{/block}