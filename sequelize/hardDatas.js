// import des modèles pour créer les données solides
const Role = require("./models/roles");
const Capacity = require("./models/capacities");
const Contract = require("./models/contracts");
const User = require("./models/users");

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
    password: "angeliqueSuperAdmin",
});
