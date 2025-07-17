import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilitários para WhatsApp
export const WHATSAPP_PHONE = "554896832076";

export const WHATSAPP_MESSAGES = {
  CONTACT_GENERAL: "Olá! Gostaria de falar sobre os serviços da Prosperity Company. Podem me ajudar?",
  START_NOW: "Olá! Quero começar um projeto de marketing digital agora mesmo. Podem me passar mais informações?",
  LEARN_MORE: "Olá! Gostaria de saber mais sobre os serviços de marketing digital da Prosperity Company",
  APPROACH: "Olá! Quero conhecer melhor a abordagem da Prosperity Company para marketing digital",
  CONSULTATION: "Olá! Gostaria de agendar uma consultoria gratuita para meu negócio",
  PHONE_CONTACT: "Olá! Vi o site da Prosperity Company e gostaria de conversar sobre marketing digital",
  FOOTER_CONTACT: "Olá! Acessei o site da Prosperity Company e tenho interesse nos serviços de vocês"
} as const;

/**
 * Cria URL do WhatsApp com mensagem personalizada
 * @param message - Mensagem a ser enviada
 * @param phone - Número de telefone (opcional, usa o padrão da empresa)
 * @returns URL formatada para WhatsApp
 */
export function createWhatsAppUrl(message: string, phone: string = WHATSAPP_PHONE): string {
  try {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  } catch (error) {
    console.error('Erro ao criar URL do WhatsApp:', error);
    return `https://wa.me/${phone}`;
  }
}

/**
 * Abre WhatsApp de forma segura, com fallbacks
 * @param message - Mensagem a ser enviada
 * @param phone - Número de telefone (opcional)
 */
export function openWhatsApp(message: string, phone: string = WHATSAPP_PHONE): void {
  try {
    const url = createWhatsAppUrl(message, phone);
    
    // Verificar se está no navegador
    if (typeof window !== 'undefined') {
      // Tentar abrir em nova aba
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      // Verificar se o popup foi bloqueado
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Fallback: redirecionar na mesma aba
        window.location.href = url;
      }
    }
  } catch (error) {
    console.error('Erro ao abrir WhatsApp:', error);
    // Fallback de emergência
    if (typeof window !== 'undefined') {
      window.location.href = `https://wa.me/${phone}`;
    }
  }
}

/**
 * Hook para criar handler de clique do WhatsApp
 * @param message - Mensagem a ser enviada
 * @param phone - Número de telefone (opcional)
 * @returns Função handler para onClick
 */
export function createWhatsAppHandler(message: string, phone: string = WHATSAPP_PHONE) {
  return (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    openWhatsApp(message, phone);
  };
}
