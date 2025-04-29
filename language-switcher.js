// Language and Currency Switcher

// Global variables
var currentLanguage = 'en';
var currentCurrency = 'USD';
var exchangeRate = 83.5; // 1 USD = 83.5 INR

// Language translations
var translations = {
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
        'Gift Card': 'Gift Card',
        'Home': 'Home',
        'Banner': 'Banner',
        'Featured': 'Featured',
        'Collection': 'Collection',
        'Best Selling': 'Best Selling',
        'News': 'News',
        'Blog': 'Blog',
        'Uncut Diamonds': 'Uncut Diamonds',
        'Pendant': 'Pendant',
        'Ring': 'Ring',
        'Bracelet': 'Bracelet',
        'Necklace Set': 'Necklace Set',
        'Gold': 'Gold',
        'Rose Gold': 'Rose Gold',
        'cart': 'cart',
        'Continue Reading': 'Continue Reading',
        'by': 'by',
        'Subscribe': 'Subscribe',
        'Email address': 'Email address',
        'Quick View': 'Quick View',
        'Engagement Couple Rings': 'Engagement Couple Rings',
        'Earrings for Party': 'Earrings for Party',
        'Earrings for Navratri': 'Earrings for Navratri',
        'Inquiry / Helpline': 'Inquiry / Helpline',
        'Subscribe for Samarpan Diamonds Magazines': 'Subscribe for Samarpan Diamonds Magazines',
        'Get E-mail of all the updates about our latest and special offers': 'Get E-mail of all the updates about our latest and special offers'
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
        'Gift Card': 'उपहार कार्ड',
        'Home': 'होम',
        'Banner': 'बैनर',
        'Featured': 'विशेष',
        'Collection': 'संग्रह',
        'Best Selling': 'सबसे ज्यादा बिकने वाला',
        'News': 'समाचार',
        'Blog': 'ब्लॉग',
        'Uncut Diamonds': 'अनकट हीरे',
        'Pendant': 'पेंडेंट',
        'Ring': 'अंगूठी',
        'Bracelet': 'कंगन',
        'Necklace Set': 'नेकलेस सेट',
        'Gold': 'सोना',
        'Rose Gold': 'रोज़ गोल्ड',
        'cart': 'कार्ट',
        'Continue Reading': 'पढ़ना जारी रखें',
        'by': 'द्वारा',
        'Subscribe': 'सदस्यता लें',
        'Email address': 'ईमेल पता',
        'Quick View': 'त्वरित दृश्य',
        'Engagement Couple Rings': 'इंगेजमेंट कपल रिंग्स',
        'Earrings for Party': 'पार्टी के लिए कान की बालियां',
        'Earrings for Navratri': 'नवरात्रि के लिए कान की बालियां',
        'Inquiry / Helpline': 'पूछताछ / हेल्पलाइन',
        'Subscribe for Samarpan Diamonds Magazines': 'समर्पण डायमंड्स पत्रिकाओं के लिए सदस्यता लें',
        'Get E-mail of all the updates about our latest and special offers': 'हमारे नवीनतम और विशेष ऑफर के बारे में सभी अपडेट का ई-मेल प्राप्त करें'
    }
};

// Function to update prices based on currency
function updatePrices() {
    try {
        console.log("Updating prices to: " + currentCurrency);
        var priceElements = document.querySelectorAll('.price_box span, .cart_text_quantity, .price_cart');
        for (var i = 0; i < priceElements.length; i++) {
            var element = priceElements[i];
            var priceText = element.textContent;
            var priceValue = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            
            if (!isNaN(priceValue)) {
                if (currentCurrency === 'INR') {
                    var inrPrice = (priceValue * exchangeRate).toFixed(2);
                    element.textContent = '₹' + inrPrice;
                } else {
                    element.textContent = '$' + priceValue.toFixed(2);
                }
            }
        }
        console.log("Prices updated successfully");
    } catch (error) {
        console.error("Error updating prices: ", error);
    }
}

// Function to update text based on language
function updateLanguage() {
    try {
        console.log("Updating language to: " + currentLanguage);
        var elements = document.querySelectorAll('[data-translate]');
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                // If the element has children elements with class ion-chevron-down, we need to preserve them
                var chevronElement = element.querySelector('.ion-chevron-down');
                if (chevronElement) {
                    element.innerHTML = translations[currentLanguage][key] + ' <i class="ion-chevron-down"></i>';
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        }
        console.log("Language updated successfully");
    } catch (error) {
        console.error("Error updating language: ", error);
    }
}

// Function to switch language
function switchLanguage() {
    try {
        console.log("Switching language from: " + currentLanguage);
        currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
        var languageText = document.querySelector('.language > a');
        if (languageText) {
            languageText.innerHTML = currentLanguage === 'en' ? 'English <i class="ion-chevron-down"></i>' : 'हिंदी <i class="ion-chevron-down"></i>';
        }
        updateLanguage();
        console.log("Language switched to: " + currentLanguage);
        alert("Language switched to: " + (currentLanguage === 'en' ? 'English' : 'Hindi'));
    } catch (error) {
        console.error("Error switching language: ", error);
        alert("Error switching language: " + error.message);
    }
}

// Function to switch currency
function switchCurrency() {
    try {
        console.log("Switching currency from: " + currentCurrency);
        currentCurrency = currentCurrency === 'USD' ? 'INR' : 'USD';
        var currencyText = document.querySelector('.currency > a');
        if (currencyText) {
            currencyText.innerHTML = currentCurrency + '<i class="ion-chevron-down"></i>';
        }
        updatePrices();
        console.log("Currency switched to: " + currentCurrency);
        alert("Currency switched to: " + currentCurrency);
    } catch (error) {
        console.error("Error switching currency: ", error);
        alert("Error switching currency: " + error.message);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Language switcher initialized");
    
    // Add click listeners to the test buttons
    var languageBtn = document.getElementById('test-language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', switchLanguage);
    }
    
    var currencyBtn = document.getElementById('test-currency-btn');
    if (currencyBtn) {
        currencyBtn.addEventListener('click', switchCurrency);
    }
    
    // Initialize translations and prices
    updateLanguage();
    updatePrices();
});

// Alert to verify script is loaded
console.log("Language switcher script loaded"); 