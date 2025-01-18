// src/components/JointCircleLanding.jsx
import React, { useEffect } from 'react';
import {
  Search,
  Building2,
  Users,
  Award,
  Hammer,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const JointCircleLanding = () => {
  useEffect(() => {
    // 1) Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // 2) Smooth scroll with offset for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = 96; // Height of your fixed navbar (h-24 = 96px)
          const targetPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = targetPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Buy', section: 'properties' },
    { name: 'Projects', section: 'projects' },
    { name: 'Services', section: 'services' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' },
  ];

  // Sample stats
  const stats = [
    { icon: <Building2 className="h-8 w-8" />, value: '500+', label: 'Projects Completed' },
    { icon: <Users className="h-8 w-8" />, value: '1000+', label: 'Happy Clients' },
    { icon: <Award className="h-8 w-8" />, value: '25+', label: 'Years Experience' },
    { icon: <Hammer className="h-8 w-8" />, value: '300+', label: 'Expert Workers' },
  ];

  // Sample services
  const services = [
    {
      title: 'Residential Construction',
      description:
        'Luxury villas, apartment complexes, and custom homes built to the highest standards of quality and design.',
      image: '/joint-circle/images/property1.jpg',
    },
    {
      title: 'Commercial Projects',
      description:
        'Office buildings, shopping centers, and mixed-use developments that define Kuwait’s modern skyline.',
      image: '/joint-circle/images/property2.jpg',
    },
    {
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and public facilities contributing to Kuwait’s growing infrastructure.',
      image: '/joint-circle/images/property3.jpg',
    },
  ];

  // Sample projects
  const projects = [
    {
      title: 'Kuwait Business Tower',
      category: 'Commercial',
      location: 'Kuwait City',
      image: '/joint-circle/images/property1.jpg',
    },
    {
      title: 'Luxury Villa Complex',
      category: 'Residential',
      location: 'Salmiya',
      image: '/joint-circle/images/property2.jpg',
    },
    {
      title: 'Modern Shopping Center',
      category: 'Retail',
      location: 'Al Jahra',
      image: '/joint-circle/images/property3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-opacity-90 bg-neutral-800 text-white z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-22">
            <div className="flex items-center -ml-4">
              <img
                src="/joint-circle/logo.jpg"
                alt="Joint Circle Logo"
                className="h-28 w-auto object-contain transform scale-110"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.section}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-yellow-400">AED</button>
              <button className="text-gray-300 hover:text-yellow-400">Login</button>
              <button className="bg-yellow-400 text-neutral-800 px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-200">
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-60">
          <img
            src="/joint-circle/hero-bg.jpg"
            alt="Modern cityscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="text-center mb-12 animate-on-scroll w-full max-w-4xl">
            <img
              src="/joint-circle/logo.jpg"
              alt="Joint Circle Logo"
              className="h-48 md:h-64 lg:h-96 w-auto mx-auto mb-12 object-contain"
            />
          </div>
          <div className="w-full max-w-2xl animate-on-scroll">
            <div className="relative">
              <input
                type="text"
                placeholder="Your keyword"
                className="w-full px-6 py-4 rounded-lg bg-white bg-opacity-90 text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6 text-neutral-800">
                Building Kuwait’s Future Since 1998
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                As a leading construction company in Kuwait, we've been at the forefront
                of architectural innovation and urban development for over two decades.
                Our commitment to excellence and sustainable building practices has made
                us a trusted partner in Kuwait's growth story.
              </p>
              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Certified',
                  'Award-winning projects across Kuwait',
                  'Sustainable building practices',
                  'State-of-the-art technology',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="text-yellow-400 h-5 w-5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <img src="/joint-circle/property1.jpg" alt="About Us" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="text-yellow-400 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* PROPERTIES SECTION */}
    <section id="properties" className="py-20 px-4 bg-neutral-50">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-neutral-800">Premium Properties</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover our exclusive collection of premium properties in Kuwait's most sought-after locations.
        </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
        {[
            {
            title: 'Luxury Penthouse',
            price: 'KWD 1,200,000',
            location: 'Kuwait City',
            specs: '4 Beds • 5 Baths • 450 sqm',
            image: '/joint-circle/images/property1.jpg'
            },
            {
            title: 'Beachfront Villa',
            price: 'KWD 950,000',
            location: 'Salmiya',
            specs: '6 Beds • 7 Baths • 600 sqm',
            image: '/joint-circle/images/property2.jpg'
            },
            {
            title: 'Modern Apartment',
            price: 'KWD 380,000',
            location: 'Al Jahra',
            specs: '3 Beds • 3 Baths • 200 sqm',
            image: '/joint-circle/images/property3.jpg'
            }
        ].map((property, index) => (
            <div 
            key={index} 
            className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
            <div className="relative h-64 overflow-hidden">
                <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-neutral-800 px-4 py-2 rounded-full">
                {property.price}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-neutral-800">{property.title}</h3>
                <div className="flex items-center text-neutral-600 mb-3">
                <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                {property.location}
                </div>
                <div className="text-neutral-600 border-t pt-4 mt-4">
                {property.specs}
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
        </section>
      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Featured Projects</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Discover our landmark projects that have shaped Kuwait's architectural landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg animate-on-scroll">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-yellow-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
<section id="contact" className="py-20 px-4 bg-neutral-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-neutral-800">Get in Touch</h2>
      <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
        Connect with Kuwait's premier construction and real estate development company
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <Phone className="h-8 w-8" />,
          title: 'Call Us',
          info: ['+965 2234 5678', '+965 2234 5679'],
          action: 'Available 24/7'
        },
        {
          icon: <Mail className="h-8 w-8" />,
          title: 'Email Us',
          info: ['info@jointcircle.com', 'support@jointcircle.com'],
          action: 'We reply within 24 hours'
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          title: 'Visit Us',
          info: ['Kuwait City, Kuwait', 'Business District'],
          action: 'Open Sunday-Thursday'
        }
      ].map((contact, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-400 text-neutral-800 group-hover:scale-110 transition-transform duration-300">
            {contact.icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-neutral-800">{contact.title}</h3>
          {contact.info.map((line, i) => (
            <p key={i} className="text-neutral-600 mb-1">{line}</p>
          ))}
          <p className="mt-4 text-sm text-yellow-400">{contact.action}</p>
        </div>
      ))}
    </div>
  </div>
    </section>

      {/* FOOTER */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="/joint-circle/logo.jpg"
                alt="Joint Circle Logo"
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-gray-400">
                Building excellence, delivering innovation, and shaping Kuwait's future through
                quality construction.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Residential', 'Commercial', 'Infrastructure', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-neutral-800"
                />
                <button className="bg-yellow-400 text-neutral-800 px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Joint Circle. All rights reserved.</p>
          </div>
        </div>
      </footer>

    {/* ANIMATION STYLES */}
    <style jsx>{`
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Enhanced image hover effects */
    img {
        transition: transform 0.5s ease-in-out;
    }
    .group:hover img {
        transform: scale(1.05);
    }
    `}</style>
    </div>
  );
};

export default JointCircleLanding;
