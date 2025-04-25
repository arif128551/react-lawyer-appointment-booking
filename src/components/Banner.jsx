import React from "react";
import bannerImg from "../assets/banner-img.png";
const Banner = () => {
	return (
		<div
			className="md:min-h-[550px] flex items-center justify-center text-center text-white rounded-3xl bg-cover bg-center"
			style={{ backgroundImage: `url(${bannerImg})` }}
		>
			<div className="xl:px-[135px] px-4 py-12">
				<h1 className="md:text-5xl/tight text-3xl mb-4 font-extrabold">
					It avoids subjective claims or exaggeration that might raise red flags legally
				</h1>
				<p className="font-medium">
					Our platform connects you with verified, experienced doctors across various specialties — all at your
					convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive
					quality care you can trust.
				</p>
			</div>
		</div>
	);
};

export default Banner;
