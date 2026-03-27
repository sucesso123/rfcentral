import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Phone, MessageCircle, FileText, Wrench, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/5511952019716', '_blank');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <View style={styles.headerContent}>
          <Text style={[styles.logo, isMobile && styles.logoMobile]}>Sem Parar</Text>
          <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>Central de Autoatendimento</Text>
        </View>
      </View>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeTitle, isMobile && styles.welcomeTitleMobile]}>
            Bem-vindo ao Atendimento
          </Text>
          <Text style={[styles.welcomeText, isMobile && styles.welcomeTextMobile]}>
            Escolha uma das opções abaixo para começar
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.primaryButton, isMobile && styles.buttonMobile]}
            onPress={handleOpenWhatsApp}
          >
            <View style={styles.buttonIconContent}>
              <Phone size={24} color="white" strokeWidth={2.5} />
              <Text style={[styles.primaryButtonText, isMobile && styles.buttonTextMobile]}>
                Iniciar Atendimento Seguro
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryButton, isMobile && styles.buttonMobile]}
            onPress={handleOpenWhatsApp}
          >
            <View style={styles.buttonIconContent}>
              <MessageCircle size={24} color="white" strokeWidth={2.5} />
              <Text style={[styles.secondaryButtonText, isMobile && styles.buttonTextMobile]}>
                Falar com Suporte
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.divider, isMobile && styles.dividerMobile]} />

        <View style={styles.servicesSection}>
          <Text style={[styles.servicesTitle, isMobile && styles.servicesTitleMobile]}>
            Serviços Disponíveis
          </Text>

          <View style={[styles.servicesGrid, isMobile && styles.servicesGridMobile]}>
            <TouchableOpacity
              style={[styles.serviceCard, isMobile && styles.serviceCardMobile]}
              onPress={() => router.push('/segunda-via')}
            >
              <View style={styles.serviceIconContainer}>
                <FileText size={32} color="#FF6600" strokeWidth={2} />
              </View>
              <Text style={[styles.serviceCardTitle, isMobile && styles.serviceCardTitleMobile]}>
                2ª Via de Boleto
              </Text>
              <Text style={[styles.serviceCardDescription, isMobile && styles.serviceCardDescriptionMobile]}>
                Solicite segunda via
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, isMobile && styles.serviceCardMobile]}
              onPress={() => router.push('/suporte-tecnico')}
            >
              <View style={styles.serviceIconContainer}>
                <Wrench size={32} color="#FF6600" strokeWidth={2} />
              </View>
              <Text style={[styles.serviceCardTitle, isMobile && styles.serviceCardTitleMobile]}>
                Suporte Técnico
              </Text>
              <Text style={[styles.serviceCardDescription, isMobile && styles.serviceCardDescriptionMobile]}>
                Resolva problemas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, isMobile && styles.serviceCardMobile]}
              onPress={() => router.push('/outros-assuntos')}
            >
              <View style={styles.serviceIconContainer}>
                <MoreHorizontal size={32} color="#FF6600" strokeWidth={2} />
              </View>
              <Text style={[styles.serviceCardTitle, isMobile && styles.serviceCardTitleMobile]}>
                Outros Assuntos
              </Text>
              <Text style={[styles.serviceCardDescription, isMobile && styles.serviceCardDescriptionMobile]}>
                Outras necessidades
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.contactButton, isMobile && styles.contactButtonMobile]}
          onPress={handleOpenWhatsApp}
        >
          <MessageCircle size={20} color="#FF6600" strokeWidth={2} />
          <Text style={styles.contactButtonText}>Fale Conosco</Text>
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
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMobile: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerContent: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  logoMobile: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  subtitleMobile: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    maxWidth: 1000,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  contentMobile: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcomeSection: {
    marginBottom: 50,
    textAlign: 'center',
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 12,
  },
  welcomeTitleMobile: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
    lineHeight: 27,
  },
  welcomeTextMobile: {
    fontSize: 16,
  },
  actionButtons: {
    marginBottom: 50,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#FF6600',
    paddingHorizontal: 32,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    backgroundColor: '#004B9B',
    paddingHorizontal: 32,
    paddingVertical: 20,
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
  buttonIconContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  buttonTextMobile: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 50,
  },
  dividerMobile: {
    marginVertical: 30,
  },
  servicesSection: {
    marginBottom: 50,
  },
  servicesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 32,
    textAlign: 'center',
  },
  servicesTitleMobile: {
    fontSize: 22,
    marginBottom: 24,
  },
  servicesGrid: {
    flexDirection: 'row',
    gap: 24,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  servicesGridMobile: {
    gap: 16,
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 32,
    width: 280,
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  serviceCardMobile: {
    width: '100%',
    padding: 24,
  },
  serviceIconContainer: {
    marginBottom: 16,
  },
  serviceCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004B9B',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceCardTitleMobile: {
    fontSize: 16,
  },
  serviceCardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  serviceCardDescriptionMobile: {
    fontSize: 13,
  },
  contactButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 40,
    borderWidth: 2,
    borderColor: '#FF6600',
  },
  contactButtonMobile: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6600',
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
