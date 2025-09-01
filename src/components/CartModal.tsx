import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBook?: () => void;
}

export const CartModal = ({ isOpen, onClose, onProceedToBook }: CartModalProps) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', ''));
      return total + price;
    }, 0);
  };

  const handleProceedToBook = () => {
    onClose();
    onProceedToBook?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            Your Cart
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-gray-600 text-xs capitalize">{item.type}</p>
                      <p className="text-green-600 font-bold text-sm">{item.price}</p>
                    </div>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-800">Total:</span>
                  <span className="font-bold text-green-600 text-lg">₹{getTotalPrice()}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleProceedToBook}
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-full"
                  >
                    Proceed to Book
                  </Button>
                  <Button 
                    onClick={clearCart}
                    variant="outline"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50 font-semibold py-2 rounded-full"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};