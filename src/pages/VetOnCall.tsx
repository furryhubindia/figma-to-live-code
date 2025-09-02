import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingModal } from "@/components/BookingModal";
import { SignupModal } from "@/components/SignupModal";
import { useState } from "react";
import { CheckCircle, Clock, Heart, Shield, Users, Stethoscope } from "lucide-react";

const VetOnCall = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleBookNow = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignupClick={() => setIsSignupModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-furry-cyan/20 to-transparent opacity-50"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
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
                  onClick={() => handleBookNow("Package Consultation")}
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
        </section>

        {/* Menu Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">MENU</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="text-furry-orange mt-1">•</span>
                <p>Bridging the gap between pet owners and veterinarians.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-furry-orange mt-1">•</span>
                <p>Home Visits | Online Consultations | Vet Clinic Appointments.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-furry-orange mt-1">•</span>
                <p>Care for your pets, anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-furry-cyan/20 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">HOW IT WORKS?</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Online Consultation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Book an appointment with certified veterinarians.</li>
                    <li>• Get expert advice and diagnosis for common health issues.</li>
                    <li>• Convenient video or voice consultations from the comfort of your home.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Clinic Appointment Booking</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Discover nearby veterinary clinics with availability.</li>
                    <li>• Book a time slot that suits your schedule.</li>
                    <li>• Access the best facilities and professional care for your pets.</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-furry-cyan/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Home Visit by Vet</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Schedule a home visit for your pet's check-up or treatment.</li>
                  <li>• Perfect for emergencies or pets that feel stressed leaving home.</li>
                  <li>• Equipped vets provide compassionate care at your doorstep.</li>
                </ul>
                
                <div className="mt-6">
                  <h5 className="font-bold mb-2 text-gray-800">Hassle-Free Booking</h5>
                  <p className="text-gray-600 text-sm">Our platform simplifies the process of finding, reviewing, and booking services, all in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vet On Call Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">VET ON CALL PACKAGES</h3>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {/* Online Consultation */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold">ONLINE CONSULTATION</h4>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 20-minute online consultation.</li>
                    <li>• Diagnosis and advice for common issues.</li>
                    <li>• Prescription recommendations if needed.</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => handleBookNow("Online Consultation")}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                >
                  Book now
                </Button>
              </Card>

              {/* Home Visit - Standard */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold">HOME VISIT - STANDARD CHECK-UP</h4>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Physical examination of your pet.</li>
                    <li>• Vaccinations and general health checks.</li>
                    <li>• Treatment for minor issues.</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => handleBookNow("Home Visit - Standard")}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                >
                  Book now
                </Button>
              </Card>

              {/* Home Visit - Emergency */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold">HOME VISIT - EMERGENCY CARE</h4>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Immediate response to urgent health concerns.</li>
                    <li>• Critical care and support at your home.</li>
                    <li>• Equipped vets with medical tools for emergencies.</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => handleBookNow("Emergency Care")}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                >
                  Book now
                </Button>
              </Card>

              {/* Clinic Appointment */}
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold">CLINIC APPOINTMENT</h4>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Booking with top clinics near you.</li>
                    <li>• Priority slots for urgent care.</li>
                    <li>• Access to advanced diagnostic and treatment facilities.</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => handleBookNow("Clinic Appointment")}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full"
                >
                  Book now
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose FurryHub */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">WHY CHOOSE FURRYHUB FOR VET ON CALL?</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Verified Veterinarians</h4>
                  <p className="text-gray-600 text-sm">All vets on our platform are certified and experienced, ensuring the best care for your pets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Comprehensive Vet Profiles</h4>
                  <p className="text-gray-600 text-sm">Access vet details, including qualifications, years of experience, specialties, and reviews, before booking.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Flexible Services</h4>
                  <p className="text-gray-600 text-sm">Choose between online consultations, home visits, or clinic appointments based on your needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Emergency Support</h4>
                  <p className="text-gray-600 text-sm">Quick access to emergency services for urgent situations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Stethoscope className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Wide Coverage</h4>
                  <p className="text-gray-600 text-sm">Services available for dogs, cats, rabbits, birds, horses, and more.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-furry-cyan mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Convenient Booking</h4>
                  <p className="text-gray-600 text-sm">Schedule and manage appointments through our user-friendly platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-furry-cyan/20 rounded-full transform -translate-x-32 translate-y-32"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-blue-900/50 rounded-3xl p-8">
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
        </section>

        {/* Book Now CTA */}
        <section className="py-16 px-4 bg-white text-center">
          <div className="container mx-auto max-w-4xl">
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
        </section>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedPackage}
      />
      
      <SignupModal 
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </div>
  );
};

export default VetOnCall;