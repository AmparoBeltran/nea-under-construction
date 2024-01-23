import * as functions from "firebase-functions";

const sgMail = require("@sendgrid/mail");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const API_KEY = "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"
const TEMPLATE_ID = "d-92cce8c2992643b68856299ab393beca"

sgMail.setApiKey(API_KEY);

export const contactEmail = functions.https.onCall(async (data, context) => {
    console.log(data);

    const msg = {
        to: "neacreatives@gmail.com",
        from: "neacreatives@gmail.com",
        templateId: TEMPLATE_ID,
        dynamic_template_data: data,
    }

    try {
        await sgMail.send(msg)
    } catch (error) {
        return error
    }

    return "OK";

});
