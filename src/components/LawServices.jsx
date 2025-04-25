import React from "react";
import LawServiceCard from "./LawServiceCard";

const LawServices = () => {
	return (
		<div>
			<div>
				<h2>We Provide Best Law Services</h2>
				<p>
					Our platform connects you with verified, experienced Lawyers across various specialities — all at your
					convenience.
				</p>
			</div>
			<div>
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
				<LawServiceCard></LawServiceCard>
			</div>
		</div>
	);
};

export default LawServices;
