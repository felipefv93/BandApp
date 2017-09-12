import { Component,state,style,animate,transition, trigger, keyframes} from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  animations: [
    trigger('carduserprofile', [
        state('*', style({
            '-ms-transform': 'translate3D(0px, 0px, 0px)',
            '-webkit-transform': 'translate3D(0px, 0px, 0px)',
            '-moz-transform': 'translate3D(0px, 0px, 0px)',
            '-o-transform':'translate3D(0px, 0px, 0px)',
            transform:'translate3D(0px, 0px, 0px)',
            opacity: 1
        })),
        transition('void => *', [
            style({opacity: 0,
                '-ms-transform': 'translate3D(0px, 150px, 0px)',
                '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                '-moz-transform': 'translate3D(0px, 150px, 0px)',
                '-o-transform':'translate3D(0px, 150px, 0px)',
                transform:'translate3D(0px, 150px, 0px)',
            }),
            animate('0.3s 0s ease-out'),
        ])
    ]),
    trigger('cardprofile', [
        state('*', style({
            '-ms-transform': 'translate3D(0px, 0px, 0px)',
            '-webkit-transform': 'translate3D(0px, 0px, 0px)',
            '-moz-transform': 'translate3D(0px, 0px, 0px)',
            '-o-transform':'translate3D(0px, 0px, 0px)',
            transform:'translate3D(0px, 0px, 0px)',
            opacity: 1})),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0.25s ease-out')
            ])
        ])
    ]
})
export class PerfilComponent {
  datosUsuario:Usuario = new Usuario();
  cargo:boolean=false;
  
  constructor(private servicio:AuthService){
    // this.datosUsuario= new Usuario();
    this.servicio.obtenerDatosUsuario().then((success)=>{
      success.subscribe((datos)=>{
        this.datosUsuario=datos;
        console.log(this.datosUsuario);
        this.cargo=true;
        
      });
    }).catch((err)=>{
      console.log(err);
    })
   
  }
  guardarDatos(){
    this.servicio.datosUsuario.update(this.datosUsuario).then((success)=>{
      console.log('bien '+success);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
