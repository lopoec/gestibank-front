export class User {
    id: number;
    nom: String;
    prenom: String;
    email: String;
    adresse: String;
    telephone: String;
    pseudo: String;
    mdp: String;
    matricule: BigInteger;
    type: String;
    
    constructor(id: number,
        nom: String,
        prenom: String,
        email: String,
        adresse: String,
        telephone: String,
        pseudo: String,
        mdp: String,
        type: String) {
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.adresse = adresse;
            this.telephone = telephone;
            this.pseudo = pseudo;
            this.mdp = mdp;
            this.type = type;
        }
}