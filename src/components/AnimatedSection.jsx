import { motion } from "framer-motion"

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection