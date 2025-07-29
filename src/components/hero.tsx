export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">armaan.pics</h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">Sports Media That Moves</p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          High school sports photography and videography based in Walpole, MA. 
          Delivering clean, fast, and fully customized content for each player and team across the Boston area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
          >
            View Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
