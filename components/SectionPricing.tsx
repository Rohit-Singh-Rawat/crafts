'use client';

import { plans } from '@/lib/pricing';
import { Section } from './Section';
import { Button } from './ui/button';
import { IconProps } from '@/types';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SpinningText } from './spiningText';

export interface PricingPlan {
	title: string;
	price: string;
	description: string;
	features: string[];
	Icon: React.ComponentType<IconProps>;
	cta: string;
	highlighted?: boolean;
}

interface SectionPricingProps {
	title: string;
	subtitle?: string;
	className?: string;
}

function PricingCard({
	plan,
	className = '',
}: {
	plan: PricingPlan;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`relative w-fit rounded-2xl p-0.5 ${
				plan.highlighted
					? 'bg-white'
					: 'bg-gradient-to-br from-neutral-600/70 via-neutral-800 to-neutral-900'
			}`}
		>
			<motion.div
				className={`relative flex flex-col p-8 h-full transition-all duration-300 rounded-xl max-w-sm mx-auto
				${plan.highlighted ? 'bg-white text-zinc-900' : 'bg-neutral-900 text-zinc-100'}
				${className}
				hover:shadow-xl`}
			>
				{plan.highlighted && (
					<div className='absolute -top-12 -right-12 bg-black/50 text-white text-base font-bold rounded-full shadow-lg z-10  backdrop-blur-sm p-12'>
						<SpinningText duration={8} radius={4} className="text-base" reverse>
							popular • popular • popular •
						</SpinningText>
					</div>
				)}
				<div className='mb-6 flex items-center gap-3'>
					<h3 className={`text-xl font-extrabold tracking-tight ${plan.highlighted ? 'text-primary' : 'text-zinc-100'}`}>
						{plan.title}
					</h3>
				</div>
				<div className={`text-4xl font-black mb-4 ${plan.highlighted ? 'text-zinc-900' : 'text-zinc-100'} drop-shadow-lg`}>
					{plan.price}
				</div>
				<div className={`mb-6 text-sm min-h-[48px] ${plan.highlighted ? 'text-zinc-700' : 'text-zinc-300'}`}>
					{plan.description}
				</div>
				<div className={`mb-3 font-semibold tracking-wide text-xs uppercase ${plan.highlighted ? 'text-primary' : 'text-zinc-100'}`}>
					What's included
				</div>
				<ul className={`mb-8 space-y-3 ${plan.highlighted ? 'text-zinc-700' : 'text-zinc-200'}`}>
					{plan.features.map((feature, i) => (
						<motion.li
							key={i}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: i * 0.1 }}
							className='flex items-center gap-2'
						>
							<span
								className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${
									plan.highlighted
										? 'bg-gradient-to-br from-primary/30 to-primary/20 text-primary'
										: 'bg-zinc-800 text-zinc-400'
								}`}
							>
								<IconCheck size={14} />
							</span>
							<span className='text-sm'>{feature}</span>
						</motion.li>
					))}
				</ul>
				<Button
					variant={plan.highlighted ? 'default' : 'outline'}
					size='lg'
					className={`mt-auto font-bold tracking-wide py-3 text-base group rounded-full ${
						plan.highlighted
							? 'bg-black shadow-md'
							: 'hover:bg-black/10 text-black'
					}`}
				>
					{plan.cta}
					<IconArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
				</Button>
			</motion.div>
		</motion.div>
	);
}

export function SectionPricing({
	title,
	subtitle,
	className,
}: SectionPricingProps) {
	return (
		<Section
			title={title}
			subtitle={subtitle}
			background='bg-black'
			textColor='text-zinc-100'
			className={`!flex-col justify-start pt-32 ${className ?? ''}`}
		>
			<div className='w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-8 mt-12'>
				{plans.map((plan, idx) => (
					<PricingCard
						key={plan.title}
						plan={plan}
						className='rounded-3xl'
					/>
				))}
			</div>
		</Section>
	);
}
