const User = require("./models/users");
const Prestation = require("./models/prestations");

const users = [
    {
        name: "McFarlane",
        firstname: "Andrew",
        address: "Hastingues",
        phoneNumber: "06 06 06 06 06",
        eMail: "mcf@gmail.com",
        funcAdmin: "président",
        roleId: 2,
        capacityId: 1,
    },
    {
        name: "Membre",
        firstname: "Ex_Membre1",
        address: "Bayonne",
        phoneNumber: "06 06 06 06 06",
        eMail: "membre@gmail.com",
        roleId: 3,
        capacityId: 4,
    },
    {
        name: "Membre",
        firstname: "Ex_Membre2",
        address: "Dax",
        phoneNumber: "06 06 06 06 06",
        eMail: "membre@gmail.com",
        roleId: 3,
        capacityId: 3,
    },
    {
        name: "Membre",
        firstname: "Ex_Membre2",
        address: "Boucau",
        phoneNumber: "06 06 06 06 06",
        eMail: "membre@gmail.com",
        roleId: 3,
        capacityId: 2,
    },
];

users.forEach((user) => {
    User.create(user);
});
