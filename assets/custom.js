/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
$(document).ready(function(){
  setTimeout(function(){
    if($('.sort-product-page--swatch-first > .swatches').length === 1){
      const cloneSwatches = $('.sort-product-page--swatch-first > .swatches').clone();
      $('.sort-product-page--swatch-first > .swatches').remove();
      $('.sort-product-page--swatch-first').prepend(cloneSwatches);
    }
    if($('.custom-infinite-options--style-box input[type="radio"]:checked').length){
      $('.custom-infinite-options--style-box input[type="radio"]:checked').parent().addClass('productoptionswatch-label--selected');
    }
  }, 4200);
});

$(document).on('click', '.custom-infinite-options--style-box #infiniteoptions-container input[type="radio"]', function(e){
  if($(this).is(':checked')){
    $(this).parent().parent().find('.productoptionswatch-label--selected').removeClass('productoptionswatch-label--selected');
    $(this).parent().addClass('productoptionswatch-label--selected');
  }
});