import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, FileText, MessageCircle } from 'lucide-react-native';

export default function SegundaVia() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleOpenWhatsApp = (message: string) => {
    window.open(`https://wa.me/5511964323323?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="white" strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={[styles.title, isMobile && styles.titleMobile]}>2ª Via de Boleto</Text>
          <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>
            Solicite a segunda via do seu boleto
          </Text>
        </View>
      </View>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <FileText size={28} color="#FF6600" strokeWidth={2} />
            <Text style={[styles.infoTitle, isMobile && styles.infoTitleMobile]}>
              Como funciona
            </Text>
          </View>
          <Text style={[styles.infoText, isMobile && styles.infoTextMobile]}>
            Para solicitar a segunda via do seu boleto, entre em contato conosco pelo WhatsApp.
            Nosso time de atendimento está pronto para ajudar você a recuperar seus dados de pagamento
            e enviar uma nova cópia do boleto.
          </Text>
        </View>

        <View style={styles.stepsContainer}>
          <Text style={[styles.stepsTitle, isMobile && styles.stepsTitleMobile]}>
            Passo a passo
          </Text>

          {[
            { step: '1', title: 'Entre em contato', desc: 'Clique no botão abaixo para iniciar o chat' },
            { step: '2', title: 'Informe seus dados', desc: 'Compartilhe as informações necessárias' },
            { step: '3', title: 'Receba o boleto', desc: 'Você receberá a segunda via em minutos' },
          ].map((item) => (
            <View key={item.step} style={[styles.stepItem, isMobile && styles.stepItemMobile]}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{item.step}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={[styles.stepTitle, isMobile && styles.stepTitleMobile]}>{item.title}</Text>
                <Text style={[styles.stepDesc, isMobile && styles.stepDescMobile]}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, isMobile && styles.buttonMobile]}
          onPress={() => handleOpenWhatsApp('Olá, gostaria de solicitar a segunda via do meu boleto.')}
        >
          <MessageCircle size={24} color="white" strokeWidth={2.5} />
          <Text style={[styles.buttonText, isMobile && styles.buttonTextMobile]}>
            Solicitar Segunda Via
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, isMobile && styles.buttonMobile]}
          onPress={() => router.push('/')}
        >
          <Text style={[styles.secondaryButtonText, isMobile && styles.buttonTextMobile]}>
            Voltar para Home
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.footer, isMobile && styles.footerMobile]}>
        <Text style={[styles.footerText, isMobile && styles.footerTextMobile]}>
          © 2024 Sem Parar. Todos os direitos reservados.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'linear-gradient(135deg, #FF6600 0%, #004B9B 100%)',
    paddingHorizontal: 40,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  headerMobile: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  titleMobile: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  subtitleMobile: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    maxWidth: 900,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 40,
    paddingVertical: 40,
    gap: 32,
  },
  contentMobile: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#004B9B',
  },
  infoTitleMobile: {
    fontSize: 18,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  infoTextMobile: {
    fontSize: 14,
    lineHeight: 22,
  },
  stepsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  stepsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 24,
  },
  stepsTitleMobile: {
    fontSize: 18,
    marginBottom: 16,
  },
  stepItem: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 24,
  },
  stepItemMobile: {
    gap: 16,
    marginBottom: 20,
  },
  stepNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepNumberText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  stepContent: {
    flex: 1,
    paddingVertical: 4,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004B9B',
    marginBottom: 4,
  },
  stepTitleMobile: {
    fontSize: 14,
  },
  stepDesc: {
    fontSize: 14,
    color: '#666',
  },
  stepDescMobile: {
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: '#FF6600',
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    backgroundColor: '#004B9B',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0, 75, 155, 0.3)',
    transition: 'all 0.3s ease',
  },
  buttonMobile: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  buttonTextMobile: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 40,
    paddingVertical: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerMobile: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  footerTextMobile: {
    fontSize: 12,
  },
});
