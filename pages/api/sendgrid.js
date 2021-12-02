import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "info@mkfaim.co.uk",
      from: "info@mkfaim.co.uk",
      subject: `Wedding enquiry from : ${req.body.fname}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Message details</h3>
              <div style="font-size: 16px;">
              <br>
              <p>Last name:</p>
              <p>${req.body.fname}</p>
              <br>
              <p>Last name:</p>
              <p>${req.body.lname}</p>
              <br>
              <p>Email:</p>
              <p>${req.body.email}</p>
              <br>
              <p>Phone:</p>
              <p>${req.body.phone}</p>
              <br>
              <p>Event type:</p>
              <p>${req.body.event}</p>
              <br>
              <p>Venue:</p>
              <p>${req.body.venue}</p>
              <br>
              <p>Event date:</p>
              <p>${req.body.date}</p>
              <br>
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
            </div>
 
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
