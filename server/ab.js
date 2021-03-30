
const sgMail = require('@sendgrid/mail');

const API_KEY = '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'
      sgMail.setApiKey(API_KEY);
      const msgoptions = {
        to: 'sandipkedia1711998@gmail.com',
        from: 'sumitrao160194@gmail.com',
        subject: 'testing',
        text: 'textting',
        html: '<h1>h1tag</h1>'
      }
sgMail.send(msgoptions);
					