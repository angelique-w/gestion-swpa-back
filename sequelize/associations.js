const User = require("./models/users");
const Role = require("./models/roles");
const Capacity = require("./models/capacities");
const Prestation = require("./models/prestations");
const Contract = require("./models/contracts");
const Show = require("./models/shows");

User.belongsTo(Role, { foreignKey: "roleId" });
Role.hasMany(User, { foreignKey: "roleId" });

User.belongsTo(Capacity, { foreignKey: "capacityId" });
Capacity.hasMany(User, { foreignKey: "capacityId" });

Prestation.belongsTo(Contract, { foreignKey: "contractId" });
Contract.hasMany(Prestation, { foreignKey: "contractId" });

User.belongsToMany(Prestation, { through: Show });
Prestation.belongsToMany(User, { through: Show });
