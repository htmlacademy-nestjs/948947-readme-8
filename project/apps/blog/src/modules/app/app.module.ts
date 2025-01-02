import { Module } from '@nestjs/common';
import { PublicationModule } from '../publication/publication.module';
import { CommentModule } from '../comment/comment.module';
import { LikeModule } from '../like/like.module';
import { BlogCategoryModule } from '../blog-category/blog-category.module';
import { BlogCommentModule } from '../blog-comment/blog-comment.module';

@Module({
  imports: [
    PublicationModule,
    CommentModule,
    LikeModule,
    BlogCategoryModule,
    BlogCommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/*
1.3. Создание новых публикаций в блоге разных видов: видео, текст, цитата, фото, ссылка.
1.4. Просмотр детальной информации о публикации.
1.5. Редактирование публикаций в блоге.
1.6. Удаление публикаций в блоге.
1.7. Загрузка изображений для публикации в блоге.
1.8. Комментирование публикаций в блоге.
1.9. Лайки к публикациям. Подсчёт количества лайков к публикациям.
1.10. Пагинация для публикаций.
1.11. Получение списка публикаций.
1.12. Получение списка публикаций с применением сортировки: по популярности, дате создания, по количеству лайков, по количеству комментариев.
1.13. Репост публикаций.
1.14. Лента пользователя.
1.15. Категоризация публикаций по тегам.
1.17. Поиск публикаций по названию.
*/

 /*
  Создать публикацию (только зарегистрированный пользователь). 5 видов - текст, видео, цитата, фото, ссылка. Начни с самой простой - текста. ДТО-шки и валидация у всех разная, смотри в ТЗ. Автора определять по залогиненному пользователю (вытаскивать из сессии?). Автоматически сохраняется дата создания (сделай вообще общую сущность для этого) и дата публикации ещё - тут получше повникай. 2 состояния - опубликована и черновик. Можно енумка, но лучше булеан.
  Редактировать публикацию (только зарегистрированный пользователь, только свою (по ид))
  Удалить публикацию (только зарегистрированный пользователь, только свою (по ид)), каскадом подчищаются и все связанные с ней комментарии

  Логика репоста... за неё в конце повникай

  Запрос подробной информации о публикации по ид

Запрос списка публикаций - без гарды, лимит 25, вы выборку попадают публикации разных пользоваталей (отдавай, например, последние 25 по дате). И тут же пагинацию на оффсет 25

Запрос публикаций определенного пользователя по его ид. Правила те же, что и для пункта выше

В обе выборки попадают только опубликованные публикации (изПублишед или что-то типа)

Вообще сделай единую ручку гетПаблишБайПарамс. И туда и сортировку, и фильтры. Или пустой объект, если без них.

rdo смотри в тз

Получить список всех своих черновиков - авторизованный пользователь

Ленту реализуй, только если успеешь. Но она точно в этом модуле. По сути массив публикаций.

Лайки - один пользователь, один лайк. Кто лайкнул, тот может и разлайкнуть. Походит на много ко многим. Только к опубликованным публикациям, только авторизованные пользователи.

Комментарии.
Все операции с комментариями - только для авторизованных пользователей. А не, не все.
ДТО смотри в тз. Автор и дата - определяются автоматически.
Связь - один (публикация) ко многим (комментарий) (вроде так)
Удаление комментария по ид, но только если ид его создателя равно ид залогиненного пользователя
Можно запросить комментарии к записи (любой пользователь), по умолчанию 50, остальные по запросу (оффсетом по 50)

Поиск
Идёт по заголовку публикации, достаточно частичного совпадения (like). Любой пользователь. Но только среди изПаблишед тру и не пустой заголовок публикации. Возвращает 20 первых результатов.

Теги
Опциональны. Тег состоит из 1 слова и не может содержать пробелы... В общем требования посмотри в ТЗ,
  */
