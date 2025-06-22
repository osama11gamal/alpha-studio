import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const featuredNovels = [
	{
		id: 1,
		title: 'The Blue Wolf',
		titleAr: 'الذئب الأزرق',
		author: 'Omar Duhaim',
		authorAr: 'عمر دهيم',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'Follow the journey of a hero seeking justice in a world of chaos and deception.',
		descriptionAr: 'تابع رحلة بطل يبحث عن العدالة في عالم من الفوضى والخداع.',
		image: '/alpha-studio/Novels/The Blue Wolf .jpg',
		releaseDate: 'Coming June 2025',
		releaseDateAr: 'قادم في يونيو 2025',
	},
	{
		id: 2,
		title: 'The Curse of King Samagar',
		titleAr: 'لعنة الملك ساماغار',
		author: 'Omar Duhaim',
		authorAr: 'عمر دهيم',
		saga: 'Mirrors of Civilizations',
		sagaAr: 'مرايا الحضارات',
		description: 'How does the war between Adam and Satan unfold when a cursed king battles against the devil?',
		descriptionAr: 'كيف تتكشف الحرب بين آدم وإبليس عندما يحارب ملك ملعون ضد الشيطان؟',
		image: '/alpha-studio/Novels/The Curse of King Samagar .png',
		releaseDate: 'Coming October 2025',
		releaseDateAr: 'قادم في أكتوبر 2025',
	},
	{
		id: 3,
		title: 'Boss Heist',
		titleAr: 'سرقة البوس',
		author: 'Omar Duhaim',
		authorAr: 'عمر دهيم',
		saga: 'Daggers and Destinies',
		sagaAr: 'الخناجر والأقدار',
		description: 'Out of the fog emerges a man determined to unveil his destiny and reveal his hidden truth.',
		descriptionAr: 'من الضباب يظهر رجل مصمم على كشف مصيره وإظهار حقيقته المخفية.',
		image: '/alpha-studio/Novels/Boss Heist .png',
		releaseDate: 'Coming 2026',
		releaseDateAr: 'قادم في 2026',
	},
	{
		id: 4,
		title: 'The Forest of Humans',
		titleAr: 'غابة الإنسان',
		author: 'Omar Duhaim',
		authorAr: 'عمر دهيم',
		saga: 'A Vague Future',
		sagaAr: 'مستقبل غامض',
		description: 'A mysterious forest where humans face their deepest fears and darkest desires.',
		descriptionAr: 'غابة غامضة حيث يواجه البشر أعمق مخاوفهم وأحلك رغباتهم.',
		image: '/alpha-studio/Novels/The Forest of Humans .png',
		releaseDate: 'Coming Soon',
		releaseDateAr: 'قادم قريباً',
	},
	{
		id: 6,
		title: 'Throne of the Seas',
		titleAr: 'عرش البحار',
		author: 'Omar Duhaim',
		authorAr: 'عمر دهيم',
		saga: 'Armand Duval',
		sagaAr: 'أرماند دوفال',
		description: 'Armand Duval is a daring pirate with a heart of gold, feared by the wicked and revered by the oppressed. Once a nobleman betrayed by the crown, he now sails the seas in search of ancient treasures—not for wealth, but to aid the poor and forgotten. With sharp wit, unmatched swordsmanship, and a loyal crew, he wages a rebellious war against the tyrannical King Poseidon, whose greed and cruelty plague the realm. Armand\'s legend grows with every battle won and every village saved—a rogue hero who defies empires and inspires hope wherever his black sails rise on the horizon.',
		descriptionAr: 'أرماند دوفال هو قرصان جريء بقلب من ذهب، يخشاه الأشرار ويوقره المظلومون. بعد أن خانته التاج، يبحر الآن في البحار بحثًا عن كنوز قديمة - ليس للثروة، ولكن لمساعدة الفقراء والمنسيين. بذكاء حاد وسيف لا مثيل له وطاقم مخلص، يشن حربًا تمردية ضد الملك بوسيدون المستبد، الذي يطارد جشعه وقسوته المملكة. تنمو أسطورة أرماند مع كل معركة يفوز بها وكل قرية ينقذها - بطل متمرد يتحدى الإمبراطوريات ويبعث الأمل أينما تظهر أشرعته السوداء في الأفق.',
		image: '/alpha-studio/placeholder.png',
		releaseDate: 'Coming Soon',
		releaseDateAr: 'قادم قريباً',
	},
];

const characters = [
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
		image: '/alpha-studio/Characters/Shihab .png',
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
		image: '/alpha-studio/Characters/Raven.png',
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
		image: '/alpha-studio/Characters/The Lynx.png',
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
		image: '/alpha-studio/Characters/Amir.jpg',
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
		image: '/alpha-studio/Characters/Reynard .png',
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
		image: '/alpha-studio/Characters/Samagar.png',
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
		image: '/alpha-studio/Characters/Armand Duval.png',
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
		image: '/alpha-studio/Characters/Diego Delgado.png',
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
		e.currentTarget.src = '/alpha-studio/placeholder.png';
		e.currentTarget.onerror = null;
	};

	useEffect(() => {
		const loadImages = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const imagePromises = [
					...featuredNovels.map((novel) => {
						const img = new Image();
						img.src = novel.image;
						return new Promise((resolve, reject) => {
							img.onload = resolve;
							img.onerror = () => {
								console.warn(`Failed to load image: ${novel.image}`);
								resolve(null);
							};
						});
					}),
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
							src="/alpha-studio/Home/Novels.png" 
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

				{/* Featured Novels */}
				<section className="py-24 bg-alpha-darker relative">
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alpha-gold/5 via-transparent to-transparent animate-pulse"></div>
					</div>
					<div className="container mx-auto px-4 relative z-10">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="alpha-title mb-16 text-center text-4xl md:text-5xl"
						>
							{language === 'en' ? 'Featured Novels' : 'الروايات المميزة'}
						</motion.h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							{featuredNovels.map((novel, index) => (
								<motion.div
									key={novel.id}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									className="flex flex-col md:flex-row bg-alpha-charcoal/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-alpha-gold/20 hover:border-alpha-gold/40"
								>
									<div className="md:w-1/2 h-80 relative group">
										{novel.image ? (
											<motion.img
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
												src={novel.image}
												alt={language === 'en' ? novel.title : novel.titleAr}
												className="w-full h-full object-cover object-center transition-transform duration-300"
												onError={handleImageError}
											/>
										) : (
											<div className="w-full h-full bg-alpha-dark flex items-center justify-center">
												<span className="text-alpha-gold text-lg">
													{language === 'en' ? 'Image Coming Soon' : 'الصورة قادمة قريباً'}
												</span>
											</div>
										)}
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
									<div className="md:w-1/2 p-8 flex flex-col justify-between">
										<div>
											<h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-alpha-gold transition-colors duration-300">
												{language === 'en' ? novel.title : novel.titleAr}
											</h3>
											{novel.saga && (
												<p className="text-alpha-gold text-sm mb-3">
													{language === 'en' ? novel.saga : novel.sagaAr}
												</p>
											)}
											{novel.description && (
												<p className="text-gray-300 mb-4 line-clamp-4">
													{language === 'en' ? novel.description : novel.descriptionAr}
												</p>
											)}
											{novel.author && (
												<p className="text-sm text-gray-400">
													{language === 'en' ? `By ${novel.author}` : `بواسطة ${novel.authorAr}`}
												</p>
											)}
										</div>
										<div className="mt-6">
											{novel.title === 'The Blue Wolf' ? (
												<>
													<div className="flex items-center justify-between mb-4">
														<span className="text-green-500 font-bold text-lg">
															{language === 'en' ? 'Available Now' : 'متاح الآن'}
														</span>
														<span className="text-blue-500 font-bold text-lg">
															{language === 'en' ? 'FREE' : 'مجاناً'}
														</span>
													</div>
													<Link
														to="/blue-wolf"
														className="btn-primary text-sm px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 w-full text-center"
													>
														{language === 'en' ? 'Buy Now' : 'اشتري الآن'}
													</Link>
												</>
											) : (
												<>
													<div className="flex items-center justify-between mb-4">
														<span className="text-red-500 font-bold text-lg">
															{language === 'en' ? 'Coming Soon' : 'قريباً'}
														</span>
														{novel.releaseDate && (
															<p className="text-alpha-gold">
																{language === 'en' ? novel.releaseDate : novel.releaseDateAr}
															</p>
														)}
													</div>
													<div className="flex space-x-4">
														<button className="btn-secondary text-sm px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 w-full">
															{language === 'en' ? 'Preview' : 'معاينة'}
														</button>
													</div>
												</>
											)}
										</div>
									</div>
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
							<Link
								to="/works"
								className="btn-secondary text-lg px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
							>
								{language === 'en' ? 'Explore All Works' : 'استكشف جميع الأعمال'}
							</Link>
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
