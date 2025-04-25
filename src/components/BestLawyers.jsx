import React from "react";
import LawyerCard from "./LawyerCard";

const BestLawyers = () => {
	return (
		<div className="py-24">
			<div className="text-center max-w-[1010px] mx-auto mb-8">
				<h2 className="text-4xl/tight font-extrabold mb-4">Our Best Lawyers</h2>
				<p>
					Our platform connects you with verified, experienced Lawyers across various specialties — all at your
					convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive
					quality care you can trust.
				</p>
			</div>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<LawyerCard></LawyerCard>
					<LawyerCard></LawyerCard>
					<LawyerCard></LawyerCard>
					<LawyerCard></LawyerCard>
					<LawyerCard></LawyerCard>
					<LawyerCard></LawyerCard>
				</div>
				<button className="mx-auto block bg-c0ea106 text-white text-sm sm:text-lg px-3 py-2 sm:px-8 sm:py-3.5 rounded-full mt-8 cursor-pointer">
					Show All Lawyer
				</button>
			</div>
		</div>
	);
};

export default BestLawyers;
