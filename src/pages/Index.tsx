import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  pros: string[];
  cons: string[];
  gradient: string;
  price?: string;
}

const categories = ['Все', 'Медицина', 'Витамины', 'БАДы', 'Косметика', 'Уход за кожей', 'Волосы', 'Антивозрастное'];

const reviews: Review[] = [
  {
    id: 1,
    title: 'Аспирин Кардио',
    category: 'Медицина',
    rating: 4.7,
    reviewCount: 3124,
    description: 'Препарат для профилактики тромбозов и сердечно-сосудистых заболеваний. Ацетилсалициловая кислота в кишечнорастворимой оболочке',
    pros: ['Доказанная эффективность', 'Кишечнорастворимая оболочка', 'Удобная дозировка'],
    cons: ['Рецептурный препарат', 'Требует консультации врача'],
    gradient: 'from-red-400 to-pink-400',
    price: '120 ₽'
  },
  {
    id: 2,
    title: 'Hyaluronic Acid Serum',
    category: 'Уход за кожей',
    rating: 4.9,
    reviewCount: 2843,
    description: 'Концентрированная гиалуроновая сыворотка для глубокого увлажнения кожи всех типов',
    pros: ['Моментальное увлажнение', 'Подходит для всех типов кожи', 'Некомедогенная формула'],
    cons: ['Нужно использовать регулярно', 'Цена выше средней'],
    gradient: 'from-pink-400 to-rose-400',
    price: '2 890 ₽'
  },
  {
    id: 3,
    title: 'Omega-3 Premium',
    category: 'БАДы',
    rating: 4.8,
    reviewCount: 1567,
    description: 'Высококачественный рыбий жир с EPA и DHA для поддержки сердечно-сосудистой системы',
    pros: ['Очищенная формула', 'Высокая концентрация', 'Без послевкусия'],
    cons: ['Крупные капсулы', 'Требует регулярного приема'],
    gradient: 'from-blue-400 to-cyan-400',
    price: '1 590 ₽'
  },
  {
    id: 4,
    title: 'Ибупрофен форте',
    category: 'Медицина',
    rating: 4.6,
    reviewCount: 4231,
    description: 'Нестероидный противовоспалительный препарат для снятия боли, воспаления и жара',
    pros: ['Быстрое действие', 'Доступная цена', 'Эффективен при разных болях'],
    cons: ['Побочные эффекты на ЖКТ', 'Не для длительного применения'],
    gradient: 'from-emerald-400 to-teal-400',
    price: '85 ₽'
  },
  {
    id: 5,
    title: 'Retinol Night Cream',
    category: 'Антивозрастное',
    rating: 4.7,
    reviewCount: 1891,
    description: 'Ночной крем с ретинолом для борьбы с морщинами и улучшения текстуры кожи',
    pros: ['Видимый результат через 4 недели', 'Не сушит кожу', 'Деликатная формула'],
    cons: ['Требуется привыкание', 'Фоточувствительность'],
    gradient: 'from-purple-400 to-pink-400',
    price: '3 490 ₽'
  },
  {
    id: 6,
    title: 'Vitamin C Complex',
    category: 'Витамины',
    rating: 4.6,
    reviewCount: 2134,
    description: 'Комплекс витамина C с биофлавоноидами для укрепления иммунитета и антиоксидантной защиты',
    pros: ['Усиленная формула', 'Хорошая усвояемость', 'Поддержка иммунитета'],
    cons: ['Может вызвать расстройство ЖКТ', 'Нужно принимать курсами'],
    gradient: 'from-orange-400 to-amber-400',
    price: '890 ₽'
  },
  {
    id: 7,
    title: 'Keratin Hair Mask',
    category: 'Волосы',
    rating: 4.8,
    reviewCount: 1678,
    description: 'Профессиональная кератиновая маска для восстановления поврежденных волос',
    pros: ['Быстрое восстановление', 'Натуральный состав', 'Видимый блеск'],
    cons: ['Расход при длинных волосах', 'Нужно время для воздействия'],
    gradient: 'from-amber-400 to-yellow-400',
    price: '1 790 ₽'
  },
  {
    id: 8,
    title: 'Магний B6',
    category: 'Витамины',
    rating: 4.7,
    reviewCount: 2987,
    description: 'Препарат магния с витамином B6 для нервной системы, снижения утомляемости и нормализации сна',
    pros: ['Улучшает сон', 'Снимает стресс', 'Хорошая усвояемость'],
    cons: ['Курсовой прием', 'Может вызвать сонливость'],
    gradient: 'from-indigo-400 to-purple-400',
    price: '450 ₽'
  },
  {
    id: 9,
    title: 'Collagen Peptides',
    category: 'БАДы',
    rating: 4.7,
    reviewCount: 3421,
    description: 'Гидролизованный коллаген для здоровья кожи, волос, ногтей и суставов',
    pros: ['Быстрое усвоение', 'Комплексное действие', 'Нейтральный вкус'],
    cons: ['Нужен длительный прием', 'Цена за курс'],
    gradient: 'from-rose-400 to-pink-400',
    price: '2 290 ₽'
  },
  {
    id: 10,
    title: 'Luxury Lipstick Collection',
    category: 'Косметика',
    rating: 4.9,
    reviewCount: 2756,
    description: 'Премиальная помада с увлажняющей формулой и стойким покрытием',
    pros: ['Насыщенный цвет', 'Увлажняет губы', 'Долгая стойкость'],
    cons: ['Высокая цена', 'Ограниченная палитра'],
    gradient: 'from-red-400 to-pink-500',
    price: '2 590 ₽'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredReviews = selectedCategory === 'Все' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} name="Star" size={18} className="fill-rose-400 text-rose-400" />
        ))}
        {hasHalfStar && <Icon name="StarHalf" size={18} className="fill-rose-400 text-rose-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Icon key={`empty-${i}`} name="Star" size={18} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Icon name="HeartPulse" size={24} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Здоровье & Красота
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Обзоры
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Рейтинги
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                О проекте
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Heart" size={48} className="text-rose-400 fill-rose-400" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Медицина, Здоровье & Красота
            </h2>
            <Icon name="Sparkles" size={48} className="text-purple-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Честные обзоры медицинских препаратов, витаминов, БАДов и косметики
          </p>
        </section>

        <section className="mb-12 animate-fade-in">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 bg-white/90 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${review.gradient}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-0">
                    {review.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">{review.rating}</span>
                    <Icon name="Award" size={20} className="text-rose-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{review.title}</CardTitle>
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground">({review.reviewCount} отзывов)</span>
                </div>
                {review.price && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-3">
                    <Icon name="Tag" size={16} className="text-rose-600" />
                    <span className="font-semibold text-rose-700">{review.price}</span>
                  </div>
                )}
                <CardDescription className="text-base leading-relaxed">
                  {review.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span className="font-semibold text-sm">Преимущества</span>
                    </div>
                    <ul className="space-y-1">
                      {review.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="AlertCircle" size={16} className="text-amber-500" />
                      <span className="font-semibold text-sm">Недостатки</span>
                    </div>
                    <ul className="space-y-1">
                      {review.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">!</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${review.gradient} text-white hover:opacity-90 transition-opacity shadow-md`}>
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Читать полный обзор
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {filteredReviews.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Обзоры не найдены</h3>
            <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
          </div>
        )}

        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-0">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
              <Icon name="ShieldCheck" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Сертифицировано</h3>
            <p className="text-muted-foreground">Только проверенные препараты и косметика с сертификатами</p>
          </Card>
          <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Реальные отзывы</h3>
            <p className="text-muted-foreground">Тысячи проверенных отзывов от реальных пользователей</p>
          </Card>
          <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
              <Icon name="Stethoscope" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Медицинская экспертиза</h3>
            <p className="text-muted-foreground">Обзоры составлены с учетом мнения специалистов</p>
          </Card>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-md mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                  <Icon name="HeartPulse" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Здоровье & Красота</h3>
              </div>
              <p className="text-muted-foreground">
                Ваш путеводитель в мире медицины, здоровья и красоты
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обзоры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Медицина</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Витамины и БАДы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Косметика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Уход за кожей</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@health-beauty.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Здоровье & Красота. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;