// EmailJS Configuration
export const emailjsConfig = {
  serviceId: 'service_ws0xotv', // Você precisa configurar no EmailJS
  templateId: 'template_ilqw17w', // Você precisa configurar no EmailJS
  publicKey: 'J0PI2ha6qc1Wcy4hY' // Sua chave pública do EmailJS
};

// Estrutura do template de email que será configurado no EmailJS
export interface EmailTemplate {
  to_email: string;
  from_name: string;
  to_name: string;
  subject: string;
  nome: string;
  instagram: string;
  ramo_negocio: string;
  faturamento: string;
  data_envio: string;
} 