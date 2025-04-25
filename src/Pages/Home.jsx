import React from "react";
import Banner from "../components/Banner";
import BestLawyers from "../components/BestLawyers";
import LawServices from "../components/LawServices";

const Home = () => {
	return (
		<div className="bg-white">
			<div className="container max-w-7xl mx-auto px-3">
				<Banner></Banner>
				<BestLawyers></BestLawyers>
				<LawServices></LawServices>
			</div>
		</div>
	);
};

export default Home;
