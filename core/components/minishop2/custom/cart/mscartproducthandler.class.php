<?php
class msCartProductHandler extends msCartHandler {
    
    public function status($data = array())
    {
        $status = array(
            'total_count' => 0,
            'total_cost' => 0,
            'total_weight' => 0,
            'prods' => $this->getProducts()
        );
        foreach ($this->cart as $item) {
            if (empty($item['ctx']) || $item['ctx'] == $this->ctx) {
                $status['total_count'] += $item['count'];
                $status['total_cost'] += $item['price'] * $item['count'];
                $status['total_weight'] += $item['weight'] * $item['count'];
            }
        }

        return array_merge($data, $status);
    }

    

    public function getProducts($cart) {
        $products = '';
        $cart = $this->get();
         
        
        $products = array();
        foreach ($cart as $k => $v) {           
            $product = $this->modx->getObject('msProduct', $v['id']);
            $row['id'] = $product->get(id);
            $row['key'] = $k;
            $row['count'] = $v['count'];
            $row['pagetitle'] = $product->get('pagetitle');
            $row['old_price'] = $this->ms2->formatPrice(
                $row['price'] != $v['price']
                    ? $row['price']
                    : $row['old_price']
            );
            $row['price'] = $this->ms2->formatPrice($v['price']);
            $row['weight'] = $this->ms2->formatWeight($v['weight']);
            $row['cost'] = $this->ms2->formatPrice($v['count'] * $v['price']);

            if (!empty($v['options']) && is_array($v['options'])) {
                foreach ($v['options'] as $key => $value) {
                    $row['option.'.$key] = $value;
                }
            }
            unset($v['options']);

            
           $products[]=$row; 
        }       
        
        
        return json_encode($products);
    } 
   /* public function getProducts($cart) {
        $products = '';
        $cart = $this->get();
        
        if (!$this->modx->loadClass('pdofetch', MODX_CORE_PATH . 'components/pdotools/model/pdotools/', false, true)) {return false;}
        $pdoFetch = new pdoFetch($this->modx, $scriptProperties);

        $tplOuter = 'msCartOuter';
        $tplRow = 'msCartRow';      
        
        $products = array('goods' => '', 'total_count' => 0, 'total_weight' => 0, 'total_cost' => 0);
        foreach ($cart as $k => $v) {           
            $product = $this->modx->getObject('msProduct', $v['id']);
            $row['id'] = $product->get(id);
            $row['key'] = $k;
            $row['count'] = $v['count'];
            $row['pagetitle'] = $product->get('pagetitle');
            $row['old_price'] = $this->ms2->formatPrice(
                $row['price'] != $v['price']
                    ? $row['price']
                    : $row['old_price']
            );
            $row['price'] = $this->ms2->formatPrice($v['price']);
            $row['weight'] = $this->ms2->formatWeight($v['weight']);
            $row['cost'] = $this->ms2->formatPrice($v['count'] * $v['price']);

            if (!empty($v['options']) && is_array($v['options'])) {
                foreach ($v['options'] as $key => $value) {
                    $row['option.'.$key] = $value;
                }
            }
            unset($v['options']);

            $row['idx'] = $pdoFetch->idx++; 
            $products['goods'] .= empty($tplRow)
                ? $pdoFetch->getChunk('', $row)
                : $pdoFetch->getChunk($tplRow, $row, $pdoFetch->config['fastMode']);
            $products['total_count'] += $v['count'];
            $products['total_cost'] +=  $v['count'] * $v['price'];
            $products['total_weight'] += $v['count'] * $v['weight'];
            
        }       
        
        $products['total_cost'] = $this->ms2->formatPrice($products['total_cost']);
        $products['total_weight'] = $this->ms2->formatWeight($products['total_weight']);

        return empty($tplOuter)
            ? $pdoFetch->getChunk('', $products)
            : $pdoFetch->getChunk($tplOuter, $products, $pdoFetch->config['fastMode']);
    }  */ 
    
}