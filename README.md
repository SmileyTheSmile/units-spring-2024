# Семинар №1 - Юнит-тесты на TypeScript

**Перед установкой убедитесь, что у вас установлен npm**

**Установить проект:**

- форкаем репозиторий
- клонируем и переходим в папку проекта `cd units-spring-2023`
- проверяем версию ноды `node -v`. подходят 16, 18 версии, если ниже - лучше обновите.
- выполняем `npm ci`

**Запустить проект:**

- `npm start`

**Запустить тесты:**

- прогон тестов `npm test`
- запустить тесты в режиме отслеживания изменений `npm run test:watch`
- открыть html отчет с покрытием `npm run open:coverage`
- обновить снапшоты `npm run test:update-snapshots`
- линтер `npm run lint`
- линтер с фиксом ошибок `npm run lint --fix`

**Документация по тестам:**

https://create-react-app.dev/docs/running-tests

_jest:_

https://jestjs.io/docs/ru/getting-started

https://jestjs.io/docs/ru/expect

_jest моки:_

https://jestjs.io/docs/ru/bypassing-module-mocks

_react testing library_

https://testing-library.com/docs/react-testing-library/example-intro
https://www.leighhalliday.com/introduction-react-testing-library

**Условия сдачи практики:**

1. Написать юнит-тесты на каждую функцию в utils
    - используйте [test.each](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout) для одинаковых выходных значений
2. **Замокать** функцию getPrice и написать юнит-тесты на компонент ProductCard. Не забудьте сбросить/очистить замоканное.
3. Написать юнит тесты на главную страницу, подумайте как решить проблему с непостоянством текущего времени
4. Добиться покрытия не менее 90% по всем модулям
5. Выполнить задание в соответствии с принципами автоматизации. И не применяем антипаттерны!
6. Скинуть пулл-реквест с пройденным CI (укажите имя и фамилию в названии ПР) до конца семинара в [таблицу](https://docs.google.com/spreadsheets/d/1V8t90F2lD86REIyJuqWUvCGRHxo5k--48Rgih6nUltU/edit?usp=sharing) и пройти ревью своих коллег (исправить все замечания и получить 2 аппрува)
7. Выбрать себе минимум 2 пулл-реквеста на проверку, указать свое имя в графе "Проверяющий №_".
8. После получения апрувов по ревью написать ассистенту, который прикреплен к вашей команде, чтобы пройти финальную проверку и получить баллы.

*На заметку. Если ассистенты найдут ошибки в вашей работе, на исправление без потери баллов - 2 дня. Также, если вы не исправляете какие-либо замечания ассистента, он может снизить вам баллы :(*
