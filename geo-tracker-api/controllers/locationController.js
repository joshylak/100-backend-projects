let locationHistory = [];  // In-memory storage

export const saveLocation = async (req, res) => {
  const { userId, latitude, longitude } = req.body;

  if (!userId || !latitude || !longitude) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const location = {
    userId,
    latitude,
    longitude,
    timestamp: new Date().toISOString()
  };

  locationHistory.push(location);

  res.status(201).json({ message: "Location saved", location });
};

export const getLocations = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const userLocations = locationHistory.filter(loc => loc.userId === userId);

  res.status(200).json({ locations: userLocations });
};
