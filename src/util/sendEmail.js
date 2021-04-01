const sgMail = require('@sendgrid/mail');
const { getMaxListeners } = require('../model/nancyModel');

// setting up the sendgrid Api Key
sgMail.setApiKey(process.env.SEND_GRID_KEY);

// creating a function to send nancy a sgMail
const sendNancyMail = async (data) => {
    const msg = {
        to: 'nancyrike7@gmail.com',
        from: {
            email: 'c.echendu@genesystechhub.com',
            name: `${data.name}`
        },

        subject: `${data.titleOfProject}`,
        text: `
            Hey NANCY!!!,
            view the details below:\n
            ${data.description} \n
            <p>.......................................................</p>
            contact me here:\n
            email: ${data.email}\n
            phone: ${data.phone}
            
        `,
        html: `
            <h2>Hey NANCY!!!,</h2>
            <p>I have a project for you view the details below:</p>
            <p>${data.description}</p>
            <p>.......................................................</p>
            <p>contact me here:</p>
            <p>email: ${data.email} <br>
            phone: ${data.phone}
            </p>
            
        `
    }

    try{
        await sgMail.send(msg)
        console.log('email has been sent')
    }catch(e){
        console.log(e)
    }
}


module.exports = {
    sendNancyMail
}