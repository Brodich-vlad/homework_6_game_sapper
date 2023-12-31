import imgBomb_1 from '../img/bomb.jpg';
import imgBomb_2 from '../img/bomb_1.jpg';
import imgBomb_3 from '../img/mine.jpg';
import imgBomb_4 from '../img/mine-icon.png';

export  const dataPages =[
    {
        id:'lutsk',
        title:'луцьк',
        btnCoords:'119,52,175,32,201,92,146,118,112,57',
        info:"Луцьк — місто обласного значення на заході України, адміністративний центр Волинської області та Луцького району. Історичний, релігійний, політичний, освітній, промисловий та економічний центр Волині. Під час російського вторгнення в Україну, російські війська двічі завдали ракетного удару по Луцькому військовому аеродрому: 24 лютого та 11 березня. Ці атаки належали до серії ударів по українських військових об'єктах. 27 березня ворог атакував ракетами луцьку нафтобазу. 22 жовтня було завдано ракетного удару по об'єкту енергетичної інфраструктури.",
        
        infoLink:'https://uk.wikipedia.org/wiki/%D0%9B%D1%83%D1%86%D1%8C%D0%BA#',

        infoGame:"Простий рівень гри. Небезпечні ділянки складають приблизно 10%.",
        img:[imgBomb_1,imgBomb_2],
        

        paramGame:{numCol:8, maxMines:.1, colSize:5, numTerms:8}
    },
    {
        id:'rivne',
        title:'рівне',
        btnCoords:'193,37,220,40,263,65,249,93,246,114,206,132,173,142,175,116,207,104,210,73',
        info:'У 2022 році, з початком російського вторгнення в Україну, місто почало страждати від обстрілів. 25 лютого 2022 року було завдано ракетного удару по аеропорту «Рівне». 14 березня 2022, Рівне вперше постраждало від ракетного удару, а саме: ворог влучив у телевежу. За словами голови Рівненської ОДА Віталія Коваля загинуло 20 людей. Хоча російські війська і використовували територію Білорусі для наземної атаки на Україну, кордон з Рівненською областю вони не перетинали.',

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A0%D1%96%D0%B2%D0%BD%D0%B5',

        infoGame:"Простий рівень гри. Небезпечні ділянки складають приблизно 10%.",
        img:[imgBomb_1,imgBomb_2],

        paramGame:{numCol:8, maxMines:.1, colSize:5, numTerms:8}
    },
    {
        id:'zhytomyr',
        title:'житомир',
        btnCoords:'285,64,326,69,334,136,345,166,328,185,319,169,270,171,269,147,256,126,264,84',
        info:'Житомир — місто на півночі України, розташоване на річці Тетерів. З початком російського вторгнення в Україну, в 2022 році Житомир почав страждати від ракетних обстрілів. 24 лютого о 5:40 ранку ракетним ударом було обстріляно військовий аеродром Озерне у передмісті. Окупаційні війська pосії застосували ракетні комплекси 9К720 «Іскандер», розташовані в Білорусі, для удару по цивільному аеропорту Житомир. 1 березня російські війська вдарили по житловому сектору міста. На місто було скинуто кілька бомб з жертвами серед цивільного населення. 2 березня окупанти обстріляли Обласний перинатальний центр, також ворог атакував приватний сектор міста. 4 березня російські окупанти завдали ракетного або бомбового удару по 25-й житомирській школі. 8 березня окупанти нанесли черговий удар, було повністю зруйновано гуртожиток.',
        infoLink:'https://uk.wikipedia.org/wiki/%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80',

        infoGame:"Простий рівень гри. Небезпечні ділянки складають приблизно 10%.",
        img:[imgBomb_1,imgBomb_2],
        paramGame:{numCol:8, maxMines:.15, colSize:4, numTerms:8}
    },
    {
        id:'кyiv',
        title:'київ',
        btnCoords:'359,76,372,90,379,114,395,126,399,136,423,136,428,144,420,165,401,172,379,196,348,212,341,180,353,167,341,104,337,80',
        info:'Київ — столиця та найбільше місто України. Військова агресія російської федерації як частина російського вторгнення в Україну тривала на околицях та в самому місті з 24 лютого по 2 квітня 2022 року. Суповоджувалася масованими ракетними, авіаційними та артилерійськими обстрілами та спричинила тяжкі воєнні злочини та злочини проти людства на окупованих територіях у цей період.',
        infoLink:'https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame:{numCol:10, maxMines:.15, colSize:5, numTerms:10}
    },
    {
        id:'сhernihiv',
        title:'чернігів',
        btnCoords:'468,18,464,31,455,44,451,94,460,118,460,130,438,138,423,126,405,127,399,117,379,83,375,63,399,32,427,33',
        info:"Чернігів — місто України, обласний центр Чернігівської області. Місто-герой. 24 лютого 2022 року росія розпочала повномасштабне вторгнення в Україну. російські війська підступили до міста, та, не маючи змоги його захопити, почали масований обстріл його цивільної інфраструктури авіацією та артилерією. 6 березня 2022 року Президент України Володимир Зеленський з метою відзначення подвигу, масового героїзму та стійкості громадян, виявлених у захисті своїх міст під час відсічі збройної агресії російської федерації проти України, присвоїв Чернігову почесну відзнаку «Місто-герой України». Хоча місто і не знаходилося в тимчасовій окупації, це були чи не найважчі часи в історії Чернігова. Деякий час місто знаходилося у кільці, російські війська намагалися пробитися до міста. Але усі спроби було успішно пригнічені зусиллями сміливих захисників міста-героя. Але проти регулярних обстрілів та бомбардувань нічого вдіяти не вдавалось. Страждали як об'єкти інфраструктури, так і житлові будинки.Чернігів став одним з найбільш зруйнованих міст України після повномасштабного вторгнення російської федерації в Україну.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame:{numCol:15, maxMines:.2, colSize:5, numTerms:15}
    },
    {
        id:'sumy',
        title:'суми',
        btnCoords:'473,34,494,45,501,58,499,77,503,88,529,88,541,104,545,125,549,136,529,146,517,144,505,126,485,132,469,125,468,107,460,92,465,74,463,42',
        info:'Суми — місто обласного значення в північно-східній частині України. З початком pосійського вторгнення в Україну 24 лютого російські окупаційні війська підійшли до міста з північно-східного напрямку, дорогою від села Юнаківка близько 7 ранку, після чого почалися бої за місто. У Сумах чули вибухи та постріли.',

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A1%D1%83%D0%BC%D0%B8',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        
        paramGame: {numCol:15, maxMines:.18, colSize:5, numTerms:15}
    },
    {
        id:'кharkiv',
        title:'харків',
        btnCoords:'557,135,582,136,609,127,633,152,630,188,625,190,625,199,607,216,591,231,581,215,545,203,557,182,535,155,555,144,543,145,557,443',

        info:"Харків  — місто України. Розташоване на північному сході України, Слобожанщині, науковий центр України. У ході широкомасштабного російського вторгнення 2022 року Харків зазнав масових бомбардувань. Попри запевнення російської влади не обстрілювати невійськові об'єкти, ворожі війська продовжували цілеспрямовано знищувати цивільну інфраструктуру. Вже станом на 28 лютого, у Харкові було зруйновано 90 будинків мирних мешканців. 1 березня 2022 року російські окупаційні війська обстріляли центр Харкова, зокрема великий вибух стався на площі Свободи біля будівлі ОДА, друга ракета влучила в саму будівлю. Загинули не менше 24 людей. Згодом, близько 16:00 російські ракети влучили у міську лікарню Харкова. 6 березня 2022 року президент Володимир Зеленський надав Харкову звання міста-героя України «за подвиг, масовий героїзм та стійкість громадян, виявлених у захисті Харкова під час відсічі збройної агресії російської федерації проти України». Після деокупації селища Циркуни у травні 2022-го року інтенсивність обстрілів зменшилась, але рашисти продавжували гатити по місту ракетами, переважно комплекса С-300.",
        infoLink:'https://uk.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:15, maxMines:.18, colSize:5, numTerms:20}
    },
    {
        id:'luhansk',
        title:'луганськ',
        btnCoords:'643,146,649,146,689,161,701,162,705,186,700,196,714,259,697,260,692,252,661,228,659,212,651,203,648,193,640,187',
        info:"Луганськ (у 1935—1958 і 1970—1990 — Ворошиловград, сучасна назва — з 4 травня 1990) — місто на сході України. На початок широкомасштабного російського вторгнення в Україну, Луганськ перебував в тимчасовій окупації. Готуючись до поновлення активної фази бойових дій, в середині лютого 2022 року російські війська влаштовують провокації, під приводом яких оголошують у Луганську та окупованій частині області незаконну примусову «мобілізацію» до лав діючих в регіоні незаконних терористичних збройних формувань. З поновленням активної фази бойових дій, ЗСУ починаються уражати російські військові об'єкти на території міста. 10 липня 2022 року в Луганську пролунали вибухи на російських військових складах. 13 липня 2022 року, вночі, ЗСУ нанесли авіаудар, внаслідок якого було розбито частину ППО російських проксі-військ та детонування снарядів на військовому арсеналі. Система ППО окупантів не змогла цьому протидіяти.",
        infoLink:'https://uk.wikipedia.org/wiki/%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D1%8C%D0%BA',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:15, maxMines:.2, colSize:5, numTerms:30}
    },
    {
        id:'donetsk',
        title:'донецьк',
        btnCoords:'635,198,654,222,654,234,688,266,669,294,669,310,635,332,625,311,633,300,607,270,617,261,607,228,623,216',


        info:"Донецьк — місто на сході України, адміністративний центр Донецької області і Донецького району. З 2014 року перебуває під окупацією російських військ, якими місто було проголошено столицею квазідержавного маріонеткового утворення «ДНР».",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D1%8C%D0%BA',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:15, maxMines:.2, colSize:5, numTerms:30}
    },
    {
        id:'dnipro',
        title:'дніпро',
        btnCoords:'539,210,576,221,589,243,600,236,608,259,597,262,598,276,577,264,540,268,542,301,481,304,479,283,493,262,496,228,516,224,517,219',
        info:"Дніпро — місто в Україні на обох берегах р. Дніпро. Під час російського вторгнення в Україну місто почало страждати від ракетних обстрілів крилатими ракетами російської армії. Вночі 6 квітня російські військові здійснили перший такий обстріл та завдали кілька ударів по Дніпровщині: влучили в нафтобазу та завод. Нафтобазу з пальним знищено. 15 липня 2022 Росія завдала ракетний удар по місту та вбила трьох цивільних. 3 вересня о 2-й ночі українські військові збили всі 5 ракет «Калібр», що були запущені по Дніпру. 29 вересня 2022 року росіяни двічі нанесли ракетних ударів по місту Дніпро.",
        infoLink:'https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:10, maxMines:.12, colSize:5, numTerms:20}
    },
    {
        id:'poltava',
        title:'полтава',
        btnCoords:'441,148,467,135,487,142,501,135,514,154,525,153,531,166,548,183,535,202,510,211,491,223,479,210,468,202',
        info:'Полта́ва — місто обласного значення в Україні, важливий культурний центр, великий транспортний вузол. З початком російського вторгнення, 26 лютого російські війська завдали поодиноких авіаційних ударів у околицях Сум, Полтави, Маріуполя. Протягом війни набув великої популярності мем «Полтавський палій». Через бойові дії, до Полтави були релоковані такі навчальні заклади як Луганський національний університет імені Тараса Шевченка, Донецький обласний спеціалізований коледж спортивного профілю ім. С. Бубки, а також частина персоналу та потужностей Харківського національного університету імені Каразіна.',

        infoLink:'https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_2],
        paramGame: {numCol:10, maxMines:.12, colSize:5, numTerms:20}
    },
    {
        id:'сherkasy',
        title:'черкаси',
        btnCoords:'433,154,471,218,457,224,447,218,426,225,413,238,385,239,365,256,351,220,404,199,410,176,427,172',
        info:'Черкаси — місто, обласний і районний центр в Україні, промисловий центр, значний культурний та освітній осередок. З початком російського вторгнення у 2022 році місто не опинилося на лінії фронту або у прифронтовій зоні, але зазнавало ударів крилатими ракетами російської армії. Так, 26 червня район Черкас було уражено двома ракетами, внаслідок чого, загинула 1 людина і отримало поранення 5, була пошкоджена інфраструктура.',
        infoLink:'https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D0%B8',

        infoGame:"Простий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_2],
        paramGame: {numCol:8, maxMines:.12, colSize:5, numTerms:10}
    },
    {
        id:'kropyvnytskyi',
        title:'кропивницький',
        btnCoords:'475,224,487,231,489,244,484,254,485,267,437,295,431,277,401,272,365,283,353,272,385,246,419,244,430,232,447,226,463,229',
        info:"Кропивницький — місто в Україні. З початком широкомасштабного вторгнення pосії в України у 2022 році, місто почало страждати від ракетних обстрілів російської армії. Зранку 1 березня російські окупанти обстріляли аеродром Канатове поблизу Кропивницького, намагаючись зруйнувати об'єкти інфраструктури. 12 березня російські війська атакували аеродром біля залізничної станції Канатове, внаслідок чого загинуло 7 військових. Зранку 23 липня прилетіло 13 ракет (8 ракет «Калібр» морського базування та 5 ракет Х-22 з літака ТУ-22М3). Ворог обстріляв військовий аеродром та залізничний об'єкт. 19 поранених та 3 загиблих. Повітряні тривоги в Кропивницькому звучали майже щоденно.",
        infoLink:'https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%BE%D0%BF%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_2],
        paramGame:{numCol:10, maxMines:.16, colSize:5, numTerms:20}
    },
    {
        id:'vinnitsa',
        title:'вінниця',
        btnCoords:'278,182,318,176,321,192,338,194,337,210,357,259,348,270,345,280,325,278,298,285,271,261,261,244,261,222,276,213',
        info:'Вінниця — місто в Україні— місто на берегах Південного Бугу.Під час російського вторгнення в Україну Вінниця зазнала ракетних обстрілів.РФ завдала ракетного удару по аеропорту «Вінниця» в Гавришівці 6 березня 2022. 16 березня 2022 року приблизно о 4:30 був завданий удар по комплексу телевежі. 25 березня, близько 16.30, росіяни завдали ракетного удару по території Командування Повітряних Сил ЗС України у Вінниці. Загарбники запустили всього шість крилатих ракет. Кілька з них збила українська система протиповітряної оборони, але частина влучила в будівлі командування. 14 липня 2022 року росія нанесла ракетний удар по центральній площі лівобережної Вінниці, в результаті якої понад 200 осіб отримали поранення різних ступенів тяжкості, і ще 27 людей, з яких 3 дитини, загинули. Напад був здійснений підводними човнами з акваторій Чорного моря ракетами «Калібр».',
        infoLink:'https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_2],
        paramGame: {numCol:10, maxMines:.15, colSize:5, numTerms:20}
    },

    {
        id:'кhmelnytskyi',
        title:'хмельницький',
        btnCoords:'247,129,262,154,261,176,269,182,266,197,268,210,253,216,249,244,221,253,210,245,206,224,212,195,216,146',
        info:"Хмельни́цький — місто в Україні, адміністративний центр Хмельницької області і Хмельницького району. Пізно ввечері, приблизно о 23:50 29 березня, під час повітряної тривоги, хмельничани почули звуки вибухів. Місто вперше з часу повномасштабної вторгнення зазнало ракетного удару. 25 червня у Хмельницькій області силами ППО було збито дві російські ракети. Уламки однієї з ракет впали у лісі в Кам'янець-Подільському районі. 24 липня над Хмельниччиною силами ППО було збито 3 крилаті ракети російської армії",
        infoLink:'https://uk.wikipedia.org/wiki/%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%.",
        img:[imgBomb_1,imgBomb_2],
        paramGame: {numCol:10, maxMines:.12, colSize:5, numTerms:20}
    },

    {
        id:'ternopil',
        title:'тернопіль',
        btnCoords:'206,145,202,171,200,224,202,247,155,222,149,182,178,161,179,154',

        info:"Тернопіль  — місто в Україні, політико-адміністративний, економіко-діловий, релігійний та культурний центр Тернопільської області. Один із трьох головних центрів історико-географічного регіону Галичина. Головне місто Галицького Поділля. У 2022 році під час російського вторгнення до України місто та Тернопільщина загалом почали страждати від ракетних обстрілів. Перші 39 днів повномасштабної війни минули у місті спокійно. 3 квітня російська ракета уразила об'єкт критичної інфраструктури міста, але обійшлося без людських жертв.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C',

        infoGame:"Легкий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет. Вдалого розмінування!",
        img:[imgBomb_1,imgBomb_1],
        paramGame: {numCol:8, maxMines:.15, colSize:5, numTerms:10}
    },
    {
        id:'lviv',
        title:'львів',
        btnCoords:'121,109,139,120,138,126,162,135,170,156,133,184,126,201,93,209,85,226,65,214,52,178,90,131',

        info:"Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади, національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол, вважається столицею Галичини та центром Західної України. Перед початком повномасштабного російського вторгнення в Україну, з міркувань безпеки, до Львова почали переміщуватися посольства та консульства різних країн, які повернулися до столиці лише влітку 2022 року. Зранку 18 березня 2022 року Львів вперше з початку російського вторгнення зазнав ракетного удару. 26 березня о 20 годині був здійснений ще один ракетний обстріл по Львівському бронетанковому заводу. 18 квітня 2022 року черговий ракетний удар російської армії вбив сімох і поранив одинадцять мешканців Львова. 3 травня російська армія здійснила ракетний обстріл електропідстанцій, внаслідок чого 3 людини було поранено, а у місті відбулися короткочасні перебої електроенергії та водопостачання.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2',

        infoGame:"Легкий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет. Вдалого розмінування!",

        img:[imgBomb_1,imgBomb_1],
        paramGame: {numCol:8, maxMines:.15, colSize:5, numTerms:10}
    },
    {
        id:'uzhhorod',
        title:'ужгород',
        btnCoords:'40,207,55,211,61,224,121,264,124,286,107,292,53,280,20,248',

        info:"Ужгород  — місто, обласний центр Закарпатської області, центр Ужгородської міської громади та Ужгородського району. Розташоване на річці Уж, за 811 км від Києва, на кордоні зі Словаччиною. У 2022 році, з початком російського вторгнення в Україну до Ужгорода стала прибувати велика кількість вимушених переселенців із регіонів України, де велися активні бойові дії. Станом на квітень, таких людей у місті проживало близько 50 000.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4',

        infoGame:"Легкий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет. Вдалого розмінування!",

        img:[imgBomb_1,imgBomb_1],
        paramGame: {numCol:8,  maxMines:.1, colSize:5, numTerms:8}
    },
    {
        id:'ivano-frankivsk',
        title:'івано-франківськ',
        btnCoords:'140,185,150,225,171,238,168,255,136,277,133,303,127,261,91,229,96,211,132,201,136,186',

        info:"Івано-Франківськ — місто в Україні, обласний центр Івано-Франківської області, економічний і культурний центр Прикарпаття. З початком широкомасштабного вторгнення росії до України місто починає страждати від обстрілів російської армії. У перший день, 24 лютого, російські війська завдали ракетного удару по військовому аеродрому в Івано-Франківську.11 березня російські війська завдали ракетного удару по цивільному аеропорту Івано-Франківська. Станом на 28 квітня 2023 року на цій війні загинуло декілька десятків осіб, уродженців міста Івано-Франківська.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA',

        infoGame:"Легкий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет. Вдалого розмінування!",
        img:[imgBomb_1,imgBomb_1],
        paramGame: {numCol:8, maxMines:.1, colSize:5, numTerms:8}
    },
    {
        id:'сhernivtsi',
        title:'чернівці',
        btnCoords:'176,243,198,255,219,259,256,250,262,263,208,290,140,308,142,278,173,256',

        info:"Чернівці — адміністративний, політичний і релігійний центр Чернівецької області, важливий культурний та науково-освітній осередок України. 20 лютого 2014 року РФ розпочала неоголошену війну проти України. За перші 8 років війни Чернівці не зазнали руйнувань. Але деякі чернівчани загинули в лавах української армії в боях на сході України. 24 лютого 2022 року в Чернівцях, як і на решті території України, після початку широкомасштабного російського вторгнення в Україну оголошено воєнний стан. З постраждалих від бойових дій областей в місто прибула велика кількість вимушених переселенців, які отримали прихисток і допомогу. Станом на 14 березня їх кількість складала 45 000",
    
        
        infoLink:'https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96',

        infoGame:"Легкий рівень гри. Небезпечні ділянки складають приблизно 10%. Є залишки ракет. Вдалого розмінування!",

        img:[imgBomb_1,imgBomb_1],

        paramGame: {numCol:8,maxMines:.1,colSize:5, numTerms:8}
    },
    {
        id:'оdesa',
        title:'одеса',
        btnCoords:'326,284,343,285,362,289,392,329,405,345,403,350,410,377,349,464,333,464,310,476,291,463,318,410,326,383,366,388,342,339,327,323,330,300,319,292',
        info:"Одеса — місто в Україні. Третє найбільше місто країни після Києва та Харкова. Розташоване на узбережжі Чорного моря. Найбільший морський торговий порт держави. Культурно-освітній, туристичний, торговий, транспортний центр. 23 квітня 2022 року російські війська обстріляли Одесу крилатими ракетами. Вони зруйнували як військову інфраструктуру міста, і житлові будинки, вбивши вісім людей (у тому числі 3-місячне немовля) і поранивши ще 18 людей. 2 травня 2022 високоточні російські ракети вразили житловий будинок в Одесі, вбили 14-річного юнака і поранили 17-річну дівчину. 7 травня російські війська обстріляли Одесу шістьма ракетами стратегічної авіації. 9 травня росіяни обстріляли Одесу 9 ракетами та вбили одну людину.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D1%81%D0%B0',

        infoGame:"Середній рівень гри. Небезпечні ділянки складають приблизно 15%. Є залишки ракет та морські міни. Вдалого розмінування!",

        img:[imgBomb_1,imgBomb_4],
        paramGame: {numCol:10, maxMines:.15, colSize:5, numTerms:20}
    },
    {
        id:'мykolaiv',
        title:'миколаїв',
        btnCoords:'371,288,401,279,426,283,435,301,470,290,479,328,474,348,452,356,431,383,417,376,409,354,415,342,395,321',

        info:"Миколаїв  — місто в Україні, обласний центр Миколаївської області та адміністративний центр Миколаївського району.24 лютого 2022 року, в день російського вторгнення в Україну, почалися бої за Миколаїв.1 березня російські окупаційні сили, що спробували ввійти в Миколаїв, отримавши потужний опір, почали тікати з Миколаєва. 2 березня біля села Калинівка ворог намагався пройти до Миколаєва, але українська артилерія розбила міст, і частина колони відступила до Херсону. 7 березня війська вторгнення здійснили спробу захопити аеропорт Миколаєва, однак були вибиті. Згодом українські сили відтіснили російську армію від міста. Окупанти почали уражати цивільні об'єкти Миколаєва артилерією та крилатими ракетами.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",

        img:[imgBomb_1,imgBomb_3],

        paramGame: {numCol:15, maxMines:.15, colSize:5, numTerms:20}
    },
    {
        id:'kherson',
        title:'херсон',
        btnCoords:'485,312,516,312,544,344,540,357,562,381,534,395,510,390,502,402,463,410,436,389,458,359,480,352',

        info:"Херсон — місто на півдні України, адміністративний центр Херсонської області. Розташоване на правому високому березі Дніпра. Під час російсько-української війни бойові дії в районі міста почалися з перших днів повномасштабного вторгнення pосійської федерації на територію України, 24 лютого. 1 березня 2022 року Херсон окупований російськими військами. Окупаційні сили почали влаштовувати провокації з ціллю подальшої анексії регіону. У місті пройшла серія масштабних мітингів з гаслами «Херсон — це Україна» проти російської окупації. Протягом наступних місяців ЗСУ завдавали численні удари по складах боєприпасів та командних пунктах російських військ у Херсоні. Жителі міста зазнали репресій від окупаційних військ. Найбільших репресій зазнали проукраїнські громадяни та ветерани АТО. 11 листопада в місто увійшли Збройні сили України. Херсон був звільнений після 256 днів окупації.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:15, maxMines:.18, colSize:5, numTerms:20}
    },
    {
        id:'zaporizhzhia',
        title:'запоріжжя',
        btnCoords:'545,271,578,270,591,283,603,285,624,301,615,312,627,329,570,378,546,355,550,342,524,310,550,303',

        info:"Запоріжжя  — місто в Україні, адміністративний центр Запорізької області. Під час російського вторгнення в Україну місто потрапило під удар російських окупаційних військ. 27 лютого 2022 року на південних околицях Запоріжжя точилися бої. 16 березня 2022 року російські окупанти завдали ракетний удар по інфраструктурі залізничної станції Запоріжжя. 26 квітня 2022 року вранці на територію одного з підприємств міста влучили дві російські керовані ракети «Калібр».  28 квітня 2022 року, російські окупанти завдали ракетного удару по Запоріжжю із застосуванням ракети Х-55 класу «повітря-земля». 25 травня 2022 року російські окупаційні війська запустили чотири крилаті ракети по місту Запоріжжя. 13 липня 2022 року російські загарбники двома крилатими ракетами завдали удару по одному з підприємств у Дніпровському районі міста Запоріжжя. 22 березня 2023 року росіяни атакували шістьма ракетами два дев'ятиповерхові житлові будинки.",

        infoLink:'https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%. Є залишки ракет та протитанкові міни.",
        img:[imgBomb_1,imgBomb_3],
        paramGame: {numCol:15, maxMines:.18, colSize:5, numTerms:25}
    },
    {
        id:'simferopol',
        title:'сімферополь',
        btnCoords:'513,396,549,398,585,435,625,420,632,429,624,456,594,456,539,511,509,503,514,471,463,452,508,411,507,402',

        info:'Сімферополь — місто в Україні, столиця Автономної Республіки Крим. З березня 2014 року місто тимчасово окуповане росією.',

        infoLink:'https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C',

        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%.",
        img:[imgBomb_3,imgBomb_4],
        paramGame: {numCol:15, maxMines:.15, colSize:5, numTerms:25}
    },
    {
        id:'use-game',
        title:'Користувацька гра',
        infoGame:"Складний рівень гри. Небезпечні ділянки складають приблизно 20%.",
        img:[imgBomb_3,imgBomb_1],
        paramGame: {numCol:8, maxMines:.15, colSize:5, numTerms:8}
    },
]