import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingModal } from "@/components/BookingModal";
import { CartModal } from "@/components/CartModal";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { CheckCircle, Clock, Heart, Shield, Users, Stethoscope } from "lucide-react";

const VetOnCall = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const packagePrices: { [key: string]: string } = {
    "Online Consultation": "₹499",
    "Home Visit - Standard": "₹899",
    "Emergency Care": "₹1499", 
    "Clinic Appointment": "₹699"
  };

  const handleBookNow = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsBookingModalOpen(true);
  };

  const handleAddToCart = (packageName: string) => {
    addToCart({
      id: `vet-${packageName.toLowerCase().replace(/\s+/g, '-')}`,
      name: packageName,
      price: packagePrices[packageName] || "₹499",
      type: 'grooming'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="p-2">
              <img src="/lovable-uploads/650b4201-0e0c-4044-b7c0-1e07ec1a5454.png" alt="FurryHub Logo" className="w-8 h-8 object-contain" />
            </button>
            <h1 className="text-2xl font-black text-gray-800">FURRY DOCTOR</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCartModalOpen(true)}
              className="relative p-2"
            >
              <ShoppingCart className="w-6 h-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Button 
              onClick={() => handleBookNow("General Consultation")}
              className="bg-purple-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-purple-300"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl p-8 my-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-furry-cyan/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-furry-orange rounded-lg flex items-center justify-center">
                  <span className="text-xl">🏠</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">FURRY DOCTOR</h1>
              </div>
              <Button 
                onClick={() => handleBookNow("General Consultation")}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
              >
                Book now
              </Button>
            </div>
            
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                ALL PETS, ALL HEALTH,<br />
                ALL TAILORED FOR CARE!!
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => document.getElementById('vet-packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
                >
                  Explore Packages
                </Button>
                <Button 
                  onClick={() => handleBookNow("Immediate Consultation")}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
                >
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="my-8">
          <h3 className="text-xl font-black text-gray-800 mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Bridging the gap between pet owners and veterinarians.</li>
            <li>• Home Visits | Online Consultations | Vet Clinic Appointments.</li>
            <li>• Care for your pets, anytime, anywhere.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="my-12">
          <div className="relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 text-center mb-8">HOW IT WORKS?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📱</div>
              <div>
                <h4 className="font-bold text-gray-800">Online Consultation</h4>
                <p className="text-sm text-gray-600">Book an appointment with certified veterinarians for expert advice and diagnosis.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏥</div>
              <div>
                <h4 className="font-bold text-gray-800">Clinic Appointment Booking</h4>
                <p className="text-sm text-gray-600">Discover nearby veterinary clinics and book convenient time slots.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏠</div>
              <div>
                <h4 className="font-bold text-gray-800">Home Visit by Vet</h4>
                <p className="text-sm text-gray-600">Schedule home visits for check-ups or emergency care at your doorstep.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h4 className="font-bold text-gray-800">Emergency Services</h4>
                <p className="text-sm text-gray-600">Quick access to emergency veterinary services for urgent situations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FurryHub's Promise */}
        <div className="relative bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 my-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-2">FURRYHUB'S PROMISE</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Expert Veterinary Care, Anytime, Anywhere</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                At FurryHub, we connect you with certified veterinarians who understand your pet's unique health needs. 
                Whether it's an online consultation, home visit, or clinic appointment, 
                we ensure your furry friend receives the best possible care with convenience and compassion.
              </p>
            </div>
            <div className="w-32 h-32">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="text-4xl">🩺</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vet On Call Packages */}
        <div className="my-12" id="vet-packages">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-blue-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">VET ON CALL PACKAGES</h3>
          </div>
          
          <div className="space-y-6">
            {/* Online Consultation */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">💻</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-800">ONLINE CONSULTATION</h4>
                    <p className="text-sm text-gray-600">{packagePrices["Online Consultation"]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Includes:</div>
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    <li>• 20-minute online consultation</li>
                    <li>• Diagnosis and advice for common issues</li>
                    <li>• Prescription recommendations if needed</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Online Consultation")}
                    className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Home Visit - Standard */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🏠</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-800">HOME VISIT - STANDARD CHECK-UP</h4>
                    <p className="text-sm text-gray-600">{packagePrices["Home Visit - Standard"]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Includes:</div>
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    <li>• Physical examination of your pet</li>
                    <li>• Vaccinations and general health checks</li>
                    <li>• Treatment for minor issues</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Home Visit - Standard")}
                    className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Home Visit - Emergency */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🚨</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-800">HOME VISIT - EMERGENCY CARE</h4>
                    <p className="text-sm text-gray-600">{packagePrices["Emergency Care"]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Includes:</div>
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    <li>• Immediate response to urgent health concerns</li>
                    <li>• Critical care and support at your home</li>
                    <li>• Equipped vets with medical tools for emergencies</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Emergency Care")}
                    className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Clinic Appointment */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🏥</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-800">CLINIC APPOINTMENT</h4>
                    <p className="text-sm text-gray-600">{packagePrices["Clinic Appointment"]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Includes:</div>
                  <ul className="text-xs text-gray-600 space-y-1 mb-3">
                    <li>• Booking with top clinics near you</li>
                    <li>• Priority slots for urgent care</li>
                    <li>• Access to advanced diagnostic and treatment facilities</li>
                  </ul>
                  <Button 
                    onClick={() => handleAddToCart("Clinic Appointment")}
                    className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose FurryHub */}
        <div className="my-12">
          <div className="relative">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">WHY CHOOSE FURRYHUB FOR VET ON CALL?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Verified Veterinarians</h4>
                <p className="text-gray-600 text-sm">All vets on our platform are certified and experienced, ensuring the best care for your pets.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Comprehensive Vet Profiles</h4>
                <p className="text-gray-600 text-sm">Access vet details, including qualifications, years of experience, specialties, and reviews, before booking.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Flexible Services</h4>
                <p className="text-gray-600 text-sm">Choose between online consultations, home visits, or clinic appointments based on your needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Heart className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Emergency Support</h4>
                <p className="text-gray-600 text-sm">Quick access to emergency services for urgent situations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Stethoscope className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Wide Coverage</h4>
                <p className="text-gray-600 text-sm">Services available for dogs, cats, rabbits, birds, horses, and more.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Convenient Booking</h4>
                <p className="text-gray-600 text-sm">Schedule and manage appointments through our user-friendly platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 my-12 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full transform -translate-x-32 translate-y-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-8">FURRY DOCTOR FAQS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">Q1. How do I choose the right vet?</h4>
                <p className="text-sm text-gray-200">A1. FurryHub provides detailed vet profiles, including their experience, qualifications, and specialties, to help you make an informed decision.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Q2. What pets are covered?</h4>
                <p className="text-sm text-gray-200">A2. We provide vet services for dogs, cats, rabbits, birds, horses, and other pets.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Q3. How does online consultation work?</h4>
                <p className="text-sm text-gray-200">A3. You can book an online appointment, and the vet will connect via video or audio call at the scheduled time.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Q4. Are emergency services available?</h4>
                <p className="text-sm text-gray-200">A4. Yes, you can book emergency home visits for urgent care.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Q5. Can I reschedule an appointment?</h4>
                <p className="text-sm text-gray-200">A5. Yes, rescheduling is easy through our platform, subject to availability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center my-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">BOOK NOW..!!</h3>
          <p className="text-lg text-gray-600 mb-4">Care at your fingertips, for any pet, anytime, anywhere.</p>
          <p className="text-gray-600 mb-8">Let FurryHub connect you with expert veterinarians for your pet's health and well-being.</p>
          
          <div className="bg-blue-900 text-white p-8 rounded-3xl mb-8">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">Email to furryhubindia@gmail.com</p>
            <p className="text-sm">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
            
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
                <span>📱</span>
                <span>Message us on WhatsApp</span>
              </Button>
            </div>
            
            <div className="mt-6">
              <p className="font-bold mb-2">Social</p>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">📷</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white">f</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedPackage}
      />
      
      <CartModal 
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        onProceedToBook={() => {
          setIsCartModalOpen(false);
          setIsBookingModalOpen(true);
        }}
      />
    </div>
  );
};

export default VetOnCall;