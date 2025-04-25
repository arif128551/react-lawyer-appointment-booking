import React from "react";
import LawServiceCard from "./LawServiceCard";

const LawServices = () => {
	return (
		<div className="pb-24">
			<div className="text-center max-w-[1010px] mx-auto mb-8">
				<h2 className="text-4xl/tight font-extrabold mb-4">We Provide Best Law Services</h2>
				<p>
					Our platform connects you with verified, experienced Lawyers across various specialities — all at your
					convenience.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
			</div>
		</div>
	);
};

export default LawServices;
