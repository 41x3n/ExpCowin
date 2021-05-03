require('dotenv').config();
const express = require('express');
const axios = require('axios');
const days = require('./util/date');
const cleanData = require('./util/clean');
const sendEmail = require('./email/sg');

const app = express();

app.get('/district', async (req, res) => {
	try {
		let id = req.query.id;
		let totalData = [];
		let dates = days.array;
		for (date of dates) {
			const response = await axios.get(
				`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${date}`
			);
			let data = cleanData(response);
			if (data.length > 0) totalData = [ ...totalData, ...data ];
		}
		if (totalData.length > 0) {
			sendEmail(totalData);
			res.send(totalData);
		} else {
			sendEmail(totalData);
			res.send('No center available for now in next four weeks');
		}
	} catch (error) {
		console.log(error);
	}
});

app.get('/pincode', async (req, res) => {
	try {
		let id = req.query.id;
		let totalData = [];
		let dates = days.array;
		for (date of dates) {
			const response = await axios.get(
				`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${id}&date=${date}`
			);
			let data = cleanData(response);
			if (data.length > 0) totalData = [ ...totalData, ...data ];
		}
		if (totalData.length > 0) {
			sendEmail(totalData);
			res.send(totalData);
		} else {
			sendEmail(totalData);
			res.send('No center available for now in next four weeks');
		}
	} catch (error) {
		console.log(error);
	}
});

app.get('/', (req, res) => {
	res.send('Welcome To Exp Cowin!');
});

app.listen(4000, () => {
	console.log('Listening on 4000');
});
