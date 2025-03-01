let tabList = document.querySelector('#tabList')
let tabContant = document.querySelectorAll('.tabContant')
let tabBtn = document.querySelectorAll('.tabBtn')

//getComputedStyle-позволяет получить значение любого css свойства таже через css файла
tabList.addEventListener('click', (event) => {
    let targetBtn = event.target;//кнопка на которую произошло события или click
    // Обьект dataset- содержит пользовательский (data) атрибуты указонного элемента
    let dataLang = targetBtn.dataset.lang;
    console.log(dataLang);
    //удалить класс activ актив у всех вкладок с контентом
    for (let tab of tabContant) {
        tab.classList.remove('active');
    }
    for (let tab of tabContant) {
        if (tab.id === dataLang) {
            tab.classList.add('active')
            for (let btn of tabBtn) {
                tab.classList.remove('active')
            }
        }

    }

})
