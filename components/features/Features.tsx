'use client';

import { FeatureCard } from './FeatureCard';
import { Palette, Code2, UserCheck } from '@/components/icons';
import {
	IconBrandTabler,
	IconDeviceLaptop,
	IconRocket,
	IconShield,
	Icon123,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';

const features = [
	{
		title: 'Modern Web Development',
		description:
			'Building responsive and dynamic web applications using cutting-edge technologies and frameworks',
		Icon: Code2,
		size: 'large',
	},
	{
		title: 'UI/UX Excellence',
		description:
			'Creating intuitive and engaging user interfaces that deliver exceptional digital experiences',
		Icon: Palette,
		size: 'large',
	},
	{
		title: 'Mobile Solutions',
		description:
			'Developing cross-platform mobile applications that work seamlessly across all devices',
		Icon: IconDeviceLaptop,
		size: 'large',
	},
	{
		title: 'Custom Software',
		description: 'Tailored software solutions designed to meet your specific business needs',
		Icon: IconBrandTabler,
		size: 'large',
	},
	{
		title: 'Quality Assurance',
		description:
			'Rigorous testing and quality control to ensure flawless performance and reliability',
		Icon: IconShield,
		size: 'large',
	},
	{
		title: '24/7 Support',
		description:
			'Round-the-clock technical support and maintenance for uninterrupted operations',
		Icon: UserCheck,
		size: 'large',
	},
];

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

export function Features() {
	return (
		<Section
			subtitle='Transforming Ideas Into Digital Masterpieces'
			title='Crafting Digital Excellence Through Comprehensive Solutions'
			background='bg-black'
			textColor='text-zinc-100'
		>
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				{features.map((feature, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						className='md:col-span-1 lg:col-span-1 h-full'
					>
						<FeatureCard {...feature} />
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
}
