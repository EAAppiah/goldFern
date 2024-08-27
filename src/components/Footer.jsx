import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-tertiary py-20 text-sm">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xs font-bold mb-4 text-secondary uppercase">
							Contact
						</h3>
						<address className="not-italic mb-4 text-[#88888B]">
							43 Raymouth Rd. Baltemoer, London 3910
						</address>
						<ul className="space-y-2 text-gray-500">
							<li>
								<a
									href="tel://11234567890"
									className="underline hover:no-underline hover:text-black"
								>
									+1(123)-456-7890
								</a>
							</li>
							<li>
								<a
									href="tel://11234567890"
									className="underline hover:no-underline hover:text-black"
								>
									+1(123)-456-7890
								</a>
							</li>
							<li>
								<a
									href="mailto:info@mydomain.com"
									className="underline hover:no-underline hover:text-black"
								>
									info@mydomain.com
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xs font-bold mb-4 text-secondary uppercase">
							Sources
						</h3>
						<div className="flex space-x-20">
							<ul className="space-y-2 text-gray-500">
								<li>
									<Link
										href="/about"
										className="underline hover:no-underline hover:text-black"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="underline hover:no-underline hover:text-black"
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										href="/vision"
										className="underline hover:no-underline hover:text-black"
									>
										Vision
									</Link>
								</li>
								<li>
									<Link
										href="/mission"
										className="underline hover:no-underline hover:text-black"
									>
										Mission
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="underline hover:no-underline hover:text-black"
									>
										Terms
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="underline hover:no-underline hover:text-black"
									>
										Privacy
									</Link>
								</li>
							</ul>
							<ul className="space-y-2 text-gray-500">
								<li>
									<Link
										href="/partners"
										className="underline hover:no-underline hover:text-black"
									>
										Partners
									</Link>
								</li>
								<li>
									<Link
										href="/business"
										className="underline hover:no-underline hover:text-black"
									>
										Business
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="underline hover:no-underline hover:text-black"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="underline hover:no-underline hover:text-black"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/faq"
										className="underline hover:no-underline hover:text-black"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/creative"
										className="underline hover:no-underline hover:text-black"
									>
										Creative
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h3 className="text-xs font-bold mb-4 text-secondary uppercase">
							Links
						</h3>
						<ul className="space-y-2 mb-6 text-gray-500">
							<li>
								<Link
									href="/vision"
									className="underline hover:no-underline hover:text-black"
								>
									Our Vision
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="underline hover:no-underline hover:text-black"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="underline hover:no-underline hover:text-black"
								>
									Contact us
								</Link>
							</li>
						</ul>

						<ul className="flex space-x-4">
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">Instagram</span>
									<FaInstagram />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">Twitter</span>
									<FaTwitter />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">Facebook</span>
									<FaFacebookF />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">LinkedIn</span>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">Pinterest</span>
									<FaPinterest />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-secondary hover:text-white">
								<a href="#">
									<span className="sr-only">Dribbble</span>
									<FaDribbble />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-gray-600">
						Copyright &copy;{new Date().getFullYear()}. All Rights Reserved.
						&mdash; Designed with love by{" "}
						<a
							href="https://untree.co"
							className="text-blue-600 hover:text-blue-800"
						>
							Untree.co
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
