const cleanData = (response) => {
	let data = [];
	centers = response.data.centers;
	centers.forEach((center) => {
		sessions = center.sessions;
		sessions.forEach((session) => {
			if (session.available_capacity > 0) {
				console.log({
					center_name: center.name,
					block_name: center.block_name,
					pincode: center.pincode,
					available_date: session.date,
					doses: session.available_capacity,
					fee_type: center.fee_type,
					minimum_age: session.min_age_limit
				});
				data.push({
					center_name: center.name,
					block_name: center.block_name,
					pincode: center.pincode,
					available_date: session.date,
					doses: session.available_capacity,
					fee_type: center.fee_type,
					minimum_age: session.min_age_limit
				});
			}
		});
	});
	return data;
};

module.exports = cleanData;
