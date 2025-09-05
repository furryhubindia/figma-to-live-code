import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


interface HeaderProps {
  onSignupClick?: () => void;
}

export const Header = ({ onSignupClick }: HeaderProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Grooming", path: "/grooming", description: "Professional pet grooming services" },
    { name: "Training", path: "/training", description: "Expert pet training programs" },
    { name: "Pet Sitting", path: "/pet-sitting", description: "Reliable pet sitting services" },
    { name: "Vet On Call", path: "/vet-on-call", description: "24/7 veterinary consultations" }
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        >
          <img 
            src="/lovable-uploads/1e65733e-72da-4657-999d-da4b9d32af9c.png" 
            alt="FurryHub Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            FurryHub
          </h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSignupClick}
            className="rounded-full bg-furry-purple hover:bg-furry-purple/90 text-white hover:text-white w-10 h-10"
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-700 hover:bg-gray-100 w-10 h-10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Our Services</h2>
                {services.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleServiceClick(service.path)}
                    className="flex flex-col items-start p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                  >
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};