'use client';
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import UnicornScene from './bg';

// Animation variants
const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: 'blur(12px)',
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

// AnimatedGroup component
interface AnimatedGroupProps {
	children: React.ReactNode;
	className?: string;
	variants?: {
		container?: Variants;
		item?: Variants;
	};
}

function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
	const defaultContainerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const defaultItemVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const containerVariants = variants?.container || defaultContainerVariants;
	const itemVariants = variants?.item || defaultItemVariants;

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={containerVariants}
			className={cn(className)}
		>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					variants={itemVariants}
				>
					{child}
				</motion.div>
			))}
		</motion.div>
	);
}

interface HeroSectionProps {
	title?: string;
	description?: string;
	primaryCTA?: string;
	secondaryCTA?: string;
}

export function HeroSection({
	title = 'Innovative UI Solutions for Modern Businesses',
	description = 'We craft exceptional digital experiences with cutting-edge UI components that elevate your brand and engage your users.',
	primaryCTA = 'Get Started',
	secondaryCTA = 'View Our Work',
}: HeroSectionProps) {
	return (
		<div className='bg-black text-zinc-100 relative overflow-hidden w-full min-h-screen'>
			{/* Background effects */}
			<div className='z-0 absolute inset-0 scale-110 min-h-[107vh]'>
				<UnicornScene projectId='goMoeaW3mDfwYLu74swJ' />
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full'>
				<div className='flex flex-col items-center justify-center min-h-[90vh] py-12 sm:py-16 md:py-20'>
					<AnimatedGroup variants={transitionVariants}>
						<div className='text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
							<Link
								href='#'
								className='hover:bg-zinc-900 border-zinc-800 bg-zinc-900/50 group mx-auto flex w-fit items-center gap-2 sm:gap-4 rounded-full border p-1 pl-3 sm:pl-4 shadow-md shadow-black/5 transition-all duration-300 mb-6 sm:mb-8'
							>
								<span className='text-zinc-100 text-xs sm:text-sm'>
									Discover our UI agency
								</span>
								<span className='border-zinc-800 block h-4 w-0.5 border-l bg-zinc-700'></span>

								<div className='bg-zinc-900 group-hover:bg-zinc-800 size-5 sm:size-6 overflow-hidden rounded-full duration-500'>
									<div className='flex w-10 sm:w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0'>
										<span className='flex size-5 sm:size-6'>
											<ArrowRight className='m-auto size-2.5 sm:size-3' />
										</span>
										<span className='flex size-5 sm:size-6'>
											<ArrowRight className='m-auto size-2.5 sm:size-3' />
										</span>
									</div>
								</div>
							</Link>

							<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight text-balance mb-4 sm:mb-6 text-zinc-100'>
								{title}
							</h1>

							<p className='text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10'>
								{description}
							</p>

							<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
								<div className='bg-zinc-400/10 rounded-[14px] border border-zinc-800/60 p-0.5 w-fit'>
									<Button
										asChild
										size='lg'
										className='rounded-xl px-4 sm:px-5 text-sm sm:text-base bg-zinc-700/50 hover:bg-zinc-700/50 text-zinc-100 backdrop-blur-sm'
									>
										<Link href='#'>
											<span className='text-nowrap'>{primaryCTA}</span>
										</Link>
									</Button>
								</div>

								<Button
									asChild
									size='lg'
									variant='ghost'
									className='rounded-xl px-4 sm:px-5 text-sm sm:text-base text-zinc-100 py-3 sm:py-4'
								>
									<Link href='#'>
										<span className='text-nowrap'>{secondaryCTA}</span>
									</Link>
								</Button>
							</div>
						</div>
					</AnimatedGroup>
				</div>
			</div>
		</div>
	);
}
