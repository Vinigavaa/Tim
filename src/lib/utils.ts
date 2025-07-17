import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilitários para WhatsApp
export const WHATSAPP_PHONE = "5548998438888";

export const WHATSAPP_MESSAGES = {
  CONTACT_GENERAL: "Olá! Gostaria de falar sobre os serviços da TIM Santa Luzia. Podem me ajudar?",
  START_NOW: "Olá! Gostaria de falar sobre os serviços da TIM Santa Luzia. Podem me ajudar?",
  LEARN_MORE: "Olá! Gostaria de falar sobre os serviços da TIM Santa Luzia. Podem me ajudar?",
  APPROACH: "Olá! Quero conhecer melhor a abordagem da TIM Santa Luzia",
  CONSULTATION: "Olá! Gostaria de falar sobre os serviços da TIM Santa Luzia. Podem me ajudar?",
  PHONE_CONTACT: "Olá! Vi o site da TIM Santa Luiza!",
  FOOTER_CONTACT: "Olá! Acessei o site da TIM e tenho interesse nos serviços de vocês",
  REPAIR: "Olá! Preciso de assistência técnica para meu celular. Podem me ajudar?"

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
