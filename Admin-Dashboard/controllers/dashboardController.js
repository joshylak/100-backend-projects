const stats = {
  users: 147,
  sales: 320,
  activeSessions: 42,
  revenue: 27500,
};

exports.getDashboardStats = async (req, res) => {
  // Simulate delay
  await new Promise((r) => setTimeout(r, 300));

  res.json({
    status: 'success',
    data: stats,
  });
};