{extends 'file:templates/layout.tpl'}
{block 'navcatalog'}
    [[$navcatalog? &class_navcat=`container-fluid`]]
{/block}
{block 'content'}
    <div class="container-fluid">

        <h1 class="innerpagetitle">[[*longtitle:default=`[[*pagetitle]]`]] </h1>
        <section class="s-midwide">
            <div class="row main-content">
                [[*content]]
                <div class="ourworks">
                    <div class="ourworksImages">
                        [[getImageList?
                        &tvname=`gallery`
                        &tpl=`ourworksItem`
                        &docid=`[[*id]]`
                        ]]
                    </div>
                </div>
            </div>
        </section>
    </div>
{/block}
