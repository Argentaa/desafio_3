import { getDatabase } from '../database/database';
import { ContactSubmission } from '../models/ContactSubmission';

export class ContactService {
  static async saveContactSubmission(submission: ContactSubmission): Promise<number> {
    const db = await getDatabase();
    
    const result = await db.run(
      `INSERT INTO contact_submissions 
       (full_name, phone, email, city, state, product_id) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        submission.full_name,
        submission.phone,
        submission.email,
        submission.city,
        submission.state,
        submission.product_id || null
      ]
    );
    
    return result.lastID || 0;
  }

  static async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    const db = await getDatabase();
    return db.all<ContactSubmission[]>('SELECT * FROM contact_submissions ORDER BY created_at DESC');
  }

  static async getContactSubmissionById(id: number): Promise<ContactSubmission | undefined> {
    const db = await getDatabase();
    return db.get<ContactSubmission>('SELECT * FROM contact_submissions WHERE id = ?', [id]);
  }
}
