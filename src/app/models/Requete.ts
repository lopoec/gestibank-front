export class Requete {
    id: number;
    compte: String;
    message: String;
    type: String;
    
    constructor(id: number,
        compte: String,
        message: String,
        type: String) {
            this.id = id;
            this.compte = compte;
            this.message = message;
            this.type = type;
        }
}