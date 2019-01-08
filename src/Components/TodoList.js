import React from 'react';
import './todolist.css';

const TodoList = () =>
  <div>
    <h1 className="todolists">To-do list</h1>
    <ol>
      <h5><b>LOGIC</b></h5>
      <li><b>Сделать теги отдельными, а не одной строкой</b></li>
      <li><b>Сделать сингловые изображения нормально открываемыми не только по линку, но и напрямую</b></li>
      <li><b>Поиск по тегам</b></li>
      <h5><b>LAYOUT</b></h5>
      <li>Хедер/футер</li>
      <li>Главная страничка</li>
      <li>Сделать нормальную страничку сингловых изображений</li>
      <h5><b>FUTURE IDEAS WHEN I'LL FINISH FRONTEND AND WILL STUDY NODE.JS</b></h5>
      <li><i>Профили</i></li>
      <li><i>Оценки на фотках</i></li>
      <li><i>Комменты на фотках</i></li>
      <h5><b>THINGS ALREADY DONE</b></h5>
      <li><del>Разобраться с неработающими ссылками на отдельные изображения</del></li>
      <li><del>Модалки или отдельные окошки для фулсайз картинок (стоит попробовать оба)</del></li>
      <li><del>Теги</del></li>
    </ol>
  </div>

export default TodoList