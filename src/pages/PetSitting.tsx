import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingModal } from "@/components/BookingModal";
import { CartModal } from "@/components/CartModal";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

export const PetSitting = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { cartItems, addToCart, cartCount } = useCart();
  
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      id: "foster-care-basic",
      title: "FOSTER CARE - BASIC STAY",
      description: "Includes:",
      features: [
        "Temporary stay at a licensed foster home.",
        "Nutritious meals.",
        "Regular updates and photos.",
        "Safe and comfortable environment."
      ],
      recommendedFor: "Dogs, Cats, Rabbits, Birds.",
      price: "₹899",
      bgColor: "bg-furry-lime",
      iconPath: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
    },
    {
      id: "dog-walking-standard",
      title: "DOG WALKING - STANDARD WALK",
      description: "Includes:",
      features: [
        "30-minute walk in a pet-friendly environment.",
        "Hydration breaks.",
        "Safety-focused and leash-trained walkers."
      ],
      recommendedFor: "Dogs of all breeds and sizes.",
      price: "₹299",
      bgColor: "bg-furry-lime",
      iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    },
    {
      id: "dog-walking-adventure",
      title: "DOG WALKING - ADVENTURE WALK",
      description: "Includes:",
      features: [
        "60-minute walk in parks or open areas.",
        "Playtime and exercise.",
        "GPS tracking for route updates."
      ],
      recommendedFor: "High-energy dogs.",
      price: "₹499",
      bgColor: "bg-furry-lime",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    },
    {
      id: "in-home-day-care",
      title: "IN-HOME PET SITTING - DAY CARE",
      description: "Includes:",
      features: [
        "8-hour care by a professional caretaker at your home.",
        "Feeding, walking, and playtime.",
        "Cleaning litter and ensuring comfort."
      ],
      recommendedFor: "All Pets.",
      price: "₹1299",
      bgColor: "bg-furry-lime",
      iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    },
    {
      id: "in-home-overnight",
      title: "IN-HOME PET SITTING - OVERNIGHT STAY",
      description: "Includes:",
      features: [
        "Overnight supervision by a caretaker.",
        "Feeding, walking, and bedtime routines.",
        "24/7 attention and updates."
      ],
      recommendedFor: "All Pets.",
      price: "₹1899",
      bgColor: "bg-furry-lime",
      iconPath: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
    },
    {
      id: "customized-care",
      title: "CUSTOMIZED CARE PLANS",
      description: "Includes:",
      features: [
        "Tailored care based on your pet's needs.",
        "Flexible schedules."
      ],
      recommendedFor: "Dogs, Cats, Rabbits, Parrots and more.",
      price: "₹999",
      bgColor: "bg-furry-lime",
      iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Verified Providers:",
      description: "All foster homes, dog walkers, and caretakers are thoroughly vetted.",
      icon: "✓"
    },
    {
      title: "Real-Time Updates",
      description: "Receive photos and progress reports during the service.",
      icon: "📱"
    },
    {
      title: "Safety First:",
      description: "Ensuring a secure and caring environment for your pets.",
      icon: "🛡️"
    },
    {
      title: "Convenience:",
      description: "Book services online or through our app at your convenience.",
      icon: "📅"
    },
    {
      title: "Wide Range of Services:",
      description: "Foster care, walking, training services for all types of pets.",
      icon: "🎯"
    }
  ];

  const faqs = [
    {
      question: "Q1. How does FurryHub ensure safety?",
      answer: "A1. All foster homes, walkers, and caretakers undergo a strict vetting process and background checks."
    },
    {
      question: "Q2. What types of pets are supported?",
      answer: "A2. We provide services for dogs, cats, rabbits, birds, and even horses."
    },
    {
      question: "Q3. How do I book a service?",
      answer: "A3. Use our website or app to select a service, provider, and schedule."
    },
    {
      question: "Q4. Are real-time updates available?",
      answer: "A4. Yes, we provide live updates, photos, and status reports during the service."
    },
    {
      question: "Q5. Can I meet the service provider beforehand?",
      answer: "A5. Yes, a meet-and-greet can be arranged for your peace of mind."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1e65733e-72da-4657-999d-da4b9d32af9c.png" 
              alt="FurryHub Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              FURRY HOME
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="default"
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
            >
              Book now
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsCartModalOpen(true)}
              className="relative rounded-full bg-orange-400 hover:bg-orange-500 text-white hover:text-white w-10 h-10"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-100 to-red-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-furry-lime rounded-full opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-300 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300 rounded-full opacity-25"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                ALL PETS, ALL <span className="text-furry-lime">CARE</span>,<br />
                ALL TAILORED FOR <span className="text-furry-lime">COMFORT</span>!!
              </h1>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button 
                  onClick={scrollToPackages}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Explore Packages
                </Button>
                <Button 
                  onClick={() => setIsBookingModalOpen(true)}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Book now
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block flex-shrink-0 ml-8">
              <img 
                src="/lovable-uploads/e30af2de-fbf2-48c5-bacd-eaf8e79f3570.png" 
                alt="Happy Dog" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">MENU</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start space-x-2">
            <span className="text-orange-500">•</span>
            <p>Connect with trusted foster houses, dog walkers, and pet caretakers near you.</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-orange-500">•</span>
            <p>Reliable and compassionate care for your pets.</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-orange-500">•</span>
            <p>Book services conveniently through FurryHub.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">HOW IT WORKS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-bold text-lg mb-2">Verified Foster Homes</h3>
              <p className="text-sm text-gray-600">We connect you to licensed and loving foster homes, ensuring a safe and nurturing environment for your pets when you're away.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">🚶‍♂️</div>
              <h3 className="font-bold text-lg mb-2">Professional Dog Walkers</h3>
              <p className="text-sm text-gray-600">Schedule walks for your dogs with trained and responsible walkers who ensure exercise, safety, and companionship.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-bold text-lg mb-2">Dedicated Pet Caretakers</h3>
              <p className="text-sm text-gray-600">Hire experienced caretakers to look after your pets at home, giving them the care and attention they deserve.</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Hassle-Free Booking</h3>
              <p className="text-sm text-gray-600">Our platform simplifies the process of finding, reviewing, and booking services, all in one place.</p>
            </Card>
          </div>
        </div>
      </div>

      {/* FurryHub's Promise Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[50%]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:block flex-shrink-0 mr-8">
              <div className="w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full flex items-center justify-center">
                <div className="text-8xl">🐕</div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">FURRYHUB'S PROMISE</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Care Beyond Boundaries</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At FurryHub, we prioritize your pet's happiness and well-being. Whether you need a safe foster home, a reliable dog walker, or a dedicated caretaker, we ensure trusted connections and exceptional service, making pet care stress-free and seamless for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages-section" className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">PACKAGES:</h2>
          <div className="space-y-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`${pkg.bgColor} text-white p-6 rounded-3xl relative overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                          <path d={pkg.iconPath} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="font-semibold mb-2">{pkg.description}</p>
                            <ul className="space-y-1 text-sm">
                              {pkg.features.map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Recommended For: <span className="font-normal">{pkg.recommendedFor}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-4 ml-6">
                    <div className="text-2xl font-bold">{pkg.price}</div>
                    <Button 
                      onClick={() => addToCart({
                        id: pkg.id,
                        name: pkg.title,
                        price: pkg.price,
                        type: 'pet-sitting'
                      })}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose FurryHub Section */}
      <div className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 transform translate-x-[30%] translate-y-[-30%]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">WHY CHOOSE FURRYHUB <span className="text-red-500">FOR TRAINING?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-gradient-to-r from-green-100 to-lime-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-furry-lime rounded-full opacity-30 transform translate-x-[-30%] translate-y-[30%]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">FURRYHUB HOME FAQS</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Now Section */}
      <div className="bg-gradient-to-r from-orange-400 to-red-400 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">BOOK NOW..!!</h2>
          <p className="text-xl mb-2">Care at your fingertips, for any pet, anytime, anywhere.</p>
          <p className="text-lg">Let FurryHub provide comfort and companionship with love and expertise.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-furry-lime text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email to furryhubindia@gmail.com</p>
          </div>
          
          <div className="mb-6">
            <p className="text-sm">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
              💬 Message us on WhatsApp
            </Button>
          </div>
          
          <div className="mt-6">
            <h4 className="font-bold mb-2">Social</h4>
            <div className="flex justify-center space-x-4">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white">📷</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">f</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)}
        onProceedToBook={() => setIsBookingModalOpen(true)}
      />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default PetSitting;