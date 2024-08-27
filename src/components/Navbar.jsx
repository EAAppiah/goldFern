"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path) => pathname === path;

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-black bg-opacity-30"
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className={`text-2xl font-bold ${
							isScrolled ? "text-primary" : "text-white"
						}`}
					>
						GoldFern
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden lg:flex space-x-8">
						{["Home", "Properties", "Services", "About", "Contact"].map(
							(item) => (
								<li key={item}>
									<Link
										href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
										className={`
                    ${
											isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
												? "font-semibold"
												: ""
										}
                    ${isScrolled ? "text-gray-800" : "text-white"}
                    hover:text-primary transition-colors relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] 
                    after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left
                  `}
									>
										{item}
									</Link>
								</li>
							)
						)}
					</ul>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden focus:outline-none"
						aria-label="Toggle menu"
					>
						<svg
							className={`h-6 w-6 fill-current ${
								isScrolled ? "text-primary" : "text-white"
							}`}
							viewBox="0 0 24 24"
						>
							{isOpen ? (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<ul className="lg:hidden mt-4 space-y-2 bg-white shadow-md rounded-lg p-4">
						{["Home", "Properties", "Services", "About", "Contact"].map(
							(item) => (
								<li key={item}>
									<Link
										href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
										className={`block py-2 ${
											isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
												? "text-primary font-semibold"
												: "text-gray-600"
										} hover:text-primary transition-colors`}
										onClick={() => setIsOpen(false)}
									>
										{item}
									</Link>
								</li>
							)
						)}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
