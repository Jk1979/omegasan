$( document ).ready(function() {
    
    var fadeSpeed             = 200, // Fade Animation Speed
			ajaxCountSelector     = '.ajax-count', // CSS Selector of Items Counter
			ajaxContainerSelector = '.ajax-container', // CSS Selector of Ajax Container
			ajaxItemSelector      = '.ajax-item', // CSS Selector of Ajax Item
			ajaxFormSelector      = '.ajax-form', // CSS Selector of Ajax Filter Form
			ajaxFormButtonStart   = '.ajax-start', // CSS Selector of Button Start Filtering
			ajaxFormButtonReset   = '.ajax-reset', // CSS Selector of Button Reset Ajax Form
			sortDownText          = 'По убыванию',
			sortUpText            = 'По возрастанию';

			$('' + ajaxFormSelector + '').submit(function() {
				return false;
			});

			$(""+ajaxFormSelector+" input[name='brands']").change(function(){
				var brands = ajaxFormSelector+" input[name='brands']:checked";
				var newUri = '';
				var href = window.location.toString().split('?'), 
				    new_href=href[0];
				$(brands).each(function(){
	    				newUri = newUri  + this.value + ',';
				});
				if(newUri)
				{
					newUri = newUri.slice(0, -1);
					new_href = new_href + '?brands=' + newUri;
				}
				
				window.location = new_href;
				
			});
			
	$(function() {
	Sort.sort();
	});		
});



Sort = function()
{
	function sortDrop(){
		jQuery('.sort-list').each(function(){
			jQuery(this).hover(
				function(){
					jQuery(this).addClass('sort-list-hov');
					jQuery(this).find('.sort-drop').show();
				},
				function(){
					jQuery(this).removeClass('sort-list-hov');
					jQuery(this).find('.sort-drop').hide();
				}
			);
		});
	}

	return {
		sort: sortDrop
	}
}();

function SortProducts(value){
	var href = window.location.toString();
	var href_a = href.split('?'), 
	new_href=href_a[0],
	vars = getUrlVars(href);
	vars['sort']= value;
	
	var tmp = [], h='';
	for(var i in vars)
	{
		if (typeof vars[i] != 'undefined')
			tmp.push(i + '=' + vars[i]);
	}
  h = tmp.join('&');
  if(h.length>0) 	new_href +='?'+ h;
  
	window.location = new_href;
}
function getUrlVars(url) { 
// использование:
//_get = getUrlVars();
//a = _get['a'];
    var vars = {}, hash; 
    var hashes = decodeURIComponent(url).slice(url.indexOf('?') + 1).split('&'); 
    for(var i = 0; i < hashes.length; i++) 
    { 
        hash = hashes[i].split('='); 
        vars[hash[0]] = hash[1]; 
    } 
    return vars; 
}
