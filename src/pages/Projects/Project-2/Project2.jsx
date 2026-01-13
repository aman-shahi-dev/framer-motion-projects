import { X, MessageSquareMore, Icon } from 'lucide-react';

import { IconHours24, IconPlus, IconView360Number } from '@tabler/icons-react'

import { AnimatePresence, easeInOut, motion } from 'motion/react';
import { useState } from 'react';

function Project2() {

    const [open, setOpen] = useState(true)

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        animate={{
                            opacity: 1,
                            filter: 'blur(0px)'
                        }}
                        exit={{
                            opacity: 0,
                            filter: 'blur(10px)'
                        }}
                        transition={{
                            duration: 0.3,
                            ease: easeInOut,
                        }}
                        className="w-full h-full flex items-center justify-center bg-white"
                    >
                        <div className="
                            w-72 min-h-[26rem] h-[28rem] 
                            rounded-xl
                            hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
                            transition-all
                            duration-300
                            shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                            p-6
                            flex flex-col
                            bg-white
                            text-black
                        ">
                            <h2 className="font-bold text-md">
                                Card Component
                            </h2>
                            <p className="text-neutral-600 text-xs mt-2">
                                A collection of beautiful UI components, let's get on with it.
                            </p>
                            <div className="flex items-center justify-center">
                                <button
                                    className="
                                        flex items-center 
                                        gap-1 text-[10px] 
                                        mt-4
                                        shadow-[0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                                        rounded-md  px-2 py-1
                                    "
                                    onClick={() => setOpen(false)}
                                >
                                    Close the Card
                                    <X size={12} />
                                </button>
                            </div>
                            <div className='
                                flex-1 mt-4 
                                rounded-lg 
                                shadow-[0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                                relative
                                shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                            '>
                                {/* Motion Divs starts here */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        filter: 'blur(10px)'
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        filter: 'blur(0px)',
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 15,
                                        mass: 1,
                                    }}
                                    className="
                                        absolute inset-0 
                                        h-full w-full 
                                        rounded-lg
                                        divide-y divide-neutral-300
                                    "
                                >
                                    <div className='flex gap-2 p-4'>
                                        <div className='
                                            h-7 w-7 
                                            flex-shrink-0 
                                            bg-gradient-to-br 
                                            shadow-[0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                                            rounded-md
                                            flex 
                                            items-center justify-center
                                        '>
                                            <IconHours24 className='h-4 w-4 text-black' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-xs text-black font-bold'>
                                                24 hours turnaround
                                            </p>
                                            <p className='text-neutral-800 text-xs mt-1'>
                                                Superfast delivery at warp speed
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 p-4'>
                                        <div className='
                                            h-7 w-7 
                                            flex-shrink-0 
                                            bg-gradient-to-br 
                                            shadow-[0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                                            bg-white
                                            rounded-md
                                            flex 
                                            items-center justify-center
                                        '>
                                            <IconView360Number className='h-4 w-4 text-black' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-xs text-black font-bold'>
                                                360 degree visibility
                                            </p>
                                            <p className='text-neutral-800 text-xs mt-1'>
                                                Total transparency and oversight on every detail
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex gap-2 p-4'>
                                        <div className='
                                            h-7 w-7 
                                            flex-shrink-0 
                                            bg-gradient-to-br 
                                            shadow-[0_1px_1px_rgba(255,255,255,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                                            bg-white
                                            rounded-md
                                            flex 
                                            items-center justify-center
                                        '>
                                            <MessageSquareMore className='h-4 w-4 text-black' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-xs text-black font-bold'>
                                                Aceternity UI Components
                                            </p>
                                            <p className='text-neutral-800 text-xs mt-1'>
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex gap-1 p-4 items-center justify-center'>
                                        <div className="h-5 w-5 flex-shrink-0 bg-gradient-to-br rounded-md flex items-center justify-center">
                                            <IconPlus className='h-3 w-3 text-neutral-600' />
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <p className='text-neutral-600 text-xs'>
                                                Create Project
                                            </p>
                                        </div>
                                    </div>

                                </motion.div>
                                {/* Motion Divs ends here */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Project2;