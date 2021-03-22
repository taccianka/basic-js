const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamArr = [];
  let dreamTeam;

  if (members == null || !Array.isArray(members)) return false;

  members.forEach((element) => {
    if (typeof element == "string") {
      element = element.trim();
      dreamTeamArr.push(element[0].toUpperCase());
    }
  });

  dreamTeamArr.sort();
  dreamTeam = dreamTeamArr.join("");

  return dreamTeam;
};
