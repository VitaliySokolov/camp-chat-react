export const SWITCH_CHAT = 'SWITCH_CHAT';

export function switchChat(chatId) {
  return {
    type: SWITCH_CHAT,
    payload: chatId
  };
}
