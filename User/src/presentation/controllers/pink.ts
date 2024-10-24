export const pingFunction = (req, res) => {
  res.status(200).json({
    success: true,
    data: "Pong",
    message: "Pong created!",
  });
};
