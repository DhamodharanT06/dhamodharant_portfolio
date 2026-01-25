import React, { useEffect, useState } from 'react'
import Portfolio from '../portfolio.jsx'
import NameLoader from './components/ui/NameLoader.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Ensure page starts at top on initial load
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Scroll to top immediately on mount
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Prevent body scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      // Scroll to top immediately when loading starts
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      // Scroll to top and home section when loading completes
      window.scrollTo({ top: 0, behavior: 'instant' })
      // Small delay to ensure DOM is ready, then scroll to home section
      setTimeout(() => {
        const homeElement = document.getElementById('home')
        if (homeElement) {
          const navHeight = 64 // Approximate navbar height
          const elementPosition = homeElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - navHeight
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        } else {
          // Fallback: just scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }

    // Show loader for 2.8 seconds (includes fade-out animation)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)

    return () => {
      clearTimeout(timer)
      // Cleanup: restore scrolling when component unmounts
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[99999] w-full h-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
          <NameLoader />
        </div>
      )}
      <Portfolio />
    </>
  )
}
