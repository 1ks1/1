== Git setting ==

  В состав Git'а входит утилита git config, которая позволяет просматривать и устанавливать параметры, контролирующие все аспекты работы Git'а и его внешний вид. Эти параметры могут быть сохранены в трёх местах:

  Файл /etc/gitconfig содержит значения, общие для всех пользователей системы и для всех их репозиториев. 
Если при запуске git config указать параметр --system, то параметры будут читаться и сохраняться именно в этот файл.
Файл ~/.gitconfig хранит настройки конкретного пользователя. Этот файл используется при указании параметра --global.
Конфигурационный файл в каталоге Git'а (.git/config) в том репозитории, где вы находитесь в данный момент. 
Эти параметры действуют только для данного конкретного репозитория. 
Настройки на каждом следующем уровне подменяют настройки из предыдущих уровней, 
то есть значения в .git/config перекрывают соответствующие значения в /etc/gitconfig.

В системах семейства Windows Git ищет файл .gitconfig в каталоге 
$HOME (C:\Documents and Settings\$USER или C:\Users\$USER для большинства пользователей).

 settings:
$ git config --global user.name "Vasilij_Pupkin"
$ git config --global user.email Vasilij@example.com
 select default t editor:
$ git config --global core.editor emacs
git config --list, чтобы показать настройки
 или 
 $ git config user.name
выводит Vasilij_Pupkin
  можно так же:
$ git config --global color.ui true
 можно раскрасить:
color.branch
color.diff
color.interactive
color.status
в: normal, black, red, green, yellow, blue, magenta, cyan и white
так же: bold, dim, ul, blink и reverse
  типа:
  $ git config --global color.diff.meta “blue black bold”
Установка отображения unicode
По умолчанию, git будет печатать не-ASCII символов в именах файлов в виде восьмеричных последовательностей \nnn. Что бы избежать нечитаемых строк, установите соответствующий флаг.

git config --global core.quotepath off

  Чтобы удалить учетку GIT из под WIN:
Перейдите к: Control Panel -> User Accounts -> Manage your credentials -> Windows Credentials
В Generic Credentials есть некоторые учетные данные, связанные с Github,
Нажмите на них и нажмите "Remove".



===GIT===
  Инициализируем папку для Git репозитория. Это нужно сделать только один раз для каждого проекта.
  Переходим в нужную папку и ..:
git init
  Добавляем все новые и измененные файлы:
git add README.md
  или
git add .
  Помечаем все новые и измененные файлы сообщением (commit)
git commit -m "comment"
  Связываем папку с удаленным репозиторием:
git remote add origin https://github.com/1ks1/1.git
  Закачиваем код на удаленный репозиторий
git push -u origin master
--------- SVN ------------------------
svn chekaut http://tc.geeksforles.net/svn-repository/
  
svn add ...
svn dell ...

svn commit -m "komment" / scn ... commit -m "comment"

svn update
svn status -

svn log
svn info
