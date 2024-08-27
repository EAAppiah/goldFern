"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	const images = [
		{ src: "/images/first.jpeg", alt: "first" },
		{ src: "/images/second.jpeg", alt: "second" },
		{ src: "/images/third.jpeg", alt: "third" },
	];

	return (
		<section className="relative h-screen overflow-hidden">
			{isClient && (
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					effect="fade"
					autoplay={{ delay: 3500 }}
					modules={[EffectFade, Autoplay]}
					className="absolute inset-0 w-full h-full"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="bg-cover bg-center bg-no-repeat bg-fixed"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<div className="absolute inset-0 z-20 flex items-center justify-center">
				<div className="container mx-auto px-4">
					<div className="w-full max-w-3xl mx-auto text-center">
						<h1
							className="text-white text-2xl md:text-4xl font-bold mb-8 text-shadow-lg"
							data-aos="fade-up"
						>
							Easiest way to find your dream home
						</h1>
						<form
							onSubmit={(e) => e.preventDefault()}
							className="flex flex-col sm:flex-row justify-center items-center mb-3 mt-8 space-y-4 md:space-y-0 md:space-x-4"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<input
								type="text"
								className="px-4 py-4 rounded-3xl border outline-none w-full sm:w-2/3 md:w-3/4"
								placeholder="Your ZIP code or City. e.g. New York"
								aria-label="Search location"
							/>
							<button
								type="submit"
								className="bg-primary text-white px-8 py-4 rounded-3xl transition-colors w-full sm:w-auto"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
