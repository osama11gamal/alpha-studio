import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const characters = [
  // New Characters
  {
	id: 101,
	name: 'Osama Gamal',
	nameAr: 'أسامة جمال',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A young Egyptian who invented a unique thermal suit capable of absorbing heat from the environment or any external source, storing it in insulated batteries, and releasing it as a powerful directed flame. He combines the mind of an engineer with street humor, fighting crime with intellect, heat, and sarcasm. His power was not always a blessing; he long suffered from losing control, causing serious damage and living in isolation and guilt. Years of patience and development led him to master the suit and stand as a true Egyptian hero, directing his flame only at those who deserve it.',
	descriptionAr: 'شاب مصري، ابتكر بدلة حرارية فريدة من نوعها، قادرة على امتصاص الحرارة من الجو أو من أي مصدر خارجي، وتخزينها داخل بطاريات معزولة. وحين يحين الوقت، يُطلق هذه الحرارة على شكل لهبٍ قوي موجّه. صاحب عقل مبتكر ولسان لاذع، يجمع بين ذكاء المهندسين وروح الفكاهة الشعبية… يحارب الجريمة لا بالعضلات، بل بالعقل، والحرارة، والسخرية. لكن قدرته لم تكن دائمًا نعمة؛ فقد عانى طويلًا من فقدان السيطرة على الطاقة المختزنة، وتسبّب عن غير قصد في أضرار خطيرة لمحيطه، ما جعله يعيش في عزلة وتأنيب ضمير. وبعد سنوات من التجربة والصبر، جعلته يطوّر البدلة ويحكم السيطرة عليها، إلى أن وقف أخيرًا بثبات في وجه الجريمة… لا كهاوٍ يلعب بالنار، بل كبطلٍ مصريّ حقيقي، يُحسن توجيه لهبه… نحو من يستحقه.',
	image: '/Characters/osama.jpeg',
  },
  {
	id: 102,
	name: 'Fahd',
	nameAr: 'فهد',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A 17-year-old Egyptian who grew up in the harsh streets of Cairo in 1988, surviving by his wits and skill in theft. His life changes when he finds a white cat named Amira, then is exploited by a mysterious man named Sakhr to steal a dangerous chemical. The chemical explodes and grants him super speed. After a dramatic prison escape, Fahd becomes a new, mysterious entity, driven to find his lost cat and take revenge, using his new power in a world of injustice.',
	descriptionAr: '"فهد" هو شاب مصري يبلغ من العمر ١٧ عامًا، نشأ في شوارع القاهرة القاسية عام ١٩٨٨، معتمداً على ذكائه ومهارته في السرقة من أجل البقاء. تتغير حياته بشكل جذري عندما يجد قطة بيضاء اسمها "أميرة" ويعتبرها رفيقته الوحيدة، ثم يتم استغلاله من قبل رجل غامض يُدعى "صخر" لسرقة مادة كيميائية خطيرة. أثناء المهمة، تنفجر المادة وتتسرب إلى جسده، مما يمنحه سرعة خارقة. بعد هروبه المذهل من السجن، لم يعد "فهد" مجرد لص شوارع، بل أصبح كياناً جديداً وغامضاً، "شبحاً" سريعاً، مدفوعاً بهدفين: العثور على قطته المفقودة، والانتقام ممن ورطه في هذا المصير، مستخدماً قوته الجديدة ليشق طريقه في عالم لم يعرف فيه سوى الظلم.',
	image: '/Characters/fhd.jpeg',
  },
  {
	id: 103,
	name: 'Baran Kurt (Scarface)',
	nameAr: 'باران كورت "سكارفيس"',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'Baran Kurt, "Wolf of the Rain" in Turkish, also known as "Scarface". A former Turkish special forces soldier, known for his sharp mind and quick decisions. During a secret border operation, he disobeyed orders to save civilians, exposing hidden aspects of the mission. He was discharged, but instead of silence, he exposed crimes and became a symbol of vengeance, hunting corrupt officials and leaving a wolf under the rain as his mark.',
	descriptionAr: 'باران كورت، "ذئب المطر بالتركية" ولقبه البعض ب "سكارفيس (الوجه الجريح)". جندي سابق في القوات الخاصة التركية، عُرف بذكائه الحاد وقدرته على اتخاذ قرارات سريعة في الميدان. خلال عملية عسكرية سرّية على الحدود، خالف باران أوامر قائده — العقيد تحسين يلماز — لإنقاذ مدنيين عالقين، وكان العصيان ناجحًا ميدانيًا… لكنه فضح جوانب خفية من العملية كان يجب أن تبقى طيّ الكتمان. عوقب باران بتسريحه من الخدمة، لكن لم يصمت. بدأ بكشف المستندات وفضح جرائم خلف الستار. اختفى باران. لكنه لم يهرب. عاد من الظل، لا كعسكري، بل كرمز انتقام. يتنقّل في المدن، يصطاد المسؤولين الفاسدين الذين كانوا ذات يوم زملاءه في الزي العسكري، ويترك خلفه وشمًا مرسومًا على الجدار: ذئب تحت المطر.',
	image: '/Characters/40.jpeg',
  },
  {
	id: 104,
	name: 'Jaber Asran',
	nameAr: 'جابر عسران',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A young man from a remote Nile village, born silent but not mute to the truth. Raised by his grandmother, he learned that silence is power and the eyes can speak more than words. In his village, he is "the silent one"—a symbol of wisdom and justice.',
	descriptionAr: 'جابر هو شاب من قرية نائية على ضفاف النيل، وُلد صامتًا، لكنه لم يكن أبكمًا عن الحقيقة. نشأ في كنف جدته التي علّمته أن الصمت قوة، وأن العين قد تقول ما يعجز عنه اللسان. لا يتكلم، لكنه يرى كل شيء، ويفهم أكثر مما يُقال. في عيون أهل القرية، هو “الساكت”... رمز للحكمة، وسرّ لا يُفك، وصوت للعدل حين يضيع في ضوضاء الكلام.',
	image: '/Characters/41.jpeg',
  },
  {
	id: 105,
	name: 'Mai Saif',
	nameAr: 'مي سيف',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'An Egyptian environmental scientist, expert in restoring collapsed ecosystems and a leading mind in green biotech. As North Africa faces rapid desertification and extinction, Mai leads the unprecedented "Nabd El-Nil" project to revive the land and restore the Nile Valley’s green spirit.',
	descriptionAr: 'عالمة بيئة مصرية، متخصصة في استعادة النُظم البيئية المنهارة، وواحدة من ألمع العقول في الشرق الأوسط في مجال التقنيات الحيوية الخضراء. وبينما ينهار التوازن البيئي في شمال إفريقيا، يواجه العالم تصحُّرًا متسارعًا، وانقراضًا واسعًا في الحياة النباتية والحيوانية. ووسط هذا الخراب، تظهر مي ماهر كأمل أخير في إنقاذ ما تبقى. تقود مشروعًا بيئيًا مصريًا غير مسبوق يُدعى: "نبض النيل"، هدفه إحياء الأرض، واستعادة الروح الخضراء التي كانت ذات يوم تسكن وادي النيل.',
	image: '/Characters/43.jpeg',
  },
  {
	id: 106,
	name: 'Mentu Hor',
	nameAr: 'منتو حور',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'An immortal pharaonic entity, a massive granite statue revived by quantum tech and forgotten hieroglyphic spells. His body moves by geo-chromagnetic energy, his eyes burn with the first sunlight. He is a hybrid consciousness, the last to speak the "original language of creation". He rarely speaks, but when he does, the walls tremble. He sees modern life as noise and human time as a mistake to be corrected.',
	descriptionAr: 'هو كيان فرعوني خالد، تمثال حجري ضخم مصنوع من جرانيت أسود غامض، كان مدفونًا تحت معبد مفقود لآلاف السنين حتى أعادت منظمة "ديف" إحياؤه بتكنولوجيا كمومية وطلاسم هيروغليفية منسية. جسده لا يتحرك بعضلات، بل بموجات طاقة جيوكهرومغناطيسية تنبع من قلبه، وعيونه تشتعل بضوء الشمس الأولى. منتو حور ليس مجرد آلة قديمة، بل وعي هجين بين علم الفراعنة وذاكرة كونية لا تموت، يرى نفسه آخر من تكلّم بلغة "الخلق الأصلية". لا يتحدث كثيرًا، لكنه حين يفعل، تهتز الجدران وتبكي الحجارة. في نظره، الزمن البشري خطأ يجب إصلاحه، والحياة الحديثة تشويش على "الهندسة المقدسة" التي بُني بها الكون. منتو حور لا يغضب… بل يصدر الحكم.',
	image: '/Characters/44.jpeg',
  },
  {
	id: 107,
	name: 'Varko',
	nameAr: 'ڤاركو',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A primitive warrior in 2055, raised in lawless deserts. He believes humanity lost its nature when it built cities. His super strength comes from ancient beast blood, giving him animal senses and power. He lives by one creed: "Those who do not hunt, are hunted."',
	descriptionAr: 'محارب بدائي يعيش في عام 2055. نشأ في أراضي صحراوية قاحلة حيث لا قانون إلا البقاء للأقوى. يؤمن أن الإنسان فقد فطرته حين بنى المدن واختبأ خلف الشاشات. قوته خارقة تأتي من دماء وحوش قديمة مزجها بجسده في طقوس سرية، مما جعله يمتلك حواسًا معززة، قوة عضلية هائلة، وقدرة شبه حيوانية على تتبع الفريسة. لا يؤمن بالقوانين ولا العلم، بل يحيا وفق عقيدة واحدة: "من لا يطارد… يُفترَس". في نظره، كل التكنولوجيا خيانة للطبيعة، وكل من يتعامل معها… صيدٌ مشروع.',
	image: '/Characters/45.jpeg',
  },
  {
	id: 108,
	name: 'Layan Al-Rifai',
	nameAr: 'ليان الرفاعي',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A young Palestinian woman from Nablus, occupied Palestine. Despite her calm appearance, she has a will of steel. She lost her father and brother to occupation, but became a silent symbol of resistance, known as "the green shadow". Her strength is in her unbreakable will and dignity.',
	descriptionAr: 'ليان الرفاعي فتاة فلسطينية في أوائل العشرينات، تنتمي لمدينة نابلس المحتلة. رغم مظهرها الهادئ والبسيط، تحمل في داخلها عزيمة من فولاذ. نشأت في بيئة محاصرة، فقدت والدها في المعتقل وأخوها في إحدى الغارات، لكنها لم تختفِ… بل تحوّلت إلى رمز صامت للمقاومة. لا تحمل سلاحًا، لكن جسدها وفكرها سلاح. تُعرف بين الناس باسم "الظل الأخضر"، لأنها لا تُرى إلا في لحظات الحسم، ثم تختفي تاركة خلفها أثرًا لا يُمحى. قوتها ليست في العنف، بل في الإرادة التي لا تنكسر، والكرامة التي لا تُشترى.',
	image: '/Characters/46.jpeg',
  },
  {
	id: 109,
	name: 'Sylos-9',
	nameAr: 'سايلوس-9',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A future half-human, half-machine fighter, born from a secret military project. His body is fused with organic-metallic tech, able to analyze and adapt instantly. He believes in total control and sees chaos as the enemy, with Varko as his eternal rival.',
	descriptionAr: 'هو مقاتل مستقبلي نصف إنسان نصف آلة، وُلِد من مشروع عسكري سري يهدف لصنع جندي خارق يعتمد على الذكاء الصناعي الحيوي. وجهه بشري بارد يخفي ماضيًا من الخيانة والتجارب، لكن جسده مُدمج بتقنيات عضوية معدنية نابضة بالطاقة، ما يجعله قادرًا على تحليل ساحة المعركة والتكيّف فورًا مع أي تهديد. سايلوس لا يرى في الغريزة شيئًا سوى خلل، ويؤمن أن السيطرة الكاملة تأتي من العقل والبرمجة. يحمل في صدره نواة طاقة سلبية تُغذى بالعواطف المكبوتة، وتسمح له بتحويل الألم إلى سلاح. خصمه الأبدي هو الفوضى، ولذلك يرى في ڤاركو تجسيدًا لما يجب محوه: الإنسان البدائي.',
	image: '/Characters/47.jpeg',
  },
  {
	id: 110,
	name: 'Detective Rashid',
	nameAr: 'المحقق راشد',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A veteran cop in the mysterious city of Noctis. Hardened by years of service and haunted by a past mistake that cost an innocent family their lives. His story is a journey of forced atonement, facing his past and seeking redemption through truth.',
	descriptionAr: 'هو شرطي مخضرم في منتصف العمر، يعمل في مدينة "نوكتيس" الغامضة. شخصية عملية نحتت سنوات الخدمة على وجهه نظرة من الإرهاق والتشاؤم. يعيش مطاردًا بذنب خطيئة قديمة ارتكبها في بداية مسيرته المهنية، وهي التسبب في مقتل عائلة بريئة، وقد بنى حياته بأكملها على كذبة للتغطية على هذا الحادث. قصته هي رحلة تكفير إجبارية، حيث يضطر لمواجهة ماضيه الذي يعود في هيئة وحش، ليجد خلاصه ليس في النسيان، بل في الاعتراف الكامل بذنبه وتحمل مسؤوليته.',
	image: '/Characters/48.jpeg',
  },
  {
	id: 111,
	name: 'Raphael Azur',
	nameAr: 'رافائيل أزور',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A genius astrophysicist who sees humanity as a plague on Earth. He wears an aetherium suit that allows him to change size and density, making him a threat capable of reshaping the world to be ruled by advanced extraterrestrials.',
	descriptionAr: 'عالم فيزياء فلكية عبقري. يرى البشرية آفة على كوكب الأرض. يؤمن رافائيل بأن التكنولوجيا والنفايات التي خلّفها الإنسان دمرت الكوكب، وأن الحل الوحيد هو تسليمه لقوة خارجية متطورة: الأثيريين. يرتدي رافائيل بدلة الأثيريوم، التي تمكنه من تغيير حجمه وكثافته، مما يجعله تهديدًا غير متوقع قادرًا على التلاعب بالعالم لتحقيق هدفه الأسمى: تطهير الأرض من البشرية وإعادة تشكيلها على يد الكائنات الفضائية التي يعتبرها المنقذ الحقيقي.',
	image: '/Characters/49.jpeg',
  },
  {
	id: 112,
	name: 'John Carlton',
	nameAr: 'جون كارلتون',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A renowned English scientist who pioneered de-extinction, successfully cloning mammoths. Secretly, he sought to clone humans to save his daughter, leading him into dark organizations and ultimately a quest for redemption.',
	descriptionAr: 'هو عالم إنجليزي جليل ومشهور، كان رائدًا في مجال إعادة الحيوانات المنقرضة إلى الحياة، ونجح في استنساخ الماموث. لكن تحت ستار عبقريته وشهرته، كان يخفي سرًا أعمق وأكثر خطورة: سعيه اليائس لاستنساخ البشر، بدافع الخوف من فقدان ابنته الصغيرة سيلين. هذا السعي قاده إلى التورط مع منظمات غامضة مثل "نوفوس دومينوس" ثم "ديف" ثم "كافاريا"، ليكتشف لاحقًا حجم الشر الذي انغمس فيه ويتحول إلى بطل يسعى لإصلاح أخطائه ومواجهة التهديدات الكونية.',
	image: '/Characters/50.jpeg',
  },
  {
	id: 113,
	name: 'Freya',
	nameAr: 'فريا',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A young girl from a mysterious ancient village, with a unique spiritual bond to dragons, especially the rare red dragon Imbrowing. She is taken to the future (2033) by scientists seeking to control dragons, becoming a symbol of innocence and nature.',
	descriptionAr: 'هي فتاة شابة من قرية نائية وغامضة عاشت في الماضي البعيد، لم يكن يعرف بوجودها أحد. تتميز بروحها الشجاعة والحكيمة التي تفوق عمرها، ولديها رابط روحي عميق وفريد مع التنانين، خاصة التنين الأحمر النادر "إمبروينج" الذي ربته منذ صغره. أصبحت بويينا محورية في الصراع عندما تم أسرها ونقلها إلى المستقبل (عام 2033) من قبل العلماء الذين سعوا للسيطرة على التنانين، لتصبح رمزًا للبراءة والطبيعة التي يحاول العلم الجامح استغلالها.',
	image: '/Characters/51.jpeg',
  },
  {
	id: 114,
	name: 'Tom Arnold',
	nameAr: 'توم أرنولد',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'A quantum physicist from 2033, a leading scientist in the "Chronos Project" for time travel. His conscience awakens when he sees the evil plans for dragons, and he becomes a hero, joining the alliance to save dragons and humanity.',
	descriptionAr: 'هو عالم فيزياء كمي عبقري من عام 2033، كان أحد أبرز العلماء في "مشروع كرونوس" للسفر عبر الزمن. قاده فضوله العلمي لاكتشاف قرية نائية في الماضي والتنانين الأسطورية، وعلى رأسها التنين الأحمر "إمبروينج" الذي ربته الفتاة فريا. رغم طموحه الأولي الذي جعله يأخذ إمبروينج إلى المستقبل، إلا أن ضميره أيقظه أمام نوايا لجنته الشريرة لاستغلال التنانين. تحول أرنولد إلى بطل، مدفوعًا بحبه لفريا وإيمانه بالأخلاق العلمية، وانضم إلى التحالف لإنقاذ التنانين ومواجهة قوى الشر التي تسعى للسيطرة على البشرية.',
	image: '/Characters/52.jpeg',
  },
  {
	id: 115,
	name: 'Mark Wellington',
	nameAr: 'مارك ويلنجتون',
	novel: '',
	novelAr: '',
	saga: '',
	sagaAr: '',
	description: 'An American writer and detective, hero of "Cavaria", who dedicates his life to exposing the secret organization threatening humanity. His greatest motivation is his love for his daughter Penny and his quest for truth.',
	descriptionAr: 'مارك ويلينغتون هو كاتب ومحقق أمريكي شهير، يتميز بذكائه الحاد وشجاعته التي دفعته للغوص في أعماق أخطر الأسرار العالمية. هو بطل رواية "كافاريا"، حيث يكرس حياته لكشف مخططات منظمة "كافاريا" السرية التي تهدد البشرية. دافعه الأكبر هو حبه لابنته الوحيدة "بيني"، وقلقه على مستقبلها في عالم تسيطر عليه قوى الظلام. يمثل مارك رمزًا للمقاومة والبحث عن الحقيقة، حتى لو كلفه ذلك حياته.',
	image: '/Characters/53.jpeg',
  },
  // ...existing characters...
	{
		id: 1,
		name: 'Shihab',
		nameAr: 'شهاب',
		novel: 'The Forest of Humans',
		novelAr: 'غابة البشر',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'A mysterious figure whose past is shrouded in darkness. His connection to the events unfolding in the Forest of Humans remains unclear, but his presence suggests a deeper connection to the story\'s central mysteries.',
		descriptionAr: 'شخصية غامضة ماضيها محاط بالظلام. علاقته بالأحداث التي تتكشف في غابة البشر تبقى غير واضحة، لكن وجوده يشير إلى ارتباط أعمق بأسرار القصة المركزية.',
		image: '/Characters/Shihab .png',
	},
	{
		id: 7,
		name: 'Raven',
		nameAr: 'رافن',
		novel: 'Raven: A Killer Angel',
		novelAr: 'رافن: ملاك قاتل',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'Raven was raised by a major gang leader. He didn\'t give her the opportunity to learn and go to school like any other girl, only working on hacking and digital theft. She always said there was something she had to stop and leave behind... but her past always haunted her. After her father\'s death, she took over the leadership of the gang, carrying with her the pain of the past and the desire to live the life that had been stolen from her by the ancient past.',
		descriptionAr: 'نشأت رافن على يد زعيم عصابة كبير. لم يمنحها الفرصة للتعلم والذهاب إلى المدرسة مثل أي فتاة أخرى، وإنما كانت تعمل فقط على القرصنة والسرقة الرقمية. كانت تقول دائمًا إن هناك شيئًا يجب عليها أن توقفه وتتركه وراءها... لكن ماضيها كان يطاردها دائمًا. بعد وفاة والدها، تولت قيادة العصابة، حاملة معها ألم الماضي والرغبة في عيش الحياة التي سرقت منها من قبل الماضي القديم.',
		image: '/Characters/Raven.png',
	},
	{
		id: 2,
		name: 'The Lynx',
		nameAr: 'لينكس',
		novel: 'The Forest of Humans II',
		novelAr: 'غابة البشر II',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'Steve Borden, known as the Lynx, was a sheriff fighting crime. He was suddenly transferred to a city where crime is rife. He wanted to act like an honest cop, but the rampant crime was enough to frame him for a case that didn\'t suit him and land him in prison. And when he got out... he decided to take revenge. Borden was buried... The Lynx was born!',
		descriptionAr: 'كان ستيف بوردن، المعروف بـ لينكس، شريفًا يحارب الجريمة. تم نقله فجأة إلى مدينة تنتشر فيها الجريمة. أراد أن يتصرف كشرطي نزيه، لكن الجريمة المستشرية كانت كافية لتأطيره في قضية لا تناسبه وتودعه السجن. وعندما خرج... قرر أن ينتقم. دُفن بوردن... وُلِد لينكس!',
		image: '/Characters/The Lynx.png',
	},
	{
		id: 3,
		name: 'Amir EL-Shazly',
		nameAr: 'أمير الشاذلي',
		novel: 'The Forest of Humans, The Forest of Humans II, The Blue Wolf',
		novelAr: 'غابة البشر، غابة البشر II، الذئب الأزرق',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'Dr. Amir was a famous doctor and scientist who traveled to complete his research. He wasn\'t given the opportunity; he wasn\'t appreciated in his home country, and instead of being honored, he was fired after his experiment failed and the lab was destroyed. So Professor Dave wanted to exploit him for his own purposes of controlling the world, and he didn\'t know that this duo would be the end of the human race.',
		descriptionAr: 'كان الدكتور أمير طبيبًا وعالمًا مشهورًا سافر لإكمال أبحاثه. لم يُمنح الفرصة؛ لم يُقدَّر في وطنه، وبدلاً من تكريمه، تم طرده بعد فشل تجربته وتدمير المختبر. لذا أراد البروفيسور ديف استغلاله لأغراضه الخاصة في السيطرة على العالم، ولم يكن يعلم أن هذا الثنائي سيكون نهاية الجنس البشري.',
		image: '/Characters/Amir.jpg',
	},
	{
		id: 4,
		name: 'Reynard Daveson',
		nameAr: 'رينارد ديفسون',
		novel: 'The Forest of Human, The Forest of Human II, The Forest of Human IV \'Cavaria\', The Blue Wolf',
		novelAr: 'غابة البشر، غابة البشر II، غابة البشر IV "كافاريا"، الذئب الأزرق',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'Professor Reynard Daveson, known as Professor Dave. He is the person who used the abundant knowledge he gained in his life to sufficiently destroy humanity. He believed that the person who does not serve his machines is a burden on this planet. So he wanted to enslave humans and use the enormous technological power to operate his invention, which he kept secret throughout his life.',
		descriptionAr: 'البروفيسور رينارد ديفسون، المعروف باسم البروفيسور ديف. هو الشخص الذي استخدم المعرفة الوفيرة التي اكتسبها في حياته لتدمير البشرية بشكل كافٍ. كان يعتقد أن الشخص الذي لا يخدم آلاته هو عبء على هذا الكوكب. لذا أراد استعباد البشر واستخدام القوة التكنولوجية الهائلة لتشغيل اختراعه، الذي أبقاه سراً طوال حياته.',
		image: '/Characters/Reynard .png',
	},
	{
		id: 5,
		name: 'King Samagar',
		nameAr: 'الملك ساماغار',
		novel: 'The Curse of King Samagar',
		novelAr: 'لعنة الملك ساماغار',
		saga: 'Mirrors of Civilizations',
		sagaAr: 'مرايا الحضارات',
		description: 'King Samagar, a once noble ruler who fell victim to a dark curse. His kingdom, once prosperous and peaceful, now faces the consequences of his transformation. As he battles against the forces of evil that have taken hold of him, his story becomes a tale of redemption and the eternal struggle between good and evil.',
		descriptionAr: 'الملك ساماغار، حاكم نبيل سقط ضحية لعنة مظلمة. مملكته، التي كانت مزدهرة وسلمية، تواجه الآن عواقب تحوله. بينما يحارب ضد قوى الشر التي سيطرت عليه، تصبح قصته حكاية عن الخلاص والصراع الأبدي بين الخير والشر.',
		image: '/Characters/Samagar.png',
	},
	{
		id: 6,
		name: 'Armand Duval',
		nameAr: 'أرماند دوفال',
		novel: 'Throne of the Seas',
		novelAr: 'عرش البحار',
		saga: 'Armand Duval',
		sagaAr: 'أرماند دوفال',
		description: 'Armand Duval is a daring pirate with a heart of gold, feared by the wicked and revered by the oppressed. Once a nobleman betrayed by the crown, he now sails the seas in search of ancient treasures—not for wealth, but to aid the poor and forgotten. With sharp wit, unmatched swordsmanship, and a loyal crew, he wages a rebellious war against the tyrannical King Poseidon.',
		descriptionAr: 'أرماند دوفال هو قرصان جريء بقلب من ذهب، يخشاه الأشرار ويوقره المظلومون. بعد أن خانته التاج، يبحر الآن في البحار بحثًا عن كنوز قديمة - ليس للثروة، ولكن لمساعدة الفقراء والمنسيين. بذكاء حاد وسيف لا مثيل له وطاقم مخلص، يشن حربًا تمردية ضد الملك بوسيدون المستبد، الذي يطارد جشعه وقسوته المملكة.',
		image: '/Characters/Armand Duval.png',
	},
	
	{
		id: 8,
		name: 'Diego Delgado',
		nameAr: 'دييغو ديلجادو',
		novel: 'Boss Heist',
		novelAr: 'سرقة البوس',
		saga: 'Daggers and Destinies',
		sagaAr: 'الخناجر والأقدار',
		description: 'A master thief with a code of honor, Diego Delgado operates in the shadows of the criminal underworld. His skills in deception and strategy make him a formidable opponent, but his mysterious past and hidden motives add layers of complexity to his character.',
		descriptionAr: 'لص محترف له ميثاق شرف، يعمل دييغو ديلجادو في ظلال عالم الجريمة. مهاراته في الخداع والاستراتيجية تجعله خصماً هائلاً، لكن ماضيه الغامض ودوافعه المخفية تضيف طبقات من التعقيد لشخصيته.',
		image: '/Characters/Diego Delgado.png',
	},
];

const sagas = [
	
];

const Novels = () => {
	const { language } = useLanguage();
	const [activeTab, setActiveTab] = useState('novels');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = '/placeholder.png';
		e.currentTarget.onerror = null;
	};

	useEffect(() => {
		const loadImages = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const imagePromises = [

					...characters.map((character) => {
						const img = new Image();
						img.src = character.image;
						return new Promise((resolve, reject) => {
							img.onload = resolve;
							img.onerror = () => {
								console.warn(`Failed to load image: ${character.image}`);
								resolve(null);
							};
						});
					}),
					...sagas.map((saga) => {
						const img = new Image();
						img.src = saga.image;
						return new Promise((resolve, reject) => {
							img.onload = resolve;
							img.onerror = () => {
								console.warn(`Failed to load image: ${saga.image}`);
								resolve(null);
							};
						});
					}),
				];

				await Promise.all(imagePromises);
			} catch (err) {
				console.error('Error loading images:', err);
				setError('Failed to load some images. Please refresh the page.');
			} finally {
				setIsLoading(false);
			}
		};

		loadImages();
	}, []);

	return (
		<div className={cn('min-h-screen flex flex-col bg-gradient-to-b from-alpha-darker to-black', language === 'ar' && 'lang-ar')} lang={language}>
			<Navbar />

			<main className="flex-grow pt-20">
				{/* Hero Section */}
				<section className="relative h-[90vh] overflow-hidden">
					<motion.div 
						initial={{ scale: 1.1 }}
						animate={{ scale: 1 }}
						transition={{ duration: 2 }}
						className="absolute inset-0"
					>
						<img 
							src="/Home/Novels.png" 
							alt="Alpha Studio Novels" 
							className="w-full h-full object-cover object-center"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-alpha-darker via-alpha-darker/60 to-transparent"></div>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="absolute inset-0 flex items-center justify-center"
					>
						<div className="text-center">
							<h1 className="alpha-title text-5xl md:text-7xl mb-6 font-bold tracking-tight">
								{language === 'en' ? 'Alpha Studio Novels' : 'روايات ألفا ستوديو'}
							</h1>
							<h2 className="text-xl md:text-2xl font-display mb-8 text-alpha-gold">
								{language === 'en' ? 'Where Stories Come Alive' : 'حيث تنبض القصص بالحياة'}
							</h2>
							<p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
								{language === 'en' 
									? 'Explore our collection of immersive and thought-provoking novels.'
									: 'استكشف مجموعتنا من الروايات الغامرة والمحفزة للتفكير.'}
							</p>
						</div>
					</motion.div>
				</section>
{/* أعمال الستوديو (دمج القصص والروايات) */}
		<section className="py-24 relative overflow-hidden">
		  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
		  <div className="container mx-auto px-4 relative z-10">
			<motion.h2 
			  initial={{ y: 30, opacity: 0 }}
			  whileInView={{ y: 0, opacity: 1 }}
			  viewport={{ once: true }}
			  transition={{ duration: 0.6 }}
			  className="text-4xl md:text-5xl font-bold text-center mb-16"
			>
			  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
				{language === 'en' ? 'Studio Works' : 'أعمال الستوديو'}
			  </span>
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			  {/* Awda Play Card */}
			  <motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
				style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
				whileHover={{ 
				  scale: 1.02,
				  boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
				}}
			  >
				<Link to="/plays/awda" className="block">
				  <div className="relative h-64 overflow-hidden cursor-pointer">
					<motion.img 
					  src="/osos/52.jpeg"
					  alt={language === 'en' ? 'Awda' : 'عودة'}
					  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
					  onError={(e) => {
						e.currentTarget.src = '/placeholder.png';
					  }}
					  loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					{/* Status Badge */}
					<div className="absolute top-4 right-4">
					  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
						{language === 'en' ? 'Available' : 'متوفرة'}
					  </span>
					</div>
					{/* Category Badge */}
					<div className="absolute top-4 left-4">
					  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
						{language === 'en' ? 'Play' : 'مسرحية'}
					  </span>
					</div>
				  </div>
				</Link>
				<div className="p-6">
				  <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
					{language === 'en' ? 'Awda' : 'عودة'}
				  </h3>
				  <p className="text-gray-300 mb-4 text-center">
					{language === 'en' ? 'A new play about return, hope, and transformation.' : 'مسرحية جديدة عن العودة والأمل والتحول.'}
				  </p>
				  {/* Action Button */}
				  <div className="flex items-center justify-center gap-4 mt-4">
					<Link to="/plays/awda" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
					  <span className="mr-2">
						{language === 'en' ? 'Read' : 'اقرأ'}
					  </span>
					  <svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					  >
						<path 
						  strokeLinecap="round" 
						  strokeLinejoin="round" 
						  strokeWidth={2} 
						  d="M9 5l7 7-7 7" 
						/>
					  </svg>
					</Link>
					<Link to="/plays/awda">
					  <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
						{language === 'en' ? 'Read Now' : 'اقرأ الآن'}
					  </button>
					</Link>
				  </div>
				</div>
				{/* Hover Effect Line */}
				<motion.div
				  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
				  initial={false}
				/>
			  </motion.div>
			  {/* Rich Brother Poor Brother Card */}
			  <motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
				style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
				whileHover={{ 
				  scale: 1.02,
				  boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
				}}
			  >
				<Link to="/stories/rich-brother-poor-brother" className="block">
				  <div className="relative h-64 overflow-hidden cursor-pointer">
					<motion.img 
					  src="/osos/bro2.jpeg"
					  alt={language === 'en' ? 'Rich Brother Poor Brother' : 'الأخ الغني والأخ الفقير'}
					  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
					  onError={(e) => {
						e.currentTarget.src = '/placeholder.png';
					  }}
					  loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					{/* Status Badge */}
					<div className="absolute top-4 right-4">
					  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
						{language === 'en' ? 'Available' : 'متوفرة'}
					  </span>
					</div>
					{/* Category Badge */}
					<div className="absolute top-4 left-4">
					  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
						{language === 'en' ? 'Self-Development' : 'تطوير ذاتي'}
					  </span>
					</div>
				  </div>
				</Link>
				<div className="p-6">
				  <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
					{language === 'en' ? 'Rich Brother Poor Brother' : 'الأخ الغني والأخ الفقير'}
				  </h3>
				  <p className="text-gray-300 mb-4 text-center">
					{language === 'en'
					  ? 'A visual story about money, success, and financial freedom. Challenges everything you know about careers and education.'
					  : 'قصة بصرية عن المال والنجاح والحرية المالية. تصدمك بالمفاهيم التقليدية حول الوظيفة والتعليم.'}
				  </p>
				  {/* Action Button */}
				  <div className="flex items-center justify-center gap-4 mt-4">
					<Link to="/stories/rich-brother-poor-brother" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
					  <span className="mr-2">
						{language === 'en' ? 'Read' : 'اقرأ'}
					  </span>
					  <svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					  >
						<path 
						  strokeLinecap="round" 
						  strokeLinejoin="round" 
						  strokeWidth={2} 
						  d="M9 5l7 7-7 7" 
						/>
					  </svg>
					</Link>
					<a href="https://online.fliphtml5.com/ynqhh/wiie/" target="_blank" rel="noopener noreferrer">
					  <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
						{language === 'en' ? 'Read Now' : 'اقرأ الآن'}
					  </button>
					</a>
				  </div>
				</div>
				{/* Hover Effect Line */}
				<motion.div
				  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
				  initial={false}
				/>
			  </motion.div>
			  {/* Khidaa Altahror Card */}
			  <motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
				style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
				whileHover={{ 
				  scale: 1.02,
				  boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
				}}
			  >
				<Link to="/stories/khidaa-altahror" className="block">
				  <div className="relative h-64 overflow-hidden cursor-pointer">
					<motion.img 
					  src="/osos/khedaa2.jpeg"
					  alt={language === 'en' ? 'Khidaa Altahror' : 'خداع التحرر'}
					  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
					  onError={(e) => {
						e.currentTarget.src = '/placeholder.png';
					  }}
					  loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					{/* Status Badge */}
					<div className="absolute top-4 right-4">
					  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
						{language === 'en' ? 'Available' : 'متوفرة'}
					  </span>
					</div>
					{/* Category Badge */}
					<div className="absolute top-4 left-4">
					  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
						{language === 'en' ? 'Psychological Drama' : 'دراما نفسية'}
					  </span>
					</div>
				  </div>
				</Link>
				<div className="p-6">
				  <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
					{language === 'en' ? 'Khidaa Altahror' : 'خداع التحرر'}
				  </h3>
				  <p className="text-gray-300 mb-4 text-center">
					{language === 'en' ? 'A psychological drama novel.' : 'رواية دراما نفسية'}
				  </p>
				  {/* Action Button */}
				  <div className="flex items-center justify-center gap-4 mt-4">
					<Link to="/stories/khidaa-altahror" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
					  <span className="mr-2">
						{language === 'en' ? 'Read' : 'اقرأ'}
					  </span>
					  <svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					  >
						<path 
						  strokeLinecap="round" 
						  strokeLinejoin="round" 
						  strokeWidth={2} 
						  d="M9 5l7 7-7 7" 
						/>
					  </svg>
					</Link>
					<Link to="/stories/khidaa-altahror">
					  <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
						{language === 'en' ? 'Read Now' : 'اقرأ الآن'}
					  </button>
					</Link>
				  </div>
				</div>
				{/* Hover Effect Line */}
				<motion.div
				  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
				  initial={false}
				/>
			  </motion.div>
			  {/* Serk Nos El Leil Card */}
			  <motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-500 border border-[#FFD700]/20 max-w-md w-full mx-auto"
				style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)' }}
				whileHover={{ 
				  scale: 1.02,
				  boxShadow: '0 0 50px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)'
				}}
			  >
				<Link to="/stories/serk-nos-el-leil" className="block">
				  <div className="relative h-64 overflow-hidden cursor-pointer">
					<motion.img 
					  src="/osos/serk.jpeg"
					  alt={language === 'en' ? 'Serk Nos El Leil' : 'سرك نص الليل'}
					  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
					  onError={(e) => {
						e.currentTarget.src = '/placeholder.png';
					  }}
					  loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					{/* Status Badge */}
					<div className="absolute top-4 right-4">
					  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
						{language === 'en' ? 'Available' : 'متوفرة'}
					  </span>
					</div>
					{/* Category Badge */}
					<div className="absolute top-4 left-4">
					  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
						{language === 'en' ? 'Dialog Story' : 'قصة حوارية'}
					  </span>
					</div>
				  </div>
				</Link>
				<div className="p-6">
				  <h3 className="text-2xl font-bold text-[#FFD700] mb-2 text-center">
					{language === 'en' ? 'Serk Nos El Leil' : 'سرك نص الليل'}
				  </h3>
				  <p className="text-gray-300 mb-4 text-center">
					{language === 'en' ? 'A dialog story by Omar Duhaim & Mohamed Seddik.' : 'قصة حوارية تأليف: عمر دهيم، محمد صديق'}
				  </p>
				  {/* Action Button */}
				  <div className="flex items-center justify-center gap-4 mt-4">
					<Link to="/stories/serk-nos-el-leil" className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300 font-semibold">
					  <span className="mr-2">
						{language === 'en' ? 'Read' : 'اقرأ'}
					  </span>
					  <svg 
						className="w-4 h-4" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					  >
						<path 
						  strokeLinecap="round" 
						  strokeLinejoin="round" 
						  strokeWidth={2} 
						  d="M9 5l7 7-7 7" 
						/>
					  </svg>
					</Link>
					<Link to="/stories/serk-nos-el-leil">
					  <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
						{language === 'en' ? 'Read Now' : 'اقرأ الآن'}
					  </button>
					</Link>
				  </div>
				</div>
				{/* Hover Effect Line */}
				<motion.div
				  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
				  initial={false}
				/>
			  </motion.div>

			  {/* Novels Cards */}
			  {[
				{
				  img: '/Novels/The Blue Wolf .jpg',
				  titleEn: 'The Blue Wolf',
				  titleAr: 'الذئب الأزرق',
				  descEn: 'A hero seeking justice in a world of chaos.',
				  descAr: 'بطل يبحث عن العدالة في عالم من الفوضى.',
				  category: 'Novel',
				  link: '/blue-wolf',
				  status: 'available'
				},
				{
				  img: '/Novels/The Curse of King Samagar .png',
				  titleEn: 'The Curse of King Samagar',
				  titleAr: 'لعنة الملك ساماغار',
				  descEn: 'A cursed king battles the devil.',
				  descAr: 'ملك ملعون يحارب الشيطان.',
				  category: 'Novel',
				  status: 'coming-soon',
				  date: 'October 2025'
				},
				{
				  img: '/Novels/Boss Heist .png',
				  titleEn: 'Boss Heist',
				  titleAr: 'سرقة الزعيم',
				  descEn: 'A man emerges from the fog to unveil his destiny.',
				  descAr: 'رجل يخرج من الضباب ليكشف مصيره.',
				  category: 'Novel',
				  status: 'coming-soon',
				  date: '2026'
				}
			  ].map((novel, index) => (
				<motion.div
				  key={index}
				  initial={{ y: 50, opacity: 0 }}
				  whileInView={{ y: 0, opacity: 1 }}
				  viewport={{ once: true }}
				  transition={{ duration: 0.8, delay: index * 0.2 }}
				  className="group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#FFD700]/10"
				  whileHover={{ 
					scale: 1.02,
					boxShadow: '0 0 30px rgba(255, 215, 0, 0.1)'
				  }}
				>
				  <Link to={novel.link} className="block">
					<div className="relative h-64 overflow-hidden">
					  <motion.img 
						src={novel.img}
						alt={language === 'en' ? novel.titleEn : novel.titleAr}
						className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
						onError={(e) => {
						  e.currentTarget.src = '/placeholder.png';
						}}
						loading="lazy"
					  />
					  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
					  {/* Status Badge */}
					  <div className="absolute top-4 right-4">
						{novel.status === 'available' ? (
						  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
							{language === 'en' ? 'Available' : 'متوفر'}
						  </span>
						) : (
						  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
							{language === 'en' ? `Coming ${novel.date}` : `قريباً ${novel.date}`}
						  </span>
						)}
					  </div>
					  {/* Category Badge */}
					  <div className="absolute top-4 left-4">
						<span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm font-medium">
						  {novel.category}
						</span>
					  </div>
					</div>
					<div className="p-6">
					  <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
						{language === 'en' ? novel.titleEn : novel.titleAr}
					  </h3>
					  <p className="text-gray-300 mb-4">
						{language === 'en' ? novel.descEn : novel.descAr}
					  </p>
					  {/* Action Button */}
					  <div className="flex items-center justify-between">
						<div className="flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300">
						  <span className="mr-2">
							{language === 'en' ? 'Read More' : 'اقرأ المزيد'}
						  </span>
						  <svg 
							className="w-4 h-4" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						  >
							<path 
							  strokeLinecap="round" 
							  strokeLinejoin="round" 
							  strokeWidth={2} 
							  d="M9 5l7 7-7 7" 
							/>
						  </svg>
						</div>
						{novel.status === 'available' ? (
						  <button className="px-4 py-2 bg-green-500/90 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors duration-300">
							{language === 'en' ? 'Read Now' : 'أقرأ الآن'}
						  </button>
						) : (
						  <button className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition-colors duration-300">
							{language === 'en' ? 'Stay Tuned' : 'انتظرونا'}
						  </button>
						)}
					  </div>
					</div>
					{/* Hover Effect Line */}
					<motion.div
					  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
					  initial={false}
					/>
				  </Link>
				</motion.div>
			  ))}
			</div>
		  </div>
		</section>

				{/* Characters Section */}
				<section className="py-24 bg-alpha-dark relative">
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-blue/5 via-transparent to-transparent animate-pulse"></div>
					</div>
					<div className="container mx-auto px-4 relative z-10">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="alpha-title mb-16 text-center text-4xl md:text-5xl"
						>
							{language === 'en' ? 'Meet Our Characters' : 'تعرف على شخصياتنا'}
						</motion.h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
							{characters.map((character, index) => (
								<motion.div
									key={character.id}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									className="character-card bg-alpha-charcoal/50 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40 transition-all duration-300"
								>
									<div className="md:flex">
										<div className="md:w-1/2 h-80 relative group">
											<motion.img
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
												src={character.image}
												alt={language === 'en' ? character.name : character.nameAr}
												className="w-full h-full object-cover object-center transition-transform duration-300"
												onError={handleImageError}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
										<div className="p-8 md:w-1/2">
											<h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-alpha-gold transition-colors duration-300">
												{language === 'en' ? character.name : character.nameAr}
											</h3>
											<p className="text-alpha-gold text-sm mb-2">
												{language === 'en' ? character.novel : character.novelAr}
											</p>
											<p className="text-gray-400 text-sm mb-4">
												{language === 'en' ? character.saga : character.sagaAr}
											</p>
											<div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
												<p className="text-gray-300 text-sm">
													{language === 'en' ? character.description : character.descriptionAr}
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="text-center mt-16"
						>
<a
  href="https://www.facebook.com/profile.php?id=61576116293161"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary text-lg px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
>
  {language === 'en' ? 'Explore All Works' : 'استكشف جميع الأعمال'}
</a>
						</motion.div>
					</div>
				</section>

				{/* Quote Section */}
				<section className="py-24 relative overflow-hidden">
					<div className="absolute inset-0">
						<motion.img
							initial={{ scale: 1.1 }}
							animate={{ scale: 1 }}
							transition={{ duration: 2 }}
							src="/alpha-studio/osos/60056686-1b1f-49d3-b548-96aa9ea3e719.png"
							alt="Background"
							className="w-full h-full object-cover object-center opacity-20"
						/>
						<div className="absolute inset-0 bg-alpha-darker/80"></div>
					</div>
					<div className="container mx-auto px-4 relative z-10">
						<motion.blockquote
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="max-w-4xl mx-auto text-center"
						>
							<p className="text-2xl md:text-4xl font-display text-white mb-6 leading-relaxed">
								{language === 'en'
									? '"Steps into darkness… Lots of sacrifices for one goal…"'
									: '"خطوات في الظلام... تضحيات كثيرة من أجل هدف واحد..."'}
							</p>
							<footer className="text-alpha-gold text-xl">
								<cite>— Alpha Studio</cite>
							</footer>
						</motion.blockquote>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Novels;
