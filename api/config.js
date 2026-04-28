module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
  res.status(200).json({
    apiKey: process.env.GOOGLE_MAPS_API || '',
    mapId: process.env.GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID'
  });
};
