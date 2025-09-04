import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export const FurrySquadRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fieldType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    personalContact: "",
    houseVisit: "",
    businessContact: "",
    experience: "",
    petClinicName: "",
    petClinicLocation: "",
    specialisation: "",
    achievements: "",
    licenseNumber: "",
    online: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Handle registration logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      {/* Home button in top left */}
      <div className="absolute top-4 left-4">
        <Button
          variant="destructive"
          onClick={() => navigate("/home")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium"
        >
          Home
        </Button>
      </div>

      <div className="max-w-4xl mx-auto pt-16">
        <div className="bg-green-400 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-black font-bold text-sm mb-2">FIELD TYPE:</label>
                <Select onValueChange={(value) => handleInputChange('fieldType', value)}>
                  <SelectTrigger className="w-full bg-white border-0 rounded-lg h-12">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veterinarian">Veterinarian</SelectItem>
                    <SelectItem value="groomer">Pet Groomer</SelectItem>
                    <SelectItem value="trainer">Pet Trainer</SelectItem>
                    <SelectItem value="sitter">Pet Sitter</SelectItem>
                    <SelectItem value="walker">Pet Walker</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">FIRST NAME:</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">LAST NAME:</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">EMAIL:</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">PASSWORD:</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">ADDRESS:</label>
                <Input
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">CITY:</label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">PERSONAL CONTACT NUMBER:</label>
                <Input
                  value={formData.personalContact}
                  onChange={(e) => handleInputChange('personalContact', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">HOUSE VISIT:</label>
                <Select onValueChange={(value) => handleInputChange('houseVisit', value)}>
                  <SelectTrigger className="w-full bg-white border-0 rounded-lg h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-black font-bold text-sm mb-2">BUSINESS CONTACT NUMBER:</label>
                <Input
                  value={formData.businessContact}
                  onChange={(e) => handleInputChange('businessContact', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">EXPERIENCE:</label>
                <Input
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                  placeholder="Years of experience"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">PET CLINIC/ PET STORE - NAME:</label>
                <Input
                  value={formData.petClinicName}
                  onChange={(e) => handleInputChange('petClinicName', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">PET CLINIC/PET STORE - LOCATION:</label>
                <Input
                  value={formData.petClinicLocation}
                  onChange={(e) => handleInputChange('petClinicLocation', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">SPECIALISATION:</label>
                <Input
                  value={formData.specialisation}
                  onChange={(e) => handleInputChange('specialisation', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">ACHIEVEMENTS:</label>
                <Input
                  value={formData.achievements}
                  onChange={(e) => handleInputChange('achievements', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">LICENSE NUMBER:</label>
                <Input
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  className="w-full bg-white border-0 rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-black font-bold text-sm mb-2">ONLINE:(ONLY FOR DOCTORS)</label>
                <Select onValueChange={(value) => handleInputChange('online', value)}>
                  <SelectTrigger className="w-full bg-white border-0 rounded-lg h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="not-available">Not Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Register Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 rounded-lg text-lg font-medium"
              >
                Register
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Us Section */}
        <div className="bg-red-500 text-white text-center py-8 mt-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">Email to furryhubindia@gmail.com</p>
          <p className="text-sm mb-6">
            Tired of tangled leashes and lost toys? FurryHub to the rescue. Our website is packed with features and 
            services to make pet life easier.
          </p>
          
          <div className="flex justify-center items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
              📱 Message us on WhatsApp
            </Button>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <div className="text-lg">Social</div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-red-500 text-lg">📷</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-blue-600 text-lg">f</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurrySquadRegister;