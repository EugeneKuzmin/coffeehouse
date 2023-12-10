
let currCategory = 'coffee'
fetch('./products.json')
    .then((response) => response.json())
    .then((json) => 
    {
        
        let productCategory = json.filter(x => x.category === currCategory )
        let menuProductCards = document.querySelector('.menu-product-cards')
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
            const modalPopupImage = document.createElement('div')
            const modalInfo = document.createElement('div')

            element = productCategory[cardIndex];
            const img = document.createElement('img');
            
            img.src = `./assets/${currCategory}-${cardIndex}.jpg`
            img.alt = `${element.name}`
            modalPopupImage.appendChild(img)
            modalPopup.appendChild(modalPopupImage)
            
            modalInfo.textContent = element.name
            modalPopup.appendChild(modalInfo)
        }


        const cardModal =  document.querySelector('[data-modal]')

        const menuCards =  document.querySelectorAll('[data-menu-card]')
        menuCards.forEach((card,index) => card.addEventListener('click',() => {
            console.log('cars',card);
            cardModal.showModal()
            fillModalContent(index);
        }))
        
    }
    );

    
