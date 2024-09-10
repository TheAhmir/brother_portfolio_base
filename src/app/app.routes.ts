import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const routes: Routes = [
    {path: '', component: PortfolioComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'portfolio/:id', component: ProjectDetailComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},

    // wild card value
    {path: '**', component: PageNotFoundComponent}
];
