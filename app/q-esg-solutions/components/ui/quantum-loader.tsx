import { motion } from 'framer-motion';

const QuantumLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-24 h-24">
        {/* Central Particle */}
        <motion.div
          className="absolute w-6 h-6 bg-teal-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1], // Pulsating effect
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: 'calc(50% - 12px)', left: 'calc(50% - 12px)' }}
        />

        {/* Quantum Entangling Orbs */}
        <motion.div
          className="absolute w-4 h-4 bg-yellow-400 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, 30, 0, -30, 0], 
            opacity: [0.2, 1, 0.2], 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '50%', left: '50%' }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-indigo-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, -30, 0, 30, 0], 
            opacity: [0.2, 1, 0.2], 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>
    </div>
  );
};

export default QuantumLoader;