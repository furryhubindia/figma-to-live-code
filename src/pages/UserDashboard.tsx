import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Calendar, User, PawPrint, MapPin, Clock, HelpCircle, FileText, Shield, LogOut, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/ServiceCard";
import { AddPetModal } from "@/components/AddPetModal";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  weight: string;
  color: string;
}

// Import service images
import groomingImage from "@/assets/grooming-pet.png";
import vetImage from "@/assets/vet-pet.png";
import trainingImage from "@/assets/training-pet.png";
import sittingImage from "@/assets/sitting-pet.png";
import adoptionImage from "@/assets/adoption-pet.png";
import trackingImage from "@/assets/tracking-pet.png";
import matingImage from "@/assets/mating-pet.png";
import cabImage from "@/assets/cab-pet.png";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);

  // Load pets from localStorage on component mount
  useEffect(() => {
    const savedPets = localStorage.getItem('userPets');
    if (savedPets) {
      setPets(JSON.parse(savedPets));
    }
  }, []);

  const handleServiceClick = (path: string) => {
    if (pets.length === 0) {
      setIsAddPetModalOpen(true);
    } else {
      // Navigate to service page if pets are added
      navigate(path);
    }
  };

  const handlePetAdded = () => {
    // Reload pets from localStorage
    const savedPets = localStorage.getItem('userPets');
    if (savedPets) {
      setPets(JSON.parse(savedPets));
    }
    setIsAddPetModalOpen(false);
  };

  const handleLogout = () => {
    // Mock logout - in real app this would clear auth state
    navigate("/home");
  };

  const services = [
    { title: "GROOMING", bgColor: "bg-gradient-to-br from-purple-400 to-pink-400", image: groomingImage, path: "/grooming" },
    { title: "VET ON CALL", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-400", image: vetImage, path: "/vet-on-call" },
    { title: "TRAINING", bgColor: "bg-gradient-to-br from-green-400 to-emerald-400", image: trainingImage, path: "/training" },
    { title: "PET SITTING", bgColor: "bg-gradient-to-br from-orange-400 to-red-400", image: sittingImage, path: "/pet-sitting" },
    { title: "ADOPTION", bgColor: "bg-gradient-to-br from-indigo-400 to-purple-400", image: adoptionImage, path: "#" },
    { title: "TRACKING", bgColor: "bg-gradient-to-br from-teal-400 to-blue-400", image: trackingImage, path: "#" },
    { title: "MATING", bgColor: "bg-gradient-to-br from-pink-400 to-rose-400", image: matingImage, path: "#" },
    { title: "CAB", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-400", image: cabImage, path: "#" },
  ];

  const accountOptions = [
    { icon: User, label: "My Profile", path: "#" },
    { icon: PawPrint, label: "My Pet Profile", path: "#" },
    { icon: MapPin, label: "My Address", path: "#" },
    { icon: Clock, label: "Service History", path: "#" },
    { icon: HelpCircle, label: "Help & Support", path: "#" },
    { icon: FileText, label: "Terms & Condition", path: "#" },
    { icon: Shield, label: "Privacy Policy", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate("/")} className="cursor-pointer">
              <img 
                src="/lovable-uploads/1e65733e-72da-4657-999d-da4b9d32af9c.png" 
                alt="FurryHub Logo" 
                className="w-8 h-8 object-contain"
              />
            </button>
            <h1 className="text-2xl font-black text-gray-800">
              FURRY HUB
            </h1>
          </div>
          <div className="text-sm text-gray-600">
            Welcome back, User!
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="mt-0">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
                  <p className="text-gray-600">Choose from our comprehensive pet care services</p>
                </div>
                {pets.length > 0 && (
                  <Button
                    onClick={() => setIsAddPetModalOpen(true)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <PawPrint className="w-4 h-4" />
                    Add Pet
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    bgColor={service.bgColor}
                    image={service.image}
                    onClick={() => handleServiceClick(service.path)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="booking" className="mt-0">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Booking Request</h3>
              <p className="text-gray-600">You haven't made any bookings yet. Start by exploring our services!</p>
              <Button 
                onClick={() => setActiveTab("home")} 
                className="mt-4"
              >
                Browse Services
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="account" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
              
              {accountOptions.map((option, index) => {
                if (option.label === "My Pet Profile") {
                  return (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <option.icon className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800 font-medium">{option.label}</span>
                        </div>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsAddPetModalOpen(true);
                          }}
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          Add Pet
                        </Button>
                      </div>
                      {pets.length > 0 ? (
                        <div className="mt-4 space-y-3">
                          {pets.map((pet) => (
                            <Card key={pet.id} className="p-3 bg-gray-50">
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div><span className="font-medium">Name:</span> {pet.name}</div>
                                <div><span className="font-medium">Breed:</span> {pet.breed}</div>
                                <div><span className="font-medium">Age:</span> {pet.age}</div>
                                <div><span className="font-medium">Gender:</span> {pet.gender}</div>
                                <div><span className="font-medium">Weight:</span> {pet.weight}</div>
                                <div><span className="font-medium">Color:</span> {pet.color}</div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 text-center py-4 text-gray-500">
                          <PawPrint className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p>No pets added yet</p>
                        </div>
                      )}
                    </Card>
                  );
                }
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <option.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">{option.label}</span>
                    </div>
                  </Card>
                );
              })}
              
              <Card 
                className="p-4 hover:shadow-md transition-shadow cursor-pointer border-red-200 hover:border-red-300"
                onClick={handleLogout}
              >
                <div className="flex items-center space-x-3">
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-medium">Logout</span>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-around">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === "home" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Home className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">HOME</span>
            </button>
            
            <button
              onClick={() => setActiveTab("booking")}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === "booking" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Calendar className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">BOOKING</span>
            </button>
            
            <button
              onClick={() => setActiveTab("account")}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                activeTab === "account" 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <User className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">ACCOUNT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add Pet Modal */}
      <AddPetModal 
        isOpen={isAddPetModalOpen}
        onClose={() => setIsAddPetModalOpen(false)}
        onPetAdded={handlePetAdded}
      />
    </div>
  );
};