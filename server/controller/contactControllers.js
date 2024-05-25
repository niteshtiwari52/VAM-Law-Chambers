const sendEmail = require("../utils/sendEmail");

const contact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const data = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    const ccRecipients = ["niteshtiwari5222@gmail.com", "atulslc@gmail.com"];
    // Sending the confirmation email to the user
    let options = {
      name: data.name,
      email: data.email,
      subject: "Thanks To contact VAM Law Chamber",
      message_Content: `
      <p>Dear ${data.name},</p>
      <p>Thank you for reaching out to VAM Law Chamber. We have successfully received your message and our team will review your inquiry promptly.</p>
      <p>We understand the importance of your concerns and strive to respond to all inquiries within 24-48 hours. If your matter is urgent, please feel free to contact us directly at <a href="tel:8586086124">8586086124</a>.</p>
      <p>In the meantime, if you have any additional information or documents that might help us better understand your situation, please reply to this email with those details.</p>
      <p>We appreciate your trust in VAM Law Chamber and look forward to assisting you.</p>
      <p>Best regards,</p>
      <p>
          VAM Law Chamber<br>
          <span><b>Email: </b></span><a href="mailto:vamlawchamber@gmail.com">vamlawchamber@gmail.com</a><br>
          <span><b>Mobile: </b></span><a href="tel:8586086124">8586086124</a><br>
          <span><b>Website: </b></span><a href="https://vam-law-chambers.vercel.app/">https://vam-law-chambers.vercel.app/</a>
      </p>
      
      <img src="https://res.cloudinary.com/dv64zwxbb/image/upload/v1716642611/nb4umcvyo9zfhwdo7fr5.png" alt="VAM Law Chamber Logo" style="max-width: 200px;">
      `,
    };
    await sendEmail(options);

    // Sending the notification email to the administrator
    options = {
      name: data.name,
      email: "vamlawchamber@gmail.com",
      cc: ccRecipients,
      subject: `New Query from ${data.email}`,
      message_Content: `
        <p>New Request received to VAM Law Chamber. The Sender Details are:</p>
        <ul>
          <li><b>Name:</b> ${data.name}</li>
          <li><b>Email:</b> ${data.email}</li>
          <li><b>Mobile:</b> ${data.phone}</li>
          <li><b>Subject:</b> ${data.subject}</li>
          <li><b>Message:</b> ${data.message}</li>
        </ul>
      `,
    };
    await sendEmail(options);

    res.status(201).json({
      success: true,
      message: "Message sent to both parties",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  contact,
};
