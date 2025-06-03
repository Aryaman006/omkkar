'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  {
    name: 'Our Projects',
    href: '#',
   dropdown: [
  { name: 'NON Profit Organisations', href: '/non-profit-organisations' },
  { name: 'E-Commerce Products', href: '/e-commerce-products' },
  { name: 'Democratizing Finance', href: '/democratizing-finance' },
  { name: 'Flow Of Healthcare', href: '/flow-of-healthcare' },
  { name: 'Bringing Excellence', href: '/bringing-excellence' },
  { name: 'Framing Social Space', href: '/framing-social-space' },
  { name: 'Automating The Manual', href: '/automating-the-manual' },
  { name: 'Project From', href: '/project-from' },
  { name: 'Say Hello To Future', href: '/say-hello-to-future' },
]
  },
  { name: 'Omkkar Training', href: '/omkkar-training' },
  { name: 'Omkkar Gurukul', href: '/omkkar-gurukul' },
  { name: 'Staffing', href: '/staffing' },
  { name: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <header className="w-full shadow-sm fixed top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={140} height={50} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-[#0A043C] text-[15px] font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`relative group-hover:text-[#9F3B66] ${
                    link.name === 'Home' ? 'text-[#9F3B66]' : ''
                  }`}
                >
                  <span className="flex items-center">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#9F3B66] transition-all duration-300 group-hover:w-full"></span>
                </a>
                {/* Dropdown */}
                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-2 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[160px] z-50">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-[#0A043C] hover:text-[#9F3B66] text-sm transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`relative group transition-colors duration-300 ${
                  link.name === 'Home' ? 'text-[#9F3B66]' : ''
                }`}
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#9F3B66] transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0A043C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A043C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-white shadow-sm space-y-3">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setProjectsDropdownOpen(!projectsDropdownOpen)
                  }
                  className="w-full text-left font-medium text-[#0A043C] hover:text-[#9F3B66] transition"
                >
                  {link.name}
                  <ChevronDown
                    className={`inline ml-1 w-4 h-4 transition-transform ${
                      projectsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {projectsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-[#0A043C] hover:text-[#9F3B66] transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#0A043C] font-medium hover:text-[#9F3B66] transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
