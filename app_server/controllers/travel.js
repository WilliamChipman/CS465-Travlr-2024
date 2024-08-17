var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways", trips });
};
module.exports = {
  travel,
};
