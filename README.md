Команды GIT:
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/djKeysi/phoneBook.git
git push https://github.com/djKeysi/phoneBook.git
git checkout -b new-branch - Создать новую ветку и сразу переключиться на неё

Установка пакетов:
npm i -g json-server
npm i styled-components prop-types react-hook-form yup react-router-dom redux redux-thunk react-redux

Структура БД:

1. Главная таблица: id,fk*fio, fk_jobTitle, fk_division, fk* internalPhone, fk* workPhone, fk* Email1, fk\_ Email2, mobilePhone
2. ФИО: id , fio
3. Должность: id, jobTitle
4. Подразделения: id, division
5. Внутренний телефон: id,internalPhone
6. Рабочий телефон: id, workPhone
7. Электронная почта: id,Email1
8. Электронная почта: id,Email2
9. пользователи - users: id / login / password / registered_at / role_id
10. роли - roles: id / name
11. Таблица с ДР ??

Сделать

1. шапку
2. Футер
3. Контент и роутинг
