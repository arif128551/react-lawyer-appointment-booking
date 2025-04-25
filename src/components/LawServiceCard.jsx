import React from "react";
import CountUp from "react-countup";
import successLawyerImg from "../assets/success-lawyer.png";
const LawServiceCard = () => {
	return (
		<div className="bg-c0f0f0f/5 border border-c0f0f0f/15 rounded-2xl px-12 py-10">
			<img className="w-16 h-16" src={successLawyerImg} alt="success lawyer" />
			<h3 className="pt-4 lg:text-5xl text-3xl font-extrabold mb-3">
				<CountUp end={199} duration={2} enableScrollSpy={true} scrollSpyDelay={100} scrollSpyOnce={false} />+
			</h3>
			<p className="text-xl font-medium">Total Lawyer</p>
		</div>
	);
};

export default LawServiceCard;
