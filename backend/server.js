const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const multer = require("multer")
const path = require("path")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5001

// Middleware to parse JSON and URL-encoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type"], // Allow these headers
  }),
)

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/") // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname) // Add a timestamp to the filename
  },
})

const upload = multer({ storage })

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail email
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
})

// Email endpoint
app.post("/send-email", upload.single("attachment"), (req, res) => {
  console.log("Request Body:", req.body) // Log form data
  console.log("Request File:", req.file) // Log uploaded file

  const { name, email, number, message } = req.body
  const attachment = req.file

  // Validate required fields
  if (!name || !email || !message) {
    console.error("Validation Error: Name, email, and message are required.")
    return res.status(400).json({ success: false, message: "Name, email, and message are required." })
  }

  // HTML content for the email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; background-color: #2C3E50; padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0;">New Enquiry Received</h1>
      </div>
      <div style="padding: 20px;">
        <p>Hello,</p>
        <p>You have received a new enquiry from:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
          <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
          <li style="margin-bottom: 10px;"><strong>Phone Number:</strong> ${number || "Not provided"}</li>
          <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Please respond to this enquiry at your earliest convenience.</p>
      </div>
      <div style="text-align: center; background-color: #f9f9f9; padding: 15px; border-radius: 0 0 10px 10px; font-size: 0.9em; color: #777;">
        <p style="margin: 0;">This is an automated message. Please do not reply directly to this email.</p>
        <p style="margin: 0;">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  `

  // Mail options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself or another email
    subject: `New Enquiry from ${name}`,
    html: htmlContent,
    attachments: attachment
      ? [
          {
            filename: attachment.originalname || "attachment",
            path: attachment.path,
          },
        ]
      : [],
  }

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error)
      return res.status(500).json({ success: false, message: "Failed to send email", error: error.toString() })
    }
    console.log("Email sent:", info.response)
    res.status(200).json({ success: true, message: "Email sent successfully", info: info.response })
  })
})

// Serve uploaded files statically (optional)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

