// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

const clickContent = () => {
    tabsParent.onclick = (event) => {
        if (event.target.classList.contains('tab_content_item')) {
            tabs.forEach((item, i) => {
                if (event.target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    }
}
setTimeout(clickContent, 1000)


