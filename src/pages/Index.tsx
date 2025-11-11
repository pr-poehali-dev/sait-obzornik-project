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
}

const categories = ['Все', 'Электроника', 'Бытовая техника', 'Смартфоны', 'Ноутбуки', 'Аксессуары'];

const reviews: Review[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    category: 'Смартфоны',
    rating: 4.8,
    reviewCount: 1243,
    description: 'Флагманский смартфон с титановым корпусом, новым чипом A17 Pro и улучшенной камерой',
    pros: ['Отличная производительность', 'Премиум дизайн', 'Качество камеры'],
    cons: ['Высокая цена', 'Нет зарядки в комплекте'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    category: 'Смартфоны',
    rating: 4.7,
    reviewCount: 987,
    description: 'Мощный Android флагман с S Pen, 200 МП камерой и ярким дисплеем',
    pros: ['S Pen в комплекте', 'Отличный дисплей', 'Мощная батарея'],
    cons: ['Большой и тяжелый', 'Дорогой'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'MacBook Air M3',
    category: 'Ноутбуки',
    rating: 4.9,
    reviewCount: 756,
    description: 'Легкий и производительный ноутбук на чипе M3 с отличной автономностью',
    pros: ['Долгая автономность', 'Тихая работа', 'Легкий вес'],
    cons: ['Мало портов', 'Дорогие апгрейды'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Sony WH-1000XM5',
    category: 'Аксессуары',
    rating: 4.6,
    reviewCount: 2341,
    description: 'Топовые беспроводные наушники с активным шумоподавлением и превосходным звуком',
    pros: ['Отличное шумоподавление', 'Качество звука', 'Удобная посадка'],
    cons: ['Цена', 'Не складываются компактно'],
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    id: 5,
    title: 'Dyson V15 Detect',
    category: 'Бытовая техника',
    rating: 4.5,
    reviewCount: 543,
    description: 'Беспроводной пылесос с лазерной подсветкой пыли и мощным всасыванием',
    pros: ['Мощное всасывание', 'Лазер для видимости пыли', 'Легкий'],
    cons: ['Высокая стоимость', 'Время работы'],
    gradient: 'from-pink-500 to-orange-500'
  },
  {
    id: 6,
    title: 'LG OLED C3',
    category: 'Электроника',
    rating: 4.8,
    reviewCount: 892,
    description: '4K OLED телевизор с глубоким черным цветом, поддержкой HDR и игровыми функциями',
    pros: ['Идеальный черный', 'Отличное изображение', 'Игровые возможности'],
    cons: ['Цена', 'Риск выгорания'],
    gradient: 'from-cyan-500 to-blue-500'
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
          <Icon key={i} name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Icon name="StarHalf" size={18} className="fill-yellow-400 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Icon key={`empty-${i}`} name="Star" size={18} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white fill-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Обзорник
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Честные обзоры товаров
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучайте детальные обзоры, сравнивайте рейтинги и выбирайте лучшее
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105' 
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
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${review.gradient}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
                    {review.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">{review.rating}</span>
                    <Icon name="TrendingUp" size={20} className="text-green-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{review.title}</CardTitle>
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground">({review.reviewCount} отзывов)</span>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {review.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ThumbsUp" size={16} className="text-green-500" />
                      <span className="font-semibold text-sm">Плюсы</span>
                    </div>
                    <ul className="space-y-1">
                      {review.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ThumbsDown" size={16} className="text-red-500" />
                      <span className="font-semibold text-sm">Минусы</span>
                    </div>
                    <ul className="space-y-1">
                      {review.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${review.gradient} text-white hover:opacity-90 transition-opacity`}>
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
      </main>

      <footer className="bg-white/80 backdrop-blur-md mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-white fill-white" />
                </div>
                <h3 className="text-xl font-bold">Обзорник</h3>
              </div>
              <p className="text-muted-foreground">
                Ваш надежный источник честных обзоров и рейтингов товаров
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
                <li><a href="#" className="hover:text-primary transition-colors">Электроника</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Смартфоны</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@obzornik.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Обзорник. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
