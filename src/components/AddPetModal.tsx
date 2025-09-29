import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PawPrint } from "lucide-react";

interface AddPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPetAdded: () => void;
}

export const AddPetModal = ({ isOpen, onClose, onPetAdded }: AddPetModalProps) => {
  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    color: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setPetData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddPet = () => {
    // Generate unique ID for the pet
    const petWithId = {
      ...petData,
      id: Date.now().toString()
    };
    
    // Get existing pets from localStorage
    const existingPets = localStorage.getItem('userPets');
    const pets = existingPets ? JSON.parse(existingPets) : [];
    
    // Add new pet to the array
    pets.push(petWithId);
    
    // Save back to localStorage
    localStorage.setItem('userPets', JSON.stringify(pets));
    
    // Reset form
    setPetData({
      name: "",
      breed: "",
      age: "",
      gender: "",
      weight: "",
      color: ""
    });
    
    onPetAdded();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <PawPrint className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-semibold">
            No pets added yet
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm mt-2">
            Please add your pet details to get started!
          </p>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          <div>
            <Label htmlFor="petName">Pet Name *</Label>
            <Input
              id="petName"
              placeholder="Enter your pet's name"
              value={petData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="breed">Breed *</Label>
            <Input
              id="breed"
              placeholder="e.g., Golden Retriever"
              value={petData.breed}
              onChange={(e) => handleInputChange("breed", e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                placeholder="e.g., 2 years"
                value={petData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Gender</Label>
              <Select onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                placeholder="e.g., 25 kg"
                value={petData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                placeholder="e.g., Golden"
                value={petData.color}
                onChange={(e) => handleInputChange("color", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            className="flex-1"
            onClick={handleAddPet}
            disabled={!petData.name || !petData.breed}
          >
            Add Pet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};