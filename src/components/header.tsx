import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">armaan.pics</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Booking
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-gray-300 transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="hover:text-gray-300 transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="hover:text-gray-300 transition-colors duration-200 font-medium text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('booking')} 
                className="hover:text-gray-300 transition-colors duration-200 font-medium text-left"
              >
                Booking
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-gray-300 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
