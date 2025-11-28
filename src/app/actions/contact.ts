"use server";


/**
 * Logica para el envio del formulario de contacto
 */
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-form.schema";

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch('example-envio', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result 
  } catch (error) {
    throw error
  }
 
}
