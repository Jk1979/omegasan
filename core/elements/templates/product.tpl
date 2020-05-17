{extends 'file:templates/layoutprod.tpl'}
{block 'content'}
    {*{$_modx->resource|print}*}
    {include 'file:chunks/productcard.tpl'}
{/block}
