let filter = $("[data-filter]");

filter.on("click", function(e) {
    e.preventDefault();
    
    let category = $(this).data('filter');

    if (category === "all") {
        $("[data-category]").removeClass("blog-hide");
    } else {
      $("[data-category]").each(function() {
          let curCategory = $(this).data('category');
          
          if(curCategory != category) {
              $(this).addClass('blog-hide');
          } else {
              $(this).removeClass('blog-hide');
          }
      });
    };
});

$('.blog__categoty-container').on('click', function() {
    $('.blog__categoty-container.categoty-active').removeClass('categoty-active');
    $(this).addClass('categoty-active');
})