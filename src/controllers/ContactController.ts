import { Request, Response } from 'express';
import { ContactService } from '../services/ContactService';
import { ContactSubmission } from '../models/ContactSubmission';

export class ContactController {

  static async saveContactSubmission(req: Request, res: Response): Promise<void> {
    try {
      const { full_name, phone, email, city, state, product_id } = req.body;
      
      if (!full_name || !phone || !email || !city || !state) {
        res.status(400).json({ error: 'All fields are required' });
        return;
      }
      
      const submission: ContactSubmission = {
        full_name,
        phone,
        email,
        city,
        state,
        product_id: product_id ? parseInt(product_id) : null
      };
      
      const id = await ContactService.saveContactSubmission(submission);
      
      res.status(201).json({ 
        id,
        message: 'Contact form submitted successfully' 
      });
    } catch (error) {
      console.error('Error saving contact submission:', error);
      res.status(500).json({ error: 'Failed to save contact submission' });
    }
  }
}
