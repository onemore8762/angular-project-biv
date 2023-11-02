# Тестовое задание
Проект сгенерирован на Angular CLI version 16.2.9.
## Макет:
https://www.figma.com/file/YIgZwgAiqi7QUFOkwMJ8Tc/TZ-Front-(Copy)?type=design&node-id=0-1&mode=design&t=QMVwNpTCGqiXqy9B-0

## Продакшн:
https://onemore8762.github.io/angular-project-biv/

## Скрипты

- `npm run start` - Запуск frontend dev server
- `npm run start:open` - Запуск frontend dev server (в новом окне)
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run build:prod` - Сборка в prod режиме-

## Gh-pages
- `ng build --configuration development --base-href "https://onemore8762.github.io/angular-project-biv/"` - Сборка для gh-pages
- `npx angular-cli-ghpages --dir=dist/angular-project-biv` - Команда, чтобы развернуть приложение

## Файловая структура
- [store](/src/app/store) - Хранилище сотрудников @ngrx/store + localstorage
- [employee-card](/src/app/store) - Карточка сотрудника
- [employee-list](/src/app/employees-list) - Страница со списком сотрудников
- [employee-add](/src/app/employee-add) - Страница с формой добавления сотрудника
- [models](/src/app/models) - Моделька интерфейса сотрудника
