import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Training = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="p-2">
              <img src="/lovable-uploads/650b4201-0e0c-4044-b7c0-1e07ec1a5454.png" alt="FurryHub Logo" className="w-8 h-8 object-contain" />
            </button>
            <h1 className="text-2xl font-black text-gray-800">FURRY TRAINING</h1>
          </div>
          <Button className="bg-purple-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-purple-300">
            Book now
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-yellow-200 to-orange-200 rounded-3xl p-8 my-6 overflow-hidden">
          <div className="flex items-center gap-8">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl font-black text-gray-800 mb-2">ALL PETS, ALL SKILLS,</h2>
              <h2 className="text-3xl font-black text-gray-800 mb-6">ALL TAILORED FOR SUCCESS!!</h2>
              <div className="flex gap-3">
                <Button 
                  onClick={() => document.getElementById('training-packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-400 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-green-500"
                >
                  Explore Packages
                </Button>
                <Button className="bg-purple-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-purple-300">
                  Book now
                </Button>
              </div>
            </div>
            <div className="w-80 h-60 flex-shrink-0">
              <img src="/lovable-uploads/e30af2de-fbf2-48c5-bacd-eaf8e79f3570.png" alt="Training dog with graduation cap" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="my-8">
          <h3 className="text-xl font-black text-gray-800 mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Connect with expert trainers for all types of pets, including dogs, cats, birds, rabbits, and horses.</li>
            <li>• Customised training programs tailored to your pet's needs.</li>
            <li>• Hassle-free booking and flexible scheduling.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="my-12">
          <h3 className="text-2xl font-black text-gray-800 text-center mb-8">HOW IT WORKS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎯</div>
              <div>
                <h4 className="font-bold text-gray-800">Expert Trainers</h4>
                <p className="text-sm text-gray-600">Connect with verified, experienced trainers for professional training service.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📅</div>
              <div>
                <h4 className="font-bold text-gray-800">Easy Booking</h4>
                <p className="text-sm text-gray-600">Book training sessions through our user-friendly platform.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏠</div>
              <div>
                <h4 className="font-bold text-gray-800">Flexible Location</h4>
                <p className="text-sm text-gray-600">Choose training at your location or visit trainer's facility.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎓</div>
              <div>
                <h4 className="font-bold text-gray-800">Customized Training</h4>
                <p className="text-sm text-gray-600">Personalized training programs designed for your pet's specific needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FurryHub's Promise */}
        <div className="relative bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 my-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-2">FURRYHUB'S PROMISE</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Building Bonds, Creating Happy Pets</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
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
        <div className="my-12" id="training-packages">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-orange-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">TRAINING PACKAGES:</h3>
          </div>
          
          <div className="space-y-6">
            {trainingPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">{pkg.icon}</div>
                    </div>
                    <h4 className="text-xl font-black text-gray-800">{pkg.title}</h4>
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

        {/* Why Choose FurryHub */}
        <div className="my-12">
          <div className="relative">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">WHY CHOOSE FURRYHUB FOR TRAINING?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <h4 className="font-bold text-gray-800">{reason.title}</h4>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="my-12">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-yellow-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">FURRYHUB TRAINING FAQS</h3>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-2">Q{index + 1}. {faq.question}</h4>
                <p className="text-gray-600">A{index + 1}. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Book Now Section */}
        <div className="relative bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl p-8 my-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">BOOK NOW..!!</h3>
          <p className="text-lg mb-2">Training at your fingertips, for any pet, anytime, anywhere.</p>
          <p className="text-lg">Let FurryHub help your companions learn and grow with love and expertise.</p>
        </div>

        {/* Contact Section */}
        <div className="relative bg-orange-300 rounded-3xl p-8 my-12 text-center">
          <h4 className="font-bold text-gray-800 mb-2">Contact Us</h4>
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
    </div>
  );
};

export default Training;