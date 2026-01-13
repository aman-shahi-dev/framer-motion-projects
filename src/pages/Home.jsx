
import { motion } from "motion/react";

function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-10 bg-[url('https://images.unsplash.com/photo-1762417108293-91614140073a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="text-3xl md:text-5xl"
        >
          Motion Projects
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="text-md md:text-2xl"
        >
          Repo for projects created using Framer Motion
        </motion.h2>
    </div>
  )
}

export default Home