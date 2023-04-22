

export interface IDenunciation {
    id?: string;
    profession: string;
    dateEvent: string;
    timeEvent: string;
    state: string;
    venueEvent: string;
    modality: string;
    observations: string;
    email?: string

    numero: number
    status: string
}

export class Denunciation {
    profession: string;
    dateEvent: string;
    timeEvent: string;
    state: string;
    venueEvent: string;
    modality: string;
    observations: string;


    numero: number
    status: string
    constructor(denunciation: IDenunciation) {
        this.profession = denunciation.profession;
        this.dateEvent = denunciation.dateEvent;
        this.timeEvent = denunciation.timeEvent;
        this.state = denunciation.state;
        this.venueEvent = denunciation.venueEvent;
        this.modality = denunciation.modality;
        this.observations = denunciation.observations;

        this.numero = denunciation.numero;
        this.status = denunciation.status;
        
    }

}

export enum StatusDenunciation {
    tramite = 'En trámite',
    second = 'Segunda instancia',
    rejected = 'Rechazado',
}

