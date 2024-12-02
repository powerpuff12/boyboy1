const DEFAULT_DATA = {
    houseTypes: [
        { id: 1, name: 'Брусовой дом', basePrice: 2500000, image: 'https://picsum.photos/id/175/300/200', description: 'Классический брусовой дом' },
        { id: 2, name: 'Каркасный дом', basePrice: 2000000, image: 'https://picsum.photos/id/176/300/200', description: 'Современный каркасный дом' }
    ],
    floors: [
        { id: 1, name: '1 этаж', multiplier: 1 },
        { id: 2, name: '1.5 этажа', multiplier: 1.3 },
        { id: 3, name: '2 этажа', multiplier: 1.6 }
    ],
    roofs: [
        { id: 1, name: 'Двускатная', price: 300000 },
        { id: 2, name: 'Четырехскатная', price: 400000 }
    ],
    materials: [
        { id: 1, name: 'Брус 150x150', price: 1500000 },
        { id: 2, name: 'Клееный брус', price: 2000000 }
    ],
    additions: [
        { id: 1, name: 'Веранда', price: 200000 },
        { id: 2, name: 'Балкон', price: 150000 }
    ]
};

// Функция для получения данных
function getCalculatorData() {
    const savedData = localStorage.getItem('adminData');
    return savedData ? JSON.parse(savedData) : DEFAULT_DATA;
}