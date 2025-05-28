'use client'

import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import GooeyNav from './GooeyNav'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function TopBar() {
  const { scrollToSection } = useSmoothScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true) // Start with dark theme for hero section
  const [activeSection, setActiveSection] = useState('hero') // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      // Detect which section is currently in view and set color scheme accordingly
      const sections = [
        { id: 'hero', isDark: true },
        { id: 'about', isDark: false },
        { id: 'team', isDark: false },
        { id: 'services', isDark: false },
        { id: 'portfolio', isDark: false }, // Portfolio has white/transparent background
        { id: 'contact', isDark: false }    // Contact has bg-gray-50 (light background)
      ]
      let currentSection = sections[0] // Default to hero (dark)

      // Get all elements with section IDs
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element !== null);

      if (sectionElements.length === 0) return;

      const topbarHeight = 80; // Approximate topbar height
      let nearestSection = sectionElements[0];
      let minDistance = Infinity;

      // Find the section closest to being at the top of the viewport
      for (const section of sectionElements) {
        if (!section.element) continue;

        const rect = section.element.getBoundingClientRect();
        // Use a combination of distance from top and visibility in viewport
        const distanceFromTop = Math.abs(rect.top - topbarHeight);
        const visibilityPercent = Math.max(0,
          Math.min(rect.bottom, window.innerHeight) -
          Math.max(rect.top, topbarHeight)
        ) / rect.height;

        // Weight distance less if section is mostly visible
        const weightedDistance = distanceFromTop * (1 - visibilityPercent * 0.5);

        if (weightedDistance < minDistance) {
          minDistance = weightedDistance;
          nearestSection = section;
        }
      }

      setActiveSection(nearestSection.id);
      setIsDarkSection(nearestSection.isDark);
    }

    handleScroll() // Initial call

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Also check on resize as viewport changes can affect which section is visible
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
  // Enhanced smooth scrolling function that uses the hook
  const handleSectionScroll = (sectionId: string) => {
    // First close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }

    // Update active section immediately for UI feedback
    setActiveSection(sectionId)

    // Calculate optimal offset based on viewport height (smaller offset for mobile)
    const isMobile = window.innerWidth < 768
    const offset = isMobile ? -60 : -80

    // Add small delay to allow UI to update and menus to close before scrolling
    setTimeout(() => {
      scrollToSection(sectionId, offset)
    }, 10)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // GooeyNav items with enhanced smooth scrolling
  const navItems = [
    {
      label: "About",
      href: "#about",
      onClick: () => handleSectionScroll('about'),
      isActive: activeSection === 'about'
    },
    {
      label: "Team",
      href: "#team",
      onClick: () => handleSectionScroll('team'),
      isActive: activeSection === 'team'
    },
    {
      label: "Services",
      href: "#services",
      onClick: () => handleSectionScroll('services'),
      isActive: activeSection === 'services'
    },
    {
      label: "Portfolio",
      href: "#portfolio",
      onClick: () => handleSectionScroll('portfolio'),
      isActive: activeSection === 'portfolio'
    },
    {
      label: "Contact",
      href: "#contact",
      onClick: () => handleSectionScroll('contact'),
      isActive: activeSection === 'contact'
    },
  ]
  return (
    <>      <div className={`topbar ${isScrolled ? 'scrolled' : ''} ${isDarkSection ? 'dark-section' : 'light-section'}`}>
      <div className="topbar-content">
        {/* Centered GooeyNav Navigation - Hidden on mobile */}
        <div className="gooey-nav-wrapper centered">
          <GooeyNav
            items={navItems}
            particleCount={12}
            particleDistances={[60, 8]}
            particleR={80}
            initialActiveIndex={0}
            animationTime={500}
            timeVariance={250}
            colors={[1, 2, 3, 4, 1, 2]}
            isDarkSection={isDarkSection}
          />
        </div>{/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <style jsx>{`        .topbar {          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: transparent;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .topbar.scrolled {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 0.5rem 0;
        }

        /* Light section adaptations */
        .topbar.light-section {
          border-bottom: 1px solid rgba(31, 41, 55, 0.1);
        }

        .topbar.light-section.scrolled {
          background: rgba(31, 41, 55, 0.1);
        }

        .topbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gooey-nav-wrapper {
          display: flex;
          align-items: center;
        }

        .gooey-nav-wrapper.centered {
          justify-content: center;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-links button:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .nav-links button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .nav-links button:hover::before {
          left: 100%;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          transform: rotate(0deg);
          transition: 0.3s ease-in-out;
        }        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 2px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        /* Light section hamburger adaptation */
        .topbar.light-section .hamburger span {
          background: #1f2937;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 8px;
        }

        .hamburger span:nth-child(3) {
          top: 16px;
        }

        .hamburger.open span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          left: -24px;
        }        .hamburger.open span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }        @media (max-width: 768px) {
          .topbar-content {
            padding: 0 1rem;
            justify-content: center;
          }

          .gooey-nav-wrapper {
            display: none;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            position: absolute;
            right: 1rem;
          }
        }

        @media (max-width: 480px) {
          .topbar-content {
            gap: 1rem;
          }

          .mobile-menu-button {
            right: 1rem;
          }
        }
      `}</style>
    </>
  )
}
