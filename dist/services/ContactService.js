"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const database_1 = require("../database/database");
class ContactService {
    static async saveContactSubmission(submission) {
        const db = await (0, database_1.getDatabase)();
        const result = await db.run(`INSERT INTO contact_submissions 
       (full_name, phone, email, city, state, product_id) 
       VALUES (?, ?, ?, ?, ?, ?)`, [
            submission.full_name,
            submission.phone,
            submission.email,
            submission.city,
            submission.state,
            submission.product_id || null
        ]);
        return result.lastID || 0;
    }
    static async getAllContactSubmissions() {
        const db = await (0, database_1.getDatabase)();
        return db.all('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    }
    static async getContactSubmissionById(id) {
        const db = await (0, database_1.getDatabase)();
        return db.get('SELECT * FROM contact_submissions WHERE id = ?', [id]);
    }
}
exports.ContactService = ContactService;
