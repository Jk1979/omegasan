{extends 'file:templates/layout.tpl'}
{block 'navcatalog'}
    [[$navcatalog? &class_navcat=`container-fluid`]]
{/block}
{block 'content'}
    <div class="container-fluid">

        <h1 class="innerpagetitle">[[*longtitle]] </h1>
        <section class="s-inner">
            <div class="row main-content">
                [[*content]]
                [[!pdoPage?
                &element=`pdoResources`
                &parents=`6`
                &depth=`0`
                &tpl=`workTpl`
                &tplPageWrapper=`@INLINE <div><ul class="pagination pagination-sm">[[+first]][[+prev]][[+pages]][[+next]][[+last]]</ul></div>`
                &sortby=`menuindex`
                &limit=`9`
                &sortdir=`ASC`

                ]]
                [[!page.nav]]
                <div class="clearfix"></div>
                <div>

                    <h2>Некоторые фотографии наших работ</h2>
                    [[$ourworks]]
                </div>
            </div>
        </section>
    </div>
{/block}