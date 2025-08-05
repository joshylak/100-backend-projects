export const checkHealth = async () => {
  return {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now()
  };
};
