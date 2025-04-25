import React from "react";
import footerLogo from "../assets/logo-footer.png";
import { Link, NavLink } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="bg-c0f0f0f py-24 text-white">
			<div className="container max-w-7xl mx-auto text-center">
				<div className="pb-8">
					<div className="flex gap-1 justify-center items-center">
						<div>
							<img src={footerLogo} alt="Footer Logo" />
						</div>
						<h4 className="text-3xl font-extrabold">Law.BD</h4>
					</div>
				</div>
				<nav className="pb-8">
					<ul className="flex justify-center items-center xl:gap-12 sm:gap-8 gap-4 flex-wrap text-lg font-medium">
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/my-bookings">
								My-Bookings
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/blog">
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/contact-us">
								Contact Us
							</NavLink>
						</li>
					</ul>
				</nav>
				<nav className="flex justify-center items-center gap-6 border-t border-dashed border-white/20 pt-5">
					<Link to="https://www.facebook.com/xoss.arif">
						<FaFacebookF size={25} />
					</Link>
					<Link to="https://www.instagram.com/xoss.arif">
						<FaInstagram size={25} />
					</Link>
					<Link to="https://www.instagram.com/xoss.arif">
						<FaYoutube size={25} />
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
