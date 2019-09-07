/*
- Текущий файл index.js является точкой входа проекта, о этом указана в файле package.json в разделе main
- в package.json можно указать любой файл в качестве точки входа
- Файл index.js является точкой входа по умолчанию если явно не указан в файле package.json
*/

/* 
- Объявляем константу server [const server]
? - присваиваем объект server сервер экспортированной в модуле "node_modules/server/index.js"
- важно, тут мы не получим новый экземпляр, получим только ссылку на объект
- правила поиска модулей https://nodejs.org/api/modules.html#modules_all_together
*/

const server = require('server');

/* 
- Вызываем функцию [connect()] (или метод) из объекта server
- елси не указать символ "()", то мы получим только текст метода
- connect() запускает http сервер (см. код "node_modules\server\index.js")
*/

server.connect();