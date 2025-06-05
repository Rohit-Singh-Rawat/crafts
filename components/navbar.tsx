'use client';

import { animate, motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className='fixed top-0 left-0 right-0 z-50 p-2 sm:p-4 w-full'>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: 'spring', stiffness: 100, damping: 20 }}
				className='bg-black/30 backdrop-blur-md border rounded-3xl md:rounded-full border-zinc-800 container mx-auto max-w-5xl'
			>
				<div className='container mx-auto px-2 sm:px-4'>
					<div className='flex items-center justify-between h-14 sm:h-16'>
						{/* Logo */}
						<Link
							href='/'
							id='logo'
							className='text-xl sm:text-2xl text-zinc-100 font-medium px-2 sm:px-4'
						>
							Design
						</Link>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden p-2 text-zinc-100'
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>

						{/* Desktop Navigation */}
						<div className='hidden md:flex items-center space-x-4 lg:space-x-8'>
							{[
								{ href: '/about', label: 'About' },
								{ href: '/services', label: 'Services' },
								{ href: '/work', label: 'Work' }
							].map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='text-zinc-300 hover:text-zinc-100 transition-colors hover:underline rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base'
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Contact Button */}
						<Button
							variant='ghost'
							className='hidden md:flex hover:bg-white/70 bg-white rounded-3xl text-sm sm:text-base'
						>
							Contact Us
						</Button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className='md:hidden py-4 space-y-4'
						>
							{[
								{ href: '/about', label: 'About' },
								{ href: '/services', label: 'Services' },
								{ href: '/work', label: 'Work' }
							].map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className='block text-zinc-300 hover:text-zinc-100 transition-colors px-4 py-2 text-base'
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<Button
								variant='ghost'
								className='w-full hover:bg-white/70 bg-white rounded-3xl mt-4'
								onClick={() => setIsMenuOpen(false)}
							>
								Contact Us
							</Button>
						</motion.div>
					)}
				</div>
			</motion.nav>
		</div>
	);
}
