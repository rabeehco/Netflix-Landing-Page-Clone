const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item') 
// const tabContent1 = document.getElementById('tab-1-content')
// const tabContent2 = document.getElementById('tab-2-content')
// const tabContent3 = document.getElementById('tab-3-content')


function selectItem(e) {
    removeBorder()
    this.classList.add('tab-border')
    removeShow()
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}   

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem))