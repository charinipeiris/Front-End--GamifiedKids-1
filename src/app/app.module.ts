import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { Grade1Component } from './grade1/grade1.component';
import { Grade2Component } from './grade2/grade2.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { from } from 'rxjs';

import { CompareValidatorDirective } from './shared/compare-validator.directive';
import {BlockUiService} from './services/block-ui.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {WebcamModule} from 'ngx-webcam';
import {DataService} from './services/data.service';
import { CameraSnapshotComponent } from './camera-snapshot/camera-snapshot.component';
import { FormDirective } from './shared/form.directive';
import { MathsComponent } from './grade1/maths/maths.component';
import { SinhalaComponent } from './grade1/sinhala/sinhala.component';
import { EnvironmentComponent } from './grade1/environment/environment.component';
import { Level1Component } from './grade1/maths/level1/level1.component';
import { Level2Component } from './grade1/maths/level2/level2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Countingconcepts1Component } from './grade1/maths/level1/countingconcepts1/countingconcepts1.component';
import { Counting1Component } from './grade1/maths/level1/counting1/counting1.component';
import { Substractions1Component } from './grade1/maths/level1/substractions1/substractions1.component';
import { Money1Component } from './grade1/maths/level1/money1/money1.component';
import { Length1Component } from './grade1/maths/level1/length1/length1.component';
import { Width1Component } from './grade1/maths/level1/width1/width1.component';
import { Volume1Component } from './grade1/maths/level1/volume1/volume1.component';
import { Shapes1Component } from './grade1/maths/level1/shapes1/shapes1.component';
import { Shapes2Component } from './grade1/maths/level2/shapes2/shapes2.component';
import { Length2Component } from './grade1/maths/level2/length2/length2.component';
import { Money2Component } from './grade1/maths/level2/money2/money2.component';
import { Counting2Component } from './grade1/maths/level2/counting2/counting2.component';
import { Countingconcepts2Component } from './grade1/maths/level2/countingconcepts2/countingconcepts2.component';
import { Additions2Component } from './grade1/maths/level2/additions2/additions2.component';

import { SinhalaLevel1Component } from './grade1/sinhala/sinhala-level1/sinhala-level1.component';
import { SinhalaLevel2Component } from './grade1/sinhala/sinhala-level2/sinhala-level2.component';

import { SinhalaG1L2G1Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g1/sinhala-g1-l2-g1.component';
import { SinhalaG1L2G2Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g2/sinhala-g1-l2-g2.component';
import { SinhalaG1L2G3Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g3/sinhala-g1-l2-g3.component';
import { SinhalaG1L2G4Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g4/sinhala-g1-l2-g4.component';

import { SinhalaGrade1Level1Game4Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game4/sinhala-grade1-level1-game4.component';
import { SinhalaGrade1Level1Game3Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game3/sinhala-grade1-level1-game3.component';
import { SinhalaGrade1Level1Game2Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game2/sinhala-grade1-level1-game2.component';
import { SinhalaGrade1Level1Game1Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game1/sinhala-grade1-level1-game1.component';
import { EnvLevel2Component } from './grade1/environment/env-level2/env-level2.component';
import { EnvLevel1Component } from './grade1/environment/env-level1/env-level1.component';

import { EnvGrade1Level1Game1Component } from './grade1/environment/env-level1/env-grade1-level1-game1/env-grade1-level1-game1.component';
import { EnvGrade1Level1Game2Component } from './grade1/environment/env-level1/env-grade1-level1-game2/env-grade1-level1-game2.component';
import { EnvGrade1Level1Game3Component } from './grade1/environment/env-level1/env-grade1-level1-game3/env-grade1-level1-game3.component';
import { EnvGrade1Level1Game4Component } from './grade1/environment/env-level1/env-grade1-level1-game4/env-grade1-level1-game4.component';

import { EnvGrade1Level2Game1Component } from './grade1/environment/env-level2/env-grade1-level2-game1/env-grade1-level2-game1.component';
import { EnvGrade1Level2Game2Component } from './grade1/environment/env-level2/env-grade1-level2-game2/env-grade1-level2-game2.component';
import { EnvGrade1Level2Game3Component } from './grade1/environment/env-level2/env-grade1-level2-game3/env-grade1-level2-game3.component';
import { EnvGrade1Level2Game4Component } from './grade1/environment/env-level2/env-grade1-level2-game4/env-grade1-level2-game4.component';
import { AnimalsGameComponent } from './grade1/environment/env-level1/animals-game/animals-game.component';
import { SchoolGameComponent } from './grade1/environment/env-level1/school-game/school-game.component';



import { Maths2Component } from './grade2/maths2/maths2.component';
import { Sinhala2Component } from './grade2/sinhala2/sinhala2.component';
import { Environment2Component } from './grade2/environment2/environment2.component';

import { MLevel1Component } from './grade2/maths2/m-level1/m-level1.component';
import { MLevel2Component } from './grade2/maths2/m-level2/m-level2.component';

import { CountingL1Component } from './grade2/maths2/m-level1/counting-l1/counting-l1.component';
import { AdditionL1Component } from './grade2/maths2/m-level1/addition-l1/addition-l1.component';
import { SubstractionL1Component } from './grade2/maths2/m-level1/substraction-l1/substraction-l1.component';
import { MoneyL1Component } from './grade2/maths2/m-level1/money-l1/money-l1.component';
import { ShapesL1Component } from './grade2/maths2/m-level1/shapes-l1/shapes-l1.component';
import { LengthL1Component } from './grade2/maths2/m-level1/length-l1/length-l1.component';

import { LengthL2Component } from './grade2/maths2/m-level2/length-l2/length-l2.component';
import { MoneyL2Component } from './grade2/maths2/m-level2/money-l2/money-l2.component';
import { SubstractionL2Component } from './grade2/maths2/m-level2/substraction-l2/substraction-l2.component';
import { AdditionL2Component } from './grade2/maths2/m-level2/addition-l2/addition-l2.component';
import { CountingL2Component } from './grade2/maths2/m-level2/counting-l2/counting-l2.component';
import { ShapesL2Component } from './grade2/maths2/m-level2/shapes-l2/shapes-l2.component';
import { EmotiondetectorComponent } from './emotiondetector/emotiondetector.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NgxPaginationModule } from 'ngx-pagination';



const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'grade1',component:Grade1Component},
  {path:'home',component:HomeComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'leaderboard',component:LeaderboardComponent},


  //-----maths--
  {path:'grade1/maths',component:MathsComponent},
  {path:'grade2/maths',component:Maths2Component},
  //-----maths grade1 level1--
  {path:'grade1/maths/level1',component:Level1Component},
  {path:'grade1/maths/level1/counting',component:Counting1Component},
  {path:'grade1/maths/level1/countingconcepts',component:Countingconcepts1Component},
  {path:'grade1/maths/level1/substraction',component:Substractions1Component},
  {path:'grade1/maths/level1/money',component: Money1Component},
  {path:'grade1/maths/level1/length',component:Length1Component },
  {path:'grade1/maths/level1/width',component:Width1Component},
  {path:'grade1/maths/level1/volume',component:Volume1Component },
  {path:'grade1/maths/level1/shapes',component:Shapes1Component},

//-----maths garde1 level2--
  {path:'grade1/maths/level2',component:Level2Component},
  {path:'grade1/maths/level2/counting',component:Counting2Component},
  {path:'grade1/maths/level2/countingconcepts',component:Countingconcepts2Component},
  {path:'grade1/maths/level2/additions',component:Additions2Component },
  {path:'grade1/maths/level2/money',component: Money2Component},
  {path:'grade1/maths/level2/length',component:Length2Component },
  {path:'grade1/maths/level2/shapes',component:Shapes2Component},

  //-----maths grade2 level1--
  {path:'grade2/maths/level1',component: MLevel1Component},
  {path:'grade2/maths/level2',component: MLevel2Component},

  {path:'grade2/maths/level1/counting',component:CountingL1Component },
  {path:'grade2/maths/level1/additions',component:AdditionL1Component },
  {path:'grade2/maths/level1/substraction',component:SubstractionL1Component},
  {path:'grade2/maths/level1/money',component:MoneyL1Component},
  {path:'grade2/maths/level1/length',component:LengthL1Component },
  {path:'grade2/maths/level1/shapes',component:ShapesL1Component },
   
  //-----maths grade2 level2--
  {path:'grade2/maths/level2',component:Level2Component},

  {path:'grade2/maths/level2/counting',component:CountingL2Component},
  {path:'grade2/maths/level2/additions',component:AdditionL2Component},
  {path:'grade2/maths/level2/substraction',component:SubstractionL2Component},
  {path:'grade2/maths/level2/money',component:MoneyL2Component  },
  {path:'grade2/maths/level2/length',component:LengthL2Component },
  {path:'grade2/maths/level2/shapes',component:ShapesL2Component},

    //-----sinhala
  {path:'grade1/sinhala',component:SinhalaComponent},
    //-----sinhla grade1 level1--
  {path:'grade1/sinhala/level1',component:SinhalaLevel1Component },
  {path:'grade1/sinhala/level1/game1',component:SinhalaGrade1Level1Game1Component},
  {path:'grade1/sinhala/level1/game2',component:SinhalaGrade1Level1Game2Component},
  {path:'grade1/sinhala/level1/game3',component:SinhalaGrade1Level1Game3Component},
  {path:'grade1/sinhala/level1/game4',component:SinhalaGrade1Level1Game4Component},
 //-----sinhla grade1 level2--
 {path:'grade1/sinhala/level2',component: SinhalaLevel2Component},
 {path:'grade1/sinhala/level2/game1',component:SinhalaG1L2G1Component},
 {path:'grade1/sinhala/level2/game2',component:SinhalaG1L2G2Component},
 {path:'grade1/sinhala/level2/game3',component:SinhalaG1L2G3Component},
 {path:'grade1/sinhala/level2/game4',component:SinhalaG1L2G4Component},
  //-----environment 
  {path:'grade1/environment',component:EnvironmentComponent}, 
  //----environment grade1 level1--
  {path:'grade1/environment/level1',component: EnvLevel1Component},
  {path:'grade1/environment/level1/game1',component:EnvGrade1Level1Game1Component},
  {path:'grade1/environment/level1/game2',component:EnvGrade1Level1Game2Component},
  {path:'grade1/environment/level1/game3',component:EnvGrade1Level1Game3Component},
  {path:'grade1/environment/level1/game4',component:EnvGrade1Level1Game4Component},
  {path:'grade1/environment/level1/schoolgame',component:SchoolGameComponent},

  //-----environment grade1 level2--
  {path:'grade1/environment/level2',component: EnvLevel2Component},
  {path:'grade1/environment/level2/game1',component:EnvGrade1Level2Game1Component},
  {path:'grade1/environment/level2/game2',component:EnvGrade1Level2Game2Component},
  {path:'grade1/environment/level2/game3',component:EnvGrade1Level2Game3Component},
  {path:'grade1/environment/level2/game4',component:EnvGrade1Level2Game4Component},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    Grade1Component,
    Grade2Component,
    CompareValidatorDirective,
    CameraSnapshotComponent,
    FormDirective,
    MathsComponent,
    SinhalaComponent,
    EnvironmentComponent,
    Level1Component,
    Level2Component,
    NavbarComponent,
    HomeComponent,
    Countingconcepts1Component,
    Counting1Component,
    Substractions1Component,
    Money1Component,
    Length1Component,
    Width1Component,
    Volume1Component,
    Shapes1Component,
    Shapes2Component,
    Length2Component,
    Money2Component,
    Counting2Component,
    Countingconcepts2Component,
    Additions2Component,
    SinhalaLevel1Component,
    SinhalaLevel2Component,
    SinhalaG1L2G1Component,
    SinhalaG1L2G2Component,
    SinhalaG1L2G3Component,
    SinhalaG1L2G4Component,
    SinhalaGrade1Level1Game4Component,
    SinhalaGrade1Level1Game3Component,
    SinhalaGrade1Level1Game2Component,
    SinhalaGrade1Level1Game1Component,
    EnvLevel2Component,
    EnvLevel1Component,
    EnvGrade1Level1Game1Component,
    EnvGrade1Level1Game2Component,
    EnvGrade1Level1Game3Component,
    EnvGrade1Level1Game4Component,
    EnvGrade1Level2Game1Component,
    EnvGrade1Level2Game2Component,
    EnvGrade1Level2Game3Component,
    EnvGrade1Level2Game4Component,
    AnimalsGameComponent,
    SchoolGameComponent,
    Maths2Component,
    Sinhala2Component,
    Environment2Component,
    MLevel1Component,
    MLevel2Component,
    CountingL1Component,
    AdditionL1Component,
    SubstractionL1Component,
    MoneyL1Component,
    ShapesL1Component,
    LengthL1Component,
    LengthL2Component,
    MoneyL2Component,
    SubstractionL2Component,
    AdditionL2Component,
    CountingL2Component,
    ShapesL2Component,
    EmotiondetectorComponent,
    AchievementsComponent,
    LeaderboardComponent,

   
    
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    WebcamModule,
    [RouterModule.forRoot(appRoutes)],
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [LoginService, RegisterService, DataService, BlockUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
