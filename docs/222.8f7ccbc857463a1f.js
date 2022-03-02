"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[222],{5222:(oe,C,i)=>{i.r(C),i.d(C,{HeroesModule:()=>te});var m=i(9808),L=i(9764),c=i(3075),u=i(1083),Z=(()=>{return(o=Z||(Z={})).DCComics="DC Comics",o.MarvelComics="Marvel Comics",Z;var o})(),x=i(3900),T=i(8966),e=i(5e3),h=i(7423);let S=(()=>{class o{constructor(t,r){this.dialogRef=t,this.data=r}ngOnInit(){}cerrar(){this.dialogRef.close()}borrar(){this.dialogRef.close(!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.so),e.Y36(T.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-confirmar"]],decls:12,vars:1,consts:[["mat-button","","color","warn",3,"click"],["mat-button","",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1,"\xbfEst\xe1 seguro?"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"p"),e._uU(4),e._UZ(5,"br"),e._uU(6," \xbfDesea continuar?\n"),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"button",0),e.NdJ("click",function(){return r.borrar()}),e._uU(9,"S\xed, borrar"),e.qZA(),e.TgZ(10,"button",1),e.NdJ("click",function(){return r.cerrar()}),e._uU(11,"cancelar"),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.hij(" Est\xe1 a punto de eliminar a ",r.data," "))},directives:[h.lW],encapsulation:2}),o})();var f=i(468),I=i(1271),l=i(7093),_=i(4106),q=i(7531),j=i(4107),U=i(508),b=i(3874);let A=(()=>{class o{transform(t){return t.id||t.alt_img?t.alt_img?t.alt_img:"assets/heroes/"+t.id+".jpg":"assets/no-image.png"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"urlImagen",type:o,pure:!1}),o})();function N(o,a){if(1&o&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.id," ")}}function O(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().eliminar()}),e.TgZ(1,"mat-icon"),e._uU(2,"remove"),e.qZA(),e._uU(3," Borrar "),e.qZA()}}let H=(()=>{class o{constructor(t,r,n,s,p){this.heroesService=t,this.activatedRoute=r,this.router=n,this.snackBar=s,this.dialog=p,this.publishers=[{id:"DC Comics",desc:"Dc - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}],this.heroe={superhero:"",alter_ego:"",characters:"",first_appearance:"",publisher:Z.DCComics,alt_img:""}}ngOnInit(){!this.router.url.includes("editar")||(this.activatedRoute.params.pipe((0,x.w)(({id:t})=>this.heroesService.getHeroePorId(t))).subscribe(t=>this.heroe=t),console.log(this.heroe.alt_img))}guardar(){var t;0===(null===(t=this.heroe.alt_img)||void 0===t?void 0:t.trim().length)&&(this.heroe.alt_img="assets/no-image.png"),0!==this.heroe.superhero.trim().length&&(this.heroe.id?this.heroesService.actualizarHeroe(this.heroe,this.heroe.id).subscribe(r=>{this.mostrarSnackBar("Registro Actualizado"),this.router.navigate(["/heroes/listado"])}):this.heroesService.agregarHeroe(this.heroe).subscribe(r=>{this.mostrarSnackBar("Registro Creado"),this.router.navigate(["/heroes/listado"])}))}eliminar(){this.dialog.open(S,{width:"300px",data:this.heroe.superhero}).afterClosed().subscribe(r=>{r&&this.heroesService.eliminarHeroe(this.heroe.id).subscribe(n=>{this.router.navigate(["/heroes/listado"]),this.mostrarSnackBar("Registro eliminado")})})}mostrarSnackBar(t){this.snackBar.open(t,"",{duration:3e3})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.P),e.Y36(u.gz),e.Y36(u.F0),e.Y36(I.ux),e.Y36(T.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-agregar"]],decls:42,vars:13,consts:[["fxLayout","row","fxLayoutGap","40px","fxLayout.xs","column"],["fxFlex","50","fxLayout","column"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","20px"],["fxFlex","100","fxLayout.xs","column"],["matInput","","autocomplete","off","type","text","required","true",3,"ngModel","ngModelChange"],["matInput","","autocomplete","off","type","text",3,"ngModel","ngModelChange"],["autocapitalize","true"],["required","true",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","autocomplete","off","type","url",3,"ngModel","ngModelChange"],["fxLayout",""],["mat-raised-button","","color","primary",3,"click"],[1,"spacer"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["fxFlex","50"],["alt","",3,"src"],[3,"value"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.TgZ(2,"small"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"div",0),e.TgZ(5,"div",1),e.TgZ(6,"div",2),e.TgZ(7,"mat-form-field",3),e.TgZ(8,"mat-label"),e._uU(9,"Super H\xe9roe"),e.qZA(),e.TgZ(10,"input",4),e.NdJ("ngModelChange",function(s){return r.heroe.superhero=s}),e.qZA(),e.qZA(),e.TgZ(11,"mat-form-field"),e.TgZ(12,"mat-label"),e._uU(13,"Alter Ego"),e.qZA(),e.TgZ(14,"input",5),e.NdJ("ngModelChange",function(s){return r.heroe.alter_ego=s}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"mat-form-field",6),e.TgZ(16,"mat-label"),e._uU(17,"Primera Aparici\xf3n"),e.qZA(),e.TgZ(18,"input",5),e.NdJ("ngModelChange",function(s){return r.heroe.first_appearance=s}),e.qZA(),e.qZA(),e.TgZ(19,"mat-form-field"),e.TgZ(20,"mat-label"),e._uU(21,"Personajes"),e.qZA(),e.TgZ(22,"input",5),e.NdJ("ngModelChange",function(s){return r.heroe.characters=s}),e.qZA(),e.qZA(),e.TgZ(23,"mat-form-field"),e.TgZ(24,"mat-label"),e._uU(25,"Creador"),e.qZA(),e.TgZ(26,"mat-select",7),e.NdJ("ngModelChange",function(s){return r.heroe.publisher=s}),e.YNc(27,N,2,2,"mat-option",8),e.qZA(),e.qZA(),e.TgZ(28,"mat-form-field"),e.TgZ(29,"mat-label"),e._uU(30,"Imagen Url"),e.qZA(),e.TgZ(31,"input",9),e.NdJ("ngModelChange",function(s){return r.heroe.alt_img=s}),e.qZA(),e.qZA(),e.TgZ(32,"div",10),e.TgZ(33,"button",11),e.NdJ("click",function(){return r.guardar()}),e.TgZ(34,"mat-icon"),e._uU(35,"edit"),e.qZA(),e._uU(36," Guardar "),e.qZA(),e._UZ(37,"span",12),e.YNc(38,O,4,0,"button",13),e.qZA(),e.qZA(),e.TgZ(39,"div",14),e._UZ(40,"img",15),e.ALo(41,"urlImagen"),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",r.heroe.id?"Editar":"Nuevo"," H\xe9roe "),e.xp6(2),e.Oqu(r.heroe.superhero),e.xp6(7),e.Q6J("ngModel",r.heroe.superhero),e.xp6(4),e.Q6J("ngModel",r.heroe.alter_ego),e.xp6(4),e.Q6J("ngModel",r.heroe.first_appearance),e.xp6(4),e.Q6J("ngModel",r.heroe.characters),e.xp6(4),e.Q6J("ngModel",r.heroe.publisher),e.xp6(1),e.Q6J("ngForOf",r.publishers),e.xp6(4),e.Q6J("ngModel",r.heroe.alt_img),e.xp6(7),e.Q6J("ngIf",r.heroe.id),e.xp6(2),e.Q6J("src",e.lcZ(41,11,r.heroe),e.LSH))},directives:[l.xw,l.SQ,l.yH,_.KE,_.hX,q.Nt,c.Fj,c.Q7,c.JJ,c.On,j.gD,m.sg,U.ey,h.lW,b.Hw,m.O5],pipes:[A],styles:["img[_ngcontent-%COMP%]{width:100%;border-radius:5px}"]}),o})();var v=i(4834),g=i(9224);const B=function(o){return["../",o]},k=function(o){return["../editar/",o]};let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-heroe-tarjeta"]],inputs:{heroe:"heroe"},decls:24,vars:14,consts:[[1,"example-card"],["mat-card-image","",3,"src"],["mat-button","","color","info",3,"routerLink"],["mat-button","","color","warn",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"mat-card",0),e.TgZ(1,"mat-card-header"),e.TgZ(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"img",1),e.ALo(7,"urlImagen"),e.TgZ(8,"mat-card-content"),e.TgZ(9,"h3"),e._uU(10),e.qZA(),e.TgZ(11,"p"),e.TgZ(12,"strong"),e._uU(13,"Primera aparici\xf3n: "),e.qZA(),e._uU(14),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"Personajes:"),e.qZA(),e._uU(18),e.qZA(),e.qZA(),e.TgZ(19,"mat-card-actions"),e.TgZ(20,"button",2),e._uU(21,"Leer m\xe1s"),e.qZA(),e.TgZ(22,"button",3),e._uU(23,"Editar"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(r.heroe.superhero),e.xp6(2),e.Oqu(r.heroe.alter_ego),e.xp6(1),e.Q6J("src",e.lcZ(7,8,r.heroe),e.LSH),e.xp6(4),e.hij("",r.heroe.publisher," "),e.xp6(4),e.hij("",r.heroe.first_appearance," "),e.xp6(4),e.hij(" ",r.heroe.characters," "),e.xp6(2),e.Q6J("routerLink",e.VKq(10,B,r.heroe.id)),e.xp6(2),e.Q6J("routerLink",e.VKq(12,k,r.heroe.id)))},directives:[g.a8,g.dk,g.n5,g.$j,g.G2,g.dn,g.hq,h.lW,u.rH],pipes:[A],styles:["mat-card[_ngcontent-%COMP%]{margin-top:20px}"]}),o})();function Q(o,a){if(1&o&&(e.TgZ(0,"div",2),e._UZ(1,"app-heroe-tarjeta",3),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("heroe",t)}}let E=(()=>{class o{constructor(t){this.heroesService=t,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(t=>{for(let r in t){let n=t[r];n.id||(n=Object.assign({id:r},n),this.heroesService.actualizarHeroe(n,r).subscribe()),this.heroes.push(n)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-listado"]],decls:6,vars:1,consts:[["fxLayout","row wrap ","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","20px"],["fxFlex","20","fxFlex.lg","22","fxFlex.sm","33",4,"ngFor","ngForOf"],["fxFlex","20","fxFlex.lg","22","fxFlex.sm","33"],[3,"heroe"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Listado de H\xe9roes"),e.qZA(),e._UZ(2,"mat-divider"),e._UZ(3,"br"),e.TgZ(4,"div",0),e.YNc(5,Q,2,1,"div",1),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngForOf",r.heroes))},directives:[v.d,l.xw,l.Wh,l.SQ,m.sg,l.yH,M],styles:["mat-card[_ngcontent-%COMP%]{margin-top:20px}"]}),o})();var y=i(9815);function Y(o,a){if(1&o&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.superhero," ")}}function w(o,a){if(1&o&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(' No se encontr\xf3 nada con el termino "',t.termino,'" ')}}function P(o,a){if(1&o&&(e.TgZ(0,"div",11),e._UZ(1,"app-heroe-tarjeta",12),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("heroe",t.heroeSeleccionado)}}let R=(()=>{class o{constructor(t){this.heroesService=t,this.termino="",this.heroes=[],this.heroesFiltrados=[],this.sugerencia=!0}ngOnInit(){}buscando(){this.heroes=[],this.heroesService.getHeroes().subscribe(t=>{for(let r in t)this.heroes.push(t[r]);console.log(this.heroes),this.termino.toLocaleLowerCase(),this.heroesFiltrados=[],this.heroes.forEach(r=>{var n;const s=null===(n=r.superhero)||void 0===n?void 0:n.toLowerCase();console.log(s),s.indexOf(this.termino)>=0&&this.heroesFiltrados.length<5&&this.heroesFiltrados.push(r)})})}opcionSeleccionada(t){if(0==this.heroesFiltrados.length)return void(this.heroeSeleccionado=void 0);const r=t.option.value;this.termino=r.superhero,this.heroesService.getHeroePorId(r.id).subscribe(n=>this.heroeSeleccionado=n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.P))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-buscar"]],decls:18,vars:5,consts:[["fxLayout","column"],["appearance","fill"],["type","text","aria-label","Buscar h\xe9roe","matInput","",3,"ngModel","matAutocomplete","ngModelChange","input"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],["fxLayout","row wrap ","fxLayout.xs","column","fxLayoutAlign","center"],["fxFlex","30","fxFlex.sm","60","fxFlex.md","40",4,"ngIf"],[3,"value"],["value",""],["fxFlex","30","fxFlex.sm","60","fxFlex.md","40"],[3,"heroe"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"h1"),e._uU(3,"Buscardor de H\xe9roes"),e.qZA(),e._UZ(4,"mat-divider"),e.qZA(),e.TgZ(5,"div",0),e.TgZ(6,"h3"),e._uU(7,"Buscador"),e.qZA(),e.TgZ(8,"mat-form-field",1),e.TgZ(9,"mat-label"),e._uU(10,"Buscar h\xe9roe"),e.qZA(),e.TgZ(11,"input",2),e.NdJ("ngModelChange",function(s){return r.termino=s})("input",function(){return r.buscando()}),e.qZA(),e.TgZ(12,"mat-autocomplete",3,4),e.NdJ("optionSelected",function(s){return r.opcionSeleccionada(s)}),e.YNc(14,Y,2,2,"mat-option",5),e.YNc(15,w,2,1,"mat-option",6),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",7),e.YNc(17,P,2,1,"div",8),e.qZA()),2&t){const n=e.MAs(13);e.xp6(11),e.Q6J("ngModel",r.termino)("matAutocomplete",n),e.xp6(3),e.Q6J("ngForOf",r.heroesFiltrados),e.xp6(1),e.Q6J("ngIf",0===r.heroesFiltrados.length&&r.termino.trim().length>0),e.xp6(2),e.Q6J("ngIf",r.heroeSeleccionado)}},directives:[l.xw,v.d,_.KE,_.hX,q.Nt,c.Fj,y.ZL,c.JJ,c.On,y.XC,m.sg,U.ey,m.O5,l.Wh,l.yH,M],encapsulation:2}),o})();var F=i(3954),X=i(773),d=i(4623);function z(o,a){1&o&&(e.TgZ(0,"mat-grid-list",2),e.TgZ(1,"mat-grid-tile"),e._UZ(2,"mat-spinner"),e.qZA(),e.qZA())}function D(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",3),e.TgZ(1,"div",4),e.TgZ(2,"h1"),e._uU(3),e.TgZ(4,"small"),e._uU(5),e.qZA(),e.qZA(),e._UZ(6,"mat-divider"),e._UZ(7,"br"),e._UZ(8,"img",5),e.ALo(9,"urlImagen"),e.qZA(),e.TgZ(10,"div",4),e.TgZ(11,"h1"),e._uU(12),e.qZA(),e._UZ(13,"mat-divider"),e.TgZ(14,"mat-list"),e.TgZ(15,"mat-list-item"),e._uU(16),e.qZA(),e.TgZ(17,"mat-list-item"),e._uU(18),e.qZA(),e.TgZ(19,"mat-list-item"),e._uU(20),e.qZA(),e.TgZ(21,"mat-list-item"),e._uU(22),e.qZA(),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().regresar()}),e._uU(25," Regresar al listado "),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(3),e.hij(" ",t.heroe.superhero," "),e.xp6(2),e.hij("- ",t.heroe.alter_ego,""),e.xp6(3),e.Q6J("src",e.lcZ(9,9,t.heroe),e.LSH)("alt",t.heroe.id),e.xp6(4),e.hij(" ",t.heroe.publisher," "),e.xp6(4),e.hij(" ",t.heroe.first_appearance," "),e.xp6(2),e.hij(" ",t.heroe.characters," "),e.xp6(2),e.hij(" ",t.heroe.publisher," "),e.xp6(2),e.hij(" ",t.heroe.alter_ego," ")}}let W=(()=>{class o{constructor(t,r,n){this.activatedRoute=t,this.heroesService=r,this.router=n}ngOnInit(){this.activatedRoute.params.pipe((0,x.w)(({id:t})=>this.heroesService.getHeroePorId(t))).subscribe(t=>this.heroe=t),console.log(this.heroe)}regresar(){this.router.navigate(["/heroes/listado"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gz),e.Y36(f.P),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-heroe"]],decls:3,vars:2,consts:[["cols","1",4,"ngIf","ngIfElse"],["divHeroe",""],["cols","1"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","30px"],["fxFlex","50"],[3,"src","alt"],["mat-button","","color","warn",3,"click"]],template:function(t,r){if(1&t&&(e.YNc(0,z,3,0,"mat-grid-list",0),e.YNc(1,D,26,11,"ng-template",null,1,e.W1O)),2&t){const n=e.MAs(2);e.Q6J("ngIf",!r.heroe)("ngIfElse",n)}},directives:[m.O5,F.Il,F.DX,X.$g,l.xw,l.SQ,l.yH,v.d,d.i$,d.Tg,h.lW],pipes:[A],styles:["img[_ngcontent-%COMP%]{width:100%;border-radius:5px}"]}),o})();var G=i(6518),J=i(2638),$=i(4594);const K=[{path:"",component:(()=>{class o{constructor(t,r){this.router=t,this.authServices=r}get auth(){return this.authServices.auth}ngOnInit(){}logout(){this.router.navigate(["./auth"]),localStorage.removeItem("token")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.F0),e.Y36(G.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:37,vars:1,consts:[["fullscreen",""],["mode","push"],["sidenav",""],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-list-icon",""],["routerLink","./listado","mat-list-item","",3,"click"],["routerLink","./agregar","mat-list-item","",3,"click"],["routerLink","./buscar","mat-list-item","",3,"click"],["mat-button","",3,"click"],[1,"container"]],template:function(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"mat-sidenav-container",0),e.TgZ(1,"mat-sidenav",1,2),e.TgZ(3,"mat-toolbar"),e.TgZ(4,"span"),e._uU(5,"Men\xfa"),e.qZA(),e._UZ(6,"span",3),e.TgZ(7,"button",4),e.NdJ("click",function(){return e.CHM(n),e.MAs(2).toggle()}),e.TgZ(8,"mat-icon",5),e._uU(9,"menu"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"mat-nav-list"),e.TgZ(11,"a",6),e.NdJ("click",function(){return e.CHM(n),e.MAs(2).toggle()}),e.TgZ(12,"mat-icon",5),e._uU(13,"label"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Listado de H\xe9roes"),e.qZA(),e.qZA(),e.TgZ(16,"a",7),e.NdJ("click",function(){return e.CHM(n),e.MAs(2).toggle()}),e.TgZ(17,"mat-icon",5),e._uU(18,"add"),e.qZA(),e.TgZ(19,"span"),e._uU(20,"Agregar H\xe9roe"),e.qZA(),e.qZA(),e.TgZ(21,"a",8),e.NdJ("click",function(){return e.CHM(n),e.MAs(2).toggle()}),e.TgZ(22,"mat-icon",5),e._uU(23,"search"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Buscar H\xe9roe"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"mat-toolbar"),e.TgZ(27,"button",4),e.NdJ("click",function(){return e.CHM(n),e.MAs(2).toggle()}),e.TgZ(28,"mat-icon"),e._uU(29,"menu"),e.qZA(),e.qZA(),e._UZ(30,"span",3),e.TgZ(31,"span"),e._uU(32),e.qZA(),e.TgZ(33,"button",9),e.NdJ("click",function(){return r.logout()}),e._uU(34," Cerrar Sesi\xf3n "),e.qZA(),e.qZA(),e.TgZ(35,"div",10),e._UZ(36,"router-outlet"),e.qZA(),e.qZA()}2&t&&(e.xp6(32),e.hij(" ",r.auth.user," "))},directives:[J.TM,J.JX,$.Ye,h.lW,b.Hw,d.Nh,d.Hk,u.yS,d.Tg,u.lC],styles:[".container[_ngcontent-%COMP%]{margin:10px}"]}),o})(),children:[{path:"listado",component:E},{path:"agregar",component:H},{path:"editar/:id",component:H},{path:"buscar",component:R},{path:":id",component:W},{path:"**",redirectTo:"listado"}]}];let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(K)],u.Bz]}),o})();var ee=i(898);let te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,L.o9,c.u5,ee.q,V]]}),o})()}}]);