import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadSkills(): void {
    this.skillService.lista().subscribe(data => {
      this.skills = data;
    });
  }

  delete(id: number): void {
    if (id !== undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.loadSkills();
        },
        err => {
          alert('Error en el proceso de borrado');
        }
      );
    }
  }
}