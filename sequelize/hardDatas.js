// import des modèles pour créer les données solides
const Role = require("./models/roles");
const Capacity = require("./models/capacities");
const Contract = require("./models/contracts");
const User = require("./models/users");

Role.create({ role: "superAdmin" });
Role.create({ role: "admin" });
Role.create({ role: "member" });
Capacity.create({ capacity: "piper" });
Capacity.create({ capacity: "snare" });
Capacity.create({ capacity: "tenor" });
Capacity.create({ capacity: "bass" });
Capacity.create({ capacity: "flag" });
Contract.create({ contract: "PB" });
Contract.create({ contract: "1/2 PB" });
Contract.create({ contract: "autre" });
User.create({
    name: "superAdmin",
    firstname: "Angelique",
    password: "angeliqueSuperAdmin"
});
