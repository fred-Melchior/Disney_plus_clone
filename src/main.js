document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i =0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const targetTab = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            const btn = document.querySelector(`[data-tab-button=${targetTab}]`)
            hideAllTabs()
            buttonOff()
            tab.classList.add('shows__list--is-active')
            btn.classList.add('shows__tabs__button--is-active')
        })
    }
})

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function buttonOff(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}