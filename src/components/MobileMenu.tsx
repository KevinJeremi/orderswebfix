'use client'

import { useState } from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { scrollToSection } = useSmoothScroll()
  const handleScrollToSection = (sectionId: string) => {
    // First close the menu to improve UI responsiveness
    onClose()

    // Small delay to allow menu animation to start before scrolling
    setTimeout(() => {
      // Use a slightly different offset for mobile
      scrollToSection(sectionId, -70)
    }, 100)
  }

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">          <button
          className="menu-item"
          onClick={() => handleScrollToSection('about')}
        >
          About
        </button>
          <button
            className="menu-item"
            onClick={() => handleScrollToSection('team')}
          >
            Team
          </button>
          <button
            className="menu-item"
            onClick={() => handleScrollToSection('services')}
          >
            Services
          </button>
          <button
            className="menu-item"
            onClick={() => handleScrollToSection('portfolio')}
          >
            Portfolio
          </button>
          <button
            className="menu-item"
            onClick={() => handleScrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>

      {isOpen && <div className="mobile-menu-overlay" onClick={onClose} />}

      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: 80px;
          right: -300px;
          width: 280px;
          height: calc(100vh - 80px);
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          transition: right 0.3s ease;
          z-index: 9998; /* Just below TopBar z-index */
          padding: 2rem 0;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 2rem;
        }

        .menu-item {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .menu-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .menu-item:hover::before {
          transform: scaleY(1);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9997; /* Just below mobile menu */
        }
      `}</style>
    </>
  )
}
