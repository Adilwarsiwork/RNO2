import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Image, { StaticImageData } from 'next/image';
import React, { FC, ReactNode } from 'react';

export interface SectionHeroProps {
	className?: string;
	rightImg: string | StaticImageData;
	heading: ReactNode;
	subHeading: string;
	btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = '', rightImg, heading, subHeading, btnText }) => {
	return (
		<div className={`nc-SectionHero relative ${className}`}>
			<div className="flex flex-col lg:flex-col space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
				<div className="mb-10">
					<Image className="w-full" src={rightImg} alt="" />
				</div>
				<div className="w-screen max-w-full text-center space-y-5 lg:space-y-7">
					<h1 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
						{heading}
					</h1>
					<span className="block text-base xl:text-2xl text-center text-neutral-6000 dark:text-neutral-400">
						{subHeading}
					</span>
					{!!btnText && <ButtonPrimary href="/">{btnText}</ButtonPrimary>}
				</div>
			</div>
		</div>
	);
};

export default SectionHero;
