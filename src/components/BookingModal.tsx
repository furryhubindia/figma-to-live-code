import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const petProfiles = [
  { id: 1, image: "/lovable-uploads/650b4201-0e0c-4044-b7c0-1e07ec1a5454.png", alt: "Dog" },
  { id: 2, image: "/lovable-uploads/285eb637-2862-45cc-b3f3-34122144835e.png", alt: "Cat" },
  { id: 3, image: "/lovable-uploads/e30af2de-fbf2-48c5-bacd-eaf8e79f3570.png", alt: "Pet" },
];

const cities = ["Hyderabad", "Vijayawada", "Guntur", "Vishakhpatnam", "Warangal", "Rajamundry"];
const stores = ["Marshal Pet zone", "Leo Pet zone"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [selectedPet, setSelectedPet] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("house-visit");
  const [address, setAddress] = useState<string>("");
  const [selectedStore, setSelectedStore] = useState<string>("");

  const handleBook = () => {
    // Handle booking logic here
    console.log({
      selectedPet,
      selectedDate,
      selectedTime,
      selectedCity,
      serviceType,
      address: serviceType === "house-visit" ? address : "",
      selectedStore: serviceType === "groomer-store" ? selectedStore : "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            Book Your Service
          </DialogTitle>
          
          {/* Pet Profiles */}
          <div className="flex justify-center gap-2">
            {petProfiles.map((pet) => (
              <button
                key={pet.id}
                onClick={() => setSelectedPet(pet.id)}
                className={cn(
                  "w-12 h-12 rounded-full border-2 overflow-hidden transition-all",
                  selectedPet === pet.id ? "border-purple-500 ring-2 ring-purple-200" : "border-gray-200"
                )}
              >
                <img 
                  src={pet.image} 
                  alt={pet.alt} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Date and Time */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="date" className="text-sm font-medium text-gray-700">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex-1">
              <Label htmlFor="time" className="text-sm font-medium text-gray-700">Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service Type */}
          <div>
            <Label className="text-sm font-medium text-gray-700">Service Location</Label>
            <RadioGroup 
              value={serviceType} 
              onValueChange={setServiceType}
              className="flex gap-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="house-visit" id="house-visit" />
                <Label htmlFor="house-visit" className="text-sm">House visit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="groomer-store" id="groomer-store" />
                <Label htmlFor="groomer-store" className="text-sm">Groomer store</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Address or Store Selection */}
          {serviceType === "house-visit" ? (
            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
              <Textarea
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 resize-none"
                rows={3}
              />
            </div>
          ) : (
            <div>
              <Label htmlFor="store" className="text-sm font-medium text-gray-700">Select Store</Label>
              <Select value={selectedStore} onValueChange={setSelectedStore}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select store" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map((store) => (
                    <SelectItem key={store} value={store}>
                      {store}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Book Button */}
          <Button 
            onClick={handleBook}
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full"
          >
            Book
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};