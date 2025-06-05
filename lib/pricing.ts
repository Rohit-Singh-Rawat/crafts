import { PricingPlan } from '@/components/SectionPricing';
import { IconDeviceLaptop, IconRocket } from '@tabler/icons-react';

export const plans: PricingPlan[] = [
	{
		title: 'Starter Pro',
		price: '$1,999',
		description:
			'Launch your digital journey with a sleek, professional website. Ideal for startups and small businesses ready to make their mark online.',
		features: [
			'Custom website design & development',
			'Mobile-responsive layout',
			'Up to 5 pages',
			'Contact form integration',
			'Basic SEO optimization',
			'2 weeks post-launch support',
		],
		Icon: IconDeviceLaptop,
		cta: 'Get Started',
	},
	{
		title: 'Enterprise Pro',
		price: 'From $3,999/mo',
		description:
			'Elevate your digital presence with a comprehensive, high-performance solution. Perfect for growing businesses that demand excellence and scalability.',
		features: [
			'Complete website redesign',
			'Advanced UI/UX design',
			'Custom functionality development',
			'Third-party integrations',
			'Advanced SEO & analytics',
			'24/7 priority support',
			'Monthly performance reports',
		],
		Icon: IconRocket,
		cta: 'Go Premium',
		highlighted: true,
	},
];
