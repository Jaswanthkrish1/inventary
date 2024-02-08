"use strict";(self.webpackChunkarabic_mandi=self.webpackChunkarabic_mandi||[]).push([[10],{9288:(L,y,o)=>{o.d(y,{u:()=>C});var n=o(8927),a=o(5879);let C=(()=>{class f{constructor(d){this._auth=d}canActivate(d){return!!this._auth.getCurrentUser()}static#t=this.\u0275fac=function(e){return new(e||f)(a.LFG(n.i))};static#e=this.\u0275prov=a.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}return f})()},636:(L,y,o)=>{o.d(y,{g:()=>_});var n=o(92),a=o(6306),C=o(2096),f=o(7398),h=o(8927),d=o(5879),e=o(2939);let _=(()=>{class g{constructor(c,s,l,v,O,E,M){this.getFoodCategoriesGql=c,this.CreateManyItemEntitiesGQL=s,this.createOneCategory=l,this.updateItemEntityGQL=v,this._auth=O,this._snackBar=E,this.DeleteOneItemEntityGQL=M}find(c){return this.getFoodCategoriesGql.watch(c).valueChanges.pipe((0,a.K)(()=>(0,C.of)({data:null})))}addSingleCategory(c){return this.createOneCategory.mutate({input:c}).pipe((0,f.U)(({data:s})=>s))}updateManyItems(c){this.CreateManyItemEntitiesGQL.mutate({input:{itemEntities:c}}).subscribe(({})=>{this._snackBar.open("Items has been added")},l=>{})}updateSingleItem(c){let s=!0;return this.updateItemEntityGQL.mutate({input:c}).subscribe(l=>{l&&(this._snackBar.open("Item is updated"),s=!0)},l=>{this._snackBar.open(l),s=!1}),s}removeSingleItem(c){let s=!0;return this.DeleteOneItemEntityGQL.mutate({input:c}).subscribe(l=>{void 0===l.id&&(s=!0,this._snackBar.open("Item Deleted ","OK"),location.reload())},l=>{s=!1,this._snackBar.open("Could not delete Item","OK")}),s}getCurrentUser(){const c=localStorage.getItem(this._auth.CURRENT_USER_KEY);return c?{id:JSON.parse(c).id}:null}static#t=this.\u0275fac=function(s){return new(s||g)(d.LFG(n.Pv),d.LFG(n.oR),d.LFG(n.kG),d.LFG(n.q1),d.LFG(h.i),d.LFG(e.ux),d.LFG(n.YB))};static#e=this.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},9010:(L,y,o)=>{o.r(y),o.d(y,{dashboardRoutingModule:()=>A});var n=o(1896),a=o(9288),C=o(636),f=o(1894),h=o(8445),d=o(1204),e=o(5879),_=o(2939),g=o(4079),P=o(7700),c=o(6814),s=o(2296),l=o(617),v=o(2651);const O=function(i){return[i]};function E(i,D){if(1&i&&(e.ynx(0),e.TgZ(1,"a",7),e._uU(2),e.qZA(),e.BQk()),2&i){const m=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,O,m.link)),e.xp6(1),e.hij(" ",m.label,"")}}function M(i,D){if(1&i&&(e.TgZ(0,"mat-tree-node",5),e.YNc(1,E,3,4,"ng-container",6),e.qZA()),2&i){const m=D.$implicit;e.xp6(1),e.Q6J("ngIf",!1===m.header)}}function x(i,D){if(1&i&&(e.TgZ(0,"mat-nested-tree-node")(1,"div",8)(2,"button",9)(3,"mat-icon",10),e._uU(4),e.qZA()(),e._uU(5),e.qZA(),e.TgZ(6,"div",11),e.GkF(7,12),e.qZA()()),2&i){const m=D.$implicit,p=e.oxw();e.xp6(2),e.uIk("aria-label","Toggle "+m.label),e.xp6(2),e.hij(" ",p.treeControl.isExpanded(m)?"expand_more":"chevron_right"," "),e.xp6(1),e.hij(" ",m.label," "),e.xp6(1),e.ekj("example-tree-invisible",!p.treeControl.isExpanded(m))}}const T=[{path:"",pathMatch:"full",canActivate:[a.u],component:(()=>{class i{constructor(m,p,I,$){this._snakbar=m,this._orderservice=p,this.apollo=I,this._dialog=$,this.treeControl=new f.VY(G=>G.child),this.dataSource=new h.WX,this.hasChild=(G,t)=>!!t.child&&t.child.length>0,this.dataSource.data=d.D}static#t=this.\u0275fac=function(p){return new(p||i)(e.Y36(_.ux),e.Y36(C.g),e.Y36(g._M),e.Y36(P.uw))};static#e=this.\u0275cmp=e.Xpm({type:i,selectors:[["food-dashboard"]],decls:7,vars:3,consts:[["mode","side","opened",""],[1,"example-tree",3,"dataSource","treeControl"],["matTreeNodeToggle","","style","margin-right: 8px;",4,"matTreeNodeDef"],[4,"matTreeNodeDef","matTreeNodeDefWhen"],[2,"height","100vh"],["matTreeNodeToggle","",2,"margin-right","8px"],[4,"ngIf"],[3,"routerLink"],[1,"mat-tree-node"],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],["role","group"],["matTreeNodeOutlet",""]],template:function(p,I){1&p&&(e.TgZ(0,"mat-drawer-container")(1,"mat-drawer",0)(2,"mat-tree",1),e.YNc(3,M,2,1,"mat-tree-node",2),e.YNc(4,x,8,5,"mat-nested-tree-node",3),e.qZA()(),e.TgZ(5,"mat-drawer-content",4),e._UZ(6,"router-outlet"),e.qZA()()),2&p&&(e.xp6(2),e.Q6J("dataSource",I.dataSource)("treeControl",I.treeControl),e.xp6(2),e.Q6J("matTreeNodeDefWhen",I.hasChild))},dependencies:[c.O5,n.lC,n.rH,s.RK,l.Hw,v.jA,v.kh,v.LW,h.GZ,h.fQ,h.eu,h.gi,h.uo,h.Ar],styles:[".example-tree-invisible[_ngcontent-%COMP%]{display:none}.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none;margin-right:10px}.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]{padding-left:10px}.mat-tree-node[_ngcontent-%COMP%]{display:flex;align-items:center;flex:1;word-wrap:break-word;margin-right:5px}.example-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] > .mat-tree-node[_ngcontent-%COMP%]{padding-left:20px}"]})}return i})()}];let A=(()=>{class i{static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[n.Bz.forChild(T),n.Bz]})}return i})()},92:(L,y,o)=>{o.d(y,{Dw:()=>E,Pv:()=>G,RX:()=>s,YB:()=>i,Z4:()=>v,kG:()=>I,oR:()=>x,q1:()=>T,tx:()=>P});var n=o(4079),a=o(5879);const g=n.Ps`
    query GetItemEntities($filter: ItemEntityFilter! = {}, $sorting: [ItemEntitySort!]) {
  itemEntities(filter: $filter, sorting: $sorting) {
    id
    name
    status
    category {
      id
      name
    }
  }
}
    `;let P=(()=>{class t extends n.AE{constructor(r){super(r),this.document=g}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const c=n.Ps`
    mutation updateOneOffer($input: UpdateOneOfferInput!) {
  updateOneOffer(input: $input) {
    id
  }
}
    `;let s=(()=>{class t extends n.mm{constructor(r){super(r),this.document=c}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const l=n.Ps`
    mutation CreateManyOffer($input: CreateManyOffersInput!) {
  createManyOffers(input: $input) {
    name
    id
  }
}
    `;let v=(()=>{class t extends n.mm{constructor(r){super(r),this.document=l}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const O=n.Ps`
    query GetAlloffers($filter: OfferFilter! = {}, $sorting: [OfferSort!]! = []) {
  offers(filter: $filter, sorting: $sorting) {
    id
    name
    discount
    status
    totalPrice
    price
    items {
      quantity
      name
      id
      selected
      status
      category {
        id
        name
      }
    }
    createdby {
      id
    }
    updatedby {
      id
    }
  }
}
    `;let E=(()=>{class t extends n.AE{constructor(r){super(r),this.document=O}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const M=n.Ps`
    mutation CreateManyItemEntities($input: CreateManyItemEntitiesInput!) {
  createManyItemEntities(input: $input) {
    id
  }
}
    `;let x=(()=>{class t extends n.mm{constructor(r){super(r),this.document=M}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const F=n.Ps`
    mutation UpdateItemEntity($input: UpdateOneItemEntityInput!) {
  updateOneItemEntity(input: $input) {
    id
    name
    image_data
    offer
    price
    category {
      id
      name
    }
    status
    type
    updatedby {
      id
    }
  }
}
    `;let T=(()=>{class t extends n.mm{constructor(r){super(r),this.document=F}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const A=n.Ps`
    mutation DeleteOneItemEntity($input: DeleteOneItemEntityInput!) {
  deleteOneItemEntity(input: $input) {
    id
  }
}
    `;let i=(()=>{class t extends n.mm{constructor(r){super(r),this.document=A}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();n.Ps`
    query GetFoodCategory($id: ID!) {
  foodCategory(id: $id) {
    id
    name
  }
}
    `;const p=n.Ps`
    mutation CreateOneFoodCategory($input: CreateOneFoodCategoryInput!) {
  createOneFoodCategory(input: $input) {
    id
    name
  }
}
    `;let I=(()=>{class t extends n.mm{constructor(r){super(r),this.document=p}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const $=n.Ps`
    query GetFoodCategories($filter: FoodCategoryFilter, $sorting: [FoodCategorySort!]) {
  foodCategories(filter: $filter, sorting: $sorting) {
    id
    name
  }
}
    `;let G=(()=>{class t extends n.AE{constructor(r){super(r),this.document=$}static#t=this.\u0275fac=function(u){return new(u||t)(a.LFG(n._M))};static#e=this.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);