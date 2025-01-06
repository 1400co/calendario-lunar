import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { PixelService } from 'ngx-multi-pixel';
import { ToastrService } from 'ngx-toastr';
import CalendarioComponent from "../../components/calendario/calendario.component";
import RecomendacionesComponent from "../../components/recomendaciones/recomendaciones.component";
import BeneficiosComponent from "../../components/beneficios/beneficios.component";
import EndemicasComponent from "../../components/endemicas/endemicas.component";

@Component({
    selector: 'app-landing',
    imports: [LMarkdownEditorModule, FormsModule, CalendarioComponent, RecomendacionesComponent, BeneficiosComponent, EndemicasComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export default class LandingComponent implements OnInit {


  ngOnInit(): void {

  }



}
