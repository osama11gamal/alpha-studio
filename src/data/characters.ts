import MasterMindImg from '../../characters/Master mind.jpg';
import RamiImg from '../../characters/Rami.jpg';

export interface Character {
  id: number;
  name: string;
  nameAr: string;
  novel: string;
  novelAr: string;
  saga: string;
  sagaAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export const characters: Character[] = [
  {
    id: 201,
    name: 'Karim - Master mind',
    nameAr: 'كريم ماستر مايند',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'Karim spent a lifetime marked by poverty and failure, yet he held a higher purpose and a burning passion for invention. In a moment of anger, the lab he worked in exploded, exposing a dangerous formula coveted by scientists eager to weaponize it in their nuclear programs. Karim emerged as Master mind—able to bind imagination to reality and craft extraordinary things with nothing but his hands and mind.',
    descriptionAr:
      'كما عانى طوال حياته من الفقر والفشل، كان لكريم هدف أسمى بكثير ولطالما كان شغوفا بالاختراعات. وفي وهلة غضب، انفجر المعمل الذي كان به مرسبا تركيبة خطيرة كانت أعين الكثير من العلماء الذين أرادوا استخدامها في أسلحتهم النووية. أما كريم، فصار ماستر مايند القادر على ربط خياله بالواقع وصناعة أشياء فائقة فقط بيديه وعقله.',
    image: MasterMindImg,
  },
  {
    id: 202,
    name: 'Rami El Sherif',
    nameAr: 'رامي الشريف',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'Rami El Sherif, a brilliant engineer, was engaged to Leila, daughter of a powerful industrial tycoon. After a massive factory fire caused by negligence he had warned about, Rami tried to save the workers, but a violent explosion left him horrifically disfigured. To protect his reputation, Leila’s father blamed Rami for everything. In one terrible night, Rami lost his face, his future, and the love of his life. He vanished for years, presumed dead—but he was planning. His purpose is burning and personal: to dismantle the tycoon’s empire and make Osama, who took his place beside Leila, suffer for “stealing his life.”',
    descriptionAr:
      'رامي الشريف، المهندس اللامع، كان خطيب "ليلى"، ابنة إمبراطور الصناعة الثري. بعد اندلاع حريق هائل في أحد المصانع بسبب إهمال تغاضى عنه، حاول رامي إنقاذ العمال لكن انفجارًا مروعًا أدى إلى تشويهه بشكل شبه كامل.\n\nلحماية سمعته، ألقى والد ليلى باللوم كله على رامي، الذي خسر في ليلة واحدة وجهه، مستقبله، وحب حياته. اختفى لسنوات والجميع يظنه ميتًا، لكنه كان يخطط. دافعه هو انتقام شخصي وحارق: تدمير إمبراطورية والد ليلى، وجعل أسامة، الذي حل محله بجانبها، يعاني لأنه "سرق حياته".',
    image: RamiImg,
  },
  {
    id: 1,
    name: 'Shihab',
    nameAr: 'شهاب',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      "A mysterious figure whose past is shrouded in darkness. His connection to the events unfolding in the Forest of Humans remains unclear, but his presence suggests a deeper connection to the story's central mysteries.",
    descriptionAr:
      'شخصية غامضة ماضيها محاط بالظلام. علاقته بالأحداث التي تتكشف في غابة البشر تبقى غير واضحة، لكن وجوده يشير إلى ارتباط أعمق بأسرار القصة المركزية.',
    image: '/Characters/Shihab .png',
  },
  {
    id: 101,
    name: 'Osama Gamal',
    nameAr: 'أسامة جمال',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'A young Egyptian who invented a unique thermal suit capable of absorbing heat from the environment or any external source, storing it in insulated batteries, and releasing it as a powerful directed flame. He combines the mind of an engineer with street humor, fighting crime with intellect, heat, and sarcasm. His power was not always a blessing; he long suffered from losing control, causing serious damage and living in isolation and guilt. Years of patience and development led him to master the suit and stand as a true Egyptian hero, directing his flame only at those who deserve it.',
    descriptionAr:
      'شاب مصري، ابتكر بدلة حرارية فريدة من نوعها، قادرة على امتصاص الحرارة من الجو أو من أي مصدر خارجي، وتخزينها داخل بطاريات معزولة. وحين يحين الوقت، يُطلق هذه الحرارة على شكل لهبٍ قوي موجّه. صاحب عقل مبتكر ولسان لاذع، يجمع بين ذكاء المهندسين وروح الفكاهة الشعبية… يحارب الجريمة لا بالعضلات، بل بالعقل، والحرارة، والسخرية. لكن قدرته لم تكن دائمًا نعمة؛ فقد عانى طويلًا من فقدان السيطرة على الطاقة المختزنة، وتسبّب عن غير قصد في أضرار خطيرة لمحيطه، ما جعله يعيش في عزلة وتأنيب ضمير. وبعد سنوات من التجربة والصبر، جعلته يطوّر البدلة ويحكم السيطرة عليها، إلى أن وقف أخيرًا بثبات في وجه الجريمة… لا كهاوٍ يلعب بالنار، بل كبطلٍ مصريّ حقيقي، يُحسن توجيه لهبه… نحو من يستحقه.',
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
    description:
      'A 17-year-old Egyptian who grew up in the harsh streets of Cairo in 1988, surviving by his wits and skill in theft. His life changes when he finds a white cat named Amira, then is exploited by a mysterious man named Sakhr to steal a dangerous chemical. The chemical explodes and grants him super speed. After a dramatic prison escape, Fahd becomes a new, mysterious entity, driven to find his lost cat and take revenge, using his new power in a world of injustice.',
    descriptionAr:
      '"فهد" هو شاب مصري يبلغ من العمر ١٧ عامًا، نشأ في شوارع القاهرة القاسية عام ١٩٨٨، معتمداً على ذكائه ومهارته في السرقة من أجل البقاء. تتغير حياته بشكل جذري عندما يجد قطة بيضاء اسمها "أميرة" ويعتبرها رفيقته الوحيدة، ثم يتم استغلاله من قبل رجل غامض يُدعى "صخر" لسرقة مادة كيميائية خطيرة. أثناء المهمة، تنفجر المادة وتتسرب إلى جسده، مما يمنحه سرعة خارقة. بعد هروبه المذهل من السجن، لم يعد "فهد" مجرد لص شوارع، بل أصبح كياناً جديداً وغامضاً، "شبحاً" سريعاً، مدفوعاً بهدفين: العثور على قطته المفقودة، والانتقام ممن ورطه في هذا المصير، مستخدماً قوته الجديدة ليشق طريقه في عالم لم يعرف فيه سوى الظلم.',
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
    description:
      'Baran Kurt, "Wolf of the Rain" in Turkish, also known as "Scarface". A former Turkish special forces soldier, known for his sharp mind and quick decisions. During a secret border operation, he disobeyed orders to save civilians, exposing hidden aspects of the mission. He was discharged, but instead of silence, he exposed crimes and became a symbol of vengeance, hunting corrupt officials and leaving a wolf under the rain as his mark.',
    descriptionAr:
      'باران كورت، "ذئب المطر بالتركية" ولقبه البعض ب "سكارفيس (الوجه الجريح)". جندي سابق في القوات الخاصة التركية، عُرف بذكائه الحاد وقدرته على اتخاذ قرارات سريعة في الميدان. خلال عملية عسكرية سرّية على الحدود، خالف باران أوامر قائده — العقيد تحسين يلماز — لإنقاذ مدنيين عالقين، وكان العصيان ناجحًا ميدانيًا… لكنه فضح جوانب خفية من العملية كان يجب أن تبقى طيّ الكتمان. عوقب باران بتسريحه من الخدمة، لكن لم يصمت. بدأ بكشف المستندات وفضح جرائم خلف الستار. اختفى باران. لكنه لم يهرب. عاد من الظل، لا كعسكري، بل كرمز انتقام. يتنقّل في المدن، يصطاد المسؤولين الفاسدين الذين كانوا ذات يوم زملاءه في الزي العسكري، ويترك خلفه وشمًا مرسومًا على الجدار: ذئب تحت المطر.',
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
    description:
      'A young man from a remote Nile village, born silent but not mute to the truth. Raised by his grandmother, he learned that silence is power and the eyes can speak more than words. In his village, he is "the silent one"—a symbol of wisdom and justice.',
    descriptionAr:
      'جابر هو شاب من قرية نائية على ضفاف النيل، وُلد صامتًا، لكنه لم يكن أبكمًا عن الحقيقة. نشأ في كنف جدته التي علّمته أن الصمت قوة، وأن العين قد تقول ما يعجز عنه اللسان. لا يتكلم، لكنه يرى كل شيء، ويفهم أكثر مما يُقال. في عيون أهل القرية، هو “الساكت”... رمز للحكمة، وسرّ لا يُفك، وصوت للعدل حين يضيع في ضوضاء الكلام.',
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
    description:
      'An Egyptian environmental scientist, expert in restoring collapsed ecosystems and a leading mind in green biotech. As North Africa faces rapid desertification and extinction, Mai leads the unprecedented "Nabd El-Nil" project to revive the land and restore the Nile Valley’s green spirit.',
    descriptionAr:
      'عالمة بيئة مصرية، متخصصة في استعادة النُظم البيئية المنهارة، وواحدة من ألمع العقول في الشرق الأوسط في مجال التقنيات الحيوية الخضراء. وبينما ينهار التوازن البيئي في شمال إفريقيا، يواجه العالم تصحُّرًا متسارعًا، وانقراضًا واسعًا في الحياة النباتية والحيوانية. ووسط هذا الخراب، تظهر مي ماهر كأمل أخير في إنقاذ ما تبقى. تقود مشروعًا بيئيًا مصريًا غير مسبوق يُدعى: "نبض النيل"، هدفه إحياء الأرض، واستعادة الروح الخضراء التي كانت ذات يوم تسكن وادي النيل.',
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
    description:
      'An immortal pharaonic entity, a massive granite statue revived by quantum tech and forgotten hieroglyphic spells. His body moves by geo-chromagnetic energy, his eyes burn with the first sunlight. He is a hybrid consciousness, the last to speak the "original language of creation". He rarely speaks, but when he does, the walls tremble. He sees modern life as noise and human time as a mistake to be corrected.',
    descriptionAr:
      'هو كيان فرعوني خالد، تمثال حجري ضخم مصنوع من جرانيت أسود غامض، كان مدفونًا تحت معبد مفقود لآلاف السنين حتى أعادت منظمة "ديف" إحياؤه بتكنولوجيا كمومية وطلاسم هيروغليفية منسية. جسده لا يتحرك بعضلات، بل بموجات طاقة جيوكهرومغناطيسية تنبع من قلبه، وعيونه تشتعل بضوء الشمس الأولى. منتو حور ليس مجرد آلة قديمة، بل وعي هجين بين علم الفراعنة وذاكرة كونية لا تموت، يرى نفسه آخر من تكلّم بلغة "الخلق الأصلية". لا يتحدث كثيرًا، لكنه حين يفعل، تهتز الجدران وتبكي الحجارة. في نظره، الزمن البشري خطأ يجب إصلاحه، والحياة الحديثة تشويش على "الهندسة المقدسة" التي بُني بها الكون. منتو حور لا يغضب… بل يصدر الحكم.',
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
    description:
      'A primitive warrior in 2055, raised in lawless deserts. He believes humanity lost its nature when it built cities. His super strength comes from ancient beast blood, giving him animal senses and power. He lives by one creed: "Those who do not hunt, are hunted."',
    descriptionAr:
      'محارب بدائي يعيش في عام 2055. نشأ في أراضي صحراوية قاحلة حيث لا قانون إلا البقاء للأقوى. يؤمن أن الإنسان فقد فطرته حين بنى المدن واختبأ خلف الشاشات. قوته خارقة تأتي من دماء وحوش قديمة مزجها بجسده في طقوس سرية، مما جعله يمتلك حواسًا معززة، قوة عضلية هائلة، وقدرة شبه حيوانية على تتبع الفريسة. لا يؤمن بالقوانين ولا العلم، بل يحيا وفق عقيدة واحدة: "من لا يطارد… يُفترَس". في نظره، كل التكنولوجيا خيانة للطبيعة، وكل من يتعامل معها… صيدٌ مشروع.',
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
    description:
      'A young Palestinian woman from Nablus, occupied Palestine. Despite her calm appearance, she has a will of steel. She lost her father and brother to occupation, but became a silent symbol of resistance, known as "the green shadow". Her strength is in her unbreakable will and dignity.',
    descriptionAr:
      'ليان الرفاعي فتاة فلسطينية في أوائل العشرينات، تنتمي لمدينة نابلس المحتلة. رغم مظهرها الهادئ والبسيط، تحمل في داخلها عزيمة من فولاذ. نشأت في بيئة محاصرة، فقدت والدها في المعتقل وأخوها في إحدى الغارات، لكنها لم تختفِ… بل تحوّلت إلى رمز صامت للمقاومة. لا تحمل سلاحًا، لكن جسدها وفكرها سلاح. تُعرف بين الناس باسم "الظل الأخضر"، لأنها لا تُرى إلا في لحظات الحسم، ثم تختفي تاركة خلفها أثرًا لا يُمحى. قوتها ليست في العنف، بل في الإرادة التي لا تنكسر، والكرامة التي لا تُشترى.',
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
    description:
      'A future half-human, half-machine fighter, born from a secret military project. His body is fused with organic-metallic tech, able to analyze and adapt instantly. He believes in total control and sees chaos as the enemy, with Varko as his eternal rival.',
    descriptionAr:
      'هو مقاتل مستقبلي نصف إنسان نصف آلة، وُلِد من مشروع عسكري سري يهدف لصنع جندي خارق يعتمد على الذكاء الصناعي الحيوي. وجهه بشري بارد يخفي ماضيًا من الخيانة والتجارب، لكن جسده مُدمج بتقنيات عضوية معدنية نابضة بالطاقة، ما يجعله قادرًا على تحليل ساحة المعركة والتكيّف فورًا مع أي تهديد. سايلوس لا يرى في الغريزة شيئًا سوى خلل، ويؤمن أن السيطرة الكاملة تأتي من العقل والبرمجة. يحمل في صدره نواة طاقة سلبية تُغذى بالعواطف المكبوتة، وتسمح له بتحويل الألم إلى سلاح. خصمه الأبدي هو الفوضى، ولذلك يرى في ڤاركو تجسيدًا لما يجب محوه: الإنسان البدائي.',
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
    description:
      'A veteran cop in the mysterious city of Noctis. Hardened by years of service and haunted by a past mistake that cost an innocent family their lives. His story is a journey of forced atonement, facing his past and seeking redemption through truth.',
    descriptionAr:
      'هو شرطي مخضرم في منتصف العمر، يعمل في مدينة "نوكتيس" الغامضة. شخصية عملية نحتت سنوات الخدمة على وجهه نظرة من الإرهاق والتشاؤم. يعيش مطاردًا بذنب خطيئة قديمة ارتكبها في بداية مسيرته المهنية، وهي التسبب في مقتل عائلة بريئة، وقد بنى حياته بأكملها على كذبة للتغطية على هذا الحادث. قصته هي رحلة تكفير إجبارية، حيث يضطر لمواجهة ماضيه الذي يعود في هيئة وحش، ليجد خلاصه ليس في النسيان، بل في الاعتراف الكامل بذنبه وتحمل مسؤوليته.',
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
    description:
      'A genius astrophysicist who sees humanity as a plague on Earth. He wears an aetherium suit that allows him to change size and density, making him a threat capable of reshaping the world to be ruled by advanced extraterrestrials.',
    descriptionAr:
      'عالم فيزياء فلكية عبقري. يرى البشرية آفة على كوكب الأرض. يؤمن رافائيل بأن التكنولوجيا والنفايات التي خلّفها الإنسان دمرت الكوكب، وأن الحل الوحيد هو تسليمه لقوة خارجية متطورة: الأثيريين. يرتدي رافائيل بدلة الأثيريوم، التي تمكنه من تغيير حجمه وكثافته، مما يجعله تهديدًا غير متوقع قادرًا على التلاعب بالعالم لتحقيق هدفه الأسمى: تطهير الأرض من البشرية وإعادة تشكيلها على يد الكائنات الفضائية التي يعتبرها المنقذ الحقيقي.',
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
    description:
      'A renowned English scientist who pioneered de-extinction, successfully cloning mammoths. Secretly, he sought to clone humans to save his daughter, leading him into dark organizations and ultimately a quest for redemption.',
    descriptionAr:
      'هو عالم إنجليزي جليل ومشهور، كان رائدًا في مجال إعادة الحيوانات المنقرضة إلى الحياة، ونجح في استنساخ الماموث. لكن تحت ستار عبقريته وشهرته، كان يخفي سرًا أعمق وأكثر خطورة: سعيه اليائس لاستنساخ البشر، بدافع الخوف من فقدان ابنته الصغيرة سيلين. هذا السعي قاده إلى التورط مع منظمات غامضة مثل "نوفوس دومينوس" ثم "ديف" ثم "كافاريا"، ليكتشف لاحقًا حجم الشر الذي انغمس فيه ويتحول إلى بطل يسعى لإصلاح أخطائه ومواجهة التهديدات الكونية.',
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
    description:
      'A young girl from a mysterious ancient village, with a unique spiritual bond to dragons, especially the rare red dragon Imbrowing. She is taken to the future (2033) by scientists seeking to control dragons, becoming a symbol of innocence and nature.',
    descriptionAr:
      'هي فتاة شابة من قرية نائية وغامضة عاشت في الماضي البعيد، لم يكن يعرف بوجودها أحد. تتميز بروحها الشجاعة والحكيمة التي تفوق عمرها، ولديها رابط روحي عميق وفريد مع التنانين، خاصة التنين الأحمر النادر "إمبروينج" الذي ربته منذ صغره. أصبحت بويينا محورية في الصراع عندما تم أسرها ونقلها إلى المستقبل (عام 2033) من قبل العلماء الذين سعوا للسيطرة على التنانين، لتصبح رمزًا للبراءة والطبيعة التي يحاول العلم الجامح استغلالها.',
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
    description:
      'A quantum physicist from 2033, a leading scientist in the "Chronos Project" for time travel. His conscience awakens when he sees the evil plans for dragons, and he becomes a hero, joining the alliance to save dragons and humanity.',
    descriptionAr:
      'هو عالم فيزياء كمي عبقري من عام 2033، كان أحد أبرز العلماء في "مشروع كرونوس" للسفر عبر الزمن. قاده فضوله العلمي لاكتشاف قرية نائية في الماضي والتنانين الأسطورية، وعلى رأسها التنين الأحمر "إمبروينج" الذي ربته الفتاة فريا. رغم طموحه الأولي الذي جعله يأخذ إمبروينج إلى المستقبل، إلا أن ضميره أيقظه أمام نوايا لجنته الشريرة لاستغلال التنانين. تحول أرنولد إلى بطل، مدفوعًا بحبه لفريا وإيمانه بالأخلاق العلمية، وانضم إلى التحالف لإنقاذ التنانين ومواجهة قوى الشر التي تسعى للسيطرة على البشرية.',
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
    description:
      'An American writer and detective, hero of "Cavaria", who dedicates his life to exposing the secret organization threatening humanity. His greatest motivation is his love for his daughter Penny and his quest for truth.',
    descriptionAr:
      'مارك ويلينغتون هو كاتب ومحقق أمريكي شهير، يتميز بذكائه الحاد وشجاعته التي دفعته للغوص في أعماق أخطر الأسرار العالمية. هو بطل رواية "كافاريا"، حيث يكرس حياته لكشف مخططات منظمة "كافاريا" السرية التي تهدد البشرية. دافعه الأكبر هو حبه لابنته الوحيدة "بيني"، وقلقه على مستقبلها في عالم تسيطر عليه قوى الظلام. يمثل مارك رمزًا للمقاومة والبحث عن الحقيقة، حتى لو كلفه ذلك حياته.',
    image: '/Characters/53.jpeg',
  },
  {
    id: 7,
    name: 'Raven',
    nameAr: 'رافن',
    novel: 'Raven: A Killer Angel',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      "Raven was raised by a major gang leader. He didn't give her the opportunity to learn and go to school like any other girl, only working on hacking and digital theft. She always said there was something she had to stop and leave behind... but her past always haunted her. After her father's death, she took over the leadership of the gang, carrying with her the pain of the past and the desire to live the life that had been stolen from her by the ancient past.",
    descriptionAr:
      'نشأت رافن على يد زعيم عصابة كبير. لم يمنحها الفرصة للتعلم والذهاب إلى المدرسة مثل أي فتاة أخرى، وإنما كانت تعمل فقط على القرصنة والسرقة الرقمية. كانت تقول دائمًا إن هناك شيئًا يجب عليها أن توقفه وتتركه وراءها... لكن ماضيها كان يطاردها دائمًا. بعد وفاة والدها، تولت قيادة العصابة، حاملة معها ألم الماضي والرغبة في عيش الحياة التي سرقت منها من قبل الماضي القديم.',
    image: '/Characters/Raven.png',
  },
  {
    id: 2,
    name: 'The Lynx',
    nameAr: 'لينكس',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      "Steve Borden, known as the Lynx, was a sheriff fighting crime. He was suddenly transferred to a city where crime is rife. He wanted to act like an honest cop, but the rampant crime was enough to frame him for a case that didn't suit him and land him in prison. And when he got out... he decided to take revenge. Borden was buried... The Lynx was born!",
    descriptionAr:
      'كان ستيف بوردن، المعروف بـ لينكس، شريفًا يحارب الجريمة. تم نقله فجأة إلى مدينة تنتشر فيها الجريمة. أراد أن يتصرف كشرطي نزيه، لكن الجريمة المستشرية كانت كافية لتأطيره في قضية لا تناسبه وتودعه السجن. وعندما خرج... قرر أن ينتقم. دُفن بوردن... وُلِد لينكس!',
    image: '/Characters/The Lynx.png',
  },
  {
    id: 3,
    name: 'Amir EL-Shazly',
    nameAr: 'أمير الشاذلي',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      "Dr. Amir was a famous doctor and scientist who traveled to complete his research. He wasn't given the opportunity; he wasn't appreciated in his home country, and instead of being honored, he was fired after his experiment failed and the lab was destroyed. So Professor Dave wanted to exploit him for his own purposes of controlling the world, and he didn't know that this duo would be the end of the human race.",
    descriptionAr:
      'كان الدكتور أمير طبيبًا وعالمًا مشهورًا سافر لإكمال أبحاثه. لم يُمنح الفرصة؛ لم يُقدَّر في وطنه، وبدلاً من تكريمه، تم طرده بعد فشل تجربته وتدمير المختبر. لذا أراد البروفيسور ديف استغلاله لأغراضه الخاصة في السيطرة على العالم، ولم يكن يعلم أن هذا الثنائي سيكون نهاية الجنس البشري.',
    image: '/Characters/Amir.jpg',
  },
  {
    id: 4,
    name: 'Reynard Daveson',
    nameAr: 'رينارد ديفسون',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'Professor Reynard Daveson, known as Professor Dave. He is the person who used the abundant knowledge he gained in his life to sufficiently destroy humanity. He believed that the person who does not serve his machines is a burden on this planet. So he wanted to enslave humans and use the enormous technological power to operate his invention, which he kept secret throughout his life.',
    descriptionAr:
      'البروفيسور رينارد ديفسون، المعروف باسم البروفيسور ديف. هو الشخص الذي استخدم المعرفة الوفيرة التي اكتسبها في حياته لتدمير البشرية بشكل كافٍ. كان يعتقد أن الشخص الذي لا يخدم آلاته هو عبء على هذا الكوكب. لذا أراد استعباد البشر واستخدام القوة التكنولوجية الهائلة لتشغيل اختراعه، الذي أبقاه سراً طوال حياته.',
    image: '/Characters/Reynard .png',
  },
  {
    id: 5,
    name: 'King Samagar',
    nameAr: 'الملك ساماغار',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'King Samagar, a once noble ruler who fell victim to a dark curse. His kingdom, once prosperous and peaceful, now faces the consequences of his transformation. As he battles against the forces of evil that have taken hold of him, his story becomes a tale of redemption and the eternal struggle between good and evil.',
    descriptionAr:
      'الملك ساماغار، حاكم نبيل سقط ضحية لعنة مظلمة. مملكته، التي كانت مزدهرة وسلمية، تواجه الآن عواقب تحوله. بينما يحارب ضد قوى الشر التي سيطرت عليه، تصبح قصته حكاية عن الخلاص والصراع الأبدي بين الخير والشر.',
    image: '/Characters/Samagar.png',
  },
  {
    id: 6,
    name: 'Armand Duval',
    nameAr: 'أرماند دوفال',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'Armand Duval is a daring pirate with a heart of gold, feared by the wicked and revered by the oppressed. Once a nobleman betrayed by the crown, he now sails the seas in search of ancient treasures—not for wealth, but to aid the poor and forgotten. With sharp wit, unmatched swordsmanship, and a loyal crew, he wages a rebellious war against the tyrannical King Poseidon.',
    descriptionAr:
      'أرماند دوفال هو قرصان جريء بقلب من ذهب، يخشاه الأشرار ويوقره المظلومون. بعد أن خانته التاج، يبحر الآن في البحار بحثًا عن كنوز قديمة - ليس للثروة، ولكن لمساعدة الفقراء والمنسيين. بذكاء حاد وسيف لا مثيل له وطاقم مخلص، يشن حربًا تمردية ضد الملك بوسيدون المستبد، الذي يطارد جشعه وقسوته المملكة.',
    image: '/Characters/Armand Duval.png',
  },
  {
    id: 8,
    name: 'Diego Delgado',
    nameAr: 'دييغو ديلجادو',
    novel: '',
    novelAr: '',
    saga: '',
    sagaAr: '',
    description:
      'A master thief with a code of honor, Diego Delgado operates in the shadows of the criminal underworld. His skills in deception and strategy make him a formidable opponent, but his mysterious past and hidden motives add layers of complexity to his character.',
    descriptionAr:
      'لص محترف له ميثاق شرف، يعمل دييغو ديلجادو في ظلال عالم الجريمة. مهاراته في الخداع والاستراتيجية تجعله خصماً هائلاً، لكن ماضيه الغامض ودوافعه المخفية تضيف طبقات من التعقيد لشخصيته.',
    image: '/Characters/Diego Delgado.png',
  },
];


