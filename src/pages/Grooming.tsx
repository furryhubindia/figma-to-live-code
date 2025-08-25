import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Grooming = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-sm mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")} className="p-2">
              <Home className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-black text-gray-800">FURRY GROOMING</h1>
          </div>
          <Button className="bg-purple-300 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-400 text-sm">
            Book now
          </Button>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl p-6 my-6 bg-white">
          {/* Orange blob background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300 rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute top-16 right-8 w-24 h-24 bg-orange-400 rounded-full transform translate-x-4"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-gray-800 mb-1">ALL PETS, ALL CARE,</h2>
            <h2 className="text-2xl font-black text-gray-800 mb-4">ALL AT YOUR DOORSTEP!</h2>
            <div className="flex gap-2 mb-4">
              <Button className="bg-green-400 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-green-500 text-sm">
                Explore Packages
              </Button>
              <Button className="bg-purple-300 text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-purple-400 text-sm">
                Book now
              </Button>
            </div>
          </div>
          
          {/* Two dogs image */}
          <div className="relative z-20 flex justify-center mt-4">
            <div className="w-48 h-32 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🐩🐩</div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="my-6">
          <h3 className="text-lg font-black text-gray-800 mb-3">MENU</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>• Find the best groomers in your area.</li>
            <li>• Personalised grooming experiences for your pets.</li>
            <li>• Flexible booking options available.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="relative my-8 bg-white rounded-3xl p-6 overflow-hidden">
          {/* Green blob background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-300 rounded-full transform translate-x-6 -translate-y-6"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 rounded-full transform -translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-black text-gray-800 text-center mb-6">HOW IT WORKS?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-lg">✨</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Professional Groomers</h4>
                  <p className="text-xs text-gray-600">Connect with verified, experienced groomers for top-quality service.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">📅</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Effortless Scheduling</h4>
                  <p className="text-xs text-gray-600">Book grooming appointments through our easy-to-use platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">🏠</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">At your Convenience</h4>
                  <p className="text-xs text-gray-600">Choose a groomer to come to your location or visit their facility.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">✂️</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Clean and Hygienic</h4>
                  <p className="text-xs text-gray-600">Ensure your pet's grooming is done with care, leaving them refreshed and happy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FurryHub's Promise */}
        <div className="relative bg-white rounded-3xl p-6 my-8 overflow-hidden">
          {/* Green blob background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full transform translate-x-8 -translate-y-8"></div>
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-black text-gray-800 mb-1">FURRYHUB'S PROMISE</h3>
              <h4 className="text-base font-bold text-gray-800 mb-3">Stress-Free Grooming, Made Simple</h4>
              <p className="text-gray-700 text-xs leading-relaxed">
                At FurryHub, we believe every pet deserves premium grooming. 
                Whether you have a dog, cat, rabbit, bird, turtle, horse, or any other companion, 
                FurryHub connects you with expert groomers who understand your pet's unique needs. 
                Experience stress-free, professional grooming at your doorstep with services tailored to your pet.
              </p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
              <div className="text-lg">🐕</div>
            </div>
          </div>
        </div>

        {/* Grooming Packages */}
        <div className="relative my-8 overflow-hidden">
          {/* Orange blob background */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-300 rounded-full"></div>
          <div className="absolute top-4 left-12 w-16 h-16 bg-orange-400 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-black text-gray-800 mb-6">GROOMING PACKAGES:</h3>
            
            <div className="space-y-4">
              {/* Fluffy Touch (Dogs) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Purple blob background */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐾</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">FLUFFY TOUCH (DOGS)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Shampooing & Conditioning</li>
                      <li>• Blow Drying</li>
                      <li>• Nail Trimming</li>
                      <li>• Ear & Eye Cleaning</li>
                      <li>• Paw Moisturising & Cleaning</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Purr-fect Care (Cats) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Purple blob background */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐾</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">PURR-FECT CARE (CATS)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Bathing with Hypoallergenic Products</li>
                      <li>• Nail Trimming</li>
                      <li>• Ear & Eye Cleaning</li>
                      <li>• Deshedding & Combing</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Chirpy Care (Birds) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Green blob background */}
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🖐️</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">CHIRPY CARE (BIRDS)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Feather Cleaning & Trimming</li>
                      <li>• Nail Clipping</li>
                      <li>• Beak Buffing</li>
                      <li>• Mite Treatment</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hoppy Groom (Rabbits) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Orange blob background */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐾</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">HOPPY GROOM (RABBITS)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Fur Brushing & Cleaning</li>
                      <li>• Nail Trimming</li>
                      <li>• Ear Cleaning</li>
                      <li>• Deworming & Mite Treatment</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Shell Shine (Turtles) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Purple blob background */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐢</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">SHELL SHINE (TURTLES)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Shell Cleaning & Conditioning</li>
                      <li>• Nail & Beak Trimming</li>
                      <li>• Algae Removal</li>
                      <li>• Health Checkup</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hoof & Mane Spa (Horses) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Purple blob background */}
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐴</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">HOOF & MANE SPA (HORSES)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Shampooing & Conditioning</li>
                      <li>• Mane Trimming & Detangling</li>
                      <li>• Hoof Cleaning & Care</li>
                      <li>• Skin Moisturising</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Customized Grooming (Exotic Pets) */}
              <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-200 overflow-hidden">
                {/* Green blob background */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-300 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                      <div className="text-lg">🐾</div>
                    </div>
                    <h4 className="text-sm font-black text-gray-800 mt-3">CUSTOMIZED GROOMING (EXOTIC PETS)</h4>
                  </div>
                  <div className="text-right mb-3">
                    <div className="text-xs text-gray-600 mb-1">For ferrets, guinea pigs, hamsters, or any exotic pets:</div>
                    <div className="text-xs text-gray-600 mb-1">Services Included:</div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li>• Tailored to pet type</li>
                      <li>• Bathing</li>
                      <li>• Nail trimming</li>
                      <li>• Ear cleaning</li>
                      <li>• Health checkups</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-300 text-gray-800 font-semibold px-3 py-1.5 rounded-full hover:bg-purple-400 text-xs">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose FurryHub */}
        <div className="relative my-8 bg-white rounded-3xl p-6 overflow-hidden">
          {/* Green blob background */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-400 rounded-full transform -translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-black text-gray-800 mb-6">WHY CHOOSE FURRYHUB FOR GROOMING?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-lg">🚪</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Convenient</h4>
                  <p className="text-xs text-gray-600">Doorstep service for a hassle-free experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">📦</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Customizable Packages</h4>
                  <p className="text-xs text-gray-600">Tailor grooming to meet your pet's unique needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">😌</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Stress-Free</h4>
                  <p className="text-xs text-gray-600">Familiar surroundings reduce stress for your pet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">🌿</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Eco-Friendly Products</h4>
                  <p className="text-xs text-gray-600">Gentle, natural grooming products ensure safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lg">🔒</div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Expert Care</h4>
                  <p className="text-xs text-gray-600">Certified groomers with specialised training for different pet types.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Process */}
        <div className="relative my-8 bg-white rounded-3xl p-6 overflow-hidden">
          {/* Orange blob background */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-300 rounded-full"></div>
          <div className="absolute top-4 right-8 w-16 h-16 bg-orange-400 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-black text-gray-800 mb-6">HOW IT WORKS?</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">Schedule Your Appointment:</h4>
                <p className="text-gray-600 text-xs">Choose a package and book via our platform.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">Groomer Arrives at Your Location:</h4>
                <p className="text-gray-600 text-xs">Groomers come equipped with all necessary tools.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">Personalised Grooming:</h4>
                <p className="text-gray-600 text-xs">Services tailored to your pet's needs.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">Spotless Finish:</h4>
                <p className="text-gray-600 text-xs">Clean grooming and tidy-up after the session.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now CTA */}
        <div className="relative bg-white rounded-3xl p-6 my-8 text-center overflow-hidden">
          {/* Purple blob background */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-300 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 bg-purple-400 rounded-full transform -translate-x-4 -translate-y-4"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-black text-gray-800 mb-3">BOOK NOW..!!</h3>
            <p className="text-gray-700 font-semibold mb-1 text-sm">Grooming at your fingertips, for any pet, anytime, anywhere.</p>
            <p className="text-gray-700 text-xs">Let FurryHub take care of your companions with love and expertise.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-green-300 rounded-3xl p-4 my-8 text-center">
          <div className="mb-3">
            <h4 className="font-bold text-gray-800 mb-1 text-sm">Contact Us</h4>
            <p className="text-xs text-gray-700">Email to furryhubindia@gmail.com</p>
          </div>
          <p className="text-xs text-gray-700 mb-3">FurryHub: Your one-stop destination for all things pets—care, love, and convenience at your fingertips!</p>
          
          <Button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full mb-3 hover:bg-green-600 text-xs">
            💬 Message us on WhatsApp
          </Button>
          
          <div className="text-xs text-gray-700 mb-2">Social</div>
          <div className="flex justify-center gap-3">
            <div className="w-6 h-6 bg-pink-400 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">📷</span>
            </div>
            <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">f</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};