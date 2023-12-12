

const cardModal =  document.querySelector('[data-modal]')


function showMenu(currCategory)
{
    

fetch('./products.json')
    .then((response) => response.json())
    .then((json) => 
    {
        
        const productCategory = json.filter(x => x.category === currCategory )
        const menuProductCards = document.querySelector('.menu-product-cards')
        menuProductCards.innerHTML = ''

        for (let index = 0; index < productCategory.length; index++) {
            const element = productCategory[index];
            let article = document.createElement('article');
            article.classList.add('menu-card');
            article.setAttribute('data-menu-card','');
            
            let img_container = document.createElement('div');
            let img = document.createElement('img');
            
            img.src = `./assets/${currCategory}-${index+1}.jpg`
            img.alt = `${element.name}`
            img_container.appendChild(img)

            let cardInfo = document.createElement('div')
            cardInfo.classList.add('menu-card-info');

            let description = document.createElement('div')
            
            let heading = document.createElement('h2')
            heading.classList.add('menu-card-heading');
            heading.textContent = element.name;

            let descriptionText = document.createElement('div')
            descriptionText.classList.add('font-body-medium')
            descriptionText.classList.add('menu-card-text')
            descriptionText.textContent = element.description

            description.appendChild(heading)
            description.appendChild(descriptionText)
            
            let price = document.createElement('div')
            price.classList.add('font-heading-3')
            price.textContent = element.price

            cardInfo.appendChild(description);
            cardInfo.appendChild(price);

            article.appendChild(img_container)
            article.appendChild(cardInfo)

            menuProductCards.appendChild(article)

            
        }

        function fillModalContent (cardIndex) {
            const modalPopup = document.querySelector('.modal-popup')
            modalPopup.classList.add('flex')
            modalPopup.classList.add('gap-20')

            const modalPopupImage = document.createElement('div')

            // *****************image section*****************
            
            element = productCategory[cardIndex];
            const img = document.createElement('img');
            
            img.src = `./assets/${currCategory}-${cardIndex+1}.jpg`
            img.alt = `${element.name}`
            modalPopupImage.appendChild(img)
            modalPopup.appendChild(modalPopupImage)

            // *****************info section*****************

            const modalInfo = document.createElement('div')

            // *** header ***
            
            const header = document.createElement('div');

            const headingInfo = document.createElement('div');
            headingInfo.classList.add('font-heading-3');
            headingInfo.textContent = element.name;

            // *** description ***

            const descriptionInfo = document.createElement('div')
            descriptionInfo.textContent = element.description
            descriptionInfo.classList.add("font-body-medium")
            descriptionInfo.classList.add("mt-12")

            header.appendChild(headingInfo)
            header.appendChild(descriptionInfo)
            modalInfo.appendChild(header)

            // *** size ***
            
            const sizeHeader = document.createElement('div')
            sizeHeader.classList.add('font-body-medium')
            sizeHeader.textContent = 'Size'

            const tabItemSmall = document.createElement('div')
            tabItemSmall.classList.add('tab-item')

            const tabItemIconS = document.createElement('div')
            tabItemIconS.classList.add("tab-item-image")
            tabItemIconS.textContent = 'S'
            
            const tabItemContentS = document.createElement('span')
            tabItemContentS.classList.add("font-link-n-button")
            tabItemContentS.textContent = element.sizes.s.size

            tabItemSmall.appendChild(tabItemIconS)
            tabItemSmall.appendChild(tabItemContentS)

            const tabItemMedium = document.createElement('div')
            tabItemMedium.classList.add('tab-item')

            const tabItemIconM = document.createElement('div')
            tabItemIconM.classList.add("tab-item-image")
            tabItemIconM.textContent = 'M'

            const tabItemContentM = document.createElement('span')
            tabItemContentM.classList.add("font-link-n-button")
            tabItemContentM.textContent = element.sizes.m.size

            tabItemMedium.appendChild(tabItemIconM)
            tabItemMedium.appendChild(tabItemContentM)


            const tabItemLarge = document.createElement('div')
            tabItemLarge.classList.add('tab-item')

            const tabItemIconL = document.createElement('div')
            tabItemIconL.classList.add("tab-item-image")
            tabItemIconL.textContent = 'L'

            const tabItemContentL = document.createElement('span')
            tabItemContentL.classList.add("font-link-n-button")
            tabItemContentL.textContent = element.sizes.l.size

            tabItemLarge.appendChild(tabItemIconL)
            tabItemLarge.appendChild(tabItemContentL)

            const sizeButtons = document.createElement('div')
            sizeButtons.classList.add('flex')
            sizeButtons.classList.add('mt-8')

            sizeButtons.appendChild(tabItemSmall)
            sizeButtons.appendChild(tabItemMedium)
            sizeButtons.appendChild(tabItemLarge)

            const sizeBlock = document.createElement('div')
            sizeBlock.appendChild(sizeHeader)
            sizeBlock.appendChild(sizeButtons)

            // *** additives ***

            const additivesHeader = document.createElement('div')
            additivesHeader.classList.add('font-body-medium')
            additivesHeader.textContent = 'Additives'

            const tabItemAdd1 = document.createElement('div')
            tabItemAdd1.classList.add('tab-item')

            const tabItemIcon1 = document.createElement('div')
            tabItemIcon1.classList.add("tab-item-image")
            tabItemIcon1.classList.add("font-link-n-button")
            tabItemIcon1.textContent = '1'
            
            const tabItemContent1 = document.createElement('span')
            tabItemContent1.classList.add("font-link-n-button")
            tabItemContent1.textContent = element.additives[0].name

            tabItemAdd1.appendChild(tabItemIcon1)
            tabItemAdd1.appendChild(tabItemContent1)

            const tabItemAdd2 = document.createElement('div')
            tabItemAdd2.classList.add('tab-item')

            const tabItemIcon2 = document.createElement('div')
            tabItemIcon2.classList.add("tab-item-image")
            tabItemIcon2.classList.add("font-link-n-button")
            tabItemIcon2.textContent = '2'

            const tabItemContent2 = document.createElement('span')
            tabItemContent2.classList.add("font-link-n-button")
            tabItemContent2.textContent = element.additives[1].name

            tabItemAdd2.appendChild(tabItemIcon2)
            tabItemAdd2.appendChild(tabItemContent2)


            const tabItemAdd3 = document.createElement('div')
            tabItemAdd3.classList.add('tab-item')

            const tabItemIcon3 = document.createElement('div')
            tabItemIcon3.classList.add("tab-item-image")
            tabItemIcon3.classList.add("font-link-n-button")
            tabItemIcon3.textContent = '3'

            const tabItemContent3 = document.createElement('span')
            tabItemContent3.classList.add("font-link-n-button")
            tabItemContent3.textContent = element.additives[2].name

            tabItemAdd3.appendChild(tabItemIcon3)
            tabItemAdd3.appendChild(tabItemContent3)

            const addButtons = document.createElement('div')
            addButtons.classList.add('flex')
            addButtons.classList.add('mt-8')

            addButtons.appendChild(tabItemAdd1)
            addButtons.appendChild(tabItemAdd2)
            addButtons.appendChild(tabItemAdd3)

            const additivesBlock = document.createElement('div')
            additivesBlock.appendChild(additivesHeader)
            additivesBlock.appendChild(addButtons)

            /////////////////////Total//////////////////////

            const totalBlock = document.createElement('div')
            totalBlock.classList.add('font-heading-3')
            totalBlock.classList.add('flex')
            totalBlock.classList.add('justify-content-between')
            const totalText = document.createElement('div')
            totalText.textContent = 'Total'
            const totalPrice = document.createElement('div')
            totalPrice.textContent = '7.00$'
            totalBlock.appendChild(totalText)
            totalBlock.appendChild(totalPrice)
            
            /////////////////////////////////////
            
            const priceInfo = document.createElement('div')
            priceInfo.classList.add('font-body-caption')
            priceInfo.textContent = 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.'
            
            /////////////////////////////////////
            
            const buttonCloseBlock = document.createElement('div')
            const buttonClose = document.createElement('button')

            buttonCloseBlock.appendChild(buttonClose)

            buttonClose.classList.add('button-secondary')
            buttonClose.classList.add('font-link-n-button')
            buttonClose.textContent = 'Close'
            buttonClose.addEventListener('click',() => {
                cardModal.close()
                modalPopup.innerHTML = ''
            })

            cardModal.addEventListener("close", (event) => {
                modalPopup.innerHTML = ''    
            });

            modalInfo.appendChild(sizeBlock)
            modalInfo.appendChild(additivesBlock)
            modalInfo.appendChild(totalBlock)
            modalInfo.appendChild(priceInfo)
            modalInfo.appendChild(buttonCloseBlock)
            modalInfo.classList.add('flex')
            modalInfo.classList.add('flex-column')
            modalInfo.classList.add('gap-20')

            modalPopup.appendChild(modalInfo)

        }
        

        const menuCards =  document.querySelectorAll('[data-menu-card]')
        menuCards.forEach((card,index) => card.addEventListener('click',() => {
            cardModal.showModal()
            fillModalContent(index);
        }))
        
    }
    );
}

showMenu('coffee')
const categoryButtons = document.querySelectorAll('.tab-item')
categoryButtons.forEach((btn,index) => btn.addEventListener('click', () => {
    let nameCategory = 'coffee'
    if (index === 1){
        nameCategory = 'tea'
    }else if(index === 2) {
        nameCategory = 'dessert'
    }
    categoryButtons.forEach(b=>b.classList.remove('active'))
    btn.classList.add('active')
    showMenu(nameCategory)

}))

function closeDialog(event) {
    if (!event.target.contains(cardModal)) return;
    cardModal.close();
  }

  document.addEventListener('click', closeDialog);
