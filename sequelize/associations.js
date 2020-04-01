const User = require("./models/users");
const Role = require("./models/roles");
const Capacity = require("./models/capacities");
const Prestation = require("./models/prestations");
const Contract = require("./models/contracts");
const Show = require("./models/shows");

User.belongsTo(Role);
Role.hasMany(User);

User.belongsTo(Capacity);
Capacity.hasMany(User);

Prestation.belongsTo(Contract);
Contract.hasMany(Prestation);

User.belongsToMany(Prestation, { through: Show });
Prestation.belongsToMany(User, { through: Show });
