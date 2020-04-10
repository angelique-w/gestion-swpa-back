const User = require("./models/user");
const Role = require("./models/role");
const Capacity = require("./models/capacity");
const Prestation = require("./models/prestation");
const Contract = require("./models/contract");
const User_Prestation = require("./models/user_prestation");

User.belongsTo(Role, { foreignKey: "roleId" });
Role.hasMany(User, { foreignKey: "roleId" });

User.belongsTo(Capacity, { foreignKey: "capacityId" });
Capacity.hasMany(User, { foreignKey: "capacityId" });

Prestation.belongsTo(Contract, { foreignKey: "contractId" });
Contract.hasMany(Prestation, { foreignKey: "contractId" });

User.belongsToMany(Prestation, { through: User_Prestation });
Prestation.belongsToMany(User, { through: User_Prestation });
User.hasMany(User_Prestation);
User_Prestation.belongsTo(User);
Prestation.hasMany(User_Prestation);
User_Prestation.belongsTo(Prestation);
