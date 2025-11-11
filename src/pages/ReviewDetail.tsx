import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  fullDescription: string;
  pros: string[];
  cons: string[];
  gradient: string;
  price?: string;
  ingredients?: string[];
  dosage?: string;
  contraindications?: string[];
  sideEffects?: string[];
  reviews?: UserReview[];
}

interface UserReview {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  helpful: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    title: 'Аспирин Кардио',
    category: 'Медицина',
    rating: 4.7,
    reviewCount: 3124,
    description: 'Препарат для профилактики тромбозов и сердечно-сосудистых заболеваний. Ацетилсалициловая кислота в кишечнорастворимой оболочке',
    fullDescription: 'Аспирин Кардио — это специальная форма ацетилсалициловой кислоты, предназначенная для длительной профилактики сердечно-сосудистых заболеваний. Препарат имеет кишечнорастворимую оболочку, что снижает негативное воздействие на слизистую желудка. Применяется для профилактики инфаркта миокарда, тромбоза, инсульта.',
    pros: ['Доказанная эффективность', 'Кишечнорастворимая оболочка', 'Удобная дозировка', 'Доступная цена', 'Широкая доказательная база'],
    cons: ['Рецептурный препарат', 'Требует консультации врача', 'Противопоказания при язве'],
    gradient: 'from-red-400 to-pink-400',
    price: '120 ₽',
    ingredients: ['Ацетилсалициловая кислота 100 мг', 'Кукурузный крахмал', 'Целлюлоза микрокристаллическая', 'Кополимер метакриловой кислоты'],
    dosage: '1 таблетка в день во время еды, запивая водой. Курс определяется врачом.',
    contraindications: ['Язва желудка и 12-перстной кишки', 'Кровотечения', 'Бронхиальная астма', 'Беременность (I и III триместр)', 'Возраст до 18 лет'],
    sideEffects: ['Боли в желудке', 'Тошнота', 'Изжога', 'Аллергические реакции', 'Повышенная кровоточивость'],
    reviews: [
      {
        id: 1,
        author: 'Мария К.',
        rating: 5,
        date: '15.10.2024',
        text: 'Принимаю по назначению кардиолога уже 2 года. Никаких побочных эффектов, анализы показывают хорошую динамику. Важно принимать регулярно!',
        helpful: 45
      },
      {
        id: 2,
        author: 'Сергей Д.',
        rating: 4,
        date: '02.11.2024',
        text: 'Хороший препарат, но обязательно нужна консультация врача перед применением. У меня были проблемы с желудком, врач скорректировал дозировку.',
        helpful: 23
      }
    ]
  },
  {
    id: 2,
    title: 'Hyaluronic Acid Serum',
    category: 'Уход за кожей',
    rating: 4.9,
    reviewCount: 2843,
    description: 'Концентрированная гиалуроновая сыворотка для глубокого увлажнения кожи всех типов',
    fullDescription: 'Профессиональная сыворотка с гиалуроновой кислотой разной молекулярной массы обеспечивает многоуровневое увлажнение кожи. Низкомолекулярная гиалуроновая кислота проникает в глубокие слои дермы, высокомолекулярная создает защитную пленку на поверхности. Подходит для всех типов кожи, включая чувствительную.',
    pros: ['Моментальное увлажнение', 'Подходит для всех типов кожи', 'Некомедогенная формула', 'Видимый результат', 'Без парабенов и отдушек'],
    cons: ['Нужно использовать регулярно', 'Цена выше средней', 'Требует закрепления кремом'],
    gradient: 'from-pink-400 to-rose-400',
    price: '2 890 ₽',
    ingredients: ['Гиалуроновая кислота 2%', 'Пантенол', 'Витамин B5', 'Алоэ вера', 'Аллантоин'],
    dosage: 'Наносить 2-3 капли на очищенную кожу лица утром и вечером. После впитывания использовать увлажняющий крем.',
    contraindications: ['Индивидуальная непереносимость', 'Открытые раны', 'Острые воспаления'],
    sideEffects: ['Редко: покраснение при первом применении', 'Липкость при избыточном нанесении'],
    reviews: [
      {
        id: 1,
        author: 'Анна В.',
        rating: 5,
        date: '20.10.2024',
        text: 'Лучшая сыворотка, которую я пробовала! Кожа стала намного более увлажненной, мелкие морщинки разгладились. Использую уже 3 месяца.',
        helpful: 89
      },
      {
        id: 2,
        author: 'Екатерина М.',
        rating: 5,
        date: '05.11.2024',
        text: 'Потрясающий эффект! После недели использования кожа стала сияющей. Важно наносить на влажную кожу для лучшего эффекта.',
        helpful: 67
      }
    ]
  },
  {
    id: 3,
    title: 'Omega-3 Premium',
    category: 'БАДы',
    rating: 4.8,
    reviewCount: 1567,
    description: 'Высококачественный рыбий жир с EPA и DHA для поддержки сердечно-сосудистой системы',
    fullDescription: 'Омега-3 Премиум содержит высокоочищенный рыбий жир из диких морских рыб с высокой концентрацией EPA и DHA. Препарат проходит молекулярную дистилляцию для удаления тяжелых металлов и токсинов. Поддерживает здоровье сердца, сосудов, мозга, улучшает состояние кожи и волос.',
    pros: ['Очищенная формула', 'Высокая концентрация', 'Без послевкусия', 'Сертификат качества', 'Поддержка иммунитета'],
    cons: ['Крупные капсулы', 'Требует регулярного приема', 'Цена за курс'],
    gradient: 'from-blue-400 to-cyan-400',
    price: '1 590 ₽',
    ingredients: ['EPA (эйкозапентаеновая кислота) 500 мг', 'DHA (докозагексаеновая кислота) 250 мг', 'Витамин E', 'Желатин', 'Глицерин'],
    dosage: '2 капсулы в день во время еды. Курс приема — 2-3 месяца.',
    contraindications: ['Аллергия на рыбу', 'Прием антикоагулянтов без консультации врача', 'Острый панкреатит'],
    sideEffects: ['Редко: рыбный привкус', 'Легкие расстройства ЖКТ в начале приема'],
    reviews: [
      {
        id: 1,
        author: 'Дмитрий П.',
        rating: 5,
        date: '10.10.2024',
        text: 'Отличная Омега-3! Принимаю уже полгода, анализы показали улучшение липидного профиля. Никакого неприятного привкуса.',
        helpful: 56
      },
      {
        id: 2,
        author: 'Ольга С.',
        rating: 4,
        date: '28.10.2024',
        text: 'Хорошее качество, но капсулы действительно крупные. Приходится запивать большим количеством воды. Эффект есть — кожа стала лучше.',
        helpful: 34
      }
    ]
  }
];

const ReviewDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const review = reviewsData.find(r => r.id === Number(id));

  if (!review) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Icon name="AlertCircle" size={64} className="text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Обзор не найден</h2>
          <Button onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} name="Star" size={20} className="fill-rose-400 text-rose-400" />
        ))}
        {hasHalfStar && <Icon name="StarHalf" size={20} className="fill-rose-400 text-rose-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Icon key={`empty-${i}`} name="Star" size={20} className="text-gray-300" />
        ))}
      </div>
    );
  };

  const ratingBreakdown = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Назад к обзорам</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Icon name="HeartPulse" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Здоровье & Красота
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className={`h-2 w-full bg-gradient-to-r ${review.gradient} rounded-full mb-8 animate-fade-in`} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-0">
                    {review.category}
                  </Badge>
                  {review.price && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full">
                      <Icon name="Tag" size={20} className="text-rose-600" />
                      <span className="font-bold text-xl text-rose-700">{review.price}</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-4xl mb-4">{review.title}</CardTitle>
                <div className="flex items-center gap-4 mb-4">
                  {renderStars(review.rating)}
                  <span className="text-2xl font-bold">{review.rating}</span>
                  <span className="text-muted-foreground">({review.reviewCount} отзывов)</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {review.fullDescription}
                </p>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  Преимущества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {review.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg">
                      <Icon name="Check" size={20} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} className="text-amber-500" />
                  Недостатки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {review.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg">
                      <Icon name="AlertTriangle" size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {review.ingredients && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Beaker" size={24} className="text-purple-500" />
                    Состав
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {review.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {review.dosage && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Pill" size={24} className="text-blue-500" />
                    Способ применения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{review.dosage}</p>
                </CardContent>
              </Card>
            )}

            {review.contraindications && (
              <Card className="animate-fade-in border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Icon name="Ban" size={24} className="text-red-600" />
                    Противопоказания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {review.contraindications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="X" size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {review.sideEffects && (
              <Card className="animate-fade-in border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Icon name="AlertTriangle" size={24} className="text-orange-600" />
                    Побочные эффекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {review.sideEffects.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500">!</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {review.reviews && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={24} className="text-blue-500" />
                    Отзывы пользователей
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {review.reviews.map((userReview) => (
                    <div key={userReview.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-semibold text-lg">{userReview.author}</p>
                          <div className="flex items-center gap-2">
                            {renderStars(userReview.rating)}
                            <span className="text-sm text-muted-foreground">{userReview.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{userReview.text}</p>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Icon name="ThumbsUp" size={16} className="mr-2" />
                        Полезно ({userReview.helpful})
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">Распределение оценок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20">
                      <span className="font-semibold">{item.stars}</span>
                      <Icon name="Star" size={16} className="fill-rose-400 text-rose-400" />
                    </div>
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-12 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-gradient-to-br from-rose-50 to-pink-50 border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="ShieldCheck" size={24} className="text-rose-500" />
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                  <span>Сертифицированный продукт</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                  <span>Проверенные отзывы</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                  <span>Экспертная оценка</span>
                </div>
              </CardContent>
            </Card>

            <Button 
              className={`w-full py-6 text-lg bg-gradient-to-r ${review.gradient} text-white hover:opacity-90 shadow-lg`}
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Где купить
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-md mt-20 py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Здоровье & Красота. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default ReviewDetail;
