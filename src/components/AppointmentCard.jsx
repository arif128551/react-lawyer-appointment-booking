import React from "react";

const AppointmentCard = () => {
	return (
		<div>
			<div>
				<div>
					<h3>Awlad Hossain</h3>
					<p>Criminal Expert</p>
				</div>
				<div>
					<p>Appointment Fee : 2000 Taka</p>
				</div>
			</div>
			<button className="mx-auto block bg-c0ea106 text-white text-sm sm:text-lg px-3 py-2 sm:px-8 sm:py-3.5 rounded-full mt-8 cursor-pointer w-full">
				Cancel Appointment
			</button>
		</div>
	);
};

export default AppointmentCard;
