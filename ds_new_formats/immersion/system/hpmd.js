window._hpmd = {};

(function () {
	
	/* You may be able to find a tool to generate these descriptions at
	 * http://canopus.hpmdnetwork.ru/editor/
	 * 
	 * If it still exists, just open it in Firefox, copy-and-paste text from
	 * Google.Docs, hit "Convert", select all and paste the results inside
	 * a `.wrapper` block in your description.
	 */
	var formatDescriptions = {
		teaser:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: тизер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Тизер</b> ― баннер-растяжка, расположенный над контентом, в нижней части экрана устройства. При нажатии на тизер в новом окне открывается ссылка на сайт рекламодателя. В тизере или поверх него размещается «крестик» (или любая другая иконка), при нажатии на который баннер полностью исчезает с экрана.</p>'
				+ '<p>Тизер растягивается на всю ширину экрана, сохраняя пропорции.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Подготовьте два изображения следующих размеров:</p><ul><li><p>для смартфонов:<span><br></span>1080х240 '
				+ '(портретная ориентация)<span><br></span>1920х170 (ландшафтная ориентация)<span><br /></span></p></li><li><p>для '
				+ 'планшетов:<span><br></span>1600x208 (портретная ориентация)<span><br></span>2560x225 (ландшафтная '
				+ 'ориентация)</p></li></ul><p>Примечание: если вы собираете баннер для смартфонов и у вас нет '
				+ 'изображения 1920х170, уменьшите соответствующее изображение для планшетов (2560x225) до указанного '
				+ 'размера. Если необходимо, обрежьте поля.</p><p>Старайтесь, чтобы их размер (в байтах) был как '
				+ 'можно меньше. Ограничение на вес баннера ― 150 кБ (для смартфонов) и 300 кБ (для планшетов). '
				+ 'Ограничение включает в себя изображение тизера, кнопку закрытия и код баннера, и отслеживается '
				+ 'отдельно для каждой ориентации устройства. Вам может быть необходимо попробовать различные '
				+ 'форматы и настройки качества. Используйте бесплатные сервисы <a href="http://tinypng.com/" target="_blank">tinypng.com</a> и <a href="http://tinyjpg.com/" target="_blank">tinyjpg.com</a> '
				+ 'для большего сжатия.</p><p>Зайдите в папку <span class="mono">banner/img</span> шаблона и замените '
				+ 'файлы <span class="mono">teaser-portrait.png</span> и <span class="mono">teaser-landscape.png</span> '
				+ 'на новые.</p><p>Если вы использовали формат, отличный от PNG, найдите селекторы <span class="mono">.hpmd-portrait '
				+ '#hpmd-teaser</span> и <span class="mono">.hpmd-landscape #hpmd-teaser</span> в CSS-коде файла '
				+ '<span class="mono">index.html</span> и обновите ссылки на изображения. Убедитесь, что ссылки '
				+ 'по-прежнему начинаются с <span class="mono">./banner/</span>, включая точку и прямой слэш.</p><p>Если '
				+ 'необходимо, обновите CSS для селекторов <span class="mono">.hpmd-portrait #hpmd-close</span> '
				+ 'и <span class="mono">.hpmd-landscape #hpmd-close</span>, чтобы изменить расположение кнопки '
				+ 'закрытия.</p><span><br></span>Проверьте баннер в эмуляторе и убедитесь, что изображения подошли '
				+ 'в обоих ориентациях.'
			+ '</div>'
		,
		'teaser-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: teaser</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Teaser</b> is a small rectangular stripe at the bottom of the screen. A click, or a “tap”, anywhere on the teaser opens an external link in a new tab. A close button, which removes the ad completely, is displayed at the top right corner of the ad.</p>'
				+ '<p>The teaser adapts to different screen sizes by stretching to the available width on the screen, while maintaining its ratio.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Prepare two images of the following dimensions:</p><ul><li><p>for smartphones:<span><br></span>1080х240 '
				+ '(for portrait orientation)<span><br></span>1920х170 (for landscape orientation)<span><br /></span></p></li><li><p>for '
				+ 'tablets:<span><br></span>1600x208 (for portrait orientation)<span><br></span>2560x225 (for '
				+ 'landscape orientation)</p></li></ul><p>Note: if you’re building an ad for smartphones and do '
				+ 'not have 1920х170 image available, please take the corresponding tablet image (2560x225) and '
				+ 'downscale it to the indicated size. Crop excess margins, if necessary.</p><p>Try to keep their '
				+ 'size, in bytes, as low as possible. The limit on the size of the ad is 150 kB (on smartphones) '
				+ 'or 300 kB (on tablets). The restriction includes the teaser image, the close button, and the '
				+ 'ad code itself and is measured separately for each of the device orientations. You may need '
				+ 'to try different image formats and quality settings and choose one with best results. Use the '
				+ 'free <a href="http://tinypng.com/" target="_blank">tinypng.com</a> and <a href="http://tinyjpg.com/" target="_blank">tinyjpg.com</a> services to compress your images even further.</p><p>Go '
				+ 'to <span class="mono">banner/img</span> subfolder of the template and replace <span class="mono">teaser-portrait.png</span> '
				+ 'and <span class="mono">teaser-landscape.png</span> with the new ones.</p><p>If you’ve chosen '
				+ 'an image format other than PNG, search for <span class="mono">.hpmd-portrait #hpmd-teaser</span> '
				+ 'and <span class="mono">.hpmd-landscape #hpmd-teaser</span> rules in the CSS section of your '
				+ '<span class="mono">index.html</span> file and update links to the images accordingly. Make '
				+ 'sure the links start with <span class="mono">./banner/</span>, including the leading dot and '
				+ 'the forward slash, as it was before.</p><p>If necessary, adjust the CSS rules for <span class="mono">.hpmd-portrait '
				+ '#hpmd-close</span> and <span class="mono">.hpmd-landscape #hpmd-close</span> selectors to change '
				+ 'the appearance or position of the close button.</p>Check the ad using an emulator to make sure '
				+ 'the images fit in both orientations.'
			+ '</div>'
		,
		fullscreen:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: Fullscreen</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Fullscreen</b> («фулскрин») ― полноэкранный баннер, который отображается поверх страницы при ее загрузке.</p>'
				+ '<p>В правом верхнем углу фулскрина присутствует «крестик» ― закрывающий элемент, нажатие на который полностью убирает баннер с экрана. Прочие элементы заполняют собой основное поле баннера.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Убедитесь, что вам известно:</p><ul><li><p>какие типы устройств (смартфоны, планшеты, или '
				+ 'оба) должен поддерживать баннер,</p></li><li><p>сценарий баннера,</p></li><li><p>какие действия '
				+ 'пользователя должны отслеживаться.</p></li></ul>В большинстве случаев необходимо собрать только '
				+ 'один баннер, который будет работать на смартфонах и планшетах одновременно. Если ваши макеты '
				+ 'для смартфонов и планшетов различаются или вам неудобно использовать единый шаблон, существуют '
				+ 'специальные шаблоны для каждого из типов устройств. При их использовании вам необходимо собрать '
				+ 'два отдельных баннера; для смартфонов и для планшетов. Вы можете сделать это по отдельности '
				+ 'или параллельно, в зависимости от того, какой подход окажется удобнее; в любом случае, следуйте '
				+ 'пошаговым инструкциям и выбирайте нужный из вариантов там, где необходимо.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Требования к баннеру:</p><ol><li><p>Нельзя вносить изменения в шаблон. Замените содержимое-пример '
				+ 'и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<span><br /></span></p></li><li><p>До '
				+ 'первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов) '
				+ 'и 300 кБ (для планшетов). Ограничение включает в себя код баннера.<span><br /></span></p></li><li><p>Используйте '
				+ 'префикс <span class="mono">hpmdf-</span> для всех идентификаторов и классов в HTML- и CSS-коде. '
				+ 'Это также распространяется на динамически присваиваемые значения.<span><br /></span></p></li><li><p>JS-код '
				+ 'не должен создавать новых глобальных переменных или вмешиваться в работу страницы. В связи '
				+ 'с этим, сторонние фреймворки вроде jQuery запрещены.<span><br /></span></p></li><li><p>Расхлоп '
				+ 'должен адаптироваться к экранам с соотношением ширины к высоте от 1:3 до 3:1 (включая 1:1) '
				+ 'и поддерживать обе ориентации устройства независимо от настроек <span class="mono">viewport</span> '
				+ 'конкретной страницы.<span><br /></span></p></li><li><p>Используйте достаточно большие кнопки. '
				+ 'На смартфонах, активная область любого нажимаемого элемента должна быть не менее 20% ширины '
				+ 'экрана в портретной ориентации, и 10% в ландшафтной. Лимиты на планшетах ― 10% и 5%, соответственно.<span><br '
				+ '/></span></p></li><li>Следуйте инструкциям для загрузки баннера в систему HPMD и тестирования. '
				+ 'Пересылки кода баннера по электронной почте или файлообменник недостаточно. Отправка собранного '
				+ 'баннера по эл. почте или через файлообменник запрещена.</li></ol>'
			+ '</div>'
		,
		'fullscreen-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: Fullscreen</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Fullscreen</b> is an ad displayed over page contents while page is being loaded, covering the whole page.</p>'
				+ '<p>A close button, which removes the ad completely, is displayed at the top right corner; the remaining area is taken by ad contents.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Before diving in, make sure that you know:</p><ul><li><p>which device types (smartphones, '
				+ 'tablets, or both) the ad should support,</p></li><li><p>scenario of the ad,</p></li><li><p>which '
				+ 'user interactions should be tracked.</p></li></ul>Under most circumstances, you only have to '
				+ 'build a single ad which will work on both smartphones and tablets. However, if you have different '
				+ 'layouts for smartphones and tablets or for any other reason unable to create a single ad for '
				+ 'both device types, separate templates for smartphones and tablets are provided as well. Use '
				+ 'these to build two separate ads either separately or in parallel, whichever fits best; either '
				+ 'way, follow the instructions of this guide step by step and choose options appropriate for '
				+ 'the chosen template when presented with a choice.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Requrements:</p><ol><li><p>No changes should be made to the template. Replace the content '
				+ 'of the ad and add your own code, but do not change the behaviour of the template itself.<span><br '
				+ '/></span></p></li><li><p>Until first user interaction with the ad, keep network traffic below '
				+ '150 kB (on smartphones) or 300 kB (on tablets). The restriction includes the ad’s code.<span><br '
				+ '/></span></p></li><li><p>Use <span class="mono">hpmdf-</span> prefix for every identifier and '
				+ 'class name in your HTML and CSS code. This also applies to dynamically assigned classes and '
				+ 'identifiers.<span><br /></span></p></li><li><p>Your JS code must not create new global variables '
				+ 'and in any other way interfere with the page it’s on. As such, external frameworks such as '
				+ 'jQuery are not allowed.<span><br /></span></p></li><li><p>The fullscreen part of the ad should '
				+ 'be adaptive and displayed correctly on screens with width-to-height ratio ranging from 1:3 '
				+ 'through 1:1 to 3:1, including both device orientations, and regardless of viewport settings '
				+ 'on the particular page.<span><br /></span></p></li><li><p>Keep the buttons large enough. On '
				+ 'smartphones, touch area of any interactive element should be no smaller than 20% screen width '
				+ 'in portrait orientation, and 10% in landscape. On tablets, corresponding limits are 10% and '
				+ '5% respectively.<span><br /></span></p></li><li>Follow the instructions from this guide to '
				+ 'upload your ad into HPMD system and test it live. Just sending the files is not enough, and '
				+ 'you should not use e-mail or file exchangers to transfer the ad.</li></ol>'
			+ '</div>'
		,
		swipe:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: Swipe-баннер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Swipe-баннер</b> («свайп-баннер») ― формат, состоящий из двух частей: тизера и расхлопа.</p>'
				+ '<p>Тизер ― небольшая графическая полоса, закрепленная в нижней части экрана, с «ярлычком» над ней, показывающим, что баннер можно раскрыть, потянув вверх.</p>'
				+ '<p>При тапе по тизеру или свайпе («вытягивании» пальцем) снизу вверх раскрывается расхлоп, который представляет собой полноэкранный баннер. В верхнем правом углу расхлопа присутствует «крестик» ― закрывающий элемент, нажатие на который полностью убирает баннер с экрана. Прочие элементы заполняют собой основное поле баннера.</p>'
				+ '<p>Свайп вниз по тизеру убирает с экрана тизер без раскрытия расхлопа.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Убедитесь, что вам известно:</p><ul><li><p>какие типы устройств (смартфоны, планшеты, или '
				+ 'оба) должен поддерживать баннер,</p></li><li><p>сценарий баннера,</p></li><li><p>какие действия '
				+ 'пользователя должны отслеживаться.</p></li></ul><p>Помните, что вам необходимо собрать два '
				+ 'отдельных баннера: для смартфонов и для планшетов. Вы можете сделать это по отдельности или '
				+ 'параллельно, в зависимости от того, какой подход окажется удобнее; в любом случае, следуйте '
				+ 'пошаговым инструкциям и выбирайте нужный из вариантов там, где необходимо.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Требования к баннеру:</p><ol><li><p>Необходимо собрать два отдельных баннера: для смартфонов '
				+ 'и для планшетов.<span><br /></span></p></li><li><p>Нельзя вносить изменения в шаблон. Замените '
				+ 'содержимое-пример и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<span><br '
				+ '/></span></p></li><li><p>До первого взаимодействия с пользователем сетевой трафик должен быть '
				+ 'не более 150 кБ (для смартфонов) и 300 кБ (для планшетов). Ограничение включает в себя код '
				+ 'баннера. Более детальное описание доступно в разделе <a>Подготовка расхлопа</a>.<span><br /></span></p></li><li><p>Используйте '
				+ 'префикс <span class="mono">hpmd-</span> для всех идентификаторов и классов в HTML- и CSS-коде. '
				+ 'Это также распространяется на динамически присваиваемые значения.<span><br /></span></p></li><li><p>JS-код '
				+ 'не должен создавать новых глобальных переменных или вмешиваться в работу страницы. В связи '
				+ 'с этим, сторонние фреймворки вроде jQuery запрещены.<span><br /></span></p></li><li><p>Расхлоп '
				+ 'должен адаптироваться к экранам с соотношением ширины к высоте от 1:3 до 3:1 (включая 1:1) '
				+ 'и поддерживать обе ориентации устройства независимо от настроек <span class="mono">viewport</span> '
				+ 'конкретной страницы.<span><br /></span></p></li><li><p>Используйте достаточно большие кнопки. '
				+ 'На смартфонах, активная область любого нажимаемого элемента должна быть не менее 20% ширины '
				+ 'экрана в портретной ориентации, и 10% в ландшафтной. Лимиты на планшетах ― 10% и 5%, соответственно.<span><br '
				+ '/></span></p></li></ol>Следуйте инструкциям для загрузки баннера в систему HPMD и тестирования. '
				+ 'Пересылки кода баннера по электронной почте или файлообменник недостаточно.<span><br></span>Отправка '
				+ 'собранного баннера по эл.почте или через файлообменник запрещена.'
			+ '</div>'
		,
		'swipe-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: Swipe banner</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Swipe banner</b> is an ad comprised of two parts: a teaser and a fullscreen.</p>'
				+ '<p>A teaser is a small rectangular stripe at the bottom of the screen. Apart from image of the teaser itself, it includes a small “handle”, usually protruding from the top of the ad, which invites users to pull (“swipe”) upwards with their fingers and is usually unobtrusively animated.</p>'
				+ '<p>Whenever user taps or swipes upwards over the teaser, a fullscreen is pulled out. When completely opened, the fullscreen covers the entire screen, making the teaser disappear. A close button, which removes the ad completely, is displayed at the top right corner; the remaining area is taken by ad contents.</p>'
				+ '<p>Whenever user swipes down over the teaser, the teaser disappears completely without pulling out the fullscreen.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Before diving in, make sure that you know:</p><ul><li><p>which device types (smartphones, '
				+ 'tablets, or both) the ad should support,</p></li><li><p>scenario of the ad,</p></li><li><p>which '
				+ 'user interactions should be tracked.</p></li></ul>Remember that you have to build separate '
				+ 'ads for smartphones and for tablets. You can do it either separately or in parallel, whichever '
				+ 'fits best; either way, follow the instructions of this guide step by step and choose options '
				+ 'appropriate for the chosen device type when presented with a choice.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>The requrements are explained in greater details in the following steps. Use this list to '
				+ 'familiarize yourself with general principles and as a checklist.</p><ol><li><p>Two separate '
				+ 'ads are built; one for smartphones, and one for tablets.<span><br /></span></p></li><li><p>No '
				+ 'changes should be made to the template. Replace the content of the ad and add your own code, '
				+ 'but do not change the behaviour of the template itself.<span><br /></span></p></li><li><p>Until '
				+ 'first user interaction with the ad, keep network traffic below 150 kB (on smartphones) or 300 '
				+ 'kB (on tablets). The restriction includes the ad’s code itself. See <a>Preparing the fullscreen</a> '
				+ 'section for a more detailed description of the way its calculated.<span><br /></span></p></li><li><p>Use '
				+ '<span class="mono">hpmd-</span> prefix for every identifier and class name in your HTML and '
				+ 'CSS code. This also applies to dynamically assigned classes and identifiers.<span><br /></span></p></li><li><p>Your '
				+ 'JS code must not create new global variables and in any other way interfere with the page it’s '
				+ 'on. As such, external frameworks such as jQuery are not allowed.<span><br /></span></p></li><li><p>The '
				+ 'fullscreen part of the ad should be adaptive and displayed correctly on screens with width-to-height '
				+ 'ratio ranging from 1:3 through 1:1 to 3:1, including both device orientations, and regardless '
				+ 'of <span class="mono">viewport</span> settings on the particular page.<span><br /></span></p></li><li><p>Keep '
				+ 'your buttons large enough. On smartphones, touch area of any interactive element should be '
				+ 'no smaller than 20% screen width in portrait orientation, and 10% in landscape. On tablets, '
				+ 'corresponding limits are 10% and 5% respectively.<span><br /></span></p></li><li><p>Follow '
				+ 'the instructions of this guide to upload your ad into HPMD system and test it live. Just sending '
				+ 'the files is not enough, and you should not use e-mail or file exchangers to transfer the ad.</p></li></ol>'
			+ '</div>'
		,
		curtain:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: Curtain-баннер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<b>Curtain-баннер</b> («шторка») ― формат, состоящий из двух частей: тизера и расхлопа.<br /><br />'
				+ '<b>Тизер</b> ― небольшая графическая полоса, закрепленная в правой части экрана.<br /><br />'
				+ 'При тапе по тизеру или свайпе («вытягивании» пальцем) справа налево раскрывается <b>расхлоп</b>, который представляет собой полноэкранный баннер. В верхнем правом углу расхлопа присутствует «крестик» ― закрывающий элемент, нажатие на который полностью убирает баннер с экрана. Прочие элементы заполняют собой основное поле баннера.<br /><br />'
				+ 'Свайп вправо по тизеру убирает с экрана тизер без раскрытия расхлопа.<br /><br />'
				+ 'При верстке этого формата создаются <b>два отдельных баннера</b>: один для смартфонов и один для планшетов.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ 'Вам необходимо:'
				+ '<ul>'
				+ '<li>'
				+ '<p><span>Добавить необходимые HTML-тэги</span><span><br /></span><span>Элементы заглушки добавляются внутрь элемента </span><span class="mono">#hpmd-splash</span><span>.</span><span><br /></span><span>Элементы основного контента ― внутрь элемента </span><span class="mono">#hpmd-popup-contents</span><span>.</span><span><br /></span><span>(Вы также можете задать этим элементам фоновую картинку, не добавляя новых элементов, в таблице стилей.)</span><span><br /></span><span><br /></span><span>Используйте только идентификаторы и классы, начинающиеся с </span><span class="mono">hpmd-</span><span>.</span><span><br /></span><span>Не используйте тэги </span><span class="mono">&lt;a&gt;</span><span>, </span><span class="mono">&lt;style&gt;</span><span>, </span><span class="mono">&lt;script&gt;</span><span>, </span><span class="mono">&lt;link&gt;</span><span>, </span><span class="mono">&lt;meta&gt;</span><span>, </span><span class="mono">&lt;head&gt;</span><span>, </span><span class="mono">&lt;body&gt;</span><span>, </span><span class="mono">&lt;html&gt;</span><span>, </span><span class="mono">&lt;plaintext&gt;</span><span>, </span><span class="mono">&lt;noscript&gt;</span><span> в HTML-коде баннера.</span><span><br /></span><span>Не задавайте обработчики событий (например, атрибуты </span><span class="mono">onclick</span><span>) в HTML-коде. Вместо этого назначайте обработчики динамически в JS-коде.</span><span><br /></span><span><br /></span><span>Необходимо сохранить элемент </span><span class="mono">#hpmd-popup-close</span><span>.</span><span><br /></span><span><br /></span><span>Не используйте атрибуты </span><span class="mono">onclick</span><span>, </span><span class="mono">onmousedown</span><span> и т.д. Вместо этого следует использовать </span><span class="mono">touch</span><span>- и </span><span class="mono">pointer</span><span>-события и добавлять обработчики событий динамически, внутри JS-кода.</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '<li>'
				+ '<p><span>Дополнить имеющуюся таблицу стилей</span><span><br /></span><span>Отредактируйте или удалите фоновую картинку у расхлопа в правилах <span class="mono">.hpmd-portrait #hpmd-popup-contents</span> и <span class="mono">.hpmd-landscape #hpmd-popup-contents</span> и добавьте любые правила, необходимые баннеру.<br /><br />Начинайте ссылки на картинки с .</span><span class="mono">/banner/</span><span>, включая точку и прямой слэш. Например, ссылка на картинку </span><span class="mono">visual.jpg</span><span>, находящуюся в подпапке </span><span class="mono">banner/img</span><span>, должна выглядеть так: </span><span class="mono">./banner/img/visual.jpg</span><span>.</span><span><br /></span><span><br /></span><span>Не используйте media queries для определения ориентации устройства; вместо этого воспользуйтесь классами </span><span class="mono">.hpmd-portrait</span><span> и </span><span class="mono">.hpmd-landscape</span><span>, которые автоматически назначаются корневому элементу баннера. (В JS-коде используйте вызов </span><span class="mono">hpmd.data.isPortrait()</span><span>.)</span><span><br /></span><span><br /></span><span>Никогда не используйте абсолютные размеры (</span><span class="mono">px</span><span>, </span><span class="mono">pt</span><span>, </span><span class="mono">ex</span><span>, </span><span class="mono">em</span><span> и т.д.), всегда используйте относительные. Всегда задавайте размер элементам </span><span class="mono">&lt;img /&gt;</span><span>. Используйте адаптивную верстку; баннер должен верно отображаться при любых настройках viewport, а также на всех экранах с соотношением сторон от 1:1 до 1:3.</span><span><br /></span><span><br /></span><span>Воспользуйтесь функцией </span><span class="mono">onViewportUpdate</span><span> в JS-коде, если таблицы стилей недостаточно; она вызывается при каждом изменении размера экрана или ориентации и предназначена для того, чтобы рассчитать правильные размеры элементов или адаптировать верстку к текущему размеру экрана.</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '<li>'
				+ '<p><span>Дополнить JS-логику баннера</span><span><br /></span><span>Имеющийся JS-код делает все, что нужно для отображения баннера. Опишите только логику, относящуюся к содержимому баннера:</span><span><br /></span><span>― код, который должен выполняться при запуске баннера (например, анимация тизера), следует добавить непосредственно в конец JS;</span><span><br /></span><span>― код, который должен выполняться при раскрытии расхлопа, следует разместить в функции </span><span class="mono">openBanner</span><span>. Для этого найдите функцию </span><span class="mono">openBanner</span><span> и дополните код в наиболее подходящем месте (соответствующие места помечены комментариями с ключевым словом </span><span class="mono">TODO</span><span>).</span><span><br /></span><span><br /></span><span>Не создавайте новых глобальных переменных (вы можете использовать объект </span><span class="mono">hpmd.data</span><span> или локальные переменные для хранения данных) и не подключайте сторонние фреймворки (например, jQuery).</span><span><br /></span><span><br /></span><span>Для обработки нажатий в баннере используйте следующий вызов:</span><span><br /></span><span class="mono">hpmd.data.handleSwipe(element, {</span><br /> <span class="mono">&nbsp;&nbsp;&nbsp;tap: function () {</span><br />  <span class="mono">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* обработка нажатия */</span><br /> <span class="mono">&nbsp;&nbsp;&nbsp;},</span><br /><span class="mono">});</span><span><br /></span><span>где </span><span class="mono">element</span><span> ― ссылка на нужный DOM-элемент (т.е., HTML-тэг).</span><span><br /></span><span><br /></span><span>Если необходимо, дополните функцию </span><span class="mono">minimizeBanner</span><span>, чтобы после закрытия баннера отменить изменения, сделанные при его открытии.</span><span><br /></span><span><br /></span><span>Дополните функцию </span><span class="mono">destroy</span><span> таким образом, чтобы она полностью отключала баннер (то есть, отключала новые обработчики событий; интервалы, установленные через </span><span class="mono">setInterval()</span><span>; удаляла созданные динамически HTML-элементы).</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '<li>'
				+ '<p><span>Прошить открытие ссылок на сайт рекламодателя</span><span><br /></span><span>Если в баннере нет переходов по внешним ссылкам, пропустите этот шаг.</span><span><br /></span><span><br /></span><span>Вместо</span><span> перехода по ссылке или открытия нового окна используйте следующий набор вызовов:</span><span><br /></span><span class="mono">hpmd.data.closeBanner();</span><span><br /></span><span class="mono">hpmd.trackLink("link", "http://www.hpmdnetwork.ru/", { newWindow: true });</span><span><br /></span><span>Укажите правильную ссылку вместо </span><span class="mono">http://www.hpmdnetwork.ru/</span><span>.</span><span><br /></span><span><br /></span><span>Если ссылок несколько, прошейте переход по каждой из них аналогичным образом, передавая вместо </span><span class="mono">link</span><span> в качестве первого аргумента другую строку на ваше усмотрение (состоящую из строчных латинских букв и цифр). Запомните использованные параметры ― они потребуются на последнем этапе.</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '<li>'
				+ '<p><span>Прошить прочие действия пользователя</span><span><br /></span><span>Если, кроме перехода по ссылке, в баннере могут совершаться другие действия, придумайте для каждого из них произвольный идентификатор (строчные латинские буквы и цифры) и в момент совершения действия сделайте вызов:</span><span><br /></span><span class="mono">hpmd.trackEvent("name");</span><span><br /></span><span>Вместо </span><span class="mono">name</span><span> поставьте выбранный для действия идентификатор.</span><span><br /></span><span>Запомните использованные идентификаторы ― они потребуются на последнем этапе.</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '<li>'
				+ '<p><span>Прошить глубину просмотра видео / прослушивания аудио</span><span><br /></span><span>Если в баннере просматривается видео или прослушивается аудио, сообщите о глубине просмотра системе следующим вызовом:</span><span><br /></span><span class="mono">hpmd.trackEvent("video-progress", { weight: time_in_seconds });</span><span><br /></span><span>Вместо </span><span class="mono">video-progress</span><span> выберите уникальный идентификатор на ваше усмотрение, по аналогии с предыдущим шагом. Вместо </span><span class="mono">time_in_seconds</span><span> передайте текущее положение ― целое число в секундах.</span><span><br /></span><span>Этот вызов следует делать при старте, паузе и окончании воспроизведения, а так же каждые 5 секунд в течение воспроизведения.</span><span><br /><br /></span></p>'
				+ '</li>'
				+ '</ul>'
				+ '<p><strong id="docs-internal-guid-bb499fce-8c16-5455-fb72-5130cd47cd63" style="font-weight: normal;"><span>Добавить пиксель на показ</span><span><br /></span><span>В самом начале JavaScript-кода замените ссылку </span><span class="mono">http://www.hpmdnetwork.ru/pixel.gif</span><span> на URL правильного пикселя. </span><span>Если пикселя на показ для баннера нет</span><span>, удалите фрагмент кода, вызывающий пиксель, целиком.</span></strong></p>'
			+ '</div>'
		,
		'curtain-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: native scroller</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Curtain</b> is an ad comprised of two parts: a teaser and a fullscreen. It shifts the site content and occupies this space.</p><p><br></p>'
				+ '<p><b>Teaser</b> is a small rectangular stripe on the right side of the screen. It consists of call-to-action and translucent plain background.'
				+ '</p><p><br></p><p>Whenever user taps or swipes leftward over the teaser, <b>fullscreen</b> is pulled out. When completely opened, the fullscreen '
				+ 'covers the entire screen, making the teaser disappear. A close button, which removes the ad completely, is usually displayed at the top right '
				+ 'corner of fullscreen, remaining area is taken by ad contents.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<h1>Building the ad</h1><h2>Prerequisites</h2><p><br></p><p>Before diving in, make sure that you know:</p><p><br></p><ul><li><p>which device types '
				+ '(smartphones, tablets, or both) the ad should support,</p></li><li><p>scenario of the ad,</p></li><li><p>which user interactions should be tracked.</p>'
				+ '</li></ul><p><br></p><p>Under most circumstances, you only have to build a single ad which will work on both smartphones and tablets. However, if you have '
				+ 'different layouts for smartphones and tablets or for any other reason unable to create a single ad for both device types, separate templates for smartphones '
				+ 'and tablets are provided as well. Use these to build two separate ads either separately or in parallel, whichever fits best; either way, follow the '
				+ 'instructions of this guide step by step and choose options appropriate for the chosen template when presented with a choice.</p>'
			+ '</div>'
		,
		native:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: нативный баннер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Нативный баннер</b> ― прямоугольный баннер, который отображается внутри содержимого страницы.</p>'
				+ '<p>Нативный баннер занимает выделенное для него место на экране, сохраняя пропорции. Пропорции различаются для портретной и ландшафтной ориентаций устройства, а также для смартфонов и планшетов.</p>'
				+ '<p>При нажатии на нативный баннер, как правило, открывается ссылка в новом окне.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Подготовьте два изображения следующих размеров:</p><ul><li><p>для смартфонов:<span><br></span>1080х702 '
				+ '(портретная ориентация)<span><br></span>1920х768 (ландшафтная ориентация)<span><br /></span></p></li><li><p>для '
				+ 'планшетов необходима только одно изображение:<span><br></span>1920x1248 пикселей</p></li></ul><p>Примечание: '
				+ 'если вы собираете баннер для смартфонов и у вас нет изображения 1080х702, уменьшите соответствующее '
				+ 'изображение для планшетов (1920x1248) до указанного размера. Если необходимо, обрежьте поля.</p><p>Старайтесь, '
				+ 'чтобы их размер (в байтах) был как можно меньше. Ограничение на вес баннера ― 150 кБ (для смартфонов) '
				+ 'и 300 кБ (для планшетов). Ограничение включает в себя изображение тизера, кнопку закрытия и '
				+ 'код баннера, и отслеживается отдельно для каждой ориентации устройства. Вам может быть необходимо '
				+ 'попробовать различные форматы и настройки качества. Используйте бесплатные сервисы <a href="http://tinypng.com/" target="_blank">tinypng.com</a> '
				+ 'и <a href="http://tinyjpg.com/" target="_blank">tinyjpg.com</a> для большего сжатия.</p><p>Зайдите в папку <span class="mono">banner/img</span> '
				+ 'вашего шаблона и замените имеющиеся изображения новыми.</p><p>Если вы использовали формат, '
				+ 'отличный от PNG, найдите селекторы для элемента <span class="mono">.hpmdn-wrapper</span>в CSS-коде '
				+ 'файла <span class="mono">index.html</span> и обновите ссылки на изображения; обратите внимание, '
				+ 'что в шаблоне для смартфонов таких ссылок две. Убедитесь, что ссылки по-прежнему начинаются '
				+ 'с <span class="mono">./banner/</span>, включая точку и прямой слэш.</p>Проверьте баннер в эмуляторе '
				+ 'и убедитесь, что изображения подошли в обоих ориентациях.'
			+ '</div>'
		,
		'native-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: native banner</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Native banner</b> is a rectangular ad embedded directly into page content in predefined positions, usually in between paragraphs or items of a list.</p>'
				+ '<p>Native banner takes the whole width of a container provided to it and scales proportionally, keeping its aspect ratio constant. The aspect ratio, however, is different in portrait in landscape orientation, as well as for smartphones and tablets.</p>'
				+ '<p>There may be multiple different native banners on a single page.</p>'
				+ '<p>A click, or a “tap”, anywhere on the ad usually results in a new tab with an external link being opened.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Prepare two images of the following dimensions:</p><ul><li><p>for smartphones:<span><br></span>1080х702 '
				+ '(for portrait orientation)<span><br></span>1920х768 (for landscape orientation)<span><br /></span></p></li><li><p>for '
				+ 'tablets, only one image is needed:<span><br></span>1920x1248 pixels</p></li></ul><p>Note: if '
				+ 'you’re building an ad for smartphones and do not have 1080х702 image available, please take '
				+ 'the corresponding tablet image (1920x1248) and downscale it to the indicated size. Crop excess '
				+ 'margins, if necessary.</p><p>Try to keep their size, in bytes, as low as possible. The limit '
				+ 'on the size of the ad is 150 kB (on smartphones) or 300 kB (on tablets). The restriction includes '
				+ 'the image and the ad code itself and is measured separately for each of the device orientations. '
				+ 'You may need to try different image formats and quality settings and choose one with best results. '
				+ 'Use the free <a href="http://tinypng.com/" target="_blank">tinypng.com</a> and <a href="http://tinyjpg.com/" target="_blank">tinyjpg.com</a> services to compress your images even '
				+ 'further.</p><p>Go to <span class="mono">banner/img</span> subfolder of the template and replace '
				+ 'existing images the new ones.</p><p>If you’ve chosen an image format other than JPG, search '
				+ 'for <span class="mono">.hpmdn-wrapper</span> rules defining a background image in the CSS section '
				+ 'of your <span class="mono">index.html</span> file and update links to the images accordingly. '
				+ 'Keep in mind that there are two such rules, for each of the orientation, on smartphones, but '
				+ 'only one on tablets. Make sure the links start with <span class="mono">./banner/</span>, including '
				+ 'the leading dot and the forward slash, as it was before.</p>Check the ad using an emulator '
				+ 'to make sure the images fit in both orientations.'
			+ '</div>'
		,
		videoteaser:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: видеотизер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Video Teaser</b> («видеотизер») ― видеобаннер, который отображается и воспроизводит видеоролик поверх страницы при ее загрузке. В портретной ориентации устройства видеоролик располагается в нижней части экрана; в ландшафтной ― на весь экран, с горизонтальными или вертикальными полями.</p>'
				+ '<p>Видеоролик запускается автоматически, без действий пользователя, с отключенным звуком. Нажатие на видеоролик останавливает воспроизведение и выводит на экран кнопку перехода на сайт рекламодателя; повторное нажатие в свободной области запускает воспроизведение заново. После завершения воспроизведения баннер сворачивается в небольшую графическую полосу, закрепленную в нижней части экрана устройства, нажатие на которую также открывает ссылку на сайт рекламодателя.</p>'
				+ '<p>В верхнем правом углу видеотизера все время присутствует «крестик» ― закрывающий элемент, нажатие на который полностью убирает баннер с экрана.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Зайдите на страницу <a href="https://developers.hpmdnetwork.ru/video/convert">https://developers.hpmdnetwork.ru/video/convert</a> '
				+ 'в вашем браузере. Здесь вам необходимо указать:</p><ul><li><p>видеофайл;</p></li><li><p>префикс '
				+ 'HTML: “hpmd- (баннеры над контентом)”;</p></li><li><p>элементы управления: “нет (только окно '
				+ 'плейера)”.</p></li></ul><p>Оставьте текущие значения в остальных полях.</p><p>Нажмите “Начать '
				+ 'конвертацию” и дождитесь завершения процесса; это может занять несколько минут. Скачайте и '
				+ 'распакуйте полученный архив. Файлы из этого архива потребуются вам на следующем шаге.</p>Note: '
				+ 'используйте видео максимального доступного качества; видеоконвертер адаптирует качество автоматически. '
				+ 'Однако вам может быть необходимо предварительно пережать видео, если размер вашего видеофайла '
				+ 'превышает 200 МБ.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Скопируйте все файлы из архива с видеоплейером в папку <span class="mono">banner</span> '
				+ 'вашего баннера.</p><p>Затем подключите плейер к баннеру:</p><ul><li><p>замените HTML-код внутри '
				+ 'элемента <span class="mono">#hpmd-video-container</span> на содержимое файла <span class="mono">player.html</span>;<span><br '
				+ '/></span></p></li><li><p>замените CSS-код, помеченный комментарием /<span class="mono">* TODO: '
				+ 'please replace the following styles with those from your actual video player */,</span> содержимым '
				+ 'файла <span class="mono">player.css</span>;<span><br /></span></p></li><li><p>замените JS-код, '
				+ 'помеченный комментарием <span class="mono">/* Initializing video player */</span>, содержимым '
				+ 'файла <span class="mono">player.js</span>.</p></li></ul><p>Затем откройте файл <span class="mono">index.html</span> '
				+ 'на мобильном устройстве или с эмулятора и проверьте видео. Если качество видео вышло недопустимо '
				+ 'низким, попробуйте сконвертировать его заново, используя более высокие настройки качества.</p>Note: '
				+ 'работа видеоплейера различается на iOS и Android. При использовании Google Chrome в Device '
				+ 'mode вам необходимо выбрать эмуляцию устройства, совместимую с вашей ОС: пользователям Mac '
				+ 'OS X необходимо выбрать iPhone или Ipad; пользователи Windows и Linux должны выбрать эмуляцию '
				+ 'Android-устройства.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Подготовьте два изображения следующих размеров:</p><ul><li><p>для смартфонов:<span><br></span>1080х240 '
				+ '(портретная ориентация)<span><br></span>1920х170 (ландшафтная ориентация)<span><br /></span></p></li><li><p>для '
				+ 'планшетов:<span><br></span>1600x208 (портретная ориентация)<span><br></span>2560x225 (ландшафтная '
				+ 'ориентация)</p></li></ul><p>Примечание: если вы собираете баннер для смартфонов и у вас нет '
				+ 'изображения 1920х170, уменьшите соответствующее изображение для планшетов (2560x225) до указанного '
				+ 'размера. Если необходимо, обрежьте поля.</p><p>Старайтесь, чтобы их размер (в байтах) был как '
				+ 'можно меньше. Ограничение на вес баннера ― 150 кБ (для смартфонов) и 300 кБ (для планшетов). '
				+ 'Ограничение включает в себя изображение тизера, кнопку закрытия и код баннера, и отслеживается '
				+ 'отдельно для каждой ориентации устройства. Вам может быть необходимо попробовать различные '
				+ 'форматы и настройки качества. Используйте бесплатные сервисы <a href="http://tinypng.com/">tinypng.com</a> '
				+ 'и <a href="http://tinyjpg.com/">tinyjpg.com</a> для большего сжатия.</p><p>Зайдите в папку '
				+ '<span class="mono">banner/img</span> шаблона и замените файлы <span class="mono">teaser-portrait.png</span> '
				+ 'и <span class="mono">teaser-landscape.png</span> на новые.</p><p>Если вы использовали формат, '
				+ 'отличный от PNG, найдите селекторы <span class="mono">.hpmd-portrait #hpmd-teaser</span> и '
				+ '<span class="mono">.hpmd-landscape #hpmd-teaser</span> в CSS-коде файла <span class="mono">index.html</span> '
				+ 'и обновите ссылки на изображения. Убедитесь, что ссылки по-прежнему начинаются с <span class="mono">./banner/</span>, '
				+ 'включая точку и прямой слэш.</p><p>Если необходимо, обновите CSS для селекторов <span class="mono">#hpmd-teaser.hpmd-collapsed '
				+ '#hpmd-close</span> и <span class="mono">.hpmd-landscape #hpmd-teaser.hpmd-collapsed #hpmd-close</span>, '
				+ 'чтобы изменить расположение кнопки закрытия после завершения проигрывания видео.</p><p>Вы также '
				+ 'можете изменить внешний вид полосы прогресса, задав новые фоновые цвета элементам <span class="mono">#hpmd-progress</span> '
				+ 'и <span class="mono">#hpmd-active-progress</span>, и изменить внешний вид элементов управления '
				+ 'плейером, заменив соответствующие изображения на новые.</p>Проверьте баннер в эмуляторе: дождитесь '
				+ 'завершения видео и убедитесь, что изображения подошли в обоих ориентациях.'
			+ '</div>'
		,
		'videoteaser-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: Video Teaser</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Video teaser</b> is a video ad which plays a video over the page, starting when the page is loaded. In portrait orientation, video takes up the bottom part of the screen; in landscape, it covers the entire screen.</p>'
				+ '<p>The playback starts automatically, with sound switched off, as soon as the ad is displayed; no user actions required for the playback to start.</p>'
				+ '<p>A click, or a “tap”, on the video player area sets the video on pause and an external link button is made visible; second click on the same area resumes the video and hides the button again. A close button, which removes the ad completely, is always displayed at the top right corner of the ad.</p>'
				+ '<p>When the playback is finished, it is replaced with a small rectangular stripe at the bottom of the screen. A click anywhere on the teaser opens an external link in a new tab. The close button is moved into the top right corner of the new visual.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Navigate to the page <a href="https://developers.hpmdnetwork.ru/en/video/convert">https://developers.hpmdnetwork.ru/en/video/convert</a> '
				+ 'with your browser. Here you will need to select:</p><ul><li><p>video file;</p></li><li><p>HTML '
				+ 'prefix: “hpmd- (ads covering the page)”;</p></li><li><p>controls: “skip (video only)”.</p></li></ul><p>Leave '
				+ 'the default values in all other fields.</p><p>Press “Start” and wait until the conversion is '
				+ 'complete; this may take a few minutes. Download and unpack the archive when offered. You will '
				+ 'need the files from the archive later.</p>Note: use source video file of the best available '
				+ 'quality; video converter tool will adjust the quality automatically. However, you may need '
				+ 'to re-encode the file with lower quality settings if your file is bigger than 200 Mb.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Copy all files from video player archive into the <span class="mono">banner</span> subfolder '
				+ 'of your ad.</p><p>Then connect the player with the ad code:</p><ul><li><p>replace the HTML '
				+ 'code inside the <span class="mono">#hpmd-player</span> element with contents of the <span class="mono">player.html</span> '
				+ 'file;<span><br /></span></p></li><li><p>replace the CSS code marked with /<span class="mono">* '
				+ 'TODO: please replace the following styles with those from your actual video player */</span> '
				+ 'with contents of the <span class="mono">player.css</span> file;<span><br /></span></p></li><li><p>replace '
				+ 'JavaScript code marked with comment <span class="mono">/* Initializing video player */</span> '
				+ 'with contents of the <span class="mono">player.js</span> file.</p></li></ul><p>When done, open '
				+ 'the <span class="mono">index.html</span> file on your mobile device or in an emulator and check '
				+ 'the video. If video quality turns out unacceptable, try to convert the video again using higher '
				+ 'quality settings.</p>Note: inner workings of video player differ between iOS and Android. When '
				+ 'using Google Chrome in Device mode, be careful to select emulated device compatible with your '
				+ 'system: Mac OS X users should select iPhone or iPad emulation; Windows and Linux users should '
				+ 'select emulation of an Android device.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Prepare two images of the following dimensions:</p><ul><li><p>for smartphones:<span><br></span>1080х240 '
				+ '(for portrait orientation)<span><br></span>1920х170 (for landscape orientation)<span><br /></span></p></li><li><p>for '
				+ 'tablets:<span><br></span>1600x208 (for portrait orientation)<span><br></span>2560x225 (for '
				+ 'landscape orientation)</p></li></ul><p>Note: if you’re building an ad for smartphones and do '
				+ 'not have 1920х170 image available, please take the corresponding tablet image (2560x225) and '
				+ 'downscale it to the indicated size. Crop excess margins, if necessary.</p><p>Try to keep their '
				+ 'size, in bytes, as low as possible. The limit on the size of the ad is 150 kB (on smartphones) '
				+ 'or 300 kB (on tablets). The restriction includes the teaser image, the close button, and the '
				+ 'ad code itself and is measured separately for each of the device orientations. You may need '
				+ 'to try different image formats and quality settings and choose one with best results. Use the '
				+ 'free <a href="http://tinypng.com/">tinypng.com</a> and <a href="http://tinyjpg.com/">tinyjpg.com</a> '
				+ 'services to compress your images even further.</p><p>Go to <span class="mono">banner/img</span> '
				+ 'subfolder of the template and replace <span class="mono">teaser-portrait.png</span> and <span '
				+ 'class="mono">teaser-landscape.png</span> with the new ones.</p><p>If you’ve chosen an image '
				+ 'format other than PNG, search for <span class="mono">.hpmd-portrait #hpmd-teaser</span> and '
				+ '<span class="mono">.hpmd-landscape #hpmd-teaser</span> rules in the CSS section of your <span '
				+ 'class="mono">index.html</span> file and update links to the images accordingly. Make sure the '
				+ 'links start with <span class="mono">./banner/</span>, including the leading dot and the forward '
				+ 'slash, as it was before.</p><p>If necessary, adjust the CSS rules for <span class="mono">#hpmd-teaser.hpmd-collapsed '
				+ '#hpmd-close</span> and <span class="mono">.hpmd-landscape #hpmd-teaser.hpmd-collapsed #hpmd-close</span> '
				+ 'selectors to change the appearance or position of the close button after the video has finished '
				+ 'playing.</p><p>You can also adjust progress bar colors by assigning new background colors to '
				+ 'the <span class="mono">#hpmd-progress</span> and <span class="mono">#hpmd-active-progress</span> '
				+ 'elements, and change appearance of built-in controls by replacing correspoding images with '
				+ 'new ones.</p>Check the ad using an emulator, wait for the video to end and make sure the images '
				+ 'fit in both orientations.'
			+ '</div>'
		,
		nativevideo:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: нативное видео</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Нативное видео</b> ― видеобаннер, который отображается внутри содержимого страницы.</p>'
				+ '<p>Видеоролик запускается автоматически, как только он попадает в видимую область экрана; это происходит без действий пользователя, ролик запускается с отключенным звуком. Нажатие на видеоролик останавливает воспроизведение и выводит на экран кнопку перехода на сайт рекламодателя; повторное нажатие в свободной области запускает воспроизведение заново. После завершения воспроизведения на месте видеоролика отображается основной визуал, нажатие на который также приводит к переходу по ссылке.</p>'
				+ '<p>Нативное видео занимает всю ширину контейнера баннера и растягивается, сохраняя пропорции. Пропорции задаются соотношением сторон видеоролика; поддерживаются соотношения сторон 16:9 (рекомендованное), 16:10, 3:2 и 2:1.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Зайдите на страницу <a href="https://developers.hpmdnetwork.ru/video/convert">https://developers.hpmdnetwork.ru/video/convert</a> '
				+ 'в вашем браузере. Здесь вам необходимо указать:</p><ul><li><p>видеофайл;</p></li><li><p>префикс '
				+ 'HTML: “hpmdn- (нативный баннер)”;</p></li><li><p>элементы управления: “нет (только окно плейера)”.</p></li></ul><p>Оставьте '
				+ 'текущие значения в остальных полях.</p><p>Нажмите “Начать конвертацию” и дождитесь завершения '
				+ 'процесса; это может занять несколько минут. Скачайте и распакуйте полученный архив. Файлы из '
				+ 'этого архива потребуются вам на следующем шаге.</p><p>Note: используйте видео максимального '
				+ 'доступного качества; видеоконвертер адаптирует качество автоматически. Однако вам может быть '
				+ 'необходимо предварительно пережать видео, если размер вашего видеофайла превышает 200 МБ.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Скопируйте все файлы из архива с видеоплейером в папку <span class="mono">banner</span> '
				+ 'вашего баннера.</p><p>Затем подключите плейер к баннеру:</p><ul><li><p>замените HTML-код внутри '
				+ 'элемента <span class="mono">.hpmdn-player</span> на содержимое файла <span class="mono">player.html</span>;<span><br '
				+ '/></span></p></li><li><p>замените CSS-код, помеченный комментарием /<span class="mono">* TODO: '
				+ 'please replace the following styles with those from your actual video player */,</span> содержимым '
				+ 'файла <span class="mono">player.css</span>;<span><br /></span></p></li><li><p>замените JS-код, '
				+ 'помеченный комментарием <span class="mono">/* Initializing video player */</span>, содержимым '
				+ 'файла <span class="mono">player.js</span>.</p></li></ul><p>Затем откройте файл <span class="mono">index.html</span> '
				+ 'на мобильном устройстве или с эмулятора и проверьте видео. Если качество видео вышло недопустимо '
				+ 'низким, попробуйте сконвертировать его заново, используя более высокие настройки качества.</p>Note: '
				+ 'работа видеоплейера различается на iOS и Android. При использовании Google Chrome в Device '
				+ 'mode вам необходимо выбрать эмуляцию устройства, совместимую с вашей ОС: пользователям Mac '
				+ 'OS X необходимо выбрать iPhone или Ipad; пользователи Windows и Linux должны выбрать эмуляцию '
				+ 'Android-устройства.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Подготовьте единственное изображение для каждого из типов устройств:</p><ul><li><p>для смартфонов:<span><br></span>изображение '
				+ 'шириной 1080 пикселей с сохранением соотношения сторон;<span><br /></span></p></li><li><p>для '
				+ 'планшетов:<span><br></span>изображение шириной 1920 пикселей с сохранением соотношения сторон.</p></li></ul><p>Примечание: '
				+ 'если вы собираете баннер для смартфонов и у вас нет изображения шириной 1080 пикселей, уменьшите '
				+ 'соответствующее изображение для планшетов (шириной 1920 пикселей) до указанного размера.</p><p>Старайтесь, '
				+ 'чтобы их размер (в байтах) был как можно меньше. Ограничение на вес баннера ― 150 кБ (для смартфонов) '
				+ 'и 300 кБ (для планшетов). Ограничение включает в себя изображение тизера, кнопку закрытия и '
				+ 'код баннера, и отслеживается отдельно для каждой ориентации устройства. Вам может быть необходимо '
				+ 'попробовать различные форматы и настройки качества. Используйте бесплатные сервисы <a href="http://tinypng.com/">tinypng.com</a> '
				+ 'и <a href="http://tinyjpg.com/">tinyjpg.com</a> для большего сжатия.</p><p>Зайдите в папку '
				+ '<span class="mono">banner/img</span> вашего шаблона и замените имеющиеся изображения новыми.</p><p>Если '
				+ 'вы использовали формат, отличный от PNG, найдите селекторы для элемента <span class="mono">.hpmdn-wrapper '
				+ '</span>в CSS-коде файла <span class="mono">index.html</span> и обновите ссылки на изображения; '
				+ 'обратите внимание, что в шаблоне для смартфонов таких ссылок две. Убедитесь, что ссылки по-прежнему '
				+ 'начинаются с <span class="mono">./banner/</span>, включая точку и прямой слэш.</p><p>Вы также '
				+ 'можете изменить внешний вид полосы прогресса, задав новые фоновые цвета элементам <span class="mono">.hpmdn-progress</span> '
				+ 'и <span class="mono">.hpmdn-active-progress</span>, и изменить внешний вид элементов управления '
				+ 'плейером, заменив соответствующие изображения на новые.</p>Проверьте баннер в эмуляторе, дождитесь '
				+ 'завершения видео и убедитесь, что изображения подошли в обоих ориентациях.'
			+ '</div>'
		,
		'nativevideo-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: native video</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Native video</b> is a video ad embedded directly into page content in predefined positions, usually in between paragraphs or items of a list. The video starts playing automatically, with sound switched off, as soon as it is scrolled into view; no user actions required to start the playback.</p>'
				+ '<p>A click, or a “tap”, on the video player area sets the video on pause and an external link button is made visible; second click on the same area resumes the video and hides the button again.</p>'
				+ '<p>When the playback is finished, a visual of the same size as the video is displayed. Click on the visual opens the external link in a new tab as well.</p>'
				+ '<p>Native video takes the whole width of a container provided to it and scales proportionally, keeping its aspect ratio constant. The aspect ratio is defined by the video; 16:9 (recommended), 16:10, 3:2 and 2:1 ratios are supported.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Navigate to the page <a href="https://developers.hpmdnetwork.ru/en/video/convert">https://developers.hpmdnetwork.ru/en/video/convert</a> '
				+ 'with your browser. Here you will need to select:</p><ul><li><p>video file;</p></li><li><p>HTML '
				+ 'prefix: “hpmdn- (native ads)”;</p></li><li><p>controls: “skip (video only)”.</p></li></ul><p>Leave '
				+ 'the default values in all other fields.</p><p>Press “Start” and wait until the conversion is '
				+ 'complete; this may take a few minutes. Download and unpack the archive when offered. You will '
				+ 'need the files from the archive later.</p>Note: use source video file of the best available '
				+ 'quality; video converter tool will adjust the quality automatically. However, you may need '
				+ 'to re-encode the file with lower quality settings if your file is bigger than 200 Mb.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Copy all files from video player archive into the <span class="mono">banner</span> subfolder '
				+ 'of your ad.</p><p>Then connect the player with the ad code:</p><ul><li><p>replace the HTML '
				+ 'code inside the <span class="mono">.hpmdn-player</span> element with contents of the <span '
				+ 'class="mono">player.html</span> file;<span><br /></span></p></li><li><p>replace the CSS code '
				+ 'marked with /<span class="mono">* TODO: please replace the following styles with those from '
				+ 'your actual video player */</span> with contents of the <span class="mono">player.css</span> '
				+ 'file;<span><br /></span></p></li><li><p>replace JavaScript code marked with comment <span class="mono">/* '
				+ 'Initializing video player */</span> with contents of the <span class="mono">player.js</span> '
				+ 'file.</p></li></ul><p>When done, open the <span class="mono">index.html</span> file on your '
				+ 'mobile device or in an emulator and check the video. If video quality turns out unacceptable, '
				+ 'try to convert the video again using higher quality settings.</p>Note: inner workings of video '
				+ 'player differ between iOS and Android. When using Google Chrome in Device mode, be careful '
				+ 'to select emulated device compatible with your system: Mac OS X users should select iPhone '
				+ 'or iPad emulation; Windows and Linux users should select emulation of an Android device.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>For each of device types, prepare a single image of the following dimensions:</p><ul><li><p>for '
				+ 'smartphones:<span><br></span>set the width to 1080 pixels; keep original aspect ratio.<span><br '
				+ '/></span></p></li><li><p>for tablets:<span><br></span>set the width to 1920 pixels; keep original '
				+ 'aspect ratio.</p></li></ul><p>Note: if you’re building an ad for smartphones and do not have '
				+ '1080 pixels wide image available, please take the corresponding tablet image (1920 pixels wide) '
				+ 'and downscale it to the indicated size.</p><p>Try to keep their size, in bytes, as low as possible. '
				+ 'The limit on the size of the ad is 150 kB (on smartphones) or 300 kB (on tablets). The restriction '
				+ 'is not applied to the video, but includes the image and the ad code itself and is measured '
				+ 'separately for each of the device orientations. You may need to try different image formats '
				+ 'and quality settings and choose one with best results. Use the free <a href="http://tinypng.com/">tinypng.com</a> '
				+ 'and <a href="http://tinyjpg.com/">tinyjpg.com</a> services to compress your images even further.</p><p>Go '
				+ 'to <span class="mono">banner/img</span> subfolder of the template and replace existing images '
				+ 'the new ones.</p><p>If you’ve chosen an image format other than JPG, search for <span class="mono">.hpmdn-wrapper</span> '
				+ 'rules defining a background image in the CSS section of your <span class="mono">index.html</span> '
				+ 'file and update links to the images accordingly. Keep in mind that there are two such rules, '
				+ 'for each of the orientation, on smartphones, but only one on tablets. Make sure the links start '
				+ 'with <span class="mono">./banner/</span>, including the leading dot and the forward slash, '
				+ 'as it was before.</p><p>You can also adjust progress bar colors by assigning new background '
				+ 'colors to the <span class="mono">#hpmd-progress</span> and <span class="mono">#hpmd-active-progress</span> '
				+ 'elements, and change appearance of built-in controls by replacing correspoding images with '
				+ 'new ones.</p>Check the ad using an emulator, wait for the video to end to make sure the images '
				+ 'fit in both orientations.'
			+ '</div>'
		,
		inread:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: нативный баннер с раскрытием</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Нативный баннер</b> ― прямоугольный баннер, который отображается внутри содержимого страницы.</p>'
				+ '<p>Нативный баннер занимает выделенное для него место на экране, сохраняя пропорции. Пропорции различаются для портретной и ландшафтной ориентаций устройства, а также для смартфонов и планшетов.</p>'
				+ '<p>При нажатии на нативный баннер, как правило, открывается ссылка в новом окне.</p>'
				+ '<p><b>В версии с раскрытием</b> нативный баннер не появляется на экране сразу, а раскрывается по вертикали после скролла пользователя.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Подготовьте два изображения следующих размеров:</p><ul><li><p>для смартфонов:<span><br></span>1080х702 '
				+ '(портретная ориентация)<span><br></span>1920х768 (ландшафтная ориентация)<span><br /></span></p></li><li><p>для '
				+ 'планшетов необходима только одно изображение:<span><br></span>1920x1248 пикселей</p></li></ul><p>Примечание: '
				+ 'если вы собираете баннер для смартфонов и у вас нет изображения 1080х702, уменьшите соответствующее '
				+ 'изображение для планшетов (1920x1248) до указанного размера. Если необходимо, обрежьте поля.</p><p>Старайтесь, '
				+ 'чтобы их размер (в байтах) был как можно меньше. Ограничение на вес баннера ― 150 кБ (для смартфонов) '
				+ 'и 300 кБ (для планшетов). Ограничение включает в себя изображение тизера, кнопку закрытия и '
				+ 'код баннера, и отслеживается отдельно для каждой ориентации устройства. Вам может быть необходимо '
				+ 'попробовать различные форматы и настройки качества. Используйте бесплатные сервисы <a href="http://tinypng.com/">tinypng.com</a> '
				+ 'и <a href="http://tinyjpg.com/">tinyjpg.com</a> для большего сжатия.</p><p>Зайдите в папку '
				+ '<span class="mono">banner/img</span> вашего шаблона и замените имеющиеся изображения новыми.</p><p>Если '
				+ 'вы использовали формат, отличный от PNG, найдите селекторы для элемента <span class="mono">.hpmdn-wrapper '
				+ '</span>в CSS-коде файла <span class="mono">index.html</span> и обновите ссылки на изображения; '
				+ 'обратите внимание, что в шаблоне для смартфонов таких ссылок две. Убедитесь, что ссылки по-прежнему '
				+ 'начинаются с <span class="mono">./banner/</span>, включая точку и прямой слэш.</p>Проверьте '
				+ 'баннер в эмуляторе и убедитесь, что изображения подошли в обоих ориентациях.'
			+ '</div>'
		,
		'inread-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: native expandable</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Native expandable banner</b> is a rectangular ad embedded directly into page content in predefined positions, usually in between paragraphs or items of a list. If is not visible by default, but instead uses an eye-catching animation to “expand” and fade into view when user scrolls past its location.</p>'
				+ '<p>Native banner takes the whole width of a container provided to it and scales proportionally, keeping its aspect ratio constant. The aspect ratio, however, is different in portrait in landscape orientation, as well as for smartphones and tablets.</p>'
				+ '<p>There may be multiple different native banners on a single page.</p>'
				+ '<p>A click, or a “tap”, anywhere on the ad usually results in a new tab with an external link being opened.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Prepare two images of the following dimensions:</p><ul><li><p>for smartphones:<span><br></span>1080х702 '
				+ '(for portrait orientation)<span><br></span>1920х768 (for landscape orientation)<span><br /></span></p></li><li><p>for '
				+ 'tablets, only one image is needed:<span><br></span>1920x1248 pixels</p></li></ul><p>Note: if '
				+ 'you’re building an ad for smartphones and do not have 1080х702 image available, please take '
				+ 'the corresponding tablet image (1920x1248) and downscale it to the indicated size. Crop excess '
				+ 'margins, if necessary.</p><p>Try to keep their size, in bytes, as low as possible. The limit '
				+ 'on the size of the ad is 150 kB (on smartphones) or 300 kB (on tablets). The restriction includes '
				+ 'the image and the ad code itself and is measured separately for each of the device orientations. '
				+ 'You may need to try different image formats and quality settings and choose one with best results. '
				+ 'Use the free <a href="http://tinypng.com/">tinypng.com</a> and <a href="http://tinyjpg.com/">tinyjpg.com</a> '
				+ 'services to compress your images even further.</p><p>Go to <span class="mono">banner/img</span> '
				+ 'subfolder of the template and replace existing images the new ones.</p><p>If you’ve chosen '
				+ 'an image format other than JPG, search for <span class="mono">.hpmdn-wrapper</span> rules defining '
				+ 'a background image in the CSS section of your <span class="mono">index.html</span> file and '
				+ 'update links to the images accordingly. Keep in mind that there are two such rules, for each '
				+ 'of the orientation, on smartphones, but only one on tablets. Make sure the links start with '
				+ '<span class="mono">./banner/</span>, including the leading dot and the forward slash, as it '
				+ 'was before.</p>Check the ad using an emulator to make sure the images fit in both orientations.'
			+ '</div>'
		,
		videofullscreen:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: видеофулскрин</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Video Fullscreen</b> («видеофулскрин») ― полноэкранный видеобаннер, который отображается и воспроизводит видеоролик поверх страницы при ее загрузке.</p>'
				+ '<p>Видеоролик запускается автоматически, без действий пользователя, с отключенным звуком; в фоне ролика могут располагаться другие элементы баннера. После завершения воспроизведения видеоплейер исчезает с экрана, показывая основной визуал баннера.</p>'
				+ '<p>В верхнем правом углу видеофулскрина присутствует «крестик» ― закрывающий элемент, нажатие на который полностью убирает баннер с экрана.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Убедитесь, что вам известно:</p><ul><li><p>какие типы устройств (смартфоны, планшеты, или '
				+ 'оба) должен поддерживать баннер,</p></li><li><p>сценарий баннера,</p></li><li><p>какие действия '
				+ 'пользователя должны отслеживаться.</p></li></ul>В большинстве случаев необходимо собрать только '
				+ 'один баннер, который будет работать на смартфонах и планшетах одновременно. Если ваши макеты '
				+ 'для смартфонов и планшетов различаются или вам неудобно использовать единый шаблон, существуют '
				+ 'специальные шаблоны для каждого из типов устройств. При их использовании вам необходимо собрать '
				+ 'два отдельных баннера; для смартфонов и для планшетов. Вы можете сделать это по отдельности '
				+ 'или параллельно, в зависимости от того, какой подход окажется удобнее; в любом случае, следуйте '
				+ 'пошаговым инструкциям и выбирайте нужный из вариантов там, где необходимо.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Требования к баннеру:</p><ol><li><p>Нельзя вносить изменения в шаблон. Замените содержимое-пример '
				+ 'и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<span><br /></span></p></li><li><p>До '
				+ 'первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов) '
				+ 'и 300 кБ (для планшетов). Ограничение включает в себя код баннера.<span><br /></span></p></li><li><p>Используйте '
				+ 'префикс <span class="mono">hpmdf-</span> для всех идентификаторов и классов в HTML- и CSS-коде. '
				+ 'Это также распространяется на динамически присваиваемые значения.<span><br /></span></p></li><li><p>JS-код '
				+ 'не должен создавать новых глобальных переменных или вмешиваться в работу страницы. В связи '
				+ 'с этим, сторонние фреймворки вроде jQuery запрещены.<span><br /></span></p></li><li><p>Расхлоп '
				+ 'должен адаптироваться к экранам с соотношением ширины к высоте от 1:3 до 3:1 (включая 1:1) '
				+ 'и поддерживать обе ориентации независимо от настроек <span class="mono">viewport</span>.<span><br '
				+ '/></span></p></li><li><p>Используйте достаточно большие кнопки. На смартфонах, активная область '
				+ 'любого нажимаемого элемента должна быть не менее 20% ширины экрана в портретной ориентации, '
				+ 'и 10% в ландшафтной. Лимиты на планшетах ― 10% и 5%, соответственно.<span><br /></span></p></li></ol>Следуйте '
				+ 'инструкциям для загрузки баннера в систему HPMD и тестирования. Пересылки кода баннера по электронной '
				+ 'почте или файлообменник недостаточно.<span><br></span>Отправка собранного баннера по эл.почте '
				+ 'или через файлообменник запрещена.'
			+ '</div>'
		,
		'videofullscreen-en':
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Ad testing</div>'
					+ '<div class="format">Format: videofullscreen</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Video Fullscreen</b> is a fullscreen video ad displayed on page load.</p>'
				+ '<p>The video starts playing automatically without sound; no user interaction is required to start the playback. Another elements of the ad, such as a logo, may be placed around the video player or in the background. After playback is finished, the video disappears, revealing primary contents of the ad.</p>'
				+ '<p>A close button, which removes the ad completely, is displayed at the top right corner; the remaining area is taken by ad contents.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Before diving in, make sure that you know:</p><ul><li><p>which device types (smartphones, '
				+ 'tablets, or both) the ad should support,</p></li><li><p>scenario of the ad,</p></li><li><p>which '
				+ 'user interactions should be tracked.</p></li></ul>Under most circumstances, you only have to '
				+ 'build a single ad which will work on both smartphones and tablets. However, if you have different '
				+ 'layouts for smartphones and tablets or for any other reason unable to create a single ad for '
				+ 'both device types, separate templates for smartphones and tablets are provided as well. Use '
				+ 'these to build two separate ads either separately or in parallel, whichever fits best; either '
				+ 'way, follow the instructions of this guide step by step and choose options appropriate for '
				+ 'the chosen template when presented with a choice.'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>The requrements are explained in greater details in the following steps. Use this list to '
				+ 'familiarize yourself with general principles and as a checklist.</p><ol><li><p>No changes should '
				+ 'be made to the template. Replace the content of the ad and add your own code, but do not change '
				+ 'the behaviour of the template itself.<span><br /></span></p></li><li><p>Until first user interaction '
				+ 'with the ad, keep network traffic below 150 kB (on smartphones) or 300 kB (on tablets). The '
				+ 'restriction includes the ad’s code, but does not include the video itself.<span><br /></span></p></li><li><p>Use '
				+ '<span class="mono">hpmdf-</span> prefix for every identifier and class name in your HTML and '
				+ 'CSS code. This also applies to dynamically assigned classes and identifiers.<span><br /></span></p></li><li><p>Your '
				+ 'JS code must not create new global variables and in any other way interfere with the page it’s '
				+ 'on. As such, external frameworks such as jQuery are not allowed.<span><br /></span></p></li><li><p>The '
				+ 'fullscreen part of the ad should be adaptive and displayed correctly on screens with width-to-height '
				+ 'ratio ranging from 1:3 through 1:1 to 3:1, including both device orientations, and regardless '
				+ 'of viewport settings on the particular page.<span><br /></span></p></li><li><p>Keep the buttons '
				+ 'large enough. On smartphones, touch area of any interactive element should be no smaller than '
				+ '20% screen width in portrait orientation, and 10% in landscape. On tablets, corresponding limits '
				+ 'are 10% and 5% respectively.<span><br /></span></p></li><li>Follow the instructions from this '
				+ 'guide to upload your ad into HPMD system and test it live. Just sending the files is not enough, '
				+ 'and you should not use e-mail or file exchangers to transfer the ad.</li></ol>'
			+ '</div>'
		,
		nativescroller:
			'<div class="wrapper">'
				+ '<div class="header">'
					+ '<div class="title">HPMD Network</div>'
					+ '<div class="subtitle">Тестирование баннеров</div>'
					+ '<div class="format">Формат: нативный скроллер</div>'
				+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p><b>Нативный scroller </b>― баннер, состоящий из нативного окна и фона-подложки, предназначенный '
				+ 'только для смартфонов.</p><p><br></p><p>Нативное окно занимает выделенное для него место на экране, сохраняя '
				+ 'пропорции. Пропорции различаются для портретной и ландшафтной ориентаций устройства. Фон подложка '
				+ 'адаптируется под размеры экрана устройства.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<p>Убедитесь, что вам известно:</p><p><br></p><ul><li><p>сценарий баннера,</p></li>'
				+ '<li><p>какие действия пользователя должны отслеживаться.</p></li></ul>'
			+ '</div>'
			+ '<div class="wrapper">'
				+ '<h2>Общие требования</h2><p><br>Требования разъясняются в больших подробностях на последующих шагах; используйте '
				+ 'этот список для ознакомления и самопроверки.</p><p><br></p><ol><li><p>Нельзя вносить изменения в шаблон. Замените '
				+ 'содержимое-пример и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<br><br></p></li>'
				+ '<li><p>До первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов). Ограничение '
				+ 'включает в себя код баннера.<br><br></p></li><li><p>Используйте префикс hpmdn- для всех классов в HTML- и CSS-коде. '
				+ 'Это также распространяется на динамически присваиваемые значения.<br><br></p></li><li><p>JS-код не должен создавать '
				+ 'новых глобальных переменных или вмешиваться в работу страницы. В связи с этим, сторонние фреймворки вроде jQuery запрещены.'
				+ '<br><br></p></li><li><p>Фон-подложка должен адаптироваться к экранам с соотношением ширины к высоте от 1:3 до 1:1 и поддерживать '
				+ 'обе ориентации устройства независимо от настроек viewport конкретной страницы.<br><br></p></li><li><p>Используйте '
				+ 'достаточно большие кнопки. На смартфонах, активная область любого нажимаемого элемента должна быть не менее 20% '
				+ 'ширины экрана в портретной ориентации, и 10% в ландшафтной.<br><br></p></li><li><p>Следуйте инструкциям для загрузки '
				+ 'баннера в систему HPMD и тестирования. Пересылки кода баннера по электронной почте или файлообменник недостаточно. '
				+ 'Отправка собранного баннера по эл. почте или через файлообменник запрещена.</p></li></ol>'
			+ '</div>'
		,
		button:
			'<div class="wrapper">'
			+ '<div class="header">'
			+ '<div class="title">HPMD Network</div>'
			+ '<div class="subtitle">Тестирование баннеров</div>'
			+ '<div class="format">Формат: стикер</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p><b>Стикер </b>― баннер в виде стикер-кнопки показывается над контентом.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p>Убедитесь, что вам известно:</p><p><br></p><ul><li><p>сценарий баннера,</p></li>'
			+ '<li><p>какие действия пользователя должны отслеживаться.</p></li></ul>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<h2>Общие требования</h2><p><br>Требования разъясняются в больших подробностях на последующих шагах; используйте '
			+ 'этот список для ознакомления и самопроверки.</p><p><br></p><ol><li><p>Нельзя вносить изменения в шаблон. Замените '
			+ 'содержимое-пример и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<br><br></p></li>'
			+ '<li><p>До первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов). Ограничение '
			+ 'включает в себя код баннера.<br><br></p></li><li><p>Используйте префикс hpmd- для всех классов в HTML- и CSS-коде. '
			+ 'Это также распространяется на динамически присваиваемые значения.<br><br></p></li><li><p>JS-код не должен создавать '
			+ 'новых глобальных переменных или вмешиваться в работу страницы. В связи с этим, сторонние фреймворки вроде jQuery запрещены.'
			+ '<br><br></p></li><li><p>Следуйте инструкциям для загрузки '
			+ 'баннера в систему HPMD и тестирования. Пересылки кода баннера по электронной почте или файлообменник недостаточно. '
			+ 'Отправка собранного баннера по эл. почте или через файлообменник запрещена.</p></li></ol>'
			+ '</div>'
		,
		buttonpopup:
			'<div class="wrapper">'
			+ '<div class="header">'
			+ '<div class="title">HPMD Network</div>'
			+ '<div class="subtitle">Тестирование баннеров</div>'
			+ '<div class="format">Формат: стикер c раскрытием</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p><b>Стикер с раскрытием </b>― баннер в виде стикер-кнопки показывается над контентом, открытие фулскрина по тапу на баннер.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p>Убедитесь, что вам известно:</p><p><br></p><ul><li><p>сценарий баннера,</p></li>'
			+ '<li><p>какие действия пользователя должны отслеживаться.</p></li></ul>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<h2>Общие требования</h2><p><br>Требования разъясняются в больших подробностях на последующих шагах; используйте '
			+ 'этот список для ознакомления и самопроверки.</p><p><br></p><ol><li><p>Нельзя вносить изменения в шаблон. Замените '
			+ 'содержимое-пример и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<br><br></p></li>'
			+ '<li><p>До первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов). Ограничение '
			+ 'включает в себя код баннера.<br><br></p></li><li><p>Используйте префикс hpmd- для всех классов в HTML- и CSS-коде. '
			+ 'Это также распространяется на динамически присваиваемые значения.<br><br></p></li><li><p>JS-код не должен создавать '
			+ 'новых глобальных переменных или вмешиваться в работу страницы. В связи с этим, сторонние фреймворки вроде jQuery запрещены.'
			+ '<br><br></p></li><li><p>Следуйте инструкциям для загрузки '
			+ 'баннера в систему HPMD и тестирования. Пересылки кода баннера по электронной почте или файлообменник недостаточно. '
			+ 'Отправка собранного баннера по эл. почте или через файлообменник запрещена.</p></li></ol>'
			+ '</div>'
		,
		'nativepopup':
			'<div class="wrapper">'
			+ '<div class="header">'
			+ '<div class="title">HPMD Network</div>'
			+ '<div class="subtitle">Тестирование баннеров</div>'
			+ '<div class="format">Формат: нативный скроллер</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p><b>Нейтив стори </b>― Нативный баннер адаптируется под заголовки сайта и встраивается в контент с пометкой о рекламе. ' +
				'При клике на баннер открывается фулскрин с небольшой статьей или спецпроектом.</p>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<p>Убедитесь, что вам известно:</p><p><br></p><ul><li><p>сценарий баннера,</p></li>'
			+ '<li><p>какие действия пользователя должны отслеживаться.</p></li></ul>'
			+ '</div>'
			+ '<div class="wrapper">'
			+ '<h2>Общие требования</h2><p><br>Требования разъясняются в больших подробностях на последующих шагах; используйте '
			+ 'этот список для ознакомления и самопроверки.</p><p><br></p><ol><li><p>Нельзя вносить изменения в шаблон. Замените '
			+ 'содержимое-пример и добавьте свой собственный код, но не меняйте структуру и поведение шаблона.<br><br></p></li>'
			+ '<li><p>До первого взаимодействия с пользователем сетевой трафик должен быть не более 150 кБ (для смартфонов). Ограничение '
			+ 'включает в себя код баннера.<br><br></p></li><li><p>Используйте префикс hpmdn- для всех классов в HTML- и CSS-коде. '
			+ 'Это также распространяется на динамически присваиваемые значения.<br><br></p></li><li><p>JS-код не должен создавать '
			+ 'новых глобальных переменных или вмешиваться в работу страницы. В связи с этим, сторонние фреймворки вроде jQuery запрещены.'
			+ '<br><br></p></li><li><p>Фон-подложка должен адаптироваться к экранам с соотношением ширины к высоте от 1:3 до 1:1 и поддерживать '
			+ 'обе ориентации устройства независимо от настроек viewport конкретной страницы.<br><br></p></li><li><p>Используйте '
			+ 'достаточно большие кнопки. На смартфонах, активная область любого нажимаемого элемента должна быть не менее 20% '
			+ 'ширины экрана в портретной ориентации, и 10% в ландшафтной.<br><br></p></li><li><p>Следуйте инструкциям для загрузки '
			+ 'баннера в систему HPMD и тестирования. Пересылки кода баннера по электронной почте или файлообменник недостаточно. '
			+ 'Отправка собранного баннера по эл. почте или через файлообменник запрещена.</p></li></ol>'
			+ '</div>'
		,
	};
	// TODO: fill correct EN descriptions
	formatDescriptions['nativescroller-en'] = '<span style="font-weight: bold; color: red;">TODO: fill description!</span>' + formatDescriptions['native-en'];
	
	var lang = "";
	var t = function (ru, en) {
		return lang == "-en" ? en : ru;
	};
	
	var bannerFormat = null;
	var docBannerFormat = null;
	var bufferedHTML = null;
	var bufferedCSS = null;
	var bufferedJS = null;
	
	// Create receiver for banner JS code
	_hpmd.testBanner = function (callback) {
		bufferedJS = "(" + callback.toString() + ")();";
	};
	
	var hadFailures = false;
	
	// Handle errors
	window.addEventListener('error', function (event) {
		showFailure(t("Ошибка в JS баннера", "Error in JS") + ":<pre>" + (!!event.error ? event.error : event.message) + '</pre>' + t("строка", "line") + ' ' + event.lineno + ', ' + t("символ", "character") + ' ' + event.colno);
	});
	var onException = function (exception) {
		showFailure(t("Ошибка в JS баннера", "Error in JS") + ":<pre>" + exception.name + ': ' + exception.message + '</pre>' + t("строка", "line") + ' ' + exception.lineNumber + ', ' + t("символ", "character") + ' ' + exception.columnNumber);
	};
	
	document.addEventListener('DOMContentLoaded', function () {
		try {
			lang = document.body.getAttribute('data-lang');
			if (lang == "ru") {
				lang = "";
			} else {
				lang = "-" + lang;
			}
		} catch (e) {
			lang = "";
		}
		
		// Validate document structure
		try {
			var success = true;
			var element;
			if (
				// <html> node:
				document.documentElement.attributes.length > 0
				|| document.documentElement.classList.length > 0
				// <head> node:
				|| !(element = document.querySelector('head'))
				|| element.attributes.length > 0
				|| element.classList.length > 0
				// <head> descendants:
				|| element.children.length != 2
				|| element.children[0].tagName.toLowerCase() != 'meta'
				|| element.children[0].getAttribute('charset') !== 'utf-8'
				|| element.children[1].tagName.toLowerCase() != 'script'
				|| element.children[1].getAttribute('src') !== './system/hpmd.js'
				// <body> node:
				|| document.body.attributes.length != 4  
				|| document.body.classList.length > 0
				|| !document.body.hasAttribute('data-format')
				|| !document.body.getAttribute('data-format')
				|| 'undefined' == typeof ({
						teaser: 1,
						swipe: 1,
						fullscreen: 1,
						native: 1,
						inread: 1,
						videoteaser: 1,
						nativevideo: 1,
						curtain: 1,
						nativescroller: 1,
						'vertical-video': 1,
						popup: 1,
						buttonpopup: 1,
						button: 1,
						'nativepopup': 1,
					}[document.body.getAttribute('data-format')])
				|| !document.body.hasAttribute('data-lang')
				|| !document.body.getAttribute('data-lang')
				|| 'undefined' == typeof ({ru:1, en:1}[document.body.getAttribute('data-lang')])
				|| !document.body.hasAttribute('data-sys-format')
				|| !document.body.getAttribute('data-sys-format')
				|| !document.body.hasAttribute('data-sys-subformat')
				|| !document.body.getAttribute('data-sys-subformat')
				// <body> descendants:
				|| document.body.children.length != 3
				// banner HTML node:
				|| !(element = document.body.children[0])
				|| element.tagName.toLowerCase() != 'section'
				|| element.attributes.length > 0
				|| element.classList.length > 0
				// banner CSS node:
				|| !(element = document.body.children[1])
				|| element.tagName.toLowerCase() != 'style'
				|| element.attributes.length > 0
				|| element.classList.length > 0
				// banner JS node:
				|| !(element = document.body.children[2])
				|| element.tagName.toLowerCase() != 'script'
				|| element.attributes.length > 0
				|| element.classList.length > 0
			) {
				success = false;
			}
		} catch (e) {
			success = false;
		}
		if (!success) {
			showFailure(t(
				"<b>Пожалуйста, не&nbsp;меняйте структуру&nbsp;файла&nbsp;index.html.</b><br /><br />Вам&nbsp;необходимо отредактировать только&nbsp;код, относящийся&nbsp;к&nbsp;баннеру.",
				"<b>Please do&nbsp;not&nbsp;change structure of&nbsp;this&nbsp;file.</b><br /><br />You only need to&nbsp;adjust the&nbsp;code specific to&nbsp;your&nbsp;ad."
			));
		}
		
		if (bufferedJS === null) {
			showFailure(t(
				"<b>Пожалуйста, не&nbsp;меняйте структуру&nbsp;файла&nbsp;index.html.</b><br /><br />Вам&nbsp;необходимо отредактировать только&nbsp;код, относящийся&nbsp;к&nbsp;баннеру.",
				"<b>Please do&nbsp;not&nbsp;change structure of&nbsp;this&nbsolfile.</b><br /><br />You only need to&nbsp;adjust the&nbsp;code specific to&nbsp;your&nbsp;ad."
			));
		}
		
		initInterface();
		
		var nativeSubformat = "expand";
		bannerFormat = document.body.getAttribute('data-format');
		docBannerFormat = bannerFormat;
		if (bannerFormat == "inread") {
			bannerFormat = "native";
			nativeSubformat = "in-read";
		} else if (bannerFormat == "nativevideo") {
			bannerFormat = "native";
			nativeSubformat = "video";
		} else if (bannerFormat == "nativescroller") {
			bannerFormat = "native";
			nativeSubformat = "scroller";
		} else if (bannerFormat == "vertical-video") {
			bannerFormat = "native";
			nativeSubformat = "vertical-video";
		} else if (bannerFormat == "popup") {
			bannerFormat = "native";
			nativeSubformat = "popup";
		}	else if (bannerFormat == "nativepopup") {
			bannerFormat = "native";
			nativeSubformat = "popup";
		}
		
		if (!hadFailures) {
			// Validate banner HTML
			var validateNode = function (node) {
				switch (node.tagName.toLowerCase()) {
					case "html":
					case "head":
					case "body":
					case "title":
					case "meta":
					case "script":
					case "style":
					case "link":
					case "plaintext":
					case "noscript":
					case "a":
						showFailure(t(
							"Пожалуйста, не используйте элементы &lt;" + node.tagName.toLowerCase() + "&gt; в коде баннера.",
							"Please do not use &lt;" + node.tagName.toLowerCase() + "&gt; elements in ad code."
						));
						return;
				}
				
				if (node.hasAttribute('id')) {
					if (bannerFormat == "native") {
						showFailure(t(
							"Пожалуйста, не используйте идентификаторы (атрибут id) в нативных баннерах.",
							"Please do not use identifiers (id attributes) in native banners."
						));
					} else {
						var attribute = node.getAttribute('id').replace(/^\s+/, '');
						switch (bannerFormat) {
							case "teaser":
							case "swipe":
								if (attribute.indexOf('hpmd-') != 0 && attribute.indexOf('hpmdb-') != 0) {
									showFailure(t(
										"<b>Для форматов «тизер» и «Swipe-баннер», все идентификаторы HTML-элементов должны начинаться с &quot;hpmd-&quot;.</b><br /><br />Этот идентификатор использовать нельзя: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.',
										"<b>For «Teaser» and «Swipe banner» formats, all HTML identifiers must be prefixed with &quot;hpmd-&quot;.</b><br /><br />This identifier is not permitted: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.'
									));
									return;
								}
								break;
							case "fullscreen":
								if (attribute.indexOf('hpmdf-') != 0) {
									showFailure(t(
										"<b>Для формата «Fullscreen», все идентификаторы HTML-элементов должны начинаться с &quot;hpmdf-&quot;.</b><br /><br />Этот идентификатор использовать нельзя: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.',
										"<b>For «Fullscreen» format, all HTML identifiers must be prefixed with &quot;hpmdf-&quot;.</b><br /><br />This identifier is not permitted: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.'
									));
									return;
								}
								break;
						}
					}
				}
				if (node.classList.length > 0) {
					for (var i = 0; i < node.classList.length; i++) {
						var attribute = node.classList[i];
						switch (bannerFormat) {
							case "teaser":
							case "swipe":
								if (attribute.indexOf('hpmd-') != 0 && attribute.indexOf('hpmdb-') != 0) {
									showFailure(t(
										"<b>Для форматов «тизер» и «Swipe-баннер», все классы HTML-элементов должны начинаться с &quot;hpmd-&quot;.</b><br /><br />Этот класс использовать нельзя: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.',
										"<b>For «Teaser» and «Swipe banner» formats, all HTML classes must be prefixed with &quot;hpmd-&quot;.</b><br /><br />This class name is not permitted: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.'
									));
									return;
								}
								break;
							case "fullscreen":
								if (attribute.indexOf('hpmdf-') != 0) {
									showFailure(t(
										"<b>Для формата «Fullscreen», все классы HTML-элементов должны начинаться с &quot;hpmdf-&quot;.</b><br /><br />Этот класс использовать нельзя: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.',
										"<b>For «Fullscreen» format, all HTML classes must be prefixed with &quot;hpmdf-&quot;.</b><br /><br />This class name is not permitted: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.'
									));
									return;
								}
								break;
							case "native":
								if (attribute.indexOf('hpmdn-') != 0) {
									showFailure(t(
										"<b>Для формата «Нативный баннер», все классы HTML-элементов должны начинаться с &quot;hpmdn-&quot;.</b><br /><br />Этот класс использовать нельзя: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.',
										"<b>For «Native banner» format, all HTML classes must be prefixed with &quot;hpmdn-&quot;.</b><br /><br />This class name is not permitted: <span style='white-space: nowrap; font-family: monospace;'>" + attribute + '</span>.'
									));
									return;
								}
								break;
						}
					}
				}
				
				for (var i = 0; i < node.attributes.length; i++) {
					if (node.attributes[i].name.toLowerCase().indexOf('on') == 0) {
						showFailure(t(
							"<b>Не используйте обработчики событий в HTML-коде</b><br /><br />Вместо атрибута <span style='white-space: nowrap; font-family: monospace;'>" + node.attributes[i].name + '</span>, пожалуйста, назначьте обработчик события в JavaScript-коде.',
							"<b>Please do not use event handlers in HTML code</b><br /><br />Instead of <span style='white-space: nowrap; font-family: monospace;'>" + node.attributes[i].name + '</span> attribute, please use JavaScript to assign event handler.'
						));
						return;
					}
				}
				
				for (var i = 0; i < node.children.length; i++) {
					validateNode(node.children[i]);
				}
			};
			var node = document.querySelector('section');
			for (var i = 0; i < node.children.length; i++) {
				validateNode(node.children[i]);
			}
			if (hadFailures) {
				return;
			}
			
			// Store banner info
			bufferedHTML = document.querySelector('section').innerHTML;
			bufferedCSS = document.querySelector('body style').innerHTML;
			
			// Remove banner HTML
			document.querySelector('section').parentNode.removeChild(document.querySelector('section'));
			
			// Disable banner stylesheet
			document.querySelector('body style').disabled = true;
			
			showInfo(t("Загружается...", "Loading..."));
			window.hpmd = [function () {
				var payload = {
					format: (bannerFormat == "swipe" ? "teaser" : bannerFormat),
					html: bufferedHTML,
					css: bufferedCSS,
					js: bufferedJS,
					onException: onException,
				};
				if (bannerFormat == "native") {
					payload.subformat = nativeSubformat;
				}
				
				hideInfo();
				showSuccess();
				
				if (bannerFormat == "native") {
					payload.placement = { header: true };
					hpmd.imitate(payload);
					payload.placement = { content: true };
					hpmd.imitate(payload);
					payload.placement = { footer: true };
					hpmd.imitate(payload);
				} else {
					hpmd.imitate(payload);
				}
			}];
			
			if (bannerFormat == "native") {
				window.hpmd.push(function () {
					hpmd.imitatePlugins({
						id: "native_wrapper",
						type: "native_wrapper",
						js: '(' + (function () {
							var style = {
								// default styles: 
								'default': function () {
									return ''
										// Required styles
										+ 'display: none;'
										+ 'position: relative;'
										+ 'z-index: 1;'
										+ 'overflow: hidden;'
										// Closing animations
										+ 'transition: margin-top .3, margin-bottom .3s;'
										+ '-webkit-transition: margin-top .3, margin-bottom .3s;'
										+ '-moz-transition: margin-top .3, margin-bottom .3s;'
										+ '-ms-transition: margin-top .3, margin-bottom .3s;'
										+ '-o-transition: margin-top .3, margin-bottom .3s;'
										// Workaround for Windows Phone bug
										+ 'padding-top: 1px;'
										+ 'margin-top: -1px;'
									;
								},
							};
							
							var close = {
								// default animation
								default: function (element, beforeCallback, afterCallback) {
									return function () {
										if (!!beforeCallback) {
											beforeCallback(element);
										}
										
										// Animate vertical margins
										element.style.marginTop = 0;
										element.style.marginBottom = 0;
										
										// Wait for animation to finish
										setTimeout(function () {
											if (!!afterCallback) {
												afterCallback(element);
											}
											
											// Remove element
											element.parentNode.removeChild(element);
										}, 300);
									};
								},
							};
							
							var viewport = {
								// Fits container to complete page width with regard
								// to parents' paddings, margins and borders
								page: function (element, callback) {
									return function () {
										var left = 0, right = 0;
										var obj = element.parentNode;
										while (!!obj && obj !== window) {
											try {
												var style = window.getComputedStyle(obj);
												left +=
													(parseFloat(style.getPropertyValue('padding-left').replace(/px$/, '')) || 0) + 
													(parseFloat(style.getPropertyValue('border-left').replace(/px$/, '')) || 0) + 
													(parseFloat(style.getPropertyValue('margin-left').replace(/px$/, '')) || 0)
												;
												right +=
													(parseFloat(style.getPropertyValue('padding-right').replace(/px$/, '')) || 0) + 
													(parseFloat(style.getPropertyValue('border-right').replace(/px$/, '')) || 0) + 
													(parseFloat(style.getPropertyValue('margin-right').replace(/px$/, '')) || 0)
												;
											} catch(e) {};
											obj = obj.parentNode;
										}
										element.style.marginLeft = -left + 'px';
										element.style.marginRight = -right + 'px';
										
										if (!!callback) {
											callback(element);
										}
									};
								},
								// Leave the block as it is
								'default': function (element, callback) {
									callback && callback(element);
								},
							};
							
							var slotno = -1;
							var generateSlot = function (
								attributes,
								mode,
								element,
								marginTop,
								marginBottom,
								gStyle,
								gViewport,
								gClose
							) {
								slotno++;
								var container = document.createElement('div');
								container.setAttribute('id', 'hpmd-slot-' + slotno);
								container.className = 'hpmd-slot';
								container.style.position = 'relative';
								
								if (!!marginTop) {
									container.style.marginTop = marginTop + 'px';
								}
								if (!!marginBottom) {
									container.style.marginBottom = marginBottom + 'px';
								}
								
								switch (mode) {
									case 'inside':
										if (!!element.querySelector('.hpmd-slot')) {
											// already have a slot inside
											return;
										}
										
										element.appendChild(container);
										break;
									case 'before':
										try {
											if (element.previousElementSibling.className.indexOf('hpmd-slot') > -1) {
												// already have a slot before this element
												return;
											}
										} catch (e) {
											// There's no previous sibling for this element,
											// but it's okay.
										}
										
										element.parentNode.insertBefore(container, element);
										break;
									case 'after':
										try {
											if (element.nextElementSibling.className.indexOf('hpmd-slot') > -1) {
												// already have a slot after this element
												return;
											}
										} catch (e) {
											// There's no next sibling for this element,
											// but it's okay.
										}
										
										if (!!element.nextElementSibling) {
											element.parentNode.insertBefore(container, element.nextElementSibling);
										} else {
											element.parentNode.appendChild(container);
										}
										break;
									default:
										throw new Error('Unknown mode.');
								}
								
								hpmd.slotReady({
									attributes: attributes,
									container: container,
									prefix: '#hpmd-slot-' + slotno,
									css: '#hpmd-slot-' + slotno + ' { ' + (!!gStyle ? gStyle : style.default)(container) + '}',
									onClose: (!!gClose ? gClose : close.default)(container),
									onViewportUpdate: (!!gViewport ? gViewport : viewport.page)(container),
								});
							};
							
							var wrappers = document.querySelectorAll('.wrapper');
							if (hpmd.getSegment('device_type') == 'mobile') {
								generateSlot(
									{
										placement: 'header',
										mobile: { expand: true, },
									},
									'after', wrappers[0],
									10, 10
								);
								generateSlot(
									{
										placement: 'content',
										mobile: { expand: true, },
									},
									'after', wrappers[isNativeScroller ? 2 : 1],
									10, 10
								);
								if (!isInReadValue) {
									generateSlot(
										{
											placement: 'footer',
											mobile: { expand: true, },
										},
										'after', wrappers[wrappers.length - 2],
										10, 10
									);
								}
							} else {
								var styleGenerator = function () {
									return 'width: 75%; margin-left: auto !important; margin-right: auto !important;';
								};
								generateSlot(
									{
										placement: 'header',
										tablet: { expand: true, },
									},
									'after', wrappers[0],
									20, 20,
									styleGenerator
								);
								generateSlot(
									{
										placement: 'content',
										tablet: { expand: true, },
									},
									'after', wrappers[2],
									20, 20,
									styleGenerator
								);
								if (!isInReadValue) {
									generateSlot(
										{
											placement: 'footer',
											tablet: { expand: true, },
										},
										'after', wrappers[wrappers.length - 2],
										20, 20,
										styleGenerator
									);
								}
							}
						})
						.toString()
						.replace(/isInReadValue/g, nativeSubformat == "inread")
						.replace(/isNativeScroller/g, nativeSubformat == "scroller")
						+ ')()',
					});
				});
			}
			
			(function(a,d,b){b=d.createElement(a);b.async=1;b.src='http://banner.hpmdnetwork.ru/client/52.min.js';a=d.getElementsByTagName(a)[0];a.parentNode.insertBefore(b,a)})('script',document);
			window.hpmd.push(function () {
				hpmd.imitateFormat(
					document.body.getAttribute('data-sys-format'),
					document.body.getAttribute('data-sys-subformat'),
					function (isDesktop) {
						showUnsupported(isDesktop);
					}
				);
			});
		}
	}, false);
	
	var initInterface = function () {
		var viewports = [
			{ width: 'device-width', class: 'device-width' },
			{ width: '320', class: 'width-320' },
			{ width: '1020', class: 'width-1020' },
		];
		var viewport = viewports[Math.floor(Math.random() * viewports.length)];
		viewport = viewports[0];
		var vpTag = document.createElement('meta');
		vpTag.setAttribute('name', 'viewport');
		vpTag.setAttribute('content', 'width=' + viewport.width);
		document.querySelector('head').appendChild(vpTag);
		document.body.classList.add(viewport.class);
		
		var style = document.createElement('style');
		style.innerHTML = ''
			+ 'body { background: #fff; font-family: sans-serif; }'
			+ 'body.device-width { font-size: 1.65ex; }'
			+ 'body.width-320 { font-size: 11px; }'
			+ 'body.width-1020 { font-size: 28px; }'
			+ '.failure, .info { max-width: 800px; border: solid 2px #000; border-radius: 12px; padding: 15px; }'
			+ 'body.width-1020 .failure, body.width-1020 .info { max-width: 1020px; border: solid 4px #000; border-radius: 24px; padding: 30px; }'
			+ '.failure { margin: auto; max-width: 800px; border-color: #800 !important; background: #fdd; color: #800; }'
			+ '.info { margin: auto; max-width: 800px; border-color: #008 !important; background: #ddf; color: #008; }'
			+ '#unsupported-banner { margin: 10px; border: solid 2px #bf0000; color: #bf0000; padding: 16px; background: #fdd; font-size: 15px; line-height: 135%; }'
		+ '';
		document.querySelector('head').appendChild(style);
		
		initInterface = function () {};
	};
	
	var showFailure = function (message) {
		if (hadFailures) {
			return;
		}
		
		hadFailures = true;
		initInterface();
		document.body.innerHTML = '<div class="failure">' + message + '</div>';
	};
	
	var showUnsupported = function (isDesktop) {
		var block = document.createElement('div');
		block.setAttribute('id', 'unsupported-banner');
		if (!lang) {
			if (isDesktop) {
				block.innerHTML = '<b>Это устройство не поддерживается</b><br /><br />Данная платформа не поддерживается этим форматом, и баннер может не работать. Пожалуйста, используйте <b>мобильное устройство</b> или эмулятор для тестирования баннера.';
			} else {
				block.innerHTML = '<b>Это устройство не поддерживается</b><br /><br />Данная платформа не поддерживается этим форматом, и баннер может не работать. Пожалуйста, используйте современное ПО для тестирования баннера.';
			}
		} else {
			if (isDesktop) {
				block.innerHTML = '<b>This device is not supported</b><br /><br />This platform is not supported by this format, and the ad may not work. Please use a <b>mobile device</b> or an emulator to test the ad.';
			} else {
				block.innerHTML = '<b>This device is not supported</b><br /><br />This platform is not supported by this format, and the ad may not work. Please use a modern environment to test the ad.';
			}
		}
		
		if (!!document.body.children.length) {
			document.body.insertBefore(block, document.body.children[0]);
		} else {
			document.body.appendChild(block);
		}
	};
	
	var showInfo = function (message) {
		if (hadFailures) {
			return;
		}
		
		initInterface();
		document.body.innerHTML = '<div class="info">' + message + '</div>';
	};
	
	var hideInfo = function () {
		var info = document.querySelector('.info');
		if (!!info) {
			info.parentNode.removeChild(info);
		}
	};
	
	var showSuccess = function () {
		var div = document.createElement('div');
		var html = '<style>'
			+ 'body { background: #dddddd; font-family: \'Trebuchet MS\', Arial, Verdana, sans-serif; color: #404040; }'
			+ '.wrapper { margin: 10px; padding: 20px; background: #f8f8f8; font-size: 13px; line-height: 19px; }'
			+ '.wrapper.nobgr { background: none; padding: 10px 20px; text-align: center; line-height: 18px; }'
			+ '.header { text-align: center; }'
			+ '.title {  font-size: 24px; color: #2c3638; }'
			+ '.subtitle { margin: 10px 0; color: #7c7c7c; }'
			+ '.format { color: #404040; }'
			+ '.mono { font-family: monospace; white-space: nowrap; overflow: hidden; position: relative; text-overflow: ellipsis; display: inline-block; vertical-align: middle; max-width: 90%; font-size: 90%; }'
			+ 'a { white-space: nowrap; overflow: hidden; position: relative; text-overflow: ellipsis; display: inline-block; vertical-align: middle; max-width: 95%; }'
			+ 'ul { padding-left: 25px; }'
			+ 'li+li { margin-top: 10px; }'
			+ 'p { margin: 0; }'
			+ 'p+p { margin-top: 10px; }'
			+ '.button { display: block; text-align: center; font-size: 24px; color: #fff; text-decoration: none; background: #00bff3; border-radius: 12px; padding: 20px; margin-bottom: 10px; }'
		+ '</style>';
		html += formatDescriptions[docBannerFormat + lang];
		if (lang == "-en") {
			html += '<div class="wrapper">'
				+ '<p>Make sure everything works. Check that your ad will not download more than 150 kB (for smartphones) or 300 kB (for tablets), except for the video, of data over network when displayed.</p>'
				+ '<p>Pack all files, including the <span class="mono">index.html</span> file and the <span class="mono">banner</span> and <span class="mono">system</span> subfolders, into a ZIP archive.</p>'
				+ '<p>Navigate to <a href="https://developers.hpmdnetwork.ru/en/console/" target="_blank">https://developers.hpmdnetwork.ru/en/console/</a> with your browser and upload the archive.</p>'
				+ '<p>Follow the guidelines to test the ad.</p>'
				+ '<p>When the test is completed successfully, send the links to uploaded ad to HPMD Ads.</p>'
			+ '</div>';
		} else {
			html += '<div class="wrapper">'
				+ '<p>Убедитесь, что все работает. Проверьте, что баннер не скачивает более 150 кБ (для смартфонов) или 300 кБ (для планшетов) по сети во время показа.</p>'
				+ '<p>Запакуйте все файлы, включая <span class="mono">index.html</span> и подпапки <span class="mono">banner</span> и <span class="mono">system</span>, в ZIP-архив.</p>'
				+ '<p>Зайдите по ссылке <a href="https://developers.hpmdnetwork.ru/console/" target="_blank">https://developers.hpmdnetwork.ru/console/</a> и загрузите архив.</p>'
				+ '<p>Проведите тестирование в соответствии с указаниями документации формата.</p>'
				+ '<p>После того, как тестирование завершено, передайте HPMD Ads ссылку на загруженный баннер.</p>'
			+ '</div>';
		}
		div.innerHTML = html;
		document.body.appendChild(div);
	};
	
})();
