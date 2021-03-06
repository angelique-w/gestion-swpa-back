// import des modèles pour créer les données solides
const Role = require("./models/role");
const Capacity = require("./models/capacity");
const Contract = require("./models/contract");
const User = require("./models/user");

Role.create({ id: 1, role: "superAdmin" });
Role.create({ id: 2, role: "admin" });
Role.create({ id: 3, role: "member" });
Capacity.create({ id: 1, capacity: "piper" });
Capacity.create({ id: 2, capacity: "snare" });
Capacity.create({ id: 3, capacity: "tenor" });
Capacity.create({ id: 4, capacity: "bass" });
Capacity.create({ id: 5, capacity: "flag" });
Contract.create({ id: 1, contract: "PB" });
Contract.create({ id: 2, contract: "1/2 PB" });
Contract.create({ id: 3, contract: "autre" });
User.create({
    name: "Wons",
    firstname: "Angelique",
    pseudo: "angelique_wons",
    password: "angeliqueSuperAdmin",
    capacityId: 1,
    roleId: 1,
});
