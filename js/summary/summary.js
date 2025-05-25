export function initSummary() {
    const items = document.querySelector('.items-container')
    const summary = document.querySelector('.summary-container')
    const summaryBtn = document.querySelector('.summary-btn')
    const itemsBtn = document.querySelector('.back-shopping')
    
    function toggleViews() {
        items.classList.toggle('hidden')
        summary.classList.toggle('hidden')
    } 

    summaryBtn.addEventListener('click', toggleViews)
    itemsBtn.addEventListener('click', toggleViews)
}