const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        type:"OAuth2",
        user:process.env.EMAIL_USER,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        refreshToken:process.env.REFRESH_TOKEN,
    },
});

transporter.verify((error,success)=>{
    if (error){
        console.error('Error connection to email server:',error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

const sendEmail = async(to,subject,text,html)=>{
    try{
        const info = await transporter.sendMail({
            from:  `"Backend Ledger" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        });

        console.log('Message sent: %s',info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:',error);
    }
};

async function sendRegistrationEmail(userEmail,name){
    const subject = 'Welcome to the Backend Ledger';
    const text = `Hello ${name},
    Welcome to the Backend Ledger!
    We're glad to have you on board.\n\nBest regards,\nBackend Ledger Team`;
    const html = `
    <h1>Welcome to the Backend Ledger!</h1>
    <p>We're glad to have you on board.</p>
    <p>Best regards,</p>
    <p>Backend Ledger Team</p>
    `;
    await sendEmail(userEmail,subject,text,html);
}

async function sendTransactionEmail(userEmail,name,amount,toAccount){
    const subject = 'Transaction Successfully';
    const text = `Hello ${name},
    Your transaction of ${amount} to ${toAccount} has been successfully completed.
    Thank you for using our service.
    Best regards,
    Backend Ledger Team
    `;
    const html = `
    <h1>Transaction Successfully</h1>
    <p>Your transaction of ${amount} to ${toAccount} has been successfully completed.</p>
    <p>Thank you for using our service.</p>
    <p>Best regards,</p>
    <p>Backend Ledger Team</p>
    `;
    await sendEmail(userEmail,subject,text,html);
}

async function sendTransactionFailureEmail(userEmail,name,amount,toAccount){
    const subject = 'Transaction Failed';
    const text = `Hello ${name},
    Your transaction of ${amount} to ${toAccount} has failed.
    Please try again.
    Best regards,
    Backend Ledger Team
    `;

    const html = `
    <h1>Transaction Failed</h1>
    <p>Your transaction of ${amount} to ${toAccount} has failed.</p>
    <p>Please try again.</p>
    <p>Best regards,</p>
    <p>Backend Ledger Team</p>
    `;
    await sendEmail(userEmail,subject,text,html);
}


module.exports = {
    sendRegistrationEmail,
    sendTransactionEmail,
    sendTransactionFailureEmail,
}
