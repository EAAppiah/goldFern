import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBath } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";

const PropertyItem = ({ imageSrc, price, address, city, beds, baths }) => (
	<div className="property-item">
		<Link href="/property-single" className="block">
			<Image
				src={imageSrc}
				alt="Property"
				width={500}
				height={300}
				className="w-full h-auto"
			/>
		</Link>
		<div className="p-4">
			<div className="text-lg font-extrabold text-primary mb-2 underline underline-offset-8">
				${price.toLocaleString()}
			</div>
			<div>
				<span className="block text-xs my-3 text-[#88888B]">{address}</span>
				<span className="block mb-4 text-black text-lg font-extrabold">
					{city}
				</span>
				<div className="flex gap-x-6 mb-4">
					<span className="flex items-center gap-x-2">
						<FaBed className="text-[#88888B]" />
						<span className="text-sm text-[#88888B]">{beds} beds</span>
					</span>
					<span className="flex items-center gap-x-2">
						<FaBath className="text-[#88888B]" />
						<span className="text-sm text-[#88888B]">{baths} baths</span>
					</span>
				</div>
				<Link
					href="/property-single"
					className="bg-primary font-light text-white py-2.5 px-5 rounded-3xl hover:bg-green-800 transition duration-300"
				>
					See details
				</Link>
			</div>
		</div>
	</div>
);

const PopularProperties = () => {
	const properties = [
		{
			imageSrc: "/images/first.jpeg",
			price: 1291000,
			address: "5232 California Fake, Ave. 21BC",
			city: "California, USA",
			beds: 2,
			baths: 2,
		},
		{
			imageSrc: "/images/second.jpeg",
			price: 1291000,
			address: "5232 California Fake, Ave. 21BC",
			city: "California, USA",
			beds: 2,
			baths: 2,
		},
		{
			imageSrc: "/images/third.jpeg",
			price: 1291000,
			address: "5232 California Fake, Ave. 21BC",
			city: "California, USA",
			beds: 2,
			baths: 2,
		},
		// Add more property objects as needed
	];

	return (
		<div className="bg-white py-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center mb-10">
					<h2 className="text-3xl font-bold text-primary mb-4 md:mb-0">
						Properties
					</h2>
					<Link
						href="/properties"
						className="bg-primary text-white px-6 py-3 rounded-3xl hover:bg-primary-800 transition duration-300"
					>
						View all properties
					</Link>
				</div>
				<div className="property-slider-wrap">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{properties.map((property, index) => (
							<PropertyItem key={index} {...property} />
						))}
					</div>
					<div className="flex justify-between mt-8">
						<button className="bg-gray-200 text-sm text-gray-700 py-2 px-6 rounded-3xl hover:bg-secondary hover:text-white transition duration-300">
							Prev
						</button>
						<button className="bg-gray-200 text-sm text-gray-700 py-2 px-6 rounded-3xl hover:bg-secondary hover:text-white transition duration-300">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularProperties;
