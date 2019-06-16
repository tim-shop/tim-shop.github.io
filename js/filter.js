function filter(category) { // функция фильтрации
    const item_list = document.getElementsByClassName('features_items')[0].children; // Получение всех товаров в константу item_list
    const reset_category = document.getElementById('reset-category'); // Получение сбрасывателя фильтров (в каталоге товаров)
    const reset_brand = document.getElementById('reset-brands'); // Получение сбрасывателя фильтров (в брендах)

    if (category != '') { // если передана непустая строка
        reset_category.classList.remove('hide'); // показ сброса фильтров
        reset_brand.classList.remove('hide'); // показ сброса фильтров
        let filters = category.split(" "); // разделение слов, переданных для фильтрации
        for (let i = 0; i < item_list.length; i++) { // перебор товаров
            for (let j = 0; j < filters.length; j++) { // перебор слов, переданных для фильтрации
                if (item_list[i].classList.contains(filters[j])) { // проверка есть ли в списке классов у товара переданные слова
                    item_list[i].style.display = ""; // показ товаров, которые подходят под переданные слова
                } else {
                    item_list[i].style.display = "none"; // скрытие товаров, которые не подходят под переданные слова
                }
            }
        }
    } else { // если передана пустая строка
        reset_category.classList.add('hide'); // скрытие сброса фильтров
        reset_brand.classList.add('hide'); // скрытие сброса фильтров
        for (let i = 0; i < item_list.length; i++) { // перебор всех товаров
            item_list[i].style.display = ""; // отображение каждого перебираемого товаров
        }
    }
}