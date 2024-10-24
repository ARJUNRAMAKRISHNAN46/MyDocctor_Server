export const timeFunction = (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    success: true,
    data: currentDate,
    message: "Current time fetched successfully",
  });
};
