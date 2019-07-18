export class ClientPotentiel {
    id: number;
    nom: String;
    prenom: String;
    email: String;
    adresse: String;
    telephone: String;
    revenuMensuel: BigInteger;
    
    constructor(id: number,
        nom: String,
        prenom: String,
        email: String,
        adresse: String,
        telephone: String,
        revenuMensuel: BigInteger) {
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.adresse = adresse;
            this.telephone = telephone;
            this.revenuMensuel = revenuMensuel;
        }
}