import React from "react";
import { FaRegRegistered } from "react-icons/fa";
const LawyerCard = () => {
	return (
		<div className="border border-c0f0f0f/15 rounded-2xl p-6 flex xl:gap-16 lg:gap-10 md:gap-6 gap-4 items-center">
			<div>
				<img className="w-40" src="https://i.ibb.co.com/Y77dQFFg/lawyer.png" alt="Lawyer" />
			</div>
			<div className="flex-auto">
				<div className="flex gap-2 mb-2">
					<div className="bg-c0ea106/10 px-3.5 py-1 text-[12px] text-c0ea106 rounded-full">Available</div>
					<div className="bg-c176ae5/10 px-3.5 py-1 text-[12px] text-c176ae5 rounded-full">5+ Years Experience</div>
				</div>
				<h3 className="text-2xl font-extrabold mb-1">Awlad Hossain</h3>
				<h5 className="text-lg font-medium text-c0f0f0f/60">Criminal Expert</h5>
				<p className="text-lg font-medium text-c0f0f0f/60 flex gap-1 items-center">
					<FaRegRegistered />
					License No: BD 12451254
				</p>

				<button className="text-base block border border-c176ae5/20 text-c176ae5 px-3 py-2 rounded-full w-full mt-4 cursor-pointer">
					View Details
				</button>
			</div>
		</div>
	);
};

export default LawyerCard;
