import React from "react";
import { FaRegRegistered } from "react-icons/fa";

const LawyersProfile = () => {
	return (
		<div className="container max-w-7xl mx-auto pt-8 pb-10 lg:pb-24 px-4">
			<div className="bg-c0f0f0f/5 border border-c0f0f0f/15 rounded-2xl xl:p-16 p-8 text-center mb-8">
				<h1 className="text-2xl lg:text-3xl font-extrabold mb-2">Lawyer’s Profile Details</h1>
				<p>
					This page provides comprehensive information about individual lawyers, including their educational background,
					areas of specialization, professional designation, workplace affiliation, years of experience, consultation
					fees, and availability schedule. The purpose of this page is to assist users in making informed decisions by
					offering verified, transparent, and up-to-date details for each listed legal professional.
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-6 md:items-center border border-c0f0f0f/15 rounded-2xl lg:p-8 p-4">
				<div>
					<img src="https://i.ibb.co.com/Y77dQFFg/lawyer.png" alt="" />
				</div>
				<div className="flex-auto">
					<div className="bg-c176ae5/10 px-3.5 py-1 text-[12px] text-c176ae5 rounded-full max-w-[182px] text-center">
						5+ Years Experience
					</div>
					<h2 className="text-3xl font-extrabold py-3">Awlad Hossain</h2>
					<div className="flex flex-col sm:flex-row lg:gap-10 gap-3  mb-4">
						<p className="text-c0f0f0f/60">Criminal Expert</p>
						<p className="flex gap-2 items-center text-c0f0f0f/60">
							<FaRegRegistered /> License No: BD 12451254
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<div>
							<p>Availability</p>
						</div>
						<div className="flex flex-wrap gap-4">
							<div className="bg-c0ea106/10 px-3.5 py-1 text-[12px] text-c0ea106 rounded-full">Sunday</div>
							<div className="bg-c0ea106/10 px-3.5 py-1 text-[12px] text-c0ea106 rounded-full">Sunday</div>
							<div className="bg-c0ea106/10 px-3.5 py-1 text-[12px] text-c0ea106 rounded-full">Sunday</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 border border-c0f0f0f/15 rounded-2xl lg:p-8 p-4">
				<h3 className="text-2xl font-bold mb-4 text-center">Book an Appointment</h3>
				<div className="flex justify-between py-4 my-4 border-y border-c0f0f0f/10">
					<h4>Availability</h4>
					<div className="bg-c0ea106/10 px-3.5 py-1 text-[12px] text-c0ea106 rounded-full">Lawyer Available Today</div>
				</div>
				<div className="bg-c0ea106/10 px-3.5 py-1 text-[10px] sm:text-[12px] text-c0ea106 rounded-full text-center sm:text-left">
					Due to high patient volume, we are currently accepting appointments for today only. We appreciate your
					understanding and cooperation.
				</div>
				<button className="mx-auto block bg-c0ea106 text-white text-sm sm:text-lg px-3 py-2 sm:px-8 sm:py-3.5 rounded-full mt-8 cursor-pointer w-full">
					Book Appointment Now
				</button>
			</div>
		</div>
	);
};

export default LawyersProfile;
