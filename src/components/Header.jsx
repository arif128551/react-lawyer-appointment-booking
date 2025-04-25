import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router";
const Header = () => {
	const location = useLocation();
	return (
		<div className={`${location.pathname === "/" ? "" : "border-b border-c0f0f0f/15"}`}>
			<div className="navbar container mx-auto max-w-7xl py-7">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
							</svg>
						</div>
						<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? "text-c0ea106" : "text-c0F0F0F/70")}
									to="/my-bookings"
								>
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
					</div>
					<Link className="text-xl flex items-center gap-1">
						<div>
							<img src={logoImg} alt="" />
						</div>
						<span>Law.BD</span>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-c0f0f0f/70 text-lg xl:gap-12 gap-8">
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "")} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? "text-c0ea106" : "text-c0F0F0F/70")} to="/my-bookings">
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
				</div>
				<div className="navbar-end">
					<Link className="bg-c0ea106 text-white text-sm sm:text-lg px-3 py-2 sm:px-8 sm:py-3.5 rounded-full">
						Contact Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
