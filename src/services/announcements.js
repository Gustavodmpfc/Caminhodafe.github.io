import AsyncStorage from '@react-native-async-storage/async-storage';
import { announcements as seedAnnouncements } from '../data/mockData';

const announcementsKey = '@caminho-da-fe:announcements';
const readKey = (userId) => `@caminho-da-fe:announcements:read:${encodeURIComponent(userId || 'anonymous')}`;

export async function loadAnnouncements() {
  const saved = await AsyncStorage.getItem(announcementsKey);
  if (!saved) return seedAnnouncements;

  let parsed;
  try {
    parsed = JSON.parse(saved);
  } catch {
    throw new Error('A lista de comunicados salvos está inválida.');
  }
  if (!Array.isArray(parsed)) throw new Error('A lista de comunicados salvos está inválida.');
  const savedIds = new Set(parsed.map((item) => item?.id).filter(Boolean));
  return [...parsed.filter((item) => item?.id), ...seedAnnouncements.filter((item) => !savedIds.has(item.id))];
}

export async function publishAnnouncement(announcement) {
  const current = await loadAnnouncements();
  const next = [announcement, ...current];
  await AsyncStorage.setItem(announcementsKey, JSON.stringify(next));
  return next;
}

export async function loadReadAnnouncements(userId) {
  const saved = await AsyncStorage.getItem(readKey(userId));
  if (!saved) return [];
  let parsed;
  try {
    parsed = JSON.parse(saved);
  } catch {
    throw new Error('Os recibos de leitura salvos estão inválidos.');
  }
  if (!Array.isArray(parsed)) throw new Error('Os recibos de leitura salvos estão inválidos.');
  return parsed;
}

export async function markAnnouncementRead(userId, announcementId) {
  const current = await loadReadAnnouncements(userId);
  if (current.includes(announcementId)) return current;
  const next = [...current, announcementId];
  await AsyncStorage.setItem(readKey(userId), JSON.stringify(next));
  return next;
}
