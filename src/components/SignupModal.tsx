import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"choose" | "user-signup">("choose");
  
  // User signup form states
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleUserAccountClick = () => {
    setStep("user-signup");
  };

  const handleFurrySquadClick = () => {
    onClose();
    navigate('/furry-squad-register');
  };

  const handleUserSignup = () => {
    // Handle user account creation logic here
    console.log("User signup:", { name, phoneNumber: countryCode + phoneNumber, email, password, address });
    onClose();
    // Reset form
    setName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setAddress("");
    setStep("choose");
  };

  const handleBack = () => {
    setStep("choose");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-3xl border-0 p-8">
        {step === "choose" && (
          <>
            <DialogHeader className="text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Choose Account Type
                </h2>
                <p className="text-gray-600 text-sm">
                  Select the type of account you want to create
                </p>
              </div>
            </DialogHeader>

            <div className="space-y-4 mt-6">
              {/* User Account Option */}
              <Button
                onClick={handleUserAccountClick}
                variant="outline"
                className="w-full h-16 text-left flex items-center gap-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">User Account</div>
                  <div className="text-sm text-gray-600">Create a regular user account</div>
                </div>
              </Button>

              {/* Furry Squad Option */}
              <Button
                onClick={handleFurrySquadClick}
                variant="outline"
                className="w-full h-16 text-left flex items-center gap-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Furry Squad</div>
                  <div className="text-sm text-gray-600">Join as a service provider</div>
                </div>
              </Button>
            </div>
          </>
        )}

        {step === "user-signup" && (
          <>
            <DialogHeader className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="absolute left-4 top-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create User Account
                </h2>
                <p className="text-gray-600 text-sm">
                  Fill in your details to create your account
                </p>
              </div>
            </DialogHeader>

            <div className="space-y-4 mt-6">
              {/* Name */}
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
                required
              />

              {/* Phone Number */}
              <div className="flex gap-3">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-24 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">+91</SelectItem>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+49">+49</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 h-12 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
                  required
                />
              </div>

              {/* Email */}
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
                required
              />

              {/* Password */}
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
                required
              />

              {/* Address */}
              <Textarea
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 resize-none"
                rows={3}
                required
              />

              {/* Create Account Button */}
              <Button
                onClick={handleUserSignup}
                disabled={!name.trim() || !phoneNumber.trim() || !email.trim() || !password.trim() || !address.trim()}
                className="w-full h-12 text-base font-medium rounded-xl bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-200 disabled:text-gray-400"
              >
                Create Account
              </Button>

              {/* Terms and Privacy */}
              <p className="text-xs text-gray-600 text-center">
                By creating an account, you agree to our{" "}
                <button className="underline text-gray-900 hover:text-blue-600">
                  T&C
                </button>{" "}
                and{" "}
                <button className="underline text-gray-900 hover:text-blue-600">
                  Privacy
                </button>{" "}
                policy.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};