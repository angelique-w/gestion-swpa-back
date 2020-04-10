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

const prestations = [
    {
        location: "Bayonne",
        date: "2020-06-01",
        arrivingTime: "10:00:00",
        departureTime: "16:00:00",
        description: "Animation match",
        comments: "repas pris avec autres prestataires",
        contractId: 1,
    },
    {
        location: "Agen",
        date: "2020-05-30",
        arrivingTime: "14:00:00",
        departureTime: "22:00:00",
        description: "Mariage",
        comments: "repas pris avec invités",
        contractId: 3,
    },
    {
        location: "Hastingues",
        date: "2020-03-16",
        arrivingTime: "14:00:00",
        departureTime: "18:00:00",
        description: "Carnaval Hastingues",
        comments: "",
        contractId: 3,
    },
    {
        location: "Bayonne",
        date: "2020-07-28",
        arrivingTime: "16:00:00",
        departureTime: "22:00:00",
        description: "Spectacle assoc Jeff",
        comments: "repas pris ensemble",
        contractId: 2,
    },
];

prestations.forEach((prestation) => {
    Prestation.create(prestation);
});
