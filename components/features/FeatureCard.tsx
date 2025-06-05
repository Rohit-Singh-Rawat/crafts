'use client';

import { IconProps } from '@/types';
import { motion } from 'framer-motion';

interface FeatureCardProps {
	title: string;
	description: string;
	Icon: React.ComponentType<IconProps>;
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
	return (
		<motion.div className='from-zinc-900/40 via-30% via-zinc-900/50 to-zinc-900/40 bg-gradient-to-r  backdrop-blur-sm border border-zinc-900/50 rounded-2xl p-1  transition-all duration-300 h-full '>
			<div className='flex flex-col p-6 border border-zinc-900/50 rounded-lg bg-black/80 h-full shadow-inner shadow-black'>
				<div className='text-4xl mb-4 text-zinc-100  border border-zinc-400/10 shadow-inner shadow-zinc-900/50 rounded-lg w-fit p-3 bg-zinc-900/50 '>
					<Icon
						size={28}
						className='text-zinc-100'
					/>
				</div>
				<h3 className='text-xl font-semibold mb-3'>{title}</h3>
				<p className='text-zinc-400'>{description}</p>
			</div>
		</motion.div>
	);
}
