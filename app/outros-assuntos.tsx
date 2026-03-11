import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, MessageCircle, Circle as HelpCircle, CreditCard, User, Map } from 'lucide-react-native';

export default function OutrosAssuntos() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleOpenWhatsApp = (message: string) => {
    window.open(`https://wa.me/5511964323323?text=${encodeURIComponent(message)}`, '_blank');
  };

  const topics = [
    { icon: CreditCard, title: 'Faturas e Pagamentos', desc: 'Informações sobre faturas e como pagar' },
    { icon: User, title: 'Conta e Dados Pessoais', desc: 'Alterar dados cadastrais e informações da conta' },
    { icon: Map, title: 'Viagens e Histórico', desc: 'Consultar histórico de viagens e passagens' },
    { icon: HelpCircle, title: 'Dúvidas Gerais', desc: 'Qualquer outra dúvida sobre nossos serviços' },
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
          <Text style={[styles.title, isMobile && styles.titleMobile]}>Outros Assuntos</Text>
          <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>
            Encontre ajuda para o que você precisa
          </Text>
        </View>
      </View>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <HelpCircle size={28} color="#FF6600" strokeWidth={2} />
            <Text style={[styles.infoTitle, isMobile && styles.infoTitleMobile]}>
              Como podemos ajudar?
            </Text>
          </View>
          <Text style={[styles.infoText, isMobile && styles.infoTextMobile]}>
            Não encontrou o que procurava? Selecione um dos tópicos abaixo ou entre em contato direto conosco
            e nosso time estará pronto para atendê-lo.
          </Text>
        </View>

        <View style={styles.topicsContainer}>
          <Text style={[styles.topicsTitle, isMobile && styles.topicsTitleMobile]}>
            Assuntos disponíveis
          </Text>
          <View style={[styles.topicsGrid, isMobile && styles.topicsGridMobile]}>
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.topicCard, isMobile && styles.topicCardMobile]}
                  onPress={() => handleOpenWhatsApp(`Olá, gostaria de falar sobre: ${topic.title.toLowerCase()}`)}
                >
                  <View style={styles.topicIconContainer}>
                    <IconComponent size={32} color="#FF6600" strokeWidth={2} />
                  </View>
                  <Text style={[styles.topicTitle, isMobile && styles.topicTitleMobile]}>
                    {topic.title}
                  </Text>
                  <Text style={[styles.topicDesc, isMobile && styles.topicDescMobile]}>
                    {topic.desc}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.contactSection}>
          <Text style={[styles.contactSectionTitle, isMobile && styles.contactSectionTitleMobile]}>
            Informações de Contato
          </Text>
          <View style={[styles.contactInfo, isMobile && styles.contactInfoMobile]}>
            <View style={styles.contactItem}>
              <Text style={[styles.contactLabel, isMobile && styles.contactLabelMobile]}>WhatsApp</Text>
              <Text style={[styles.contactValue, isMobile && styles.contactValueMobile]}>
                (11) 9 6432-3323
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={[styles.contactLabel, isMobile && styles.contactLabelMobile]}>Horário de Atendimento</Text>
              <Text style={[styles.contactValue, isMobile && styles.contactValueMobile]}>
                Segunda a Sexta: 8h às 20h
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={[styles.contactLabel, isMobile && styles.contactLabelMobile]}>Sábado</Text>
              <Text style={[styles.contactValue, isMobile && styles.contactValueMobile]}>
                8h às 14h
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.primaryButton, isMobile && styles.buttonMobile]}
          onPress={() => handleOpenWhatsApp('Olá, gostaria de falar sobre um assunto que não está listado.')}
        >
          <MessageCircle size={24} color="white" strokeWidth={2.5} />
          <Text style={[styles.buttonText, isMobile && styles.buttonTextMobile]}>
            Falar com Suporte Agora
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
  topicsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  topicsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 24,
  },
  topicsTitleMobile: {
    fontSize: 18,
    marginBottom: 16,
  },
  topicsGrid: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  topicsGridMobile: {
    gap: 12,
  },
  topicCard: {
    flex: 1,
    minWidth: 220,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  topicCardMobile: {
    minWidth: 'auto',
    width: '100%',
  },
  topicIconContainer: {
    marginBottom: 12,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004B9B',
    marginBottom: 8,
    textAlign: 'center',
  },
  topicTitleMobile: {
    fontSize: 14,
  },
  topicDesc: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  topicDescMobile: {
    fontSize: 12,
  },
  contactSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  contactSectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 24,
  },
  contactSectionTitleMobile: {
    fontSize: 18,
    marginBottom: 16,
  },
  contactInfo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6600',
  },
  contactInfoMobile: {
    padding: 16,
  },
  contactItem: {
    marginBottom: 16,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004B9B',
    marginBottom: 4,
  },
  contactLabelMobile: {
    fontSize: 12,
  },
  contactValue: {
    fontSize: 16,
    color: '#666',
  },
  contactValueMobile: {
    fontSize: 14,
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
