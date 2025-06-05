import { HeroSection } from '@/components/HeroSection';

export default function Home() {
	return (
		<main className='min-h-screen bg-background'>
			<HeroSection
				title='Crafting Digital Experiences That Inspire'
				description='We transform ideas into stunning digital realities.'
				primaryCTA='Start Your Project'
				secondaryCTA='View Our Work'
			/>
			<section className='py-24 bg-black text-zinc-100 border-t border-zinc-800'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Why Choose Our Services
						</h2>
						<p className='text-zinc-400 text-lg'>
							We combine creativity with technical expertise to deliver
							exceptional results
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								title: 'Innovative Design',
								description:
									'Cutting-edge designs that push boundaries and create memorable experiences',
								icon: '🎨',
							},
							{
								title: 'Expert Development',
								description:
									'Robust and scalable solutions built with modern technologies',
								icon: '⚡',
							},
							{
								title: 'User-Focused',
								description:
									'Intuitive interfaces that prioritize user experience and engagement',
								icon: '👥',
							},
						].map((feature, index) => (
							<div
								key={index}
								className='bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors'
							>
								<div className='text-4xl mb-4'>{feature.icon}</div>
								<h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
								<p className='text-zinc-400'>{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
