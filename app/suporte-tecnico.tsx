import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Wrench, MessageCircle, CircleAlert as AlertCircle, Zap } from 'lucide-react-native';

export default function SuporteTecnico() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleOpenWhatsApp = (message: string) => {
    window.open(`https://wa.me/5511964323323?text=${encodeURIComponent(message)}`, '_blank');
  };

  const issues = [
    { icon: AlertCircle, title: 'Erro na leitura', desc: 'Seu dispositivo não está sendo lido corretamente' },
    { icon: Zap, title: 'Bateria baixa', desc: 'Seu tag está com bateria baixa ou sem bateria' },
    { icon: Wrench, title: 'Problemas gerais', desc: 'Qualquer outro problema técnico' },
  ];

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
          <Text style={[styles.title, isMobile && styles.titleMobile]}>Suporte Técnico</Text>
          <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>
            Resolva seus problemas técnicos
          </Text>
        </View>
      </View>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Wrench size={28} color="#FF6600" strokeWidth={2} />
            <Text style={[styles.infoTitle, isMobile && styles.infoTitleMobile]}>
              Estamos aqui para ajudar
            </Text>
          </View>
          <Text style={[styles.infoText, isMobile && styles.infoTextMobile]}>
            Nosso time técnico especializado está pronto para resolver qualquer problema com seu tag Sem Parar.
            Selecione o tipo de problema que você está enfrentando ou entre em contato direto conosco.
          </Text>
        </View>

        <View style={styles.issuesContainer}>
          <Text style={[styles.issuesTitle, isMobile && styles.issuesTitleMobile]}>
            Tipos de problema
          </Text>
          <View style={[styles.issuesGrid, isMobile && styles.issuesGridMobile]}>
            {issues.map((issue, index) => {
              const IconComponent = issue.icon;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.issueCard, isMobile && styles.issueCardMobile]}
                  onPress={() => handleOpenWhatsApp(`Olá, estou com um problema técnico: ${issue.title.toLowerCase()}`)}
                >
                  <View style={styles.issueIconContainer}>
                    <IconComponent size={32} color="#FF6600" strokeWidth={2} />
                  </View>
                  <Text style={[styles.issueTitle, isMobile && styles.issueTitleMobile]}>
                    {issue.title}
                  </Text>
                  <Text style={[styles.issueDesc, isMobile && styles.issueDescMobile]}>
                    {issue.desc}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.faqContainer}>
          <Text style={[styles.faqTitle, isMobile && styles.faqTitleMobile]}>
            Dúvidas frequentes
          </Text>
          {[
            { q: 'Como verifico a bateria do meu tag?', a: 'O dispositivo emite um bip quando a bateria está baixa. Procure um atendente nos pórticos de pedágio para substituição.' },
            { q: 'Qual o tempo de resposta?', a: 'Respondemos todas as solicitações em até 1 hora nos horários de atendimento.' },
            { q: 'Como faço backup?', a: 'Seus dados estão sempre sincronizados. Não é necessário fazer backup manual.' },
          ].map((faq, index) => (
            <View key={index} style={[styles.faqItem, isMobile && styles.faqItemMobile]}>
              <Text style={[styles.faqQuestion, isMobile && styles.faqQuestionMobile]}>
                Q: {faq.q}
              </Text>
              <Text style={[styles.faqAnswer, isMobile && styles.faqAnswerMobile]}>
                R: {faq.a}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, isMobile && styles.buttonMobile]}
          onPress={() => handleOpenWhatsApp('Olá, preciso de suporte técnico para meu tag Sem Parar.')}
        >
          <MessageCircle size={24} color="white" strokeWidth={2.5} />
          <Text style={[styles.buttonText, isMobile && styles.buttonTextMobile]}>
            Falar com Suporte Técnico
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
  issuesContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  issuesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 24,
  },
  issuesTitleMobile: {
    fontSize: 18,
    marginBottom: 16,
  },
  issuesGrid: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  issuesGridMobile: {
    gap: 12,
  },
  issueCard: {
    flex: 1,
    minWidth: 240,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  issueCardMobile: {
    minWidth: 'auto',
    width: '100%',
  },
  issueIconContainer: {
    marginBottom: 12,
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004B9B',
    marginBottom: 8,
    textAlign: 'center',
  },
  issueTitleMobile: {
    fontSize: 14,
  },
  issueDesc: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  issueDescMobile: {
    fontSize: 12,
  },
  faqContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  faqTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 24,
  },
  faqTitleMobile: {
    fontSize: 18,
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  faqItemMobile: {
    marginBottom: 16,
    paddingBottom: 16,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '600',
    color: '#004B9B',
    marginBottom: 8,
  },
  faqQuestionMobile: {
    fontSize: 13,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 21,
  },
  faqAnswerMobile: {
    fontSize: 12,
    lineHeight: 19,
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
