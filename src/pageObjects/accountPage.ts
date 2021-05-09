export class AccountPage {
    accountName() {
        return $('.account>span');
    }

    logout() {
        return $('.logout');
    }

    categories() {
        return $('.cat-title');
    }

    womenDresses() {
        return $('[title="Women"]');
    }

    firstProduct_addtocart() {
        return $('span=Add to cart')
    }

    firstProductName() {
        return $('.product-container .product-name');
    }

    proceedToCheckout() {
        return $('span=Proceed to checkout');
    }

    payment_ProductName() {
        return $('.product-name>a');
    }

    getTitle() {
        return browser.getTitle();
    }
}