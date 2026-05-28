import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CosmicImage } from '../components/cosmic/CosmicImage';
import { CosmicCard } from '../components/cosmic/CosmicCard';
import { ShoppingBag, Sparkles, ServerCrash } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  category: 'Websites' | 'Robotic Projects' | 'IoT Projects' | 'UI/UX Design';
  price: number;
  thumbnail: string;
  options: string[]; // ['purchase', 'customise']
}

const CATEGORIES = ['Websites', 'Robotic Projects', 'IoT Projects', 'UI/UX Design'] as const;

export default function BuyProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Websites');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Could not connect to the product database. Make sure the server is running.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  const handleAction = (product: Product, option: 'purchase' | 'customise') => {
    navigate('/checkout', { state: { product, option } });
  };

  return (
    <div className="relative z-10 min-h-screen px-6 py-24 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cosmic-gold/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cosmic-gold text-xs font-black uppercase tracking-[0.3em] bg-cosmic-gold/10 px-4 py-2 rounded-full inline-block mb-4"
        >
          Exclusive Ready-Made Tech
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black font-montserrat text-white tracking-tight leading-none mb-6"
        >
          READY & <span className="text-cosmic-gold">CUSTOMISABLE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 font-montserrat max-w-2xl mx-auto text-sm md:text-base"
        >
          Browse our premium catalog of pre-engineered systems, interactive designs, and robotic modules. Acquire instantly or request tailored refinements.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-16 border-b border-white/5 pb-8">
        {CATEGORIES.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-cosmic-gold text-cosmic-black shadow-gold-glow'
                  : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === cat ? 'bg-cosmic-black/10 text-cosmic-black' : 'bg-white/10 text-white/40'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Display Grid */}
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center py-32">
          <div className="w-16 h-16 border-4 border-cosmic-gold/20 border-t-cosmic-gold rounded-full animate-spin mb-4" />
          <p className="text-white/40 text-xs uppercase tracking-widest font-black">Decrypting catalog...</p>
        </div>
      ) : error ? (
        <div className="w-full max-w-md mx-auto text-center py-20 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <ServerCrash className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Server Syncing</h3>
          <p className="text-white/60 text-xs font-montserrat">
            Our secure catalog systems are performing a routing synchronization. Please reload the page in a few moments.
          </p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl mx-auto text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="relative z-10">
            <ShoppingBag className="w-12 h-12 text-cosmic-gold/20 mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-black font-montserrat text-white mb-3">
              CATALOG OFFLINE
            </h3>
            <p className="text-white/40 max-w-sm mx-auto text-xs leading-relaxed mb-6 font-montserrat">
              We are currently updating the ready-made catalog with next-generation blueprints and modules. Please check back shortly or contact our technical team for custom commissions.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-black text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-gold-glow"
            >
              Contact Support
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <CosmicCard className="group overflow-hidden p-0 h-full flex flex-col justify-between border-white/5 bg-white/[0.02]">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden w-full bg-cosmic-black border-b border-white/5">
                    <CosmicImage
                      src={product.thumbnail}
                      alt={product.title}
                      title={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-cosmic-black/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                      <span className="text-cosmic-gold text-sm font-black font-mono">
                        ₹{product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-montserrat text-white mb-3 group-hover:text-cosmic-gold transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-montserrat line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Options / Action Buttons */}
                    <div className="flex flex-col gap-2 mt-auto">
                      {product.options.includes('purchase') && (
                        <button
                          onClick={() => handleAction(product, 'purchase')}
                          className="w-full py-3 bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-black font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-gold-glow flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" /> Purchase Project
                        </button>
                      )}
                      
                      {product.options.includes('customise') && (
                        <button
                          onClick={() => handleAction(product, 'customise')}
                          className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-cosmic-gold" /> Customise & Purchase
                        </button>
                      )}
                    </div>
                  </div>
                </CosmicCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
