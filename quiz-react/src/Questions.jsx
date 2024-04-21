let questionsArr = [
	{
		question: 'Когда в России празднуют день ВМФ?',
		answers: ['A 2 августа', 'B 19 марта', 'C 2-е воскресение июля', 'D Посл. воскресение июля'],
		correctAnswer: 'D Посл. воскресение июля',
		correctPollAnswer: 'С',
		incorrectAnswer: ['B 19 марта', 'A 2 августа'],
	},
	{
		question: 'Какой возможности лишен крупье казино?',
		answers: ['A пригладить рукой волосы', 'B снять пылинку с жилет', 'C поправить галстук', 'D достать платок из кармана'],
		correctAnswer: 'D достать платок из кармана',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A пригладить рукой волосы', 'B снять пылинку с жилет'],
	},
	{
		question: 'Какой вопрос, по определению, не требует ответа?',
		answers: ['A Каверзный', 'B Философский', 'C Экзаменационный', 'D Риторический'],
		correctAnswer: 'D Риторический',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Каверзный', 'B Философский'],
	},
	{
		question: 'В каких спортивных состязаниях не используется сетка?',
		answers: ['A баскетбол', 'B регби', 'C бадминтон', 'D метание молота'],
		correctAnswer: 'B регби',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A баскетбол', 'D метание молота'],
	},
	{
		question: 'Кто из перечисленных ниже лиц НЕ является египетским фараоном?',
		answers: ['A Сети', 'B Акхенотеп', 'C Смендес', 'D Имхотеп'],
		correctAnswer: 'D Имхотеп',
		correctPollAnswer: 'D',
		incorrectAnswer: ['C Смендес', 'B Акхенотеп'],
	},
	{
		question: 'Что такое десница?',
		answers: ['A Бровь', 'B Шея', 'C Глаз', 'D Рука'],
		correctAnswer: 'D Рука',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Бровь', 'C Глаз'],
	},
	{
		question: 'В какое море впадает река Урал?',
		answers: ['A Чёрное', 'B Азовское', 'C Средиземное', 'D Каспийское'],
		correctAnswer: 'D Каспийское',
		correctPollAnswer: 'D',
		incorrectAnswer: ['C Средиземное', 'B Азовское'],
	},
	{
		question: '	Кличка основателя группы Коррозия металла',
		answers: ['A Скелет', 'B Паук', 'C Ручейник', 'D Горшок'],
		correctAnswer: 'B Паук',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Скелет', 'D Горшок'],
	},
	{
		question: 'Какое животное имеет второе название — кугуар?',
		answers: ['A Оцелот', 'B Леопард', 'C Пума', 'D Пантера'],
		correctAnswer: 'C Пума',
		correctPollAnswer: 'C',
		incorrectAnswer: ['Леопард', 'Пантера'],
	},
	{
		question: 'Сколько стран входит в состав Великобритании?',
		answers: ['A 4', 'B 6', 'C 3', 'D 1'],
		correctAnswer: 'A 4',
		correctPollAnswer: 'D',
		incorrectAnswer: ['C 3', 'D 1'],
	},
	{
		question: 'Чем на Руси занимался золотарь?',
		answers: ['A Добывал золото', 'B Ковал оружие', 'C Заведовал казной', 'D Чистил отхожие места'],
		correctAnswer: 'D Чистил отхожие места',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Добывал золото', 'B Ковал оружие'],
	},
	{
		question: 'Как в старинной легенде звали дочь богатыря Байкала??',
		answers: ['A Ангара', 'B Лена', 'C Бирюса', 'D Тунгуска'],
		correctAnswer: 'A Ангара',
		correctPollAnswer: 'A',
		incorrectAnswer: ['C Бирюса', 'D Тунгуска'],
	},
	{
		question: 'Необычную серию чего во Франции выпустили с запахом шоколада?',
		answers: ['A Монет', 'B Купюр', 'C Почтовых марок', 'D Банковских карт'],
		correctAnswer: 'C Почтовых марок',
		correctPollAnswer: 'C',
		incorrectAnswer: ['B Купюр', 'A монет'],
	},
	{
		question: 'Какой герой русской классики сделал фальшивый портсигар из найденной на улице дощечки??',
		answers: ['A Чичиков', 'B Раскольников', 'C Дубровский', 'D Человек в футляре'],
		correctAnswer: 'B Раскольников',
		correctPollAnswer: 'B',
		incorrectAnswer: ['D Человек в футляре', 'A Чичиков'],
	},
	{
		question: 'Как называется сказка Андерсена?',
		answers: ['A Кукушка', 'B Аист', 'C Скворец', 'D Соловей'],
		correctAnswer: 'D Соловей',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Кукушка', 'B Аист'],
	},
	{
		question: 'Какую монету называли «пятиалтынный»?',
		answers: ['A 5 копеек', 'B 10 копеек', 'C 15 копеек', 'D 20 копеек'],
		correctAnswer: 'C 15 копеек',
		correctPollAnswer: 'C',
		incorrectAnswer: ['D 20 копеек', 'A 5 копеек'],
	},
	{
		question: 'В каком кинофильме нет сцены на экзамене?',
		answers: ['A Доживем до понедельника', 'B Операция «Ы»', 'C Старик Хоттабыч', 'D Большая перемена'],
		correctAnswer: 'A Доживем до понедельника',
		correctPollAnswer: 'A',
		incorrectAnswer: ['D Большая перемена', 'A Старик Хоттабыч'],
	},
	{
		question: 'Как греки сами называют свою страну?',
		answers: ['A Паллала', 'B Эллада', 'C Колхида', 'D Илиада'],
		correctAnswer: 'B Эллада',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Паллала', 'D Илиада'],
	},

	{
		question: 'Какой цвет получается при смешении синего и желтого?',
		answers: ['A Красный', 'B Зеленый', 'C Фиолетовый', 'D Оранжевый'],
		correctAnswer: 'B Зеленый',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Красный', 'C Фиолетовый', 'D Оранжевый'],
	},
	{
		question: 'Что является символом мира?',
		answers: ['A Голубь', 'B Ворон', 'C Сокол', 'D Соловей'],
		correctAnswer: 'A Голубь',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Ворон', 'C Сокол', 'D Соловей'],
	},
	{
		question: 'Какое животное является символом мудрости?',
		answers: ['A Сова', 'B Лиса', 'C Корова', 'D Слон'],
		correctAnswer: 'A Сова',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Лиса', 'C Корова'],
	},
	{
		question: 'Какой город является столицей Франции?',
		answers: ['A Париж', 'B Лондон', 'C Рим', 'D Берлин'],
		correctAnswer: 'A Париж',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Лондон', 'C Рим'],
	},
	{
		question: 'Какой инструмент используется для измерения времени?',
		answers: ['A Часы', 'B Линейка', 'C Весы', 'D Термометр'],
		correctAnswer: 'A Часы',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Линейка', 'C Весы'],
	},
	{
		question: 'Какой океан самый большой по площади?',
		answers: ['A Тихий океан', 'B Атлантический океан', 'C Индийский океан', 'D Северный Ледовитый океан'],
		correctAnswer: 'A Тихий океан',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Атлантический океан', 'C Индийский океан'],
	},
	{
		question: 'Какое дерево является символом мудрости?',
		answers: ['A Дуб', 'B Береза', 'C Сосна', 'D Ива'],
		correctAnswer: 'A Дуб',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Береза', 'C Сосна'],
	},
	{
		question: 'Какой город является столицей Италии?',
		answers: ['A Рим', 'B Париж', 'C Лондон', 'D Берлин'],
		correctAnswer: 'A Рим',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Париж', 'C Лондон'],
	},
	{
		question: 'Какое озеро является самым глубоким в мире?',
		answers: ['A Озеро Байкал', 'B Озеро Виктория', 'C Озеро Мичиган', 'D Озеро Танганьика'],
		correctAnswer: 'A Озеро Байкал',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Озеро Виктория', 'C Озеро Мичиган'],
	},
	{
		question: 'Какой цвет получается при смешении красного и синего?',
		answers: ['A Фиолетовый', 'B Зеленый', 'C Оранжевый', 'D Желтый'],
		correctAnswer: 'A Фиолетовый',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Зеленый', 'C Оранжевый'],
	},
	{
		question: 'Какое озеро является самым большим по площади в мире?',
		answers: ['A Озеро Каспийское', 'B Озеро Байкал', 'C Озеро Виктория', 'D Озеро Мичиган'],
		correctAnswer: 'A Озеро Каспийское',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Озеро Байкал', 'C Озеро Виктория'],
	},

	{
		question: 'Кто был первым президентом США?',
		answers: ['A Джордж Вашингтон', 'B Авраам Линкольн', 'C Томас Джефферсон', 'D Джон Ф. Кеннеди'],
		correctAnswer: 'A Джордж Вашингтон',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Авраам Линкольн', 'C Томас Джефферсон'],
	},
	{
		question: 'Когда произошла Великая французская революция?',
		answers: ['A 1789-1799 гг.', 'B 1914-1918 гг.', 'C 1941-1945 гг.', 'D 1812 г.'],
		correctAnswer: 'A 1789-1799 гг.',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B 1914-1918 гг.', 'C 1941-1945 гг.'],
	},
	{
		question: 'Кто был правителем Российской империи во время Первой мировой войны?',
		answers: ['A Николай II', 'B Петр I', 'C Екатерина II', 'D Александр I'],
		correctAnswer: 'A Николай II',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Петр I', 'C Екатерина II'],
	},
	{
		question: 'Какая страна была первой, разработавшей ядерное оружие?',
		answers: ['A США', 'B СССР', 'C Великобритания', 'D Германия'],
		correctAnswer: 'A США',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B СССР', 'C Великобритания'],
	},
	{
		question: 'Какое событие считается началом Второй мировой войны?',
		answers: ['A Нападение Германии на Польшу', 'B Бомбардировка Перл-Харбора', 'C Вступление США в войну', 'D Капитуляция Франции'],
		correctAnswer: 'A Нападение Германии на Польшу',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Бомбардировка Перл-Харбора', 'C Вступление США в войну'],
	},
	{
		question: 'Кто был лидером Российской революции 1917 года?',
		answers: ['A Владимир Ленин', 'B Иосиф Сталин', 'C Лев Троцкий', 'D Николай II'],
		correctAnswer: 'A Владимир Ленин',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Иосиф Сталин', 'C Лев Троцкий'],
	},
	{
		question: 'Какое событие считается началом Первой мировой войны?',
		answers: ['A Убийство Архидука Франц-Фердинанда', 'B Взятие Бреста-Литовска', 'C Подписание Версальского договора', 'D Оккупация Рейнской области'],
		correctAnswer: 'A Убийство Архидука Франц-Фердинанда',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Взятие Бреста-Литовска', 'C Подписание Версальского договора'],
	},
	{
		question: 'A Какая страна была первой, запустившей искусственный спутник Земли?',
		answers: ['A СССР', 'B США', 'C Китай', 'D Франция'],
		correctAnswer: 'A СССР',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B США', 'C Китай'],
	},
	{
		question: 'Какое событие считается концом Холодной войны?',
		answers: ['A Распад СССР', 'B Падение Берлинской стены', 'C Разоружение США и СССР', 'D Подписание Договора о нераспространении ядерного оружия'],
		correctAnswer: 'B Падение Берлинской стены',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Распад СССР', 'C Разоружение США и СССР'],
	},
	{
		question: 'A Кто был лидером Гитлеровской Германии?',
		answers: ['A Адольф Гитлер', 'B Бенито Муссолини', 'C Хирохито', 'D Уинстон Черчилль'],
		correctAnswer: 'A Адольф Гитлер',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Бенито Муссолини', 'C Хирохито'],
	},

	{
		question: 'Какая страна является самой большой по территории?',
		answers: ['A Россия', 'B Канада', 'C Китай', 'D США'],
		correctAnswer: 'A Россия',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Канада', 'C Китай'],
	},
	{
		question: 'Какая страна является самой населенной?',
		answers: ['A Китай', 'B Индия', 'C США', 'D Индонезия'],
		correctAnswer: 'A Китай',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Индия', 'C США'],
	},
	{
		question: 'Какая страна является самой высокогорной?',
		answers: ['A Непал', 'B Бутан', 'C Таджикистан', 'D Перу'],
		correctAnswer: 'A Непал',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Бутан', 'C Таджикистан'],
	},
	{
		question: 'Какая страна является самой влажной?',
		answers: ['A Бразилия', 'B Индонезия', 'C Вьетнам', 'D Колумбия'],
		correctAnswer: 'B Индонезия',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Бразилия', 'C Вьетнам'],
	},
	{
		question: 'Какая страна является самой сухой?',
		answers: ['A Чили', 'B Ливия', 'C Саудовская Аравия', 'D Австралия'],
		correctAnswer: 'B Ливия',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Чили', 'C Саудовская Аравия'],
	},
	{
		question: 'Какая страна является самой плодородной?',
		answers: ['A Украина', 'B Бразилия', 'C Аргентина', 'D Китай'],
		correctAnswer: 'A Украина',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Бразилия', 'C Аргентина'],
	},
	{
		question: 'Какая страна является самой густонаселенной?',
		answers: ['A Монако', 'B Сингапур', 'C Ватикан', 'D Мальта'],
		correctAnswer: 'A Монако',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Сингапур', 'C Ватикан'],
	},
	{
		question: 'Какая страна является самой развитой?',
		answers: ['A Норвегия', 'B Швейцария', 'C Австралия', 'D Германия'],
		correctAnswer: 'A Норвегия',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Швейцария', 'C Австралия'],
	},
	{
		question: 'Какая страна является самой бедной?',
		answers: ['A Центральноафриканская Республика', 'B Мозамбик', 'C Либерия', 'D Мали'],
		correctAnswer: 'A Центральноафриканская Республика',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Мозамбик', 'C Либерия'],
	},
	{
		question: 'Какая страна является самой экологически чистой?',
		answers: ['A Финляндия', 'B Швеция', 'C Норвегия', 'D Исландия'],
		correctAnswer: 'A Финляндия',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Швеция', 'C Норвегия'],
	},

	{
		question: 'Какое животное является символом мудрости в Китае?',
		answers: ['A Дракон', 'B Обезьяна', 'C Панда', 'D Лошадь'],
		correctAnswer: 'A Дракон',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Обезьяна', 'C Панда'],
	},
	{
		question: 'Какое дерево является символом мудрости в Японии?',
		answers: ['A Бамбук', 'B Сакура', 'C Кедр', 'D Клен'],
		correctAnswer: 'C Кедр',
		correctPollAnswer: 'C',
		incorrectAnswer: ['B Сакура', 'A Бамбук'],
	},
	{
		question: 'Какой океан самый маленький по площади?',
		answers: ['A Северный Ледовитый океан', 'B Тихий океан', 'C Атлантический океан', 'D Индийский океан'],
		correctAnswer: 'A Северный Ледовитый океан',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Тихий океан', 'C Атлантический океан'],
	},
	{
		question: 'Какое животное является символом США?',
		answers: ['A Лев', 'B Орел', 'C Медведь', 'D Тигр'],
		correctAnswer: 'B Орел',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Лев', 'C Медведь', 'D Тигр'],
	},
	{
		question: 'Что является символом любви?',
		answers: ['A Роза', 'B Тюльпан', 'C Орхидея', 'D Лилия'],
		correctAnswer: 'A Роза',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Тюльпан', 'C Орхидея', 'D Лилия'],
	},
	{
		question: 'Какой газ является основным компонентом воздуха?',
		answers: ['A Кислород', 'B Азот', 'C Углекислый газ', 'D Водород'],
		correctAnswer: 'B Азот',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Кислород', 'C Углекислый газ', 'D Водород'],
	},
];

const shuffle = (array) => {
	let m = array.length,
		t,
		i;

	// Пока есть элементы для перемешивания
	while (m) {
		// Взять оставшийся элемент
		i = Math.floor(Math.random() * m--);

		// И поменять его местами с текущим элементом
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};

questionsArr = shuffle(questionsArr);

export default questionsArr;
