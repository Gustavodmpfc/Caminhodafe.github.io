import { useEffect, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Bell, BellRing, CalendarDays, Check, Clock3, Megaphone, UsersRound } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import { announcements as seedAnnouncements, currentUser } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { loadAnnouncements, loadReadAnnouncements, markAnnouncementRead, publishAnnouncement } from '../services/announcements';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

const parishWide = 'Todas as turmas';

export default function AnnouncementsScreen() {
  const { user, profile, isRemoteUser } = useAuth();
  const userId = user?.id || 'anonymous';
  const userTurma = profile?.turma || user?.user_metadata?.turma || (!isRemoteUser ? currentUser.turma : null);
  const role = profile?.tipo_usuario || user?.user_metadata?.tipo_usuario;
  const canPublish = ['catequista', 'admin_geral', 'admin_pedagogico'].includes(role) || user?.id === 'demo-team-member';
  const [items, setItems] = useState(seedAnnouncements);
  const [readIds, setReadIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [specificTurma, setSpecificTurma] = useState(false);
  const [targetTurma, setTargetTurma] = useState(userTurma || 'Catequese 2026 - Crisma');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    Promise.all([loadAnnouncements(), loadReadAnnouncements(userId)])
      .then(([loadedItems, loadedReadIds]) => {
        if (!active) return;
        setItems(loadedItems);
        setReadIds(loadedReadIds);
        setLoadError('');
      })
      .catch((error) => {
        if (active) setLoadError(error instanceof Error ? error.message : 'Não foi possível carregar os comunicados.');
      })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [userId]);

  const visibleItems = useMemo(
    () => items.filter((item) => !item.turma || (userTurma && item.turma === userTurma)),
    [items, userTurma]
  );
  const unreadCount = visibleItems.filter((item) => !readIds.includes(item.id)).length;

  async function handleRead(item) {
    try {
      setReadIds(await markAnnouncementRead(userId, item.id));
    } catch (error) {
      Alert.alert('Não foi possível confirmar a leitura', error instanceof Error ? error.message : 'Tente novamente.');
    }
  }

  async function handlePublish() {
    if (!title.trim() || !message.trim()) {
      Alert.alert('Preencha o comunicado', 'Informe um título e uma mensagem antes de publicar.');
      return;
    }
    if (specificTurma && !targetTurma.trim()) {
      Alert.alert('Informe a turma', 'Digite a turma que receberá este comunicado.');
      return;
    }
    setSaving(true);
    try {
      const item = {
        id: `comunicado-${Date.now()}`,
        titulo: title.trim(),
        mensagem: message.trim(),
        data: new Date().toLocaleDateString('pt-BR'),
        encontroData: eventDate.trim(),
        encontroHorario: eventTime.trim(),
        turma: specificTurma ? targetTurma.trim() : null,
      };
      setItems(await publishAnnouncement(item));
      setTitle('');
      setMessage('');
      setEventDate('');
      setEventTime('');
      Alert.alert('Comunicado publicado', 'O aviso está salvo neste dispositivo para demonstração.');
    } catch (error) {
      Alert.alert('Não foi possível publicar', error instanceof Error ? error.message : 'Tente novamente.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Comunicados" subtitle="Avisos importantes da paróquia e da sua turma." />

      <View style={styles.noticeBanner}>
        {unreadCount ? <BellRing size={22} color="#A97811" /> : <Bell size={22} color={theme.colors.primaryDark} />}
        <View style={styles.bannerCopy}>
          <Text style={styles.bannerTitle}>{unreadCount ? `${unreadCount} ${unreadCount === 1 ? 'novo aviso' : 'novos avisos'}` : 'Tudo em dia'}</Text>
          <Text style={styles.bannerText}>{unreadCount ? 'Abra cada comunicado e confirme a leitura.' : 'Você já leu todos os comunicados disponíveis.'}</Text>
        </View>
      </View>

      {loadError ? <InfoCard title="Avisos salvos indisponíveis" description={loadError} /> : null}
      {loading ? <InfoCard title="Carregando comunicados" description="Buscando os avisos da paróquia e da sua turma." /> : null}
      {!loading && visibleItems.length === 0 ? <InfoCard title="Nenhum comunicado" description="Quando a paróquia publicar um aviso, ele aparecerá aqui." /> : null}

      {visibleItems.map((item) => {
        const isRead = readIds.includes(item.id);
        return (
          <InfoCard key={item.id} title={item.titulo} description={item.mensagem} tone={isRead ? 'default' : 'gold'}>
            <View style={styles.metadataRow}>
              <CalendarDays size={15} color={theme.colors.primaryDark} />
              <Text style={styles.metadataText}>Publicado em {item.data}</Text>
            </View>
            {item.encontroEm ? (
              <View style={styles.metadataRow}>
                <Clock3 size={15} color={theme.colors.primaryDark} />
                <Text style={styles.metadataText}>Encontro: {new Date(item.encontroEm).toLocaleDateString('pt-BR')} às {new Date(item.encontroEm).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
              </View>
            ) : null}
            {item.encontroData ? (
              <View style={styles.metadataRow}>
                <Clock3 size={15} color={theme.colors.primaryDark} />
                <Text style={styles.metadataText}>Encontro: {item.encontroData}{item.encontroHorario ? ` às ${item.encontroHorario}` : ''}</Text>
              </View>
            ) : null}
            <View style={styles.metadataRow}>
              <UsersRound size={15} color={theme.colors.primaryDark} />
              <Text style={styles.metadataText}>{item.turma || parishWide}</Text>
            </View>
            <Pressable accessibilityRole="button" disabled={isRead} onPress={() => handleRead(item)} style={[styles.readButton, isRead && styles.readButtonDone]}>
              <Check size={16} color={isRead ? '#2F7B4B' : '#FFFFFF'} />
              <Text style={[styles.readButtonText, isRead && styles.readButtonTextDone]}>{isRead ? 'Leitura confirmada' : 'Marcar como lido'}</Text>
            </Pressable>
          </InfoCard>
        );
      })}

      {canPublish ? (
        <InfoCard title="Publicar comunicado" description="Envie um aviso para toda a paróquia ou para uma turma específica." tone="gold">
          <TextInput style={styles.input} placeholder="Título do comunicado" value={title} onChangeText={setTitle} maxLength={80} />
          <TextInput style={[styles.input, styles.textArea]} placeholder="Mensagem" value={message} onChangeText={setMessage} multiline maxLength={500} />
          <Text style={styles.fieldLabel}>Público do aviso</Text>
          <View style={styles.audienceChoices}>
            <Pressable accessibilityRole="button" onPress={() => setSpecificTurma(false)} style={[styles.audienceChoice, !specificTurma && styles.audienceChoiceSelected]}>
              <Text style={[styles.audienceText, !specificTurma && styles.audienceTextSelected]}>{parishWide}</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => setSpecificTurma(true)} style={[styles.audienceChoice, specificTurma && styles.audienceChoiceSelected]}>
              <Text style={[styles.audienceText, specificTurma && styles.audienceTextSelected]}>Turma específica</Text>
            </Pressable>
          </View>
          {specificTurma ? <TextInput style={styles.input} placeholder="Nome da turma" value={targetTurma} onChangeText={setTargetTurma} /> : null}
          <Text style={styles.fieldLabel}>Encontro (opcional)</Text>
          <View style={styles.eventFields}>
            <TextInput style={[styles.input, styles.eventInput]} placeholder="Data (dd/mm/aaaa)" value={eventDate} onChangeText={setEventDate} />
            <TextInput style={[styles.input, styles.eventInput]} placeholder="Horário" value={eventTime} onChangeText={setEventTime} />
          </View>
          <AppButton title="Publicar aviso" icon={Megaphone} loading={saving} onPress={handlePublish} />
        </InfoCard>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  noticeBanner: { alignItems: 'center', backgroundColor: '#FFF6DF', borderColor: '#EBD9A8', borderRadius: 16, borderWidth: 1, flexDirection: 'row', gap: 12, marginBottom: theme.spacing.md, padding: 14 },
  bannerCopy: { flex: 1 },
  bannerTitle: { color: theme.colors.text, fontSize: 15, fontWeight: '900' },
  bannerText: { color: theme.colors.muted, fontSize: 13, lineHeight: 18, marginTop: 2 },
  metadataRow: { alignItems: 'center', flexDirection: 'row', gap: 7, marginTop: 10 },
  metadataText: { color: theme.colors.muted, flex: 1, fontSize: 13, fontWeight: '600' },
  readButton: { alignItems: 'center', alignSelf: 'flex-start', backgroundColor: theme.colors.primaryDark, borderRadius: 10, flexDirection: 'row', gap: 7, marginTop: 13, paddingHorizontal: 12, paddingVertical: 9 },
  readButtonDone: { backgroundColor: '#EEF8EF' },
  readButtonText: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  readButtonTextDone: { color: '#2F7B4B' },
  input: { backgroundColor: theme.colors.surface, borderColor: theme.colors.border, borderRadius: theme.radius.md, borderWidth: 1, fontSize: 15, marginTop: theme.spacing.sm, padding: theme.spacing.md },
  textArea: { minHeight: 92, textAlignVertical: 'top' },
  fieldLabel: { color: theme.colors.text, fontSize: 14, fontWeight: '800', marginTop: 14 },
  audienceChoices: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  audienceChoice: { backgroundColor: '#FFFFFF', borderColor: theme.colors.border, borderRadius: 18, borderWidth: 1, paddingHorizontal: 11, paddingVertical: 8 },
  audienceChoiceSelected: { backgroundColor: theme.colors.softGreen, borderColor: theme.colors.primary },
  audienceText: { color: theme.colors.muted, fontSize: 12, fontWeight: '700' },
  audienceTextSelected: { color: theme.colors.primaryDark },
  eventFields: { flexDirection: 'row', gap: 8 },
  eventInput: { flex: 1, minWidth: 0 },
});
