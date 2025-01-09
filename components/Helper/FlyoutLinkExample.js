import Link from 'next/link';
import React from 'react';
import motion, { AnimatePresence } from 'framer-motion';

const FlyoutLinkExample = () => {
    return (
        <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12">
            <FlyoutLink href="#" >
                Pricing
            </FlyoutLink>
        </div>
    )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = open && FlyoutContent;

    return
    <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group relative h-fit w-fit">
        <Link href={href} className="relative text-white">
            {children}
            <span
                style={{
                    transform: showFlyout ? "scaleX(1.0)" : "scaleX(0)",
                }}
                className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 east-out' />
        </Link>
        <AnimatePresence>
            {showFlyout && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ x: "-50%" }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className='absolute left-1/2 top-12 bg-white text-black'
                >
                    <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
                    <FlyoutContent />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
};

const PricingContent = () => {
    return <div className='h-24 w-64 bg-white p-6 shadow-xl'></div>
};

export default FlyoutLinkExample
