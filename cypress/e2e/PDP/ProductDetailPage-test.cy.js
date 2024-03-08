import { PDPpage } from "../../support/pages/PDP.Page";
const firstItemShade = 1, secondItemShade = 2;

const VerifySubTotalPrice = ({ itemShade1, itemShade2 }) => {
    PDPpage.selectOneItemShadeProduct({ itemShade: itemShade1 });

    PDPpage.getPriceProductPDP().then((priceProduct1) => {
        PDPpage.clickOnAddCartButton();
        PDPpage.clickOnCloseButtonModalCart();
        PDPpage.selectOneItemShadeProduct({ itemShade: itemShade2 });

        PDPpage.getPriceProductPDP().then((priceProduct2) => {
            PDPpage.clickOnAddCartButton();
            const totalPriceProductsSelected = PDPpage.SumPriceProduct(priceProduct1, priceProduct2)
            PDPpage.ValidateSubTotal({ expectTotalPriceProducts: totalPriceProductsSelected })
        })
    })
}

const VerifyAddProduct = ({ itemShade }) => {
    PDPpage.selectOneItemShadeProduct({ itemShade: itemShade });
    PDPpage.getTextProductNamePDP().then((NameProductPDP)=>{
    PDPpage.clickOnAddCartButton();
    PDPpage.ValidateAddProductOnModalCart(NameProductPDP);   
    })
    
}

describe('Challenge Automation - NEORIS', () => {
    beforeEach('Usuario debe estar situado en Product Detail Page', () => {
        cy.visit('/');
    });

    it('CP-2 | Verificar poder agregar el mismo producto con diferentes tonos de color', () => {
        // Primer tono de color
        VerifyAddProduct({ itemShade: firstItemShade })
        PDPpage.clickOnCloseButtonModalCart();
        // Segundo tono de color
        VerifyAddProduct({ itemShade: secondItemShade })
    });

    it('CP-3 | Verificar el correcto cálculo del "subtotal" de 2 productos de diferentes tonos de color', () => {
        VerifySubTotalPrice({ itemShade1: firstItemShade, itemShade2: secondItemShade });
    });

    it('CP-9 | Verificar el correcto cálculo del "subtotal" de 2 productos del mismo tono de color', () => {
        VerifySubTotalPrice({ itemShade1: firstItemShade, itemShade2: firstItemShade });
    });

    context('precondición para el CP-11',() => {
        beforeEach('Usuario debe estar situado en Product Detail Page, usuario debe haber agregado 1 producto al carrito, usuario debe estar situado en el modal de carrito', () => {
            cy.visit('/');
            VerifyAddProduct({ itemShade: firstItemShade })
        })

        it('CP-11 | Verificar quitar 1 producto al carrito de compras desde el modal de carrito', () => {
            PDPpage.clickOnDecrementQuantityProduct();
            PDPpage.get.subTotalOfProducts().should('not.be.visible')
        });
    })
});





