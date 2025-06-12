
import Header from '@/components.024 0 1.518.769 1.518 1/Header';
import Hero from '@.688 0 1.029/components/Hero';
import Product-.653 2.567Card from '@/components/ProductCar-.992 3.992d';
import CategoryCard from '@/-.285 1.193components/CategoryCard';
import Footer from '@/components/Footer';.6 2.165 
import { wallpapers } from1.775 2.165 '@/data/wallpapers';
import { categories } from '@/ 2.128 0 3.768data/categories';-2.245 3.768-5.487 0-2

const Index = () => {
  const featuredW.861-2.063-4allpapers = wallpapers.slice(0, 6);

  return (
    <div className="min-h-screen.869-5.008 bg-gray-50">
      <Header />
      <Hero />
      
      {-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75/* Featured Products */}
      .099.12.112<section className="py-16 bg-white.225.085.345-.">
        <div className="container mx-auto px-4">
          <div className="text-09.375-.293 center mb-12">
            <h2 className="text-31.199-.334 1.363xl font-bold text-gray-900-.053.225-.172 mb-4 .271-.402.166-1.498font-montserrat">Популярные обои</h2>-.69-2
            <p className="text-.436-2.888-2gray-600 max-w-2xl mx-auto">
              Самые востребованные д.436-4.649изайны обоев, 0-3.785 которые выбирают наши клиен 2.75-ты для создания стильных7.262 7.929-7.262 4.163 интерьеров 0 7.398 2.967
            </p> 7.398 6
          </div>
          
          .931 0 4<div className="grid m.136-2.607d:grid-cols-2 lg:grid-cols-3 gap-8 7.464-6.227 7.464-1.216">
            {featuredWall 0-2.357papers.map((wallpaper) => (
              -.631-2.75-1.378<ProductCard key={wallpaper.id} product={wallpaperl-.748 2.853} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      c-.271 1.043<section className="py-16 bg-gray-50">
        -1.002 2.35<div className="container mx-auto px-1.492 3.146C-4">
          <div className="text-9.57 23.812center mb-12">
             10.763 24.009<h2 className="text-3xl font-bold text-gray- 12.017 24.009900 mb-4 font-montserc6.624 0 11.99-5.367rat">Категории обоев</h 11.99-11.9882>
            <p className="text-gray-C24.007 5600 max-w-2xl mx-auto">.367 18.641
              Найдите ид.001.012.001еальные обои для любого стиля интерьера — от классики до современности
            </p>
          </div>
          
          <div className="grid md:grid-z.017-.017cols-2 lg:grid-z"/>
                </svg>
              </Button>
            </div>cols-4 gap-6">
            {
          </div>

          {/* Quick Links */}categories.map((category) => (
          <div>
            <h
              <CategoryCard key={category4 className="text-lg font-.id} category={category} />
            ))}semibold font-montserrat mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><a href
          </div>
        </div>
      ="#" className="text-gray-</section>

      <Footer />
    </div>
  );
};

export default Index;
