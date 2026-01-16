import { motion } from "framer-motion";

interface Robot {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
  direction: 1 | -1;
}

const robots: Robot[] = [
  { id: 1, x: 10, y: 20, scale: 0.6, delay: 0, direction: 1 },
  { id: 2, x: 80, y: 60, scale: 0.5, delay: 1, direction: -1 },
  { id: 3, x: 25, y: 75, scale: 0.45, delay: 2, direction: 1 },
  { id: 4, x: 70, y: 15, scale: 0.55, delay: 0.5, direction: -1 },
  { id: 5, x: 50, y: 40, scale: 0.4, delay: 1.5, direction: 1 },
];

function BenderRobot({ scale = 1 }: { scale?: number }) {
  return (
    <svg
      width={60 * scale}
      height={80 * scale}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna */}
      <motion.line
        x1="30"
        y1="0"
        x2="30"
        y2="10"
        stroke="#64748b"
        strokeWidth="2"
        animate={{ y1: [-2, 2, -2] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <motion.circle
        cx="30"
        cy="3"
        r="3"
        fill="#22d3ee"
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Head */}
      <rect x="10" y="10" width="40" height="30" rx="8" fill="#94a3b8" />
      <rect x="12" y="12" width="36" height="26" rx="6" fill="#cbd5e1" />

      {/* Eyes */}
      <motion.g
        animate={{ x: [-1, 1, -1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="22" cy="25" r="6" fill="#1e293b" />
        <circle cx="38" cy="25" r="6" fill="#1e293b" />
        <motion.circle
          cx="22"
          cy="25"
          r="3"
          fill="#22d3ee"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="38"
          cy="25"
          r="3"
          fill="#22d3ee"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
      </motion.g>

      {/* Mouth visor */}
      <rect x="18" y="32" width="24" height="4" rx="2" fill="#475569" />
      <motion.rect
        x="20"
        y="33"
        width="6"
        height="2"
        fill="#22d3ee"
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Body */}
      <rect x="15" y="42" width="30" height="25" rx="4" fill="#94a3b8" />
      <rect x="17" y="44" width="26" height="21" rx="3" fill="#cbd5e1" />

      {/* Chest panel */}
      <rect x="22" y="48" width="16" height="12" rx="2" fill="#1e293b" />
      <motion.circle
        cx="26"
        cy="54"
        r="2"
        fill="#22c55e"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <motion.circle
        cx="34"
        cy="54"
        r="2"
        fill="#ef4444"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* Arms */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "10px 50px" }}
      >
        <rect x="2" y="45" width="10" height="18" rx="3" fill="#64748b" />
        <circle cx="7" cy="66" r="4" fill="#94a3b8" />
      </motion.g>
      <motion.g
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "50px 50px" }}
      >
        <rect x="48" y="45" width="10" height="18" rx="3" fill="#64748b" />
        <circle cx="53" cy="66" r="4" fill="#94a3b8" />
      </motion.g>

      {/* Legs */}
      <rect x="20" y="68" width="8" height="12" rx="2" fill="#64748b" />
      <rect x="32" y="68" width="8" height="12" rx="2" fill="#64748b" />
    </svg>
  );
}

export function FuturisticRobotBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900" />

      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated robots */}
      {robots.map((robot) => (
        <motion.div
          key={robot.id}
          className="absolute"
          style={{
            left: `${robot.x}%`,
            top: `${robot.y}%`,
            transform: `scaleX(${robot.direction})`,
          }}
          animate={{
            x: [0, 20 * robot.direction, 0, -15 * robot.direction, 0],
            y: [0, -10, 5, -5, 0],
          }}
          transition={{
            duration: 8 + robot.id,
            repeat: Infinity,
            delay: robot.delay,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity, delay: robot.delay }}
          >
            <BenderRobot scale={robot.scale} />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
