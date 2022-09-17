# Проект: Велоспорт 

![2022-09-17_22-13-27](https://user-images.githubusercontent.com/83783362/190873062-c31e8d5c-1176-467e-a92e-0b8dde7392d5.png)

Хотите покататься по горным серпантинам на большой скорости, любуясь потрясающими пейзажами? Тогда `вам` сюда.
У нас есть выбор трасс по уровню сложности и типу покрытия, подходящие группы велосипедов выбираются автоматически.
Так же перед непосредственным заездом `вы` можете потренироваться на наших трассах или используя **приложение Starva** подобрать свой индивидуальный план тренировок.

## Реализация и технологии в проекте
Для написания проекта использовался сборщик Webpack. В нем установлено все необходимые модули и пакеты для верстки на препроцессоре SCSS
* В частности sass-loader для работы Webpack с препроцессором SCSS
* Для работы webpack с CSS стилями использовался плагин css-loader, а для трансформации и добавления вендорных префиксов для разных браузеров использовался postcss-loader
* Для написания структуры стилей использовалась БЭМ методология
* Транспиляция JS кода в старый синтаксис осуществляется при помощи Babel. Для крайних случаев была добавлена библиотека полифилов core-js.
### Реализация

Страница сверстана адаптивно с 320 до 1440px. На странице реализовано переключение темного/светлого режима, переключатели находятся в главном меню и в блоке footer. В шапке сайта располагается навигационное меню в виде списка ссылок которое при разрешении меньше 500px трансформируется в раскрывающиеся по кнопке меню.

![Запись экрана 2022-09-17 в 22 21 25 (1)](https://user-images.githubusercontent.com/83783362/190873442-5de66ded-bcf1-4ee5-9322-7d654d0c0259.gif)

В блоке с описанием трасс есть возможность как переключать их с помощью кнопок **вперед**, **назад**, так их непосредственного выбора в блоке о велосипедах. Подходящие велосипеды выбираюся согласно выбранной трассе. Данные о трассах и велосипедах представлены в виде объекта, который предположительно приходит с бэкенда.

![Запись экрана 2022-09-17 в 22 37 45](https://user-images.githubusercontent.com/83783362/190873875-35f5a96d-a6e6-41eb-9f23-b0bc03a873fd.gif)

В футере располагается форма для подписки на рассылку с динамической валидацией на JS.

![Запись экрана 2022-09-17 в 22 44 53](https://user-images.githubusercontent.com/83783362/190874076-f94e53b2-42ec-42f9-ab16-a99d6aafe0d6.gif)

### Технологии
<p>
  <img alt="html5" src="https://img.shields.io/badge/-HTML5-ffffff?style=for-the-badge&logo=html5&logoColor=e54c21"/>
      <img alt="CSS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
      <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-ffffff?style=for-the-badge&logo=javascript&logoColor=f7df1d"/>
       <img alt="Webpack" src="https://img.shields.io/badge/-Webpack-ffffff?style=for-the-badge&logo=webpack&logoColor=1b74ba"/>
          <img alt="Figma" src="https://img.shields.io/badge/-Figma-ffffff?style=for-the-badge&logo=figma&logoColor=f24e1e"/>
</p>

## Установка, настройка
Проект, развернутый на Github:  [GitHub Pages](https://vladislavserkir.github.io/landing-cycling/)
- Установка зависимостей: `npm install`
- Режим разработки: `npm run dev`
- Сформировать проект для последующего размещения на ресурсах: `npm run build`
- Сформировать заново проект для отображения на GitHub pages: `npm run deploy`
## Написать мне
[![github](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github)](https://github.com/VladislavSerKir)
[![telegram](https://img.shields.io/badge/Telegram-68c4f0?style=for-the-badge&logo=telegram)](https://t.me/vl_kireev)
