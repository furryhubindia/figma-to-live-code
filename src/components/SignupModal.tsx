import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleContinue = () => {
    // Handle phone verification logic here
    console.log("Phone verification:", { countryCode, phoneNumber });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-3xl border-0 p-8">
        <DialogHeader className="text-center space-y-6">
          {/* Phone Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Enter your phone number
            </h2>
            <p className="text-gray-600 text-sm">
              We'll send you a text with a verification code. Standard tariff may apply.
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Phone Number Input */}
          <div className="flex gap-3">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-24 h-14 rounded-xl border-2 border-gray-200 focus:border-blue-500">
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
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 h-14 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
            />
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!phoneNumber.trim()}
            className="w-full h-14 text-base font-medium rounded-xl bg-gray-300 hover:bg-gray-400 text-gray-600 disabled:bg-gray-200 disabled:text-gray-400"
          >
            Continue
          </Button>

          {/* Terms and Privacy */}
          <p className="text-xs text-gray-600 text-center">
            By continuing, you agree to our{" "}
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
      </DialogContent>
    </Dialog>
  );
};