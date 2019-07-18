import { Conseiller } from './Conseiller';
import { ClientPotentiel } from './ClientPotentiel';

export class Demande {
    clientPotentiel : ClientPotentiel;
    valid : boolean;
    conseiller : Conseiller;
}