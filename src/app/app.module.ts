import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/atoms/splash-screen/splash-screen.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { CreateGamePageComponent } from './pages/create-game-page/create-game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LogoComponent,
    CreateGamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
