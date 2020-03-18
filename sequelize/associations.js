const User = require("./models/users");
const Role = require("./models/roles");
const Capacity = require("./models/capacities");
const Prestation = require("./models/prestations");
const Contract = require("./models/contracts");
const Presence = require("./models/presences");

User.belongsTo(Role);
Role.hasMany(User);

User.belongsTo(Capacity);
Capacity.hasMany(User);

Prestation.belongsTo(Contract);
Contract.hasMany(Prestation);

User.belongsToMany(Prestation, { through: "Shows" });
Prestation.belongsToMany(User, { through: "Shows" });
User.belongsToMany(Presence, { through: "Shows" });
Presence.belongsToMany(User, { through: "Shows" });
Prestation.belongsToMany(Presence, { through: "Shows" });
Presence.belongsToMany(Prestation, { through: "Shows" });
