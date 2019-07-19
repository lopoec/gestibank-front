export class ClientPotentiel {
    id: number;
    nom: String;
    prenom: String;
    email: String;
    adresse: String;
    telephone: String;
    revenuMens: BigInteger;
    
    constructor(id: number,
        nom: String,
        prenom: String,
        email: String,
        adresse: String,
        telephone: String,
        revenuMens: BigInteger) {
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.adresse = adresse;
            this.telephone = telephone;
            this.revenuMens = revenuMens;
        }
}