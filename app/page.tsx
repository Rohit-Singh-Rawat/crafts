import { HeroSection } from '@/components/HeroSection';
import { Features } from '@/components/features/Features';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionPricing, PricingPlan } from '@/components/SectionPricing';
import { IconShield, IconRocket, IconDeviceLaptop } from '@tabler/icons-react';

export const metadata: Metadata = {
	title: 'RSR Crafts - Modern UI Agency',
	description:
		'We transform ideas into stunning digital realities with cutting-edge UI design and development.',
	keywords: [
		'UI agency',
		'web design',
		'development',
		'digital experiences',
		'user interface',
	],
};

export default function Home() {

	return (
		<main className='min-h-screen bg-zinc-900'>
			<HeroSection
				title='Elevate Your Digital Presence'
				description='We create stunning websites that drive results.'
				primaryCTA='Get Started'
				secondaryCTA='See Our Work'
			/>
			<Features />
			<SectionPricing
				subtitle='Flexible Pricing Plans'
				title='Select the perfect package for your business needs. No hidden fees.'
				
			/>
		</main>
	);
}
