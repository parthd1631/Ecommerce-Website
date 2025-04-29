(function($) {
    "use strict";

    new WOW().init();

    //navbar cart
    $(".cart_link > a").on("click", function() {
        $(".mini_cart").addClass("active");
    });

    $(".mini_cart_close > a").on("click", function() {
        $(".mini_cart").removeClass("active");
    });

    //sticky navbar
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if(scroll<100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });




    //background image 

    function dataBackgroundImage() {
        $("[data-bgimg]").each(function () {
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image" : "url(" + bgImgUrl + ")", // concatenation
            });
        });
    }

    $(window).on("load", function() {
        dataBackgroundImage();
    });

    // for carousel slider of the slider section

    $(".slider_area").owlCarousel( {
        animateOut : "fadeOut", 
        autoplay: true, 
        loop: true, 
        nav: false, 
        autoplayTimeout : 4000, 
        items: 1, 
        dots: true,
    });



    //product column responsive 

    $(".product_column3").slick({
        centerMode: true,
        centerPadding : "0", 
        slidesToShow : 5, 
        arrows: true, 
        rows: 2, 
        prevArrow :
        '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>', 
        nextArrow:
        '<button class="next_arrow"><i class="ion-chevron-right"></i></button>', 
        responsive: [
            {
                breakpoints: 400, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },

            {
                breakpoints: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                },
            },

            {
                breakpoints: 992, 
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 3,
                },
            },

            {
                breakpoints: 1200, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 4,
                },
            },
        ],
    });


    //for tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //tooltip active 
    $(".action_links ul li a, .quick_button a").tooltip({
        animated: "fade",
        placement: "top", 
        container: "body",
    });

    //product row activation responsive 
    $(".product_row1").slick({
        centerMode: true,
        centerPadding : "0", 
        slidesToShow : 5, 
        arrows: true, 
        prevArrow :
        '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>', 
        nextArrow:
        '<button class="next_arrow"><i class="ion-chevron-right"></i></button>', 
        responsive: [
            {
                breakpoints: 400, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },

            {
                breakpoints: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                },
            },

            {
                breakpoints: 992, 
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 3,
                },
            },

            {
                breakpoints: 1200, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 4,
                },
            },
        ],
    });


    //blog section 

    $(".blog_column3").owlCarousel({
        autoplay: true,
        loop: true, 
        nav: true,
        autoplayTimeout: 5000, 
        items: 3, 
        dots: false, 
        margin: 30, 
        navText: [
            '<i class="ion-chevron-left"></i>',
            '<i class="ion-chevron-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1, 
            },
            768: {
                items: 2, 
            },
            992: {
                items: 3, 
            },
        },

    }); 


    // Language and Currency Switching
    let currentLanguage = 'en';
    let currentCurrency = 'USD';
    const exchangeRate = 83.5; // 1 USD = 83.5 INR (example rate)

    // Language translations
    const translations = {
        en: {
            'My Account': 'My Account',
            'Checkout': 'Checkout',
            'Shopping Cart': 'Shopping Cart',
            'Wishlist': 'Wishlist',
            'Add to Cart': 'Add to Cart',
            'View Cart': 'View Cart',
            'Subtotal': 'Subtotal',
            'Search Product': 'Search Product',
            'Category': 'Category',
            'About Us': 'About Us',
            'Special Collection': 'Special Collection',
            'Men': 'Men',
            'Women': 'Women',
            'Other': 'Other',
            'Earrings': 'Earrings',
            'Pendants': 'Pendants',
            'Rings': 'Rings',
            'Chains': 'Chains',
            'Bangles': 'Bangles',
            'Bracelets': 'Bracelets',
            'Gemstones': 'Gemstones',
            'Platinum': 'Platinum',
            'Silver': 'Silver',
            'Diamonds': 'Diamonds',
            'Coins': 'Coins',
            'Gift Card': 'Gift Card'
        },
        hi: {
            'My Account': 'मेरा खाता',
            'Checkout': 'चेकआउट',
            'Shopping Cart': 'खरीदारी की टोकरी',
            'Wishlist': 'इच्छा सूची',
            'Add to Cart': 'कार्ट में जोड़ें',
            'View Cart': 'कार्ट देखें',
            'Subtotal': 'उप-योग',
            'Search Product': 'उत्पाद खोजें',
            'Category': 'श्रेणी',
            'About Us': 'हमारे बारे में',
            'Special Collection': 'विशेष संग्रह',
            'Men': 'पुरुष',
            'Women': 'महिला',
            'Other': 'अन्य',
            'Earrings': 'कान की बाली',
            'Pendants': 'लॉकेट',
            'Rings': 'अंगूठी',
            'Chains': 'चेन',
            'Bangles': 'चूड़ियाँ',
            'Bracelets': 'कंगन',
            'Gemstones': 'रत्न',
            'Platinum': 'प्लैटिनम',
            'Silver': 'चांदी',
            'Diamonds': 'हीरे',
            'Coins': 'सिक्के',
            'Gift Card': 'उपहार कार्ड'
        }
    };

    // Function to update prices based on currency
    function updatePrices() {
        $('.price_box span, .cart_text_quantity, .price_cart').each(function() {
            const priceText = $(this).text();
            const priceValue = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            
            if (currentCurrency === 'INR') {
                const inrPrice = (priceValue * exchangeRate).toFixed(2);
                $(this).text(`₹${inrPrice}`);
            } else {
                $(this).text(`$${priceValue.toFixed(2)}`);
            }
        });
    }

    // Function to update text based on language
    function updateLanguage() {
        $('[data-translate]').each(function() {
            const key = $(this).attr('data-translate');
            if (translations[currentLanguage][key]) {
                $(this).text(translations[currentLanguage][key]);
            }
        });
    }

    // Global functions for direct onclick handling
    function switchLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
        $('.language a:first').text(currentLanguage === 'en' ? 'English' : 'हिंदी');
        updateLanguage();
        console.log("Language switched to: " + currentLanguage);
    }

    function switchCurrency() {
        currentCurrency = currentCurrency === 'USD' ? 'INR' : 'USD';
        $('.currency a:first').text(currentCurrency);
        updatePrices();
        console.log("Currency switched to: " + currentCurrency);
    }

    // Initialize language and currency
    $(document).ready(function() {
        // Initialize
        updateLanguage();
        updatePrices();
        
        console.log("Language and currency initialized");
    });

})(jQuery);