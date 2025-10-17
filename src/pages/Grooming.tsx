import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { BookingModal } from "@/components/BookingModal";
import { CartModal } from "@/components/CartModal";
import { useState } from "react";

export const Grooming = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const packagePrices: { [key: string]: string } = {
    "Wag & Wash (Dogs)": "₹899",
    "Purr-fect Care (Cats)": "₹699",
    "Chirpy Care (Birds)": "₹399",
    "Hoppy Groom (Rabbits)": "₹499",
    "Shell Shine (Turtles)": "₹299",
    "Hoof & Mane Spa (Horses)": "₹1999",
    "Customized Grooming (Exotic Pets)": "₹599"
  };

  const handleAddToCart = (packageName: string) => {
    addToCart({
      id: `grooming-${packageName.toLowerCase().replace(/\s+/g, '-')}`,
      name: packageName,
      price: packagePrices[packageName] || "₹499",
      type: 'grooming'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/")} className="p-2 hover:scale-110 transition-transform">
              <img src="/lovable-uploads/650b4201-0e0c-4044-b7c0-1e07ec1a5454.png" alt="FurryHub Logo" className="w-10 h-10 object-contain" />
            </button>
            <h1 className="text-2xl font-semibold text-foreground tracking-tight">Furry Grooming</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartModalOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-grooming-accent text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-foreground text-white font-medium px-8 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-grooming-primary via-grooming-accent to-grooming-secondary rounded-[2.5rem] p-12 my-10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="flex items-center gap-12 relative z-10">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-3 leading-tight tracking-tight">All Pets, All Care,</h2>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight tracking-tight">At Your Doorstep</h2>
              <div className="flex gap-4">
                <Button 
                  onClick={() => document.getElementById('grooming-packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-foreground font-semibold px-8 py-6 text-base rounded-full hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Explore Packages
                </Button>
                <Button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-6 text-base rounded-full hover:bg-white/30 transition-all"
                >
                  Book Now
                </Button>
              </div>
            </div>
            <div className="w-96 h-72 flex-shrink-0">
              <img src="/lovable-uploads/285eb637-2862-45cc-b3f3-34122144835e.png" alt="Two groomed poodles" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="my-16">
          <h3 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">What We Offer</h3>
          <ul className="space-y-3 text-foreground/80 text-lg">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-grooming-primary"></span>
              Find the best groomers in your area
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-grooming-accent"></span>
              Personalised grooming experiences for your pets
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-grooming-teal"></span>
              Flexible booking options available
            </li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="my-20">
          <h3 className="text-4xl font-semibold text-foreground text-center mb-12 tracking-tight">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">✨</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Professional Groomers</h4>
                <p className="text-foreground/60 leading-relaxed">Connect with verified, experienced groomers for top-quality service.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">📅</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Effortless Scheduling</h4>
                <p className="text-foreground/60 leading-relaxed">Book grooming appointments through our easy-to-use platform.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">🏠</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">At Your Convenience</h4>
                <p className="text-foreground/60 leading-relaxed">Choose a groomer to come to your location or visit their facility.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">✂️</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Clean and Hygienic</h4>
                <p className="text-foreground/60 leading-relaxed">Ensure your pet's grooming is done with care, leaving them refreshed and happy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FurryHub's Promise */}
        <div className="relative bg-gradient-to-br from-grooming-emerald to-grooming-teal rounded-[2.5rem] p-12 my-20 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="flex-1">
              <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">FurryHub's Promise</h3>
              <h4 className="text-2xl font-medium text-white/90 mb-6">Stress-Free Grooming, Made Simple</h4>
              <p className="text-white/80 text-lg leading-relaxed">
                At FurryHub, we believe every pet deserves premium grooming. 
                Whether you have a dog, cat, rabbit, bird, turtle, horse, or any other companion, 
                FurryHub connects you with expert groomers who understand your pet's unique needs. 
                Experience stress-free, professional grooming at your doorstep with services tailored to your pet.
              </p>
            </div>
            <div className="w-40 h-40">
              <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-6xl">🐕</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grooming Packages */}
        <div className="my-20" id="grooming-packages">
          <div className="relative mb-12">
            <h3 className="text-4xl font-semibold text-foreground tracking-tight">Grooming Packages</h3>
            <p className="text-foreground/60 text-lg mt-3">Premium care for every companion</p>
          </div>
          
          <div className="space-y-5">
            {/* Fluffy Touch (Dogs) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-primary to-grooming-accent rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🐾</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Fluffy Touch (Dogs)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Shampooing & Conditioning</li>
                    <li>• Blow Drying</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear & Eye Cleaning</li>
                    <li>• Paw Moisturising & Cleaning</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Wag & Wash (Dogs)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Purr-fect Care (Cats) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-accent/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-accent to-grooming-secondary rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🐱</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Purr-fect Care (Cats)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Bathing with Hypoallergenic Products</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear & Eye Cleaning</li>
                    <li>• Deshedding & Combing</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Purr-fect Care (Cats)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Chirpy Care (Birds) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-teal/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-teal to-grooming-emerald rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🦜</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Chirpy Care (Birds)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Feather Cleaning & Trimming</li>
                    <li>• Nail Clipping</li>
                    <li>• Beak Buffing</li>
                    <li>• Mite Treatment</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Chirpy Care (Birds)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Hoppy Groom (Rabbits) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-secondary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-secondary to-grooming-primary rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🐰</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Hoppy Groom (Rabbits)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Fur Brushing & Cleaning</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear Cleaning</li>
                    <li>• Deworming & Mite Treatment</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Hoppy Groom (Rabbits)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Shell Shine (Turtles) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-emerald/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-emerald to-grooming-teal rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🐢</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Shell Shine (Turtles)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Shell Cleaning & Conditioning</li>
                    <li>• Nail & Beak Trimming</li>
                    <li>• Algae Removal</li>
                    <li>• Health Checkup</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Shell Shine (Turtles)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Hoof & Mane Spa (Horses) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-accent/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-accent to-grooming-secondary rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🐴</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Hoof & Mane Spa (Horses)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Shampooing & Conditioning</li>
                    <li>• Mane Trimming & Detangling</li>
                    <li>• Hoof Cleaning & Care</li>
                    <li>• Skin Moisturising</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Hoof & Mane Spa (Horses)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Customized Grooming (Exotic Pets) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all hover:border-grooming-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-grooming-primary to-grooming-teal rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-3xl">🦎</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground tracking-tight">Customized Grooming (Exotic)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/50 font-medium mb-2">For ferrets, guinea pigs, hamsters, or any exotic pets</div>
                  <div className="text-sm text-foreground/50 font-medium mb-3">Services Included</div>
                  <ul className="text-sm text-foreground/70 space-y-2 mb-4">
                    <li>• Tailored to pet type</li>
                    <li>• Bathing</li>
                    <li>• Nail trimming</li>
                    <li>• Ear cleaning</li>
                    <li>• Health checkups</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Customized Grooming (Exotic Pets)")}
                    className="bg-foreground text-white font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose FurryHub */}
        <div className="my-20">
          <div className="relative mb-12">
            <h3 className="text-4xl font-semibold text-foreground tracking-tight">Why Choose FurryHub</h3>
            <p className="text-foreground/60 text-lg mt-3">Five reasons we stand out</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">🚪</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Convenient</h4>
                <p className="text-foreground/60 leading-relaxed">Doorstep service for a hassle-free experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">📦</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Customizable Packages</h4>
                <p className="text-foreground/60 leading-relaxed">Tailor grooming to meet your pet's unique needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">😌</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Stress-Free</h4>
                <p className="text-foreground/60 leading-relaxed">Familiar surroundings reduce stress for your pet.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="text-3xl">🌿</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Eco-Friendly Products</h4>
                <p className="text-foreground/60 leading-relaxed">Gentle, natural grooming products ensure safety.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all md:col-span-2">
              <div className="text-3xl">🔒</div>
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-2">Expert Care</h4>
                <p className="text-foreground/60 leading-relaxed">Certified groomers with specialised training for different pet types.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Process */}
        <div className="my-20">
          <div className="relative mb-12">
            <h3 className="text-4xl font-semibold text-foreground tracking-tight">The Process</h3>
            <p className="text-foreground/60 text-lg mt-3">Simple steps to premium grooming</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-grooming-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-grooming-primary">1</span>
              </div>
              <h4 className="font-semibold text-foreground text-xl mb-3">Schedule Your Appointment</h4>
              <p className="text-foreground/60 leading-relaxed">Choose a package and book via our platform.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-grooming-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-grooming-accent">2</span>
              </div>
              <h4 className="font-semibold text-foreground text-xl mb-3">Groomer Arrives at Your Location</h4>
              <p className="text-foreground/60 leading-relaxed">Groomers come equipped with all necessary tools.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-grooming-teal/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-grooming-teal">3</span>
              </div>
              <h4 className="font-semibold text-foreground text-xl mb-3">Personalised Grooming</h4>
              <p className="text-foreground/60 leading-relaxed">Services tailored to your pet's needs.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200/50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-grooming-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-grooming-secondary">4</span>
              </div>
              <h4 className="font-semibold text-foreground text-xl mb-3">Spotless Finish</h4>
              <p className="text-foreground/60 leading-relaxed">Clean grooming and tidy-up after the session.</p>
            </div>
          </div>
        </div>

        {/* Book Now CTA */}
        <div className="relative bg-gradient-to-br from-grooming-primary via-grooming-accent to-grooming-secondary rounded-[2.5rem] p-16 my-20 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-5xl font-bold text-white mb-6 tracking-tight">Ready to Book?</h3>
            <p className="text-white/90 text-xl font-medium mb-3">Grooming at your fingertips, for any pet, anytime, anywhere.</p>
            <p className="text-white/80 text-lg mb-8">Let FurryHub take care of your companions with love and expertise.</p>
            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-foreground font-semibold px-12 py-6 text-lg rounded-full hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-grooming-emerald to-grooming-teal rounded-[2.5rem] p-12 my-20 text-center shadow-2xl">
          <div className="mb-8">
            <h4 className="font-semibold text-white text-2xl mb-3">Get in Touch</h4>
            <p className="text-white/80 text-lg">Email us at furryhubindia@gmail.com</p>
          </div>
          <p className="text-white/70 text-base mb-8 max-w-2xl mx-auto">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
          
          <Button className="bg-white text-foreground font-semibold px-10 py-6 text-lg rounded-full mb-8 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all">
            💬 Message us on WhatsApp
          </Button>
          
          <div className="flex justify-center gap-5">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
              <span className="text-white text-2xl">📷</span>
            </div>
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
              <span className="text-white text-2xl font-bold">f</span>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)}
        onProceedToBook={() => setIsBookingModalOpen(true)}
      />
    </div>
  );
};