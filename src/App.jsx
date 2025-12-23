import React, { useEffect, useState } from 'react'
import Portfolio from '../portfolio.jsx'
import NameLoader from './components/ui/NameLoader.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      // Prevent scroll while loading
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scroll after loading
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflow = 'auto'
    }

    // Show loader for 2.8 seconds (includes fade-out animation)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflow = 'auto'
    }
  }, [loading])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] w-full h-screen overflow-hidden pointer-events-none">
          <NameLoader />
        </div>
      )}
      <Portfolio />
    </>
  )
}
