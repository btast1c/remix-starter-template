// This is the content for app/routes/_index.tsx
// Create this as a separate file

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Mock data - in a real app, this would come from a database
const mockProperties = [
  {
    id: 1,
    image: "/9307.jpg",
    price: "$220,000",
    beds: 2,
    baths: 2,
    sqft: "1,172",
    photos: 43,
    status: "Open Sun 1PM-3PM",
    address: "9307 Golf View Drive New Port Richey, FL"
  },
  {
    id: 2,
    image: "/7253.jpg",
    price: "$33,700",
    beds: 3,
    baths: 2,
    sqft: "1,550",
    photos: 20,
    status: "Open 5/31 11AM-1PM",
    address: "7253 ABINGTON Avenue New Port Richey, FL"
  },
  {
    id: 3,
    image: "/7313.jpg",
    price: "$705,000",
    beds: 4,
    baths: 3,
    sqft: "2080",
    photos: 20,
    status: "New",
    address: "7313 8TH Avenue N St Petersburg, FL"
  },
  {
    id: 4,
    image: "/719.jpg",
    price: "$2,300",
    beds: 2,
    baths: 2,
    sqft: "1,015",
    photos: 17,
    status: "Rent",
    address: "719 BELTREES Street #C Dunedin, FL"
  },
  {
    id: 5,
    image: "/3420.jpg",
    price: "$465,000",
    beds: 3,
    baths: 2,
    sqft: "1,173",
    photos: 39,
    status: "New",
    address: "3420 SANTA CLARA Drive Punta Gorda, FL"
  },
  {
    id: 6,
    image: "3254.jpg",
    price: "$272,000",
    beds: 2,
    baths: 2,
    sqft: "1,362",
    photos: 53,
    status: "New",
    address: "3254 LORI Lane New Port Richey, FL"
  }
];

export async function loader() {
  return json({ properties: mockProperties });
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider border-b-2 border-white pb-1">HOME</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">ABOUT US</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">SELLERS</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">BUYERS</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">NEIGHBORHOODS</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">RESOURCES</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">REGISTER</a>
            <a href="#" className="text-white hover:text-gray-200 text-sm font-medium tracking-wider">SIGN IN</a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // If video fails to load, show background image
        }}
      >
        <source src="https://cdn.chime.me/doc/fs/upload/202434/14/40ac1518-7ffe-4975-80b0-0a2acf22602a/Sarah_Leonard_Team_Video_BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wider">
        <span style={{
          fontFamily: 'myFont-Marcellus-Regular',
          fontSize: '63.84px',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: '70.224px',
          textAlign: 'center',
          textShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 12px',
          wordBreak: 'break-word',
          WebkitFontSmoothing: 'antialiased'
        }} className="mb-8">
          ASHLEY SMITH TEAM
        </span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-widest">
        <span style={{
          fontFamily: 'myFont-Marcellus-Regular',
          fontSize: '63.84px',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: '70.224px',
          textAlign: 'center',
          textShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 12px',
          wordBreak: 'break-word',
          WebkitFontSmoothing: 'antialiased'
        }} className="mb-8">
          
        </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 font-light">
          Ranked top 1% by Wall Street Journal with more than 500+ homes sold every year.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider">
            SEARCH ALL HOMES
          </button>
          <button className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wider">
            WHAT'S YOUR HOME WORTH?
          </button>
        </div>
      </div>

      {/* Agent photo in bottom right */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
          <img 
            src="/ashley.jpg" 
            alt="Ashley Smith"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl font-bold text-gray-900 mb-4">500+</div>
            <p className="text-xl text-gray-600 font-medium">Homes Sold in 2023</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-gray-900 mb-4">16</div>
            <p className="text-xl text-gray-600 font-medium">Expert Agents</p>
          </div>
          <div>
            <div className="text-6xl font-bold text-gray-900 mb-4">10</div>
            <p className="text-xl text-gray-600 font-medium">Dedicated Staff</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={property.image} alt={property.address} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
          {property.status}
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
          1/{property.photos} {property.photos}
        </div>
      </div>
      <div className="p-6">
        <div className="text-3xl font-bold text-gray-900 mb-3">{property.price}</div>
        <div className="flex items-center text-gray-600 mb-3 space-x-6">
          <span className="font-medium">{property.beds} Beds</span>
          <span className="font-medium">{property.baths} Baths</span>
          <span className="font-medium">{property.sqft} SqFt</span>
        </div>
        <p className="text-gray-500">{property.address}</p>
      </div>
    </div>
  );
}

function PropertiesSection() {
  const { properties } = useLoaderData<typeof loader>();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-wider">OUR TEAM'S PROPERTIES</h2>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium tracking-wider border-b border-gray-700">
            More Listings →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 tracking-wider">WHAT OUR CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "I bought and sold with the Ashley Smith Team and the experience couldn't have gone better! 
              Ashley gave me great guidance during the pre-listing process."
            </p>
            <p className="font-bold text-gray-900 tracking-wider">- ALLISON R.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Professional, knowledgeable, and always available when we needed them. 
              The team made our home buying process smooth and stress-free."
            </p>
            <p className="font-bold text-gray-900 tracking-wider">- MICHAEL S.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Excellent service from start to finish. They helped us sell our home quickly 
              and for a great price. Highly recommend!"
            </p>
            <p className="font-bold text-gray-900 tracking-wider">- JESSICA L.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-wider">Ready to Buy or Sell?</h2>
        <p className="text-xl mb-12 text-gray-300">Contact us today to get started with your real estate journey</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="tel:555-0123" className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium tracking-wider">
            Call (727) 483-3100
          </a>
          <a href="mailto:info@AshleySmithteam.com" className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium tracking-wider">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-wider">Ashley Smith Team</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted real estate professionals in Schaumburg, Illinois.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">SERVICES</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Buy a Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell a Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">AREAS</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Schaumburg</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arlington Heights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Palatine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hoffman Estates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wider">CONTACT</h4>
            <div className="space-y-3 text-gray-400">
              <p>123 Main Street</p>
              <p>Schaumburg, IL 60173</p>
              <p>(727) 483-3100</p>
              <p>info@AshleySmithteam.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 The Ashley Smith Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <PropertiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}