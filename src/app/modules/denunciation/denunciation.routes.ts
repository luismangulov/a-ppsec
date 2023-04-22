import { Routes } from "@angular/router";
import { DenunciationPage } from "./denunciation.page";
import { CreateDenunciationPage } from "./create-denunciation/create-denunciation.page";
import { ViewDenunciationPage } from "./view-denunciation/view-denunciation.page";

export const routers: Routes = [
    {
        path: '',
        component: DenunciationPage,

    },
    {
        path: 'create',
        component: CreateDenunciationPage
    },
    {
        path: 'view/:idDoc',
        component: ViewDenunciationPage
    }
]