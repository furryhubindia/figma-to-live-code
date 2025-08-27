import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Grooming = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="p-2">
              <img src="/lovable-uploads/650b4201-0e0c-4044-b7c0-1e07ec1a5454.png" alt="FurryHub Logo" className="w-8 h-8 object-contain" />
            </button>
            <h1 className="text-2xl font-black text-gray-800">FURRY GROOMING</h1>
          </div>
          <Button className="bg-purple-200 text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-purple-300">
            Book now
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl p-8 my-6 overflow-hidden">
          <div className="flex items-center gap-8">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl font-black text-gray-800 mb-2">ALL PETS, ALL CARE,</h2>
              <h2 className="text-3xl font-black text-gray-800 mb-6">ALL AT YOUR DOORSTEP!</h2>
              <div className="flex gap-3">
                <Button 
                  onClick={() => document.getElementById('grooming-packages')?.scrollIntoView({ behavior: 'smooth' })}
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
              <img src="/lovable-uploads/285eb637-2862-45cc-b3f3-34122144835e.png" alt="Two groomed poodles" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="my-8">
          <h3 className="text-xl font-black text-gray-800 mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Find the best groomers in your area.</li>
            <li>• Personalised grooming experiences for your pets.</li>
            <li>• Flexible booking options available.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="my-12">
          <h3 className="text-2xl font-black text-gray-800 text-center mb-8">HOW IT WORKS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✨</div>
              <div>
                <h4 className="font-bold text-gray-800">Professional Groomers</h4>
                <p className="text-sm text-gray-600">Connect with verified, experienced groomers for top-quality service.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📅</div>
              <div>
                <h4 className="font-bold text-gray-800">Effortless Scheduling</h4>
                <p className="text-sm text-gray-600">Book grooming appointments through our easy-to-use platform.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🏠</div>
              <div>
                <h4 className="font-bold text-gray-800">At your Convenience</h4>
                <p className="text-sm text-gray-600">Choose a groomer to come to your location or visit their facility.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✂️</div>
              <div>
                <h4 className="font-bold text-gray-800">Clean and Hygienic</h4>
                <p className="text-sm text-gray-600">Ensure your pet's grooming is done with care, leaving them refreshed and happy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FurryHub's Promise */}
        <div className="relative bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 my-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-2">FURRYHUB'S PROMISE</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Stress-Free Grooming, Made Simple</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                At FurryHub, we believe every pet deserves premium grooming. 
                Whether you have a dog, cat, rabbit, bird, turtle, horse, or any other companion, 
                FurryHub connects you with expert groomers who understand your pet's unique needs. 
                Experience stress-free, professional grooming at your doorstep with services tailored to your pet.
              </p>
            </div>
            <div className="w-32 h-32">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="text-4xl">🐕</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grooming Packages */}
        <div className="my-12" id="grooming-packages">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-orange-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">GROOMING PACKAGES:</h3>
          </div>
          
          <div className="space-y-6">
            {/* Fluffy Touch (Dogs) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐾</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">FLUFFY TOUCH (DOGS)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Shampooing & Conditioning</li>
                    <li>• Blow Drying</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear & Eye Cleaning</li>
                    <li>• Paw Moisturising & Cleaning</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Purr-fect Care (Cats) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐾</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">PURR-FECT CARE (CATS)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Bathing with Hypoallergenic Products</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear & Eye Cleaning</li>
                    <li>• Deshedding & Combing</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Chirpy Care (Birds) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🖐️</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">CHIRPY CARE (BIRDS)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Feather Cleaning & Trimming</li>
                    <li>• Nail Clipping</li>
                    <li>• Beak Buffing</li>
                    <li>• Mite Treatment</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Hoppy Groom (Rabbits) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐾</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">HOPPY GROOM (RABBITS)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Fur Brushing & Cleaning</li>
                    <li>• Nail Trimming</li>
                    <li>• Ear Cleaning</li>
                    <li>• Deworming & Mite Treatment</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Shell Shine (Turtles) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐢</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">SHELL SHINE (TURTLES)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Shell Cleaning & Conditioning</li>
                    <li>• Nail & Beak Trimming</li>
                    <li>• Algae Removal</li>
                    <li>• Health Checkup</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Hoof & Mane Spa (Horses) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐴</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">HOOF & MANE SPA (HORSES)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Shampooing & Conditioning</li>
                    <li>• Mane Trimming & Detangling</li>
                    <li>• Hoof Cleaning & Care</li>
                    <li>• Skin Moisturising</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Customized Grooming (Exotic Pets) */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="text-2xl">🐾</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-800">CUSTOMIZED GROOMING (EXOTIC PETS)</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">For ferrets, guinea pigs, hamsters, or any exotic pets:</div>
                  <div className="text-sm text-gray-600 mb-2">Services Included:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Tailored to pet type</li>
                    <li>• Bathing</li>
                    <li>• Nail trimming</li>
                    <li>• Ear cleaning</li>
                    <li>• Health checkups</li>
                  </ul>
                  <Button className="bg-purple-200 text-gray-800 font-semibold px-4 py-2 rounded-full mt-3 hover:bg-purple-300">
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
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-green-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">WHY CHOOSE FURRYHUB FOR GROOMING?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🚪</div>
              <div>
                <h4 className="font-bold text-gray-800">Convenient</h4>
                <p className="text-sm text-gray-600">Doorstep service for a hassle-free experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📦</div>
              <div>
                <h4 className="font-bold text-gray-800">Customizable Packages</h4>
                <p className="text-sm text-gray-600">Tailor grooming to meet your pet's unique needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">😌</div>
              <div>
                <h4 className="font-bold text-gray-800">Stress-Free</h4>
                <p className="text-sm text-gray-600">Familiar surroundings reduce stress for your pet.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🌿</div>
              <div>
                <h4 className="font-bold text-gray-800">Eco-Friendly Products</h4>
                <p className="text-sm text-gray-600">Gentle, natural grooming products ensure safety.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔒</div>
              <div>
                <h4 className="font-bold text-gray-800">Expert Care</h4>
                <p className="text-sm text-gray-600">Certified groomers with specialised training for different pet types.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Process */}
        <div className="my-12">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-orange-200 rounded-full -z-10"></div>
            <h3 className="text-2xl font-black text-gray-800 mb-8">HOW IT WORKS?</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Schedule Your Appointment:</h4>
              <p className="text-gray-600 text-sm">Choose a package and book via our platform.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Groomer Arrives at Your Location:</h4>
              <p className="text-gray-600 text-sm">Groomers come equipped with all necessary tools.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Personalised Grooming:</h4>
              <p className="text-gray-600 text-sm">Services tailored to your pet's needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Spotless Finish:</h4>
              <p className="text-gray-600 text-sm">Clean grooming and tidy-up after the session.</p>
            </div>
          </div>
        </div>

        {/* Book Now CTA */}
        <div className="relative bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl p-8 my-12 text-center overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/20 rounded-full"></div>
          <h3 className="text-2xl font-black text-gray-800 mb-4">BOOK NOW..!!</h3>
          <p className="text-gray-700 font-semibold mb-2">Grooming at your fingertips, for any pet, anytime, anywhere.</p>
          <p className="text-gray-700 text-sm">Let FurryHub take care of your companions with love and expertise.</p>
        </div>

        {/* Contact Section */}
        <div className="bg-green-300 rounded-3xl p-6 my-12 text-center">
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">Contact Us</h4>
            <p className="text-sm text-gray-700">Email to furryhubindia@gmail.com</p>
          </div>
          <p className="text-xs text-gray-700 mb-4">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
          
          <Button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full mb-4 hover:bg-green-600">
            💬 Message us on WhatsApp
          </Button>
          
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📷</span>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">f</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};