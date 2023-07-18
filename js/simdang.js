(function($, window, document){

    const simdang= {
        init(){
            this.section6();
        },
        section6(){

            $('.product').stop().fadeOut(0);
            $('.product').eq(0).stop().fadeIn(0);

            $('.post-btn').each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        $('.product').stop().fadeOut(0);
                        $('.product').eq(idx).stop().fadeIn(600);
                    }
                }) 
            })
        }
    }
    simdang.init();
})(jQuery, window, document);