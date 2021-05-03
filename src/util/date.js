let dates = [];
let todayDate = new Date();
let currDate = todayDate;
for (let i = 0; i < 4; i++) {
	dates.push(
		new Date(currDate)
			.toLocaleDateString('en-IN', {
				timeZone: 'Asia/Kolkata'
			})
			.split('/')
			.join('-')
	);
	currDate = new Date(currDate.getTime() + 7 * 24 * 60 * 60 * 1000);
}
console.log(dates);

exports.array = dates;
