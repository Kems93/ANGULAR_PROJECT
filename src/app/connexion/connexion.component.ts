import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

  form: any = {
    email: null,
    password: null
  }
  messageError : string = ''

  constructor(private connexionService: ConnexionService){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.connexionService.postClient(this.form).subscribe(
      data => console.log(data)
    )
  }

}
