import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Training = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (packageName: string) => {
    setCart([...cart, packageName]);
    // You can add toast notification here if needed
  };

  const trainingPackages = [
    {
      title: "OBEDIENCE BASICS",
      includes: ["Sit", "Stay", "Come", "Heel", "No Jumping", "Leash Walking"],
      recommended: "Dogs, Cats",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🐕‍🦺"
    },
    {
      title: "BEHAVIOUR CORRECTION",
      includes: ["Barking Issues", "Aggression Management", "Litter Training", "Chewing & Biting Issues"],
      recommended: "Dogs, Cats, Rabbits",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🦮"
    },
    {
      title: "TRICK TRAINING",
      includes: ["Roll Over", "Play Dead", "Fetch", "High Five", "Spin", "Jump Through Hoops"],
      recommended: "Dogs, Parrots (Birds)",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🤸‍♂️"
    },
    {
      title: "EQUESTRIAN ESSENTIALS",
      includes: ["Basic Commands", "Haltering", "Groundwork", "Leading", "Grooming Techniques"],
      recommended: "Horses",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🐎"
    },
    {
      title: "ADVANCED GUARD TRAINING",
      includes: ["Guard Commands", "Scent Tracking", "Territory Protection"],
      recommended: "Dogs",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🛡️"
    },
    {
      title: "SOCIALIZATION TRAINING",
      includes: ["Interaction with Other Pets", "Familiarity with Public Spaces", "Calming Techniques"],
      recommended: "Dogs, Cats, Parrots",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "🏠"
    },
    {
      title: "CUSTOMIZED TRAINING PROGRAM",
      includes: ["Tailored training based on your pet's specific needs"],
      recommended: "All Pets",
      bgColor: "bg-gradient-to-br from-red-400 to-red-500",
      icon: "⚙️"
    }
  ];

  const faqs = [
    {
      question: "How does FurryHub connect pet owners with trainers?",
      answer: "We provide a platform where pet owners can find and book experienced trainers nearby."
    },
    {
      question: "What types of pets can be trained?",
      answer: "FurryHub supports training for dogs, cats, birds, rabbits, horses, and more."
    },
    {
      question: "How can I book a training session?",
      answer: "Use our website or mobile app to browse available trainers and select the package that fits your needs."
    },
    {
      question: "Do trainers visit my home?",
      answer: "Yes, many trainers offer home visits, or you can choose to visit their training facility or dedicated area for large pets like horses."
    },
    {
      question: "How long does a training session take?",
      answer: "Sessions typically last between 30 minutes and 2 hours, depending on the program and pet type."
    }
  ];

  const whyChooseReasons = [
    {
      title: "Trusted Trainers:",
      description: "Verified professionals with proven expertise in training a wide range of pets."
    },
    {
      title: "Flexible Scheduling:",
      description: "Book training sessions at your convenience."
    },
    {
      title: "Personalized Programs:",
      description: "Training plans designed for your pet's unique needs."
    },
    {
      title: "Positive reinforcement techniques for effective results.",
      description: "Access to facilities and trainers experienced in equestrian care."
    },
    {
      title: "Compassionate Approach:",
      description: "Positive reinforcement techniques for effective results."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-200 to-orange-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🏠</div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">FURRY TRAINING</h1>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
              Book now
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ALL PETS, ALL SKILLS,<br />
                ALL TAILORED FOR SUCCESS!!
              </h2>
              <div className="space-y-3 mb-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white mr-4">
                  Explore Packages
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Book now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-400 rounded-full w-64 h-64 mx-auto flex items-center justify-center">
                <div className="text-8xl">🐕</div>
              </div>
              <div className="absolute top-0 right-0 bg-white rounded-lg p-2 shadow-lg transform rotate-12">
                <span className="text-sm font-bold">Homework</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">MENU</h2>
          <div className="space-y-4 mb-8">
            <p className="text-gray-700">• Connect with expert trainers for all types of pets, including dogs, cats, birds, rabbits, and horses.</p>
            <p className="text-gray-700">• Customised training programs tailored to your pet's needs.</p>
            <p className="text-gray-700">• Hassle-free booking and flexible scheduling.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">HOW IT WORKS?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FurryHub's Promise */}
      <div className="py-12 px-4 bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">FURRYHUB'S PROMISE</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Building Bonds, Creating Happy Pets</h3>
            <p className="text-gray-600 leading-relaxed">
              At FurryHub, we are dedicated to strengthening the bond between pets and their owners by connecting you with professional trainers through our innovative platform. Our mission is to bridge the gap between pet parents and trusted experts, ensuring a seamless, stress-free training experience. Whether you're working with a playful puppy, a curious parrot, or a majestic horse, FurryHub offers a convenient and reliable way to find and book professional trainers tailored to your pet's unique needs.
            </p>
          </div>
          <div className="w-64 h-64 flex items-center justify-center">
            <img 
              src="/lovable-uploads/ece8d07b-6dd9-4b6e-8350-e731e3798881.png" 
              alt="Man with dog training" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Training Packages */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">TRAINING PACKAGES:</h2>
          <div className="space-y-6">
            {trainingPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">{pkg.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-gray-600 mt-2 mb-3">
                      <span className="font-semibold">Recommended For:</span> {pkg.recommended}
                    </div>
                    <Button 
                      onClick={() => addToCart(pkg.title)}
                      className="bg-red-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-500"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose FurryHub */}
      <div className="py-12 px-4 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">WHY CHOOSE FURRYHUB FOR TRAINING?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">FURRYHUB TRAINING FAQS</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Q{index + 1}. {faq.question}</h3>
                <p className="text-gray-600">A{index + 1}. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Now Section */}
      <div className="py-12 px-4 bg-gradient-to-br from-red-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">BOOK NOW..!!</h2>
          <p className="text-lg mb-2">Training at your fingertips, for any pet, anytime, anywhere.</p>
          <p className="text-lg">Let FurryHub help your companions learn and grow with love and expertise.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-8 px-4 bg-orange-300">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-700 mb-4">Email to furryhubindia@gmail.com</p>
          <p className="text-sm text-gray-700 mb-4">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
          
          <Button className="bg-green-500 hover:bg-green-600 text-white mb-4">
            📱 Message us on WhatsApp
          </Button>
          
          <div className="flex justify-center space-x-4">
            <div className="text-2xl">📸</div>
            <div className="text-2xl">📘</div>
          </div>
          <p className="text-sm text-gray-700 mt-2">Social</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Training;