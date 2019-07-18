export class Conseiller {
    id: number;
    nom: String;
    prenom: String;
    email: String;
    adresse: String;
    telephone: String;
    pseudo: String;
    mdp: String;
    matricule: BigInteger;
    
    constructor(id: number,
        nom: String,
        prenom: String,
        email: String,
        adresse: String,
        telephone: String,
        pseudo: String,
        mdp: String,
        matricule: BigInteger) {
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.adresse = adresse;
            this.telephone = telephone;
            this.pseudo = pseudo;
            this.mdp = mdp;
            this.matricule = matricule;
        }
}