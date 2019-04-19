# Сценарий 🚀

## Кои сме ние? - Любо

Здравейте! Аз съм Любо Любчев, а аз съм Симо Александров.

Ние сме от 10 клас и сме от МГ "Баба Тонка" в град Русе. Днес ще ви представим нашия проект наречен **LuncherBox**.

## Проблемът - Любо

Случвало ли ви се е да седнете на някое заведение и да ви се наложи да чакате над 20-30 минути - да дойде сервитьор да ви обслужи. 

На мен и Симо ни се е случвало много пъти, това ни мотивира да измислим решение. 

Освен чакането от страната на клиентите, много често се налага сервитьора да чакат вас, защото не сте си избрали какво да поръчате.

Заедно с вече упоменатите проблеми, със Симо забелязахме още нещо - собствениците на ресторантите губят известна сума пари за сервитьори, като целия този процес може да бъде почти автоматизиран, съответно ще има спад на разходите.

## Решението - Симо

Решението е LuncherBox.

Та какво е LuncherBox?

Това е красиво и бързо уеб интерактивно меню, чрез което клиентите на ресторанти ще могат да поръчват по-бързо храната си, а сервитьорите - ще бъдат уведомени мигновенно за всяка нова поръчка без излишно разхождане в ресторанта.

Собствениците на ресторантите ще заплащат месечен абонамент, чрез който предоставят достъп на клиентите си до интерактивното меню.

Освен доволни клиенти, собствениците на заведението ще спестяват пари, чрез свеждане на нуждата от сервитьори до минимум.

## Функции - Любо

Какво предоставя нашото приложение?

- Интуитивен интерфейс.
- Админ панел, чрез който може мигновенно да се променя менюто.
- Проследяване на поръчките в реално време. 
- Напълно уеб базирано - не е нужно да се тегли.
- Клиентите могат да овкусят поръчките си по техен избор.
- Също така е PWA и е изградено с най-новите технологии.

## Технлогии - Симо

Както виждате, използваме голяма съвкупност от технологии и сега на кратко ще ви обясня за тях.

- TypeScript  (js on steroids, used on the backend and frontend)
- React.js + Next.js = React SSR
- Ant Design = UI library
- node + express.js = backend server, 
- TypeORM = връзка с база от данни (ORM) 
- Socket.io = Realtime връзка, чрез websockets 
- MariaDB (MySQL) = база от данни
- Redis = кеш за query-та + сесии 
- Nginx = web server и reverse proxy
- Docker = containerization
- Jest = testing (90+% code coverage)
- passport.js = authentication 

## Архитектура - Любо

Нашият ментор от САП ни препоръча архитектурата на приложението да бъде мулти-тенънт. Ще използваме съвкупността от k8s и Docker идеята е, че всеки ресторант ще получи свой deployment, който ще бъде управляван от Master node-а на k8s.

## Демо

- Landing page
- Admin panel
  - добавяне на категория
  - редактиране на категория
  - изтриване на категория
  - добавяне на продукт
  - редактиране на продукт
  - изтриване на продукт
  - Order page
- Customer panel - отваряне в browser и създаване на PWA
  - Category page
  - Product page
  - Cart page
    - Place order
  - Order history
    - показване на notification (accepted)
    - затваряне на App-а и показване на notification (finished)

## Бизнес модел - Симо

Както вече споменахме, ресторантите ще заплащат месечен абонамент, като в замяна на това получват  персонализирано интерактивно меню, което не изисква никакъв допълнителен hardware. 

## Pricing plan - Симо

Ето тук може да видите следните примери за ценови разписи, базирани на размерите на ресторантите.


## Roadmap - Любо

През последните 5 месеца сме минали през research, развиване на прототип и планираме да го изпробваме в ресторанти през лятото на 2019.

## Конкуренция - Симо

Голяма част от конкуренцията изискват покупката на отделни устройства на всяка маса - таблет, специален екран вграден в масата или други, съответно началната инвестиция е твърде голяма. Също така почти всички имаха ужасен интерфейс.

Ние разрешаваме тези проблеми като създадохме красиво уеб приложение, което може да използва от всякакъв вид устройства, стига да могат да отварят уеб страници.

 ## Какво научихме? - Любо

През периода на разработка, изпробвахме голям набор от технологии и принципи. Ето тук може да ги видите. Например:

- Научихме Advanced React Patterns (Render Props, HOCs, Hooks)
- Използвахме TypeScript, което ни улесни живота
- Docker
- Authentication
- Caching
- git workflow

## Conclusion and future - Симо

За в бъдеще искаме да имплементираме много допълителни функции, като плащане чрез карта и крипто валута и добавяне на i18n.

Luncher Box - Интерактивно Меню ще спести много време на клиентите на заведения, като им предостави онлайн интерактивно меню с лесен за използване интерфейс.

Ще го изпробваме в ресторанти в Русе, като вече имаме 2 заинтересовани клиента.

С две думи, можем да кажем, че приложението има огромен потенциал.

## Delirium Products - Любо

Delirium Products е отбор от двама 16 годишни, който съществува от вече 1 година. Занимаваме се с full stack web и mobile development от половин година (това е нашия втори уеб проект), но имаме и опит с desktop приложения.
