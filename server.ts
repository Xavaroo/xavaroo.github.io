import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSV_FILE = path.join(__dirname, "subscribers.csv");
const BOOKINGS_FILE = path.join(__dirname, "bookings.csv");
const ENQUIRIES_FILE = path.join(__dirname, "enquiries.csv");

// Initialize CSV files with headers if they don't exist
if (!fs.existsSync(CSV_FILE)) {
  const headers = "email,timestamp,timezone,language,userAgent\n";
  fs.writeFileSync(CSV_FILE, headers);
}

if (!fs.existsSync(BOOKINGS_FILE)) {
  const headers = "packageId,packageName,price,name,email,phone,bookingDate,guests,timestamp\n";
  fs.writeFileSync(BOOKINGS_FILE, headers);
}

if (!fs.existsSync(ENQUIRIES_FILE)) {
  const headers = "packageId,packageName,name,email,phone,timestamp\n";
  fs.writeFileSync(ENQUIRIES_FILE, headers);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/subscribe", (req, res) => {
    const { email, timezone, language, userAgent } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const timestamp = new Date().toISOString();
      
      // Escape commas in fields for CSV safety
      const escapeCSV = (str: string) => `"${(str || "").replace(/"/g, '""')}"`;
      
      const row = [
        escapeCSV(email),
        escapeCSV(timestamp),
        escapeCSV(timezone),
        escapeCSV(language),
        escapeCSV(userAgent)
      ].join(",") + "\n";

      fs.appendFileSync(CSV_FILE, row);

      console.log(`New subscriber added to CSV: ${email}`);
      res.json({ success: true, message: "Subscribed successfully" });
    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/book", (req, res) => {
    const { packageId, packageName, price, name, email, phone, bookingDate, guests } = req.body;

    if (!name || !email || !phone || !bookingDate || !guests) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const timestamp = new Date().toISOString();
      const escapeCSV = (str: any) => `"${String(str || "").replace(/"/g, '""')}"`;
      
      const row = [
        escapeCSV(packageId),
        escapeCSV(packageName),
        escapeCSV(price),
        escapeCSV(name),
        escapeCSV(email),
        escapeCSV(phone),
        escapeCSV(bookingDate),
        escapeCSV(guests),
        escapeCSV(timestamp)
      ].join(",") + "\n";

      fs.appendFileSync(BOOKINGS_FILE, row);

      console.log(`New booking for ${packageName} by ${name}`);
      res.json({ success: true, message: "Booking confirmed successfully" });
    } catch (error) {
      console.error("Booking error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/enquire", (req, res) => {
    const { packageId, packageName, name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const timestamp = new Date().toISOString();
      const escapeCSV = (str: any) => `"${String(str || "").replace(/"/g, '""')}"`;
      
      const row = [
        escapeCSV(packageId),
        escapeCSV(packageName),
        escapeCSV(name),
        escapeCSV(email),
        escapeCSV(phone),
        escapeCSV(timestamp)
      ].join(",") + "\n";

      fs.appendFileSync(ENQUIRIES_FILE, row);

      console.log(`New enquiry for ${packageName} by ${name}`);
      res.json({ success: true, message: "Enquiry submitted successfully" });
    } catch (error) {
      console.error("Enquiry error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
