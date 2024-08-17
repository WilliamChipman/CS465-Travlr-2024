/* GET Contact View */
const contact = (req, res) => {
  res.render("contact", { title: "Travlr Getaways" });
};

module.exports = {
  contact,
};
