import { CheckCircle, CreditCard } from "lucide-react";
import { SiVenmo, SiPaypal, SiApplepay } from "react-icons/si";
import { FaDollarSign } from "react-icons/fa";

export default function Booking() {
  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Booking Information</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-accent" />
              Booking Requirements
            </h3>
            <ul className="space-y-4 text-neutral">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-success flex-shrink-0" />
                <span>Full payment required upfront</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-success flex-shrink-0" />
                <span>Book at least 3 days in advance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-success flex-shrink-0" />
                <span>Combo availability depends on second shooter</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-success flex-shrink-0" />
                <span>Weather-dependent rescheduling available</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-accent" />
              Accepted Payments
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 mx-auto mb-2 bg-[#3D95CE] rounded-lg flex items-center justify-center">
                  <SiVenmo className="w-8 h-8 text-white" />
                </div>
                <span className="font-medium">Venmo</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-[#003087] to-[#009cde] rounded-lg flex items-center justify-center">
                  <SiPaypal className="w-8 h-8 text-white" />
                </div>
                <span className="font-medium">PayPal</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 mx-auto mb-2 bg-black rounded-lg flex items-center justify-center">
                  <SiApplepay className="w-8 h-8 text-white" />
                </div>
                <span className="font-medium">Apple Pay</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 mx-auto mb-2 bg-green-500 rounded-lg flex items-center justify-center">
                  <FaDollarSign className="w-8 h-8 text-white" />
                </div>
                <span className="font-medium">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
