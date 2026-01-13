import { motion } from 'motion/react';
import { useState } from 'react';
import { IconHome, IconChartBar, IconUser, IconSettings, IconChevronLeft, IconChevronRight  } from '@tabler/icons-react';

function Sidebar(){
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const links = [
        {
            name: 'Home',
            href: '/',
            icon: <IconHome />,
        },
        {
            name: 'Analytics',
            href: '/analytics',
            icon: <IconChartBar />,
        },
        {
            name: 'Users',
            href: '/users',
            icon: <IconUser />,
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: <IconSettings />,
        },
    ];

    const sidebarVariant = {
        open: {
            width: "16rem",
        },
        closed: {
            width: "4.5rem",
        },
    }

    const childVariants = {
        open: {
            opacitu: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -10,
        },
    }

    const ulParentVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.05,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    }

    return (
        <motion.div 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{
                duration: 0.3,
            }}
            className='border-r border-neutral-100 h-full text-black'>
            <motion.nav 
                variants={sidebarVariant}
                className={`bg-white shadow-md h-full`}>
                <div className='p-4 flex justify-between items-center'>
                    <h2 className={`text-xl font-semibold ${!isOpen && 'sr-only'}`}>
                        Dashboard
                    </h2>
                    {/* Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'
                        aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
                    >
                        {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
                    </button>
                </div>
                <div className='relative'>
                    {/* Sidebar Content */}
                    <nav className='p-4'>
                        <motion.ul 
                            variants={ulParentVariants}
                            className='space-y-2'>
                            {
                                links.map((link) => (
                                    <motion.li variants={childVariants} key={link.name}>
                                        <a 
                                            href={link.href}
                                            className='flex items-center p-2 text-gray-700 rounded hover:bg-gray-200 gap-2'
                                            title={!isOpen ? link.name : ''}
                                        >
                                            {link.icon}
                                            {isOpen && link.name}
                                        </a>
                                    </motion.li>
                                ))
                            }
                        </motion.ul>
                    </nav>
                </div>
            </motion.nav>
        </motion.div>
    )
}

export default Sidebar;