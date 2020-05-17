<div class="row">
    <div class="span5 col-md-5">
        [[msGallery?
        &tplOuter=`prodGalleryOuter`
        &tplRow=`prodGalleryrow`
        ]]
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12 prod-info-wraper">
        <form class="form-horizontal ms2_form" method="post">
            <input type="hidden" name="id" value="[[*id]]" />
            <p class="prod-code">Код товара: [[+article]]</p>
            [[!+old_price:gt=`0`:then=`<div class="prod_price"><span class="prod-price-old">[[+old_price]] [[%ms2_frontend_currency]]</span></div>`:else=``]]
            <div class="prod_price">
                <span class="prod-price-c">[[!+price]]</span>
                <span class="prod-price-u">[[%ms2_frontend_currency]]</span>
            </div>
            <div class="prod-count">
                <span class="count-span">[[%ms2_cart_count]]:</span>
                <input type="number" name="count" id="product_price" class="input-sm form-control" value="1" />
                [[%ms2_frontend_count_unit]]
            </div>
            <div class="prod-options">
                [[+made_in:isnot=``:then=`<p><span>[[%ms2_product_made_in]]: </span>[[+made_in]]</p>`:else=``]]
                <p><span>Производитель: </span>[[+vendor.name]]</p>
                [[+power:isnot=``:then=`<p><span>Мощность: </span>[[+power]]</p>`:else=``]]
                [[!msOptions?name=`color`]]
                [[!msOptions?name=`size`]]
            </div>
            <button type="submit" class="button" name="ms2_action" value="cart/add">Купить</button>
        </form>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <div class="prod-info" id='tabs_1'>
            <ul class="prod-tab">
                <li class="selected">Описание</li>
                <li>Доставка и оплата</li>
            </ul>
            <div class="prod-info-box" id='tabs_1_content'>
                <div class="prod-desc text" style="display:block">
                    [[*content]]
                </div>
                <div class="prod-desc text" style="display:none">
                    <h3>Доставка и оплата</h3>
                    <p class="delivery-details">
                        Доставка осуществляется курьером по Киеву, и перевозчиком "Новая почта" по всей Украине.
                    <ul>
                        <li>- доставка осуществляется на следующий день после оформления заказа</li>
                        <li>- доставка производится до парадного без выгрузки</li>
                        <li>- стоимость выгрузки и заноса товара оговаривается с менеджером</li>
                    </ul>
                    </p>
                    <h3>Способы оплаты</h3>
                    <p class="pay-details">
                    <ul>
                        <li>Наличными курьеру при получении товара (Киев, Киевская обл.). Для заказного товара необходима полная&nbsp;предоплата.</li>
                        <li>Переводом на карту ПриватБанка.</li>
                        <li>Безналичная оплата с НДС.</li>
                        <li>Оплата на расчетный счет.</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>