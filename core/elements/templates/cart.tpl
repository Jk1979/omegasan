{extends 'file:templates/layoutprod.tpl'}
{block 'content'}
    <h1 class="innerpagetitle">[[*longtitle]] </h1>
    <section class="s-inner">
        [[!msCart?
        &tpl=`cat_msCart`

        ]]
        [[!msOrder?
        &tplOuter=`Orderouter`
        &tplPayment=`Orderpayment`
        &tplDelivery=`Orderdelivery`
        &tplSuccess=`Ordersuccess`
        ]]
    </section>
{/block}
{block 'scripts'}
    {include 'file:chunks/scripts.tpl'}
{/block}