export const WHATSAPP_NUMBER = '5511964323323';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const openWhatsApp = (message?: string) => {
  const url = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  window.open(url, '_blank');
};
