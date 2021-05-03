const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY);

const sendEmail = (data) => {
	if (data.length > 0) {
		let text = `Hi there! Centers are vailable.`;
		data.forEach((info) => {
			let {
				center_name,
				block_name,
				pincode,
				available_date,
				doses,
				fee_type,
				minimum_age
			} = info;
			text += `\n${doses} doses left in ${center_name} center in block ${block_name} and pincode - ${pincode}. It is available for ${minimum_age} plus and will be available on ${available_date}. [${fee_type}]\n`;
		});
		text += '\nPlease visit CoWin right now to book.';
		sgMail.send({
			to: process.env.to,
			from: process.env.from,
			subject: 'Exp Cowin Reminder Email',
			text: text
		});
	} else {
		sgMail.send({
			to: process.env.to,
			from: process.env.from,
			subject: 'Exp Cowin Reminder Email',
			text: 'Sorry! Currently no vaccination center has slots left.'
		});
	}
};

module.exports = sendEmail;
