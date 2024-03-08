class PDP {
  get = {

    addCartButton: () => cy.get('button[data-nyla="add-to-cart-cb"]'),
    productNamePDPSelector: () => cy.get('[data-nyla="options"] [data-nyla="typography-cb"] span'),
    productNameModalCartSelector: () => cy.get('#co8ksaq8agwksuegx36 span', { timeout: 11500 }),
    inStockItemShadeSelector: () => cy.get('[data-nyla="swatches-scrollable"] label:not([class*="out-of-stock"])'),
    decrementQuantityProductModalCart: () => cy.get('[data-nyla="cart"] [aria-label*="Decrease quantity"]', { timeout: 9500 }).first(),
    closeButtonModalCart: () => cy.get('#vdsi58kq5eksuee5ha [data-action="CLOSE_CART"]').first(),
    subTotalOfProducts: () => cy.get('[id="1x0rsu612gpksuewanx"] [data-scroll-id="oqmc5djf6gksuewmqa"] span')

  };

  selectOneItemShadeProduct({ itemShade }) {
    this.get.inStockItemShadeSelector().eq(itemShade - 1).click();
  }

  clickOnAddCartButton() {
    this.get.addCartButton().should('exist').click();
  }

  clickOnCloseButtonModalCart() {
    this.get.productNameModalCartSelector().should('exist');
    this.get.closeButtonModalCart().click();
  }


  clickOnDecrementQuantityProduct() {
    this.get.decrementQuantityProductModalCart().click();
  }

  getTextProductNamePDP() {
    return this.get.productNamePDPSelector().invoke('text').then((textNameProduct) => {
      let formattedTextPDP = textNameProduct.split(':')[1].trim();
      return formattedTextPDP;
    });
  }

  getTextProductNameModalCart(productName) {
    return this.get.productNameModalCartSelector().contains(productName).invoke('text').then((textNameProduct) => {
      let formattedTextModalCart = textNameProduct.trim();
      return formattedTextModalCart;
    });
  }

  ValidateAddProductOnModalCart(NameProductPDP) {
      this.getTextProductNameModalCart(NameProductPDP).then((currentNameProductModalCart) => {
        expect(NameProductPDP).to.equal(currentNameProductModalCart);
      
    });
  }


  getPriceProductPDP() {
    return this.get.addCartButton().invoke("text").then(completeTextOfButton => {

      const priceText = completeTextOfButton.split('|')[0].trim().split('$')[1];
      const priceInteger = parseInt(priceText);

      return priceInteger;
    })
  }

  SumPriceProduct(...priceProducts) {

    let totalPricePDPProducts = 0;
    for (const price of priceProducts) {

      totalPricePDPProducts += price;
    }

    return totalPricePDPProducts;
  }


  ValidateSubTotal({ expectTotalPriceProducts }) {
    this.get.subTotalOfProducts().invoke('text').then(quantityTxt => {

      const formattedQuantityTxt = quantityTxt.split('$')[1];
      const SubTotalPrice = parseInt(formattedQuantityTxt);

      expect(expectTotalPriceProducts).to.equal(SubTotalPrice);
    })
  }

}

export const PDPpage = new PDP();
