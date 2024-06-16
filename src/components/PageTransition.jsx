// importing the motion from framer-motion for the page transition animations
import { motion } from 'framer-motion'

// creating a higher order component for the page transition animations
const PageTransition = (OriginalComponent) => {
  // wrapping the original component with the page transition animations
  const WrappedComponent = () => (
    <>
      {/* Rendering the original component */}
      <OriginalComponent />
      {/* Animating the page transition */}
      <motion.div
        className='slide-in'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className='slide-out'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  )

  return WrappedComponent
}

export default PageTransition
