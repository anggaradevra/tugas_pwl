// Jquery
$('.asd').on('click', function(e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    $('html , body , header').animate({
        scrollTop: elemenTujuan.offset().top +100
    });
    
    e.preventDefault();
    });

    // Typed JS
    var typed3 = new Typed('.type', {
        strings: ['MY NAME IS DEVRA ANGGARA', 
        'I AM A MAHASISWA'],
        typeSpeed: 60,
        backSpeed: 60,
        smartBackspace: true, // this is a default
        loop: true
      });
    
    //   var typed4 = new Typed('.type2', {
    //     strings: ['Enter Your Email', 'example@example.com'],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     attr: 'placeholder',
    //     bindInputFocusEvents: true,
    //     loop: true
    //   });