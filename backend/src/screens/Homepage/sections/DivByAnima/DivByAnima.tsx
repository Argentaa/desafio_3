import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { contactApi } from "../../../../services/api";
import { ContactSubmission } from "../../../../types/ContactSubmission";
import { useAppContext } from "../../../../context/AppContext";

export const DivByAnima = (): JSX.Element => {
  const { featuredProducts } = useAppContext();
  const [formData, setFormData] = useState<Omit<ContactSubmission, 'id' | 'created_at'>>({
    full_name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    product_id: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'product_id' ? (value ? parseInt(value) : null) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await contactApi.submit(formData);
      setSubmitSuccess(true);
      setFormData({
        full_name: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        product_id: null
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-32">
      <div className="flex flex-col gap-0.5 mb-8">
        <h3 className="font-body-16px-medium text-black text-center">Contact Us</h3>
        <h2 className="[font-family:'SVN-Gilroy-Bold',Helvetica] font-bold text-primary-colordark-blue text-xl md:text-2xl leading-9 text-center">   
          Get In Touch With Us
        </h2>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        {submitSuccess ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-green-600 mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="rounded-full bg-primary-colordark-blue text-white px-6 py-2"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {submitError}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="product_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Product (Optional)
                </label>
                <select
                  id="product_id"
                  name="product_id"
                  value={formData.product_id || ''}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-colordark-blue focus:ring-primary-colordark-blue"
                >
                  <option value="">Select a product</option>
                  {featuredProducts.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md"
                  placeholder="Your city"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province *
                </label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md"
                  placeholder="Your state or province"
                />
              </div>
            </div>
            
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-primary-colordark-blue text-white px-8 py-3 h-auto font-medium text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
