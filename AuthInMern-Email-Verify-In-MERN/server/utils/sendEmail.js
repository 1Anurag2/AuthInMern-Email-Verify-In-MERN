const nodemailer = require("nodemailer");

module.exports = async (email, subject) => {
	const text = `
Subject: Excited to Join the Google Team in the Account Sector!

Dear Dimpal Verma,

I am thrilled to share the news that I have been offered an opportunity to join Google in the Account Sector! I would like to express my sincere gratitude to you and the entire hiring team for believing in my skills and offering me this exciting role.

I am looking forward to contributing to the team, learning from the best in the industry, and making an impactful contribution to Google’s success. I am eager to start this new journey and collaborate with such a talented group of professionals.

Thank you once again for this wonderful opportunity, and I am excited to begin this new chapter with Google.

Best regards,
Name : Dimpal Verma
Contact : 8953340290

`;
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail({
			from: "Google",
			to: email,
			subject: " Application for Accountant Position",
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
