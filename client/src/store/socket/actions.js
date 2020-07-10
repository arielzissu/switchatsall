export const connectionUpdated = isConnected => ({
  type: 'CONNECTION_UPDATED',
  connected: isConnected,
  error: false
});
