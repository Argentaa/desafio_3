"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const ContactService_1 = require("../services/ContactService");
class ContactController {
    static async saveContactSubmission(req, res) {
        try {
            const { full_name, phone, email, city, state, product_id } = req.body;
            if (!full_name || !phone || !email || !city || !state) {
                res.status(400).json({ error: 'All fields are required' });
                return;
            }
            const submission = {
                full_name,
                phone,
                email,
                city,
                state,
                product_id: product_id ? parseInt(product_id) : null
            };
            const id = await ContactService_1.ContactService.saveContactSubmission(submission);
            res.status(201).json({
                id,
                message: 'Contact form submitted successfully'
            });
        }
        catch (error) {
            console.error('Error saving contact submission:', error);
            res.status(500).json({ error: 'Failed to save contact submission' });
        }
    }
}
exports.ContactController = ContactController;
