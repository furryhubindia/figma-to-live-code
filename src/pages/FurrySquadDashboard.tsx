import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { User, Calendar, Clock, MapPin, Phone, Mail, Star, CheckCircle, XCircle } from "lucide-react";

export const FurrySquadDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  // Mock provider data - in real app this would come from backend
  const providerData = {
    name: "Dr. Sarah Johnson",
    fieldType: "Veterinarian",
    email: "sarah.johnson@email.com",
    phone: "+1 234 567 8900",
    address: "123 Pet Care Street, City",
    experience: "8 years",
    specialization: "Small Animal Surgery",
    rating: 4.8,
    clinicName: "Happy Paws Veterinary Clinic",
    licenseNumber: "VET-2023-001",
    houseVisit: "Yes"
  };

  // Mock booking requests
  const bookingRequests = [
    {
      id: 1,
      customerName: "John Doe",
      petName: "Buddy",
      petType: "Dog",
      service: "Veterinary Checkup",
      date: "2024-01-15",
      time: "2:00 PM",
      address: "456 Oak Street, City",
      phone: "+1 987 654 3210",
      status: "pending",
      notes: "Annual vaccination and general checkup"
    },
    {
      id: 2,
      customerName: "Emily Smith",
      petName: "Whiskers",
      petType: "Cat",
      service: "Grooming",
      date: "2024-01-16",
      time: "10:00 AM",
      address: "789 Pine Avenue, City",
      phone: "+1 555 123 4567",
      status: "pending",
      notes: "Full grooming service, nail trimming"
    }
  ];

  const [bookings, setBookings] = useState(bookingRequests);

  const handleBookingAction = (bookingId: number, action: "accept" | "reject") => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: action === "accept" ? "accepted" : "rejected" }
          : booking
      )
    );
  };

  const renderHomeSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Provider Profile</h2>
        <Button variant="outline" size="sm">
          Edit Profile
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-xl">{providerData.name}</CardTitle>
              <p className="text-gray-600">{providerData.fieldType}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{providerData.rating} rating</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{providerData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{providerData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{providerData.address}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium">Experience: </span>
                <span className="text-sm text-gray-600">{providerData.experience}</span>
              </div>
              <div>
                <span className="text-sm font-medium">Specialization: </span>
                <span className="text-sm text-gray-600">{providerData.specialization}</span>
              </div>
              <div>
                <span className="text-sm font-medium">License: </span>
                <span className="text-sm text-gray-600">{providerData.licenseNumber}</span>
              </div>
              <div>
                <span className="text-sm font-medium">House Visits: </span>
                <Badge variant={providerData.houseVisit === "Yes" ? "default" : "secondary"}>
                  {providerData.houseVisit}
                </Badge>
              </div>
            </div>
          </div>
          
          {providerData.clinicName && (
            <div className="pt-4 border-t">
              <h4 className="font-medium text-gray-800 mb-2">Clinic Information</h4>
              <p className="text-sm text-gray-600">{providerData.clinicName}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderBookingsSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Booking Requests</h2>
      
      {bookings.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No booking requests at the moment</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.customerName}</h3>
                    <p className="text-gray-600">Pet: {booking.petName} ({booking.petType})</p>
                  </div>
                  <Badge 
                    variant={
                      booking.status === "accepted" ? "default" : 
                      booking.status === "rejected" ? "destructive" : 
                      "secondary"
                    }
                  >
                    {booking.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{booking.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{booking.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Service: </span>
                      <span className="text-sm text-gray-600">{booking.service}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                      <span className="text-sm">{booking.address}</span>
                    </div>
                  </div>
                </div>
                
                {booking.notes && (
                  <div className="mb-4">
                    <span className="text-sm font-medium">Notes: </span>
                    <span className="text-sm text-gray-600">{booking.notes}</span>
                  </div>
                )}
                
                {booking.status === "pending" && (
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => handleBookingAction(booking.id, "accept")}
                      className="bg-green-600 hover:bg-green-700 text-white"
                      size="sm"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Accept
                    </Button>
                    <Button
                      onClick={() => handleBookingAction(booking.id, "reject")}
                      variant="destructive"
                      size="sm"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-800">Furry Squad Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate("/home")}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("home")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "home"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "bookings"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Bookings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "home" && renderHomeSection()}
        {activeTab === "bookings" && renderBookingsSection()}
      </div>
    </div>
  );
};

export default FurrySquadDashboard;