import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("sikar_edu.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS institutes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'school', 'jee', 'neet'
    category TEXT, -- 'cbse', 'rbse', 'foundation', 'dropper'
    description TEXT,
    logo TEXT,
    location TEXT,
    fees_range TEXT,
    is_featured BOOLEAN DEFAULT 0,
    contact_phone TEXT,
    whatsapp TEXT,
    website TEXT,
    rating REAL DEFAULT 4.5,
    slug TEXT UNIQUE
  );

  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class TEXT,
    stream TEXT,
    phone TEXT NOT NULL,
    institute_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed Data
const seedInstitutes = [
  {
    name: "PCP Sikar",
    type: "jee",
    category: "JEE/NEET",
    description: "Prince Career Pioneer (PCP) is the best coaching for JEE and NEET in Sikar with top results.",
    logo: "https://picsum.photos/seed/pcp/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹80,000 - ₹1,50,000",
    is_featured: 1,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "pcp-sikar"
  },
  {
    name: "Prince CBSE",
    type: "school",
    category: "cbse",
    description: "Prince CBSE School offers world-class education with a focus on holistic development.",
    logo: "https://picsum.photos/seed/princecbse/200/200",
    location: "Palwas Road, Sikar",
    fees_range: "₹50,000 - ₹1,20,000",
    is_featured: 1,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "prince-cbse"
  },
  {
    name: "Prince Academy",
    type: "school",
    category: "cbse",
    description: "Prince Academy is a premier residential school in Sikar providing top-notch facilities.",
    logo: "https://picsum.photos/seed/princeacademy/200/200",
    location: "Palwas Road, Sikar",
    fees_range: "₹1,00,000 - ₹2,50,000",
    is_featured: 1,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "prince-academy"
  },
  {
    name: "Prince Hospital",
    type: "neet",
    category: "Medical",
    description: "Associated with Prince EduHub, providing medical guidance and healthcare services.",
    logo: "https://picsum.photos/seed/princehospital/200/200",
    location: "Sikar",
    fees_range: "N/A",
    is_featured: 1,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "prince-hospital"
  },
  {
    name: "Allen Sikar",
    type: "jee",
    category: "JEE/NEET",
    description: "Allen Career Institute's Sikar branch for JEE and NEET preparation.",
    logo: "https://picsum.photos/seed/allen/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹1,00,000 - ₹1,80,000",
    is_featured: 0,
    contact_phone: "+91 744 2757575",
    whatsapp: "7442757575",
    slug: "allen-sikar"
  },
  {
    name: "CLC Sikar",
    type: "neet",
    category: "NEET",
    description: "Career Line Coaching (CLC) is a leading institute for NEET preparation in Sikar.",
    logo: "https://picsum.photos/seed/clc/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹70,000 - ₹1,30,000",
    is_featured: 0,
    contact_phone: "+91 94140 36555",
    whatsapp: "9414036555",
    slug: "clc-sikar"
  },
  {
    name: "Matrix Academy",
    type: "jee",
    category: "JEE/NEET",
    description: "Matrix High School & Coaching is known for its high-quality teaching and excellent results in JEE.",
    logo: "https://picsum.photos/seed/matrix/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹90,000 - ₹1,60,000",
    is_featured: 0,
    contact_phone: "+91 1572 241911",
    whatsapp: "1572241911",
    slug: "matrix-academy"
  },
  {
    name: "Gurukripa (GCI)",
    type: "neet",
    category: "NEET",
    description: "Gurukripa Career Institute (GCI) is a premier institute for NEET preparation with a focus on medical excellence.",
    logo: "https://picsum.photos/seed/gci/200/200",
    location: "Jyoti Nagar, Sikar",
    fees_range: "₹85,000 - ₹1,45,000",
    is_featured: 0,
    contact_phone: "+91 88750 16080",
    whatsapp: "8875016080",
    slug: "gurukripa-gci"
  },
  {
    name: "Kautilya IIT Academy",
    type: "jee",
    category: "JEE",
    description: "Kautilya IIT Academy provides specialized coaching for IIT-JEE with experienced faculty.",
    logo: "https://picsum.photos/seed/kautilya/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹75,000 - ₹1,40,000",
    is_featured: 0,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "kautilya-iit"
  },
  {
    name: "Navjeevan Academy",
    type: "school",
    category: "rbse",
    description: "Navjeevan Academy is a top-rated RBSE school in Sikar with a strong focus on academic results.",
    logo: "https://picsum.photos/seed/navjeevan/200/200",
    location: "Sikar",
    fees_range: "₹40,000 - ₹90,000",
    is_featured: 0,
    contact_phone: "+91 94140 36555",
    whatsapp: "9414036555",
    slug: "navjeevan-academy"
  },
  {
    name: "Sanskar School",
    type: "school",
    category: "cbse",
    description: "Sanskar School offers a balanced curriculum with a focus on both academics and co-curricular activities.",
    logo: "https://picsum.photos/seed/sanskar/200/200",
    location: "Sikar",
    fees_range: "₹45,000 - ₹1,10,000",
    is_featured: 0,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "sanskar-school"
  },
  {
    name: "Aayam Career Institute",
    type: "neet",
    category: "NEET",
    description: "Aayam Career Institute is a fast-growing medical coaching in Sikar with excellent faculty support.",
    logo: "https://picsum.photos/seed/aayam/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹70,000 - ₹1,20,000",
    is_featured: 0,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "aayam-career"
  },
  {
    name: "Daffodils School",
    type: "school",
    category: "cbse",
    description: "Daffodils Public School is known for its discipline and quality education in Sikar.",
    logo: "https://picsum.photos/seed/daffodils/200/200",
    location: "Sikar",
    fees_range: "₹35,000 - ₹80,000",
    is_featured: 0,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "daffodils-school"
  },
  {
    name: "Career Point Sikar",
    type: "jee",
    category: "JEE/NEET",
    description: "Career Point Sikar offers comprehensive coaching for engineering and medical entrance exams.",
    logo: "https://picsum.photos/seed/cp/200/200",
    location: "Piprali Road, Sikar",
    fees_range: "₹80,000 - ₹1,40,000",
    is_featured: 0,
    contact_phone: "+91 96108 92222",
    whatsapp: "9610892222",
    slug: "career-point"
  }
];

const checkStmt = db.prepare("SELECT count(*) as count FROM institutes");
const { count } = checkStmt.get() as { count: number };

// Always try to insert new ones using INSERT OR IGNORE if we had a unique constraint on slug
// But since we want to ensure all are there, let's just clear and re-seed for this demo
db.exec("DELETE FROM institutes");

const insertStmt = db.prepare(`
  INSERT INTO institutes (name, type, category, description, logo, location, fees_range, is_featured, contact_phone, whatsapp, slug)
  VALUES (@name, @type, @category, @description, @logo, @location, @fees_range, @is_featured, @contact_phone, @whatsapp, @slug)
`);
for (const inst of seedInstitutes) {
  insertStmt.run(inst);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/institutes", (req, res) => {
    const { type, featured } = req.query;
    let query = "SELECT * FROM institutes";
    const params: any[] = [];

    if (type || featured) {
      query += " WHERE";
      if (type) {
        query += " type = ?";
        params.push(type);
      }
      if (featured) {
        if (type) query += " AND";
        query += " is_featured = 1";
      }
    }
    
    query += " ORDER BY is_featured DESC, name ASC";
    const stmt = db.prepare(query);
    const rows = stmt.all(...params);
    res.json(rows);
  });

  app.get("/api/institutes/:slug", (req, res) => {
    const stmt = db.prepare("SELECT * FROM institutes WHERE slug = ?");
    const row = stmt.get(req.params.slug);
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: "Institute not found" });
    }
  });

  app.post("/api/enquiry", (req, res) => {
    const { name, class: studentClass, stream, phone, institute_id } = req.body;
    const stmt = db.prepare(`
      INSERT INTO leads (name, class, stream, phone, institute_id)
      VALUES (?, ?, ?, ?, ?)
    `);
    const info = stmt.run(name, studentClass, stream, phone, institute_id);
    res.json({ success: true, id: info.lastInsertRowid });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
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
