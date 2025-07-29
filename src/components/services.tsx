import { Camera, Video, Package, Clock, Users, Star, CheckCircle } from "lucide-react";

export default function Services() {
  const photographyServices = [
    {
      title: "3–4 Players",
      price: "$35",
      unit: "per player",
      features: [
        "20–50 edited action shots per player",
        "Raw files included",
        "Delivery within 48 hours"
      ],
      popular: false,
      icon: Users
    },
    {
      title: "5–7 Players",
      price: "$30",
      unit: "per player",
      features: [
        "30+ edited photos per player",
        "Raw files included", 
        "Delivery within 3 days"
      ],
      popular: true,
      icon: Users
    },
    {
      title: "8+ Players",
      price: "$200",
      unit: "flat rate",
      features: [
        "Up to 20 edited action shots per player",
        "Includes full team + group photos",
        "Raw files included",
        "Delivery within 3–5 days"
      ],
      popular: false,
      icon: Users
    },
    {
      title: "Solo Session",
      price: "$75",
      unit: "flat rate",
      features: [
        "40–70 edited images of one player",
        "Raw files included",
        "Delivery within 24 hours"
      ],
      popular: false,
      icon: Camera
    }
  ];

  const videographyServices = [
    {
      title: "Highlight Video",
      price: "$100",
      unit: "per player",
      features: [
        "60–90 sec cinematic video",
        "Raw footage included",
        "Professional editing"
      ],
      popular: true,
      icon: Video
    },
    {
      title: "Season Reel",
      price: "$400+",
      unit: "starting at",
      features: [
        "2–3+ min multi-game edit",
        "Professional highlights",
        "Custom music & effects"
      ],
      popular: false,
      icon: Star
    }
  ];

  const comboPackages = [
    {
      title: "Player Combo",
      price: "$225",
      unit: "complete package",
      features: [
        "Photo package included",
        "Highlight video included",
        "Best value for individual players"
      ],
      popular: true,
      icon: Package
    }
  ];

  const photoAddOns = [
    { addon: "Rush Delivery", price: "$15" },
    { addon: "Watermark Removal", price: "$5/player" },
    { addon: "Travel Fee (10+ mi from Walpole)", price: "$25" }
  ];

  const videoAddOns = [
    { addon: "Rush Delivery", price: "$35" },
    { addon: "Choose Your Own Music", price: "$20" },
    { addon: "Voiceover Clip", price: "$10" },
    { addon: "Travel Fee (10+ mi from Walpole)", price: "$25" }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <div className={`relative bg-white rounded-xl shadow-lg border-2 p-6 hover:shadow-xl transition-all duration-300 ${
      service.popular ? 'border-black transform scale-105' : 'border-gray-200'
    }`}>
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <service.icon className="w-12 h-12 mx-auto mb-4 text-black" />
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-black">{service.price}</span>
          <span className="text-gray-600 ml-2">{service.unit}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services & Pricing</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional photography and videography services tailored for high school sports teams and individual players. 
            Choose the package that best fits your needs.
          </p>
        </div>

        {/* Photography Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Camera className="w-8 h-8 mr-3 text-black" />
              Photography Packages
            </h3>
            <p className="text-gray-600">Capture every moment with professional sports photography</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Videography Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Video className="w-8 h-8 mr-3 text-black" />
              Videography Services
            </h3>
            <p className="text-gray-600">Dynamic highlight reels and season documentation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videographyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Combo Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Package className="w-8 h-8 mr-3 text-black" />
              Combo Packages
            </h3>
            <p className="text-gray-600">Save with our photography and videography bundles</p>
          </div>
          <div className="max-w-md mx-auto">
            {comboPackages.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Optional Add-Ons</h3>
            <p className="text-gray-600">Enhance your package with these additional services</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Photo Add-ons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Camera className="w-6 h-6 mr-3 text-black" />
                <h4 className="text-xl font-bold">Photography Add-Ons</h4>
              </div>
              <div className="space-y-4">
                {photoAddOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">{addon.addon}</span>
                    <span className="font-bold text-black">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Add-ons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Video className="w-6 h-6 mr-3 text-black" />
                <h4 className="text-xl font-bold">Videography Add-Ons</h4>
              </div>
              <div className="space-y-4">
                {videoAddOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">{addon.addon}</span>
                    <span className="font-bold text-black">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
