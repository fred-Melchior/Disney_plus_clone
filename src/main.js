document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero){
            ocultaHeader();
        }
        else{
            exibeHeader();
        }
    })

    /* secao de atracoes programacao das abas */
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

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFecha)
    }
})


//secao faq acordion
function abreFecha(elemento){
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

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

function ocultaHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}