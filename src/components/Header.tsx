import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();

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
            className="rounded-full bg-furry-purple hover:bg-furry-purple/90 text-white hover:text-white w-10 h-10"
          >
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-700 hover:bg-gray-100 w-10 h-10"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};