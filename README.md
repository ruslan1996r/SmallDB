Главная страница:
  - Отчёты
  - Формы
  - Выход

Отчёты (клиенты, продажи, товары):
  - Продажи. Success за какое-то время  <!-- Done -->
  <!-- SELECT * FROM (SELECT * , (SELECT status FROM booking where product = product.id AND status = 'success') AS status FROM product) as products where status = 'success'; -->
  - Клиенты. Мыло, айдишки товаров и его общая сумма заказов
  - Товары. Сколько раз куплен <!-- Done -->
  Желательно всё выводить по какой-то дате (за месяц/неделю и т.д.)

Формы (клиенты, заказы, товары, изготовители, оцинки)
   - Клиенты. Добавить. Список клиентов. Редактировать (только существующие поля) и удалить клиентов. Поиск и сортировка. Посчитать вытраты (только для клиента для всех его заказов)
    {
        "select": [
            `SUM(sum) as 'total_spending'`
        ],
        "where": {
            "client": 2
        }
    }

   - Заказы. Как клиенты + (спасибо за покупку. Страница или пдф).
   - Товары. Как клиенты
   - Изготовители. Как клиенты
   - Оценки. Как клиенты
  
Поиск. По всем полям сущности
Сортировка. 
  - Клиенты: от 1 до 5; от 6 до 10 количества заказов. Клиенты, которые хоть раз отменили заказ
    {
        "from": "(SELECT * , (SELECT COUNT(client) FROM booking where client = client.id) AS total FROM client) as client",
        "where": {
            "total": {
                "$btw": [
                    1,
                    5
                ]
            }
        }
    }
    (SELECT * , (SELECT status FROM booking where client = client.id AND status = 'rejected') AS total FROM client) as client where total is not null
  
  - Заказы: по статусу
    `SELECT * FROM booking ORDER BY status;`
  - Товары: по оценке. Которые не куплены, куплены 1 и более раз
    `SELECT id from product WHERE product.id NOT IN (SELECT product FROM booking);`
  - Изготовители: Никак
  - Оценки: Никак


<!-- ПРИМЕРЫ ЗАПРОСОВ С `FIND`: -->
const res = await find({
  where:{
    rate: 4,
    rate: {
      $btw:[4,6]
    }
  }
})
const pop = await res.eager("client")

<!-- Дополнительные таблицы: -->
Товар-Оценка товара (id товара, id оценки)
Заказ-Товар (id заказа, id товара)
