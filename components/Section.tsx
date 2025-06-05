'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
	title: string;
	subtitle?: string;
	children?: ReactNode;
	className?: string;
	background?: string;
	textColor?: string;
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export function Section({
	title,
	subtitle,
	children,
	className = '',
	background = 'bg-black',
	textColor = 'text-zinc-100',
}: SectionProps) {
	return (
		<section
			className={`min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 ${background} ${textColor} ${className}`}
		>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16'
				variants={containerVariants}
			>
				{subtitle && (
					<motion.p
						className='text-zinc-400 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-3 sm:mb-4 md:mb-5'
						variants={itemVariants}
					>
						{subtitle}
					</motion.p>
				)}
				<motion.h2
					className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 md:mb-10 leading-tight'
					variants={itemVariants}
				>
					{title}
				</motion.h2>
				{children && (
					<motion.div 
						variants={itemVariants} 
						className='w-full'
					>
						{children}
					</motion.div>
				)}
			</motion.div>
		</section>
	);
}
