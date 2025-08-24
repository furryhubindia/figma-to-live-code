import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Grooming = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-furry-cyan/20 via-white to-furry-cyan/10 relative overflow-hidden">
      {/* Winter Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/src/assets/winter-background.jpg')" }}
      />
      
      {/* Animated Snowflakes */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <Header />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-furry-primary hover:bg-furry-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-furry-primary">Pet</span>{" "}
            <span className="text-furry-secondary">Grooming</span>{" "}
            <span className="text-furry-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional grooming services to keep your furry friends looking and feeling their best
          </p>
        </div>

        {/* Grooming Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Basic Grooming */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-furry-cyan/20">
            <div className="w-20 h-20 bg-furry-cyan rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/src/assets/grooming-pet.png" 
                alt="Basic Grooming"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-furry-primary mb-3 text-center">Basic Grooming</h3>
            <p className="text-gray-600 text-center mb-4">
              Bath, brush, nail trim, and ear cleaning for your pet's comfort
            </p>
            <div className="text-center">
              <span className="text-3xl font-bold text-furry-secondary">$45</span>
              <span className="text-gray-500"> / session</span>
            </div>
          </div>

          {/* Premium Grooming */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-furry-orange/20">
            <div className="w-20 h-20 bg-furry-orange rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/src/assets/grooming-pet.png" 
                alt="Premium Grooming"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-furry-primary mb-3 text-center">Premium Grooming</h3>
            <p className="text-gray-600 text-center mb-4">
              Full grooming package with styling, aromatherapy, and special treatments
            </p>
            <div className="text-center">
              <span className="text-3xl font-bold text-furry-secondary">$85</span>
              <span className="text-gray-500"> / session</span>
            </div>
          </div>

          {/* Mobile Grooming */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-furry-accent/20">
            <div className="w-20 h-20 bg-furry-accent rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/src/assets/grooming-pet.png" 
                alt="Mobile Grooming"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-furry-primary mb-3 text-center">Mobile Grooming</h3>
            <p className="text-gray-600 text-center mb-4">
              Professional grooming service that comes to your doorstep
            </p>
            <div className="text-center">
              <span className="text-3xl font-bold text-furry-secondary">$65</span>
              <span className="text-gray-500"> / session</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-furry-primary to-furry-secondary rounded-3xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">🐾 Coming Soon! 🐾</h2>
          <p className="text-xl opacity-90">
            Our professional grooming services are being prepared with love and care. 
            Your furry friends will be pampered like royalty!
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-furry-primary mb-4">Why Choose FurryHub Grooming?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-furry-secondary mr-2">✓</span>
                Certified professional groomers
              </li>
              <li className="flex items-center">
                <span className="text-furry-secondary mr-2">✓</span>
                Premium, pet-safe products
              </li>
              <li className="flex items-center">
                <span className="text-furry-secondary mr-2">✓</span>
                Stress-free environment
              </li>
              <li className="flex items-center">
                <span className="text-furry-secondary mr-2">✓</span>
                Flexible scheduling options
              </li>
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-furry-primary mb-4">Service Areas</h3>
            <p className="text-gray-700 mb-4">
              We'll be serving these areas when we launch:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Downtown Metro Area</li>
              <li>• Suburban Districts</li>
              <li>• Mobile services available</li>
              <li>• 24/7 emergency grooming</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};