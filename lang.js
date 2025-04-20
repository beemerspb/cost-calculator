
// Тексты для разных языков
const translations = {
    ru: {
        appTitle: "Калькулятор себестоимости",
        languageLabel: "Язык:",
        currencyLabel: "Валюта:",
        recipeNameLabel: "Название рецепта:",
        recipeNamePlaceholder: "Введите название рецепта",
        ingredientHeader: "Ингридиент",
        quantityHeader: "Кол-во в упак.",
        priceHeader: "Цена упак.",
        addedHeader: "Добавляемое",
        sumHeader: "Сумма",
        addButton: "Добавить",
        pieceGoodsHeader: "Штучный товар",
        countHeader: "Кол-во",
        piecePriceHeader: "Цена",
        pieceSumHeader: "Сумма",
        addPieceButton: "Добавить",
        electricityHeader: "Электричество",
        timeHeader: "Время (ч)",
        powerHeader: "Мощность (кВт)",
        electricityPriceHeader: "Цена",
        electricitySumHeader: "Сумма",
        energyCostsLabel: "Энергозатраты",
        totalCostsHeader: "Итоговые затраты",
        productsLabel: "Продукты:",
        pieceGoodsLabel: "Штучный товар:",
        electricityLabel: "Электричество:",
        totalLabel: "Общая сумма:",
        calculateButton: "Рассчитать",
        clearButton: "Очистить",
        saveButton: "Сохранить",
        emptyStateText: "Сохранённые рецепты появятся здесь",
        confirmClear: "Очистить все данные? Все несохранённые данные будут потеряны.",
        confirmOverwrite: "Рецепт \"{name}\" уже существует. Перезаписать?",
        confirmDelete: "Удалить рецепт \"{name}\"?",
        requiredField: "Пожалуйста, введите название рецепта",
        pdfTitle: "Калькулятор себестоимости",
        productsPdf: "Продукты:",
        pieceGoodsPdf: "Штучный товар:",
        electricityPdf: "Электричество:",
        workingTime: "Время работы",
        power: "Мощность",
        pricePerKwh: "Цена за кВт·ч",
        totalCost: "Общая стоимость",
        dateLabel: "Дата:"
    },
    en: {
        appTitle: "Cost Calculator",
        languageLabel: "Language:",
        currencyLabel: "Currency:",
        recipeNameLabel: "Recipe name:",
        recipeNamePlaceholder: "Enter recipe name",
        ingredientHeader: "Ingredient",
        quantityHeader: "Package quantity",
        priceHeader: "Package price",
        addedHeader: "Added",
        sumHeader: "Sum",
        addButton: "Add",
        pieceGoodsHeader: "Piece goods",
        countHeader: "Count",
        piecePriceHeader: "Price",
        pieceSumHeader: "Sum",
        addPieceButton: "Add",
        electricityHeader: "Electricity",
        timeHeader: "Time (h)",
        powerHeader: "Power (kW)",
        electricityPriceHeader: "Price",
        electricitySumHeader: "Sum",
        energyCostsLabel: "Energy costs",
        totalCostsHeader: "Total costs",
        productsLabel: "Products:",
        pieceGoodsLabel: "Piece goods:",
        electricityLabel: "Electricity:",
        totalLabel: "Total:",
        calculateButton: "Calculate",
        clearButton: "Clear",
        saveButton: "Save",
        emptyStateText: "Saved recipes will appear here",
        confirmClear: "Clear all data? All unsaved data will be lost.",
        confirmOverwrite: "Recipe \"{name}\" already exists. Overwrite?",
        confirmDelete: "Delete recipe \"{name}\"?",
        requiredField: "Please enter recipe name",
        pdfTitle: "Cost Calculator",
        productsPdf: "Products:",
        pieceGoodsPdf: "Piece goods:",
        electricityPdf: "Electricity:",
        workingTime: "Working time",
        power: "Power",
        pricePerKwh: "Price per kWh",
        totalCost: "Total cost",
        dateLabel: "Date:"
    },
    de: {
        appTitle: "Kostenrechner",
        languageLabel: "Sprache:",
        currencyLabel: "Währung:",
        recipeNameLabel: "Rezeptname:",
        recipeNamePlaceholder: "Rezeptnamen eingeben",
        ingredientHeader: "Zutat",
        quantityHeader: "Menge in Packung",
        priceHeader: "Packungspreis",
        addedHeader: "Hinzugefügt",
        sumHeader: "Summe",
        addButton: "Hinzufügen",
        pieceGoodsHeader: "Stückwaren",
        countHeader: "Anzahl",
        piecePriceHeader: "Preis",
        pieceSumHeader: "Summe",
        addPieceButton: "Hinzufügen",
        electricityHeader: "Strom",
        timeHeader: "Zeit (h)",
        powerHeader: "Leistung (kW)",
        electricityPriceHeader: "Preis",
        electricitySumHeader: "Summe",
        energyCostsLabel: "Energiekosten",
        totalCostsHeader: "Gesamtkosten",
        productsLabel: "Produkte:",
        pieceGoodsLabel: "Stückwaren:",
        electricityLabel: "Strom:",
        totalLabel: "Gesamtsumme:",
        calculateButton: "Berechnen",
        clearButton: "Löschen",
        saveButton: "Speichern",
        emptyStateText: "Gespeicherte Rezepte werden hier angezeigt",
        confirmClear: "Alle Daten löschen? Alle nicht gespeicherten Daten gehen verloren.",
        confirmOverwrite: "Rezept \"{name}\" existiert bereits. Überschreiben?",
        confirmDelete: "Rezept \"{name}\" löschen?",
        requiredField: "Bitte geben Sie den Rezeptnamen ein",
        pdfTitle: "Kostenrechner",
        productsPdf: "Produkte:",
        pieceGoodsPdf: "Stückwaren:",
        electricityPdf: "Strom:",
        workingTime: "Arbeitszeit",
        power: "Leistung",
        pricePerKwh: "Preis pro kWh",
        totalCost: "Gesamtkosten",
        dateLabel: "Datum:"
    },
    ro: {
        appTitle: "Calculator de costuri",
        languageLabel: "Limba:",
        currencyLabel: "Valută:",
        recipeNameLabel: "Nume rețetă:",
        recipeNamePlaceholder: "Introduceți numele rețetei",
        ingredientHeader: "Ingredient",
        quantityHeader: "Cant. în pachet",
        priceHeader: "Preț pachet",
        addedHeader: "Adăugat",
        sumHeader: "Sumă",
        addButton: "Adăugați",
        pieceGoodsHeader: "Bunuri pe bucată",
        countHeader: "Cantitate",
        piecePriceHeader: "Preț",
        pieceSumHeader: "Sumă",
        addPieceButton: "Adăugați",
        electricityHeader: "Electricitate",
        timeHeader: "Timp (h)",
        powerHeader: "Putere (kW)",
        electricityPriceHeader: "Preț",
        electricitySumHeader: "Sumă",
        energyCostsLabel: "Costuri energie",
        totalCostsHeader: "Costuri totale",
        productsLabel: "Produse:",
        pieceGoodsLabel: "Bunuri pe bucată:",
        electricityLabel: "Electricitate:",
        totalLabel: "Total:",
        calculateButton: "Calculează",
        clearButton: "Șterge",
        saveButton: "Salvează",
        emptyStateText: "Rețetele salvate vor apărea aici",
        confirmClear: "Ștergeți toate datele? Toate datele nesalvate se vor pierde.",
        confirmOverwrite: "Rețeta \"{name}\" există deja. Suprascrieți?",
        confirmDelete: "Ștergeți rețeta \"{name}\"?",
        requiredField: "Vă rugăm să introduceți numele rețetei",
        pdfTitle: "Calculator de costuri",
        productsPdf: "Produse:",
        pieceGoodsPdf: "Bunuri pe bucată:",
        electricityPdf: "Electricitate:",
        workingTime: "Timp de lucru",
        power: "Putere",
        pricePerKwh: "Preț per kWh",
        totalCost: "Cost total",
        dateLabel: "Data:"
    }
};

// Текущий язык и валюта
let currentLanguage = 'ru';
let currentCurrency = 'EUR';
const currencySymbols = { EUR: '€', RUB: '₽', USD: '$', MDL: 'L' };

// Курсы валют (будем обновлять из API)
let exchangeRates = {
    EUR: 1,
    RUB: 90,
    USD: 1.07,
    MDL: 19.5
};

// Функция для получения курсов валют
async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        const data = await response.json();
        exchangeRates = data.rates;
        console.log('Курсы валют обновлены:', exchangeRates);
    } catch (error) {
        console.error('Ошибка при получении курсов валют:', error);
        // Используем значения по умолчанию, если API не доступно
        exchangeRates = {
            EUR: 1,
            RUB: 90,
            USD: 1.07,
            MDL: 19.5
        };
    }
}

// Функция конвертации валют
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return amount;
    const eurAmount = amount / exchangeRates[fromCurrency];
    return eurAmount * exchangeRates[toCurrency];
}

// Функция изменения языка
function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    updateTexts();
}

// Функция изменения валюты
function changeCurrency() {
    const newCurrency = document.getElementById('currencySelect').value;
    
    // Конвертируем все цены в новую валюту
    if (currentCurrency !== newCurrency) {
        // Конвертируем цены в таблице продуктов
        const productRows = document.querySelectorAll("#costTable tbody tr");
        productRows.forEach(row => {
            const priceInput = row.querySelector("td:nth-child(3) input");
            if (priceInput && priceInput.value) {
                const price = parseFloat(priceInput.value);
                const convertedPrice = convertCurrency(price, currentCurrency, newCurrency);
                priceInput.value = convertedPrice.toFixed(2);
            }
        });

        // Конвертируем цены в таблице штучного товара
        const pieceGoodsRows = document.querySelectorAll("#pieceGoodsTable tbody tr");
        pieceGoodsRows.forEach(row => {
            const priceInput = row.querySelector("td:nth-child(3) input");
            if (priceInput && priceInput.value) {
                const price = parseFloat(priceInput.value);
                const convertedPrice = convertCurrency(price, currentCurrency, newCurrency);
                priceInput.value = convertedPrice.toFixed(2);
            }
        });

        // Конвертируем цену электричества
        const electricityPriceInput = document.getElementById("electricityPrice");
        if (electricityPriceInput && electricityPriceInput.value) {
            const price = parseFloat(electricityPriceInput.value);
            const convertedPrice = convertCurrency(price, currentCurrency, newCurrency);
            electricityPriceInput.value = convertedPrice.toFixed(2);
        }

        // Обновляем текущую валюту
        currentCurrency = newCurrency;
    }
    
    // Пересчитываем все
    calculateAll();
}

// Функция обновления текстов на странице
function updateTexts() {
    const lang = translations[currentLanguage];
    
    // Обновляем все текстовые элементы
    document.getElementById('appTitle').textContent = lang.appTitle;
    document.getElementById('languageLabel').textContent = lang.languageLabel;
    document.getElementById('currencyLabel').textContent = lang.currencyLabel;
    document.getElementById('recipeNameLabel').textContent = lang.recipeNameLabel;
    document.getElementById('recipeName').placeholder = lang.recipeNamePlaceholder;
    document.getElementById('ingredientHeader').textContent = lang.ingredientHeader;
    document.getElementById('quantityHeader').textContent = lang.quantityHeader;
    document.getElementById('priceHeader').textContent = lang.priceHeader;
    document.getElementById('addedHeader').textContent = lang.addedHeader;
    document.getElementById('sumHeader').textContent = lang.sumHeader;
    document.getElementById('addButton').textContent = lang.addButton;
    document.getElementById('pieceGoodsHeader').textContent = lang.pieceGoodsHeader;
    document.getElementById('countHeader').textContent = lang.countHeader;
    document.getElementById('piecePriceHeader').textContent = lang.piecePriceHeader;
    document.getElementById('pieceSumHeader').textContent = lang.pieceSumHeader;
    document.getElementById('addPieceButton').textContent = lang.addPieceButton;
    document.getElementById('electricityHeader').textContent = lang.electricityHeader;
    document.getElementById('timeHeader').textContent = lang.timeHeader;
    document.getElementById('powerHeader').textContent = lang.powerHeader;
    document.getElementById('electricityPriceHeader').textContent = lang.electricityPriceHeader;
    document.getElementById('electricitySumHeader').textContent = lang.electricitySumHeader;
    document.getElementById('energyCostsLabel').textContent = lang.energyCostsLabel;
    document.getElementById('totalCostsHeader').textContent = lang.totalCostsHeader;
    document.getElementById('productsLabel').textContent = lang.productsLabel;
    document.getElementById('pieceGoodsLabel').textContent = lang.pieceGoodsLabel;
    document.getElementById('electricityLabel').textContent = lang.electricityLabel;
    document.getElementById('totalLabel').textContent = lang.totalLabel;
    document.getElementById('calculateButton').textContent = lang.calculateButton;
    document.getElementById('clearButton').textContent = lang.clearButton;
    document.getElementById('saveButton').textContent = lang.saveButton;
    document.getElementById('emptyStateText').textContent = lang.emptyStateText;
    
    // Обновляем сохраненные рецепты
    renderSaved();
}

// Функция форматирования валюты
function formatCurrency(value) {
    return value.toFixed(2) + ' ' + currencySymbols[currentCurrency];
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем курсы валют
    fetchExchangeRates();
    
    // Устанавливаем язык по умолчанию
    document.getElementById('languageSelect').value = currentLanguage;
    document.getElementById('currencySelect').value = currentCurrency;
    
    // Обновляем тексты
    updateTexts();
    
    // Устанавливаем плейсхолдер для названия рецепта
    document.getElementById('recipeName').placeholder = translations[currentLanguage].recipeNamePlaceholder;
});
