{extends 'file:templates/layoutprod.tpl'}
{block 'crumbs'}{/block}
{block 'content'}

        <div class="row main-content msearch2" id="mse2_mfilter">
            [[!mFilter2?
            &element=`msProducts`
            &paginator=`pdoPage`
            &class=`msProduct`
            &limit=`3`
            &parents=`[[*id]]`
            &tpls=`productsgridTpl`
            &tplOuter=`cat_mfilter2_outer`
            &aliases=`
            ms|price==price,
            ms|vendor==vendor
            `
            &filters=`
            ms|price:number,
            ms|vendor:vendors
            `
            &sort=`
            ms_product|pagetitle:asc,
            ms_product|publishedon:asc,
            ms_product|createdby:desc,
            ms|price:asc,
            ms_vendor|name:desc
            `
            &tplFilter.outer.vendor=`cat_mfilter2_fieldset_outer`
            &tplFilter.row.vendor=`cat_mfilter2_checkbox`
            &tplFilter.outer.price=`tpl.mFilter2.filter.slider`
            &tplFilter.row.price=`tpl.mFilter2.filter.number`
            ]]
        </div>

{/block}


{block 'scripts'}
    {include 'file:chunks/scripts.tpl'}
{/block}

