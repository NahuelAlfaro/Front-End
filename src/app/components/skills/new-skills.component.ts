import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje:number;
  constructor(private skillS:SkillService,private router:Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const skill = new Skill(this.nombre,this.porcentaje);
    this.skillS.save(skill).subscribe(data =>{
      alert("Creado Correctamente");
      this.router.navigate(['']);
    },err =>{
      alert("Error al añadir");
      console.log(err);
      this.router.navigate(['']);
    })
  }
}
