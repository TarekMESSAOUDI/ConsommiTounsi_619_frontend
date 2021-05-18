import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificateComponent } from './Components/authentificate/authentificate.component';
import { CreateaccountComponent } from './Components/createaccount/createaccount.component';
import { HomeComponent } from './Components/home/home.component';
import { EsapaceClientComponent } from './Components/esapace-client/esapace-client.component';
import { EspaceDepartmentManagerComponent } from './Components/espace-department-manager/espace-department-manager.component';
import { EsapaceDeliveryPersonComponent } from './Components/esapace-delivery-person/esapace-delivery-person.component';
import { EsapaceAdministratorComponent } from './Components/esapace-administrator/esapace-administrator.component';
import { AuthorizeGuardService } from './Services/AuthorizeGuard/authorize-guard.service';
import { UserComponent } from './Components/user/user.component';
import { CategoryComponent } from './Components/category/category.component';
import { ForumHomeComponent } from './Components/forum-home/forum-home.component';
import { DeliveryAdministratorComponent } from './Components/delivery-administrator/delivery-administrator.component';
import { PublicityHomeComponent } from './Components/publicity-home/publicity-home.component';
import { ProductAdministratorComponent } from './Components/product-administrator/product-administrator.component';
import { PublicityAdministratorComponent } from './Components/publicity-administrator/publicity-administrator.component';
import { SalesAdministratorComponent } from './Components/sales-administrator/sales-administrator.component';
import { ClaimAdministratorComponent } from './Components/claim-administrator/claim-administrator.component';
import { ForumAdministratorComponent } from './Components/forum-administrator/forum-administrator.component';
import { DepartmentAdministratorComponent } from './Components/department-administrator/department-administrator.component';
import { StockAdministratorComponent } from './Components/stock-administrator/stock-administrator.component';
import { StatisticAdministratorComponent } from './Components/statistic-administrator/statistic-administrator.component';
import { ComptabilityAdministratorComponent } from './Components/comptability-administrator/comptability-administrator.component';
import { CagnotteAdministratorComponent } from './Components/cagnotte-administrator/cagnotte-administrator.component';
import { EventAdministratorComponent } from './Components/event-administrator/event-administrator.component';
import { HomeClientComponent } from './Components/home-client/home-client.component';
import { ProfileClientComponent } from './Components/profile-client/profile-client.component';
import { BasketClientComponent } from './Components/basket-client/basket-client.component';
import { ClaimClientComponent } from './Components/claim-client/claim-client.component';
import { CagnotteClientComponent } from './Components/cagnotte-client/cagnotte-client.component';
import { EventClientComponent } from './Components/event-client/event-client.component';
import { DeliveryDeliveryPersonComponent } from './Components/delivery-delivery-person/delivery-delivery-person.component';
import { ProductDepartmentManagerComponent } from './Components/product-department-manager/product-department-manager.component';
import { DepartmentDepartmentManagerComponent } from './Components/department-department-manager/department-department-manager.component';
import { StockDepartmentMangerComponent } from './Components/stock-department-manger/stock-department-manger.component';
import { SalesDepartmentManagerComponent } from './Components/sales-department-manager/sales-department-manager.component';
import { EventHomeComponent } from './Components/event-home/event-home.component';
import { ProductComponent } from './Components/product/product.component';
import { DepartmentClientComponent } from './Components/espace-department-client/department-client/department-client.component';
import { OrderAdministratorComponent } from './Components/order-administrator/order-administrator.component';
import { OrderClientComponent } from './Components/order-client/order-client.component';
import { ListaArticuloComponent } from './Stripe/articulo/lista-articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './Stripe/articulo/detalle-articulo/detalle-articulo.component';
import { DetailsproductsComponent } from './Components/detailsproducts/detailsproducts.component';
import { CategoryadministratorComponent } from './Components/categoryadministrator/categoryadministrator.component';
import { DeliveryClientComponent } from './Components/delivery-client/delivery-client.component';
import { CommentStatsComponent } from './Components/comment-stats/comment-stats.component';

import { AuthorizeclientguardService } from './Services/AuthorizeClientGuard/authorizeclientguard.service';
import { AuthorizedepmantguardService } from './Services/AuthorizeDepManagerGuard/authorizedepmantguard.service';
import { AuthorizedeliverymenguardService } from './Services/AuthorizeDeliveryMenGuard/authorizedeliverymenguard.service';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { ProductsViewComponent } from './Components/products-view/products-view.component';
import { BasketComponent } from './Components/basket/basket.component';
import { AuthorizeforgotguardServiceService } from './Services/AuthorizeforgotguardService/authorizeforgotguard-service.service';
import { PdfComponent } from './Components/pdf/pdf.component';






const routes: Routes = [



 
 
  
  { path: 'home', component: HomeComponent },
  { path: 'home/category', component: CategoryComponent },
  { path: 'home/basket', component: BasketComponent },
  { path: 'home/publicity', component: PublicityHomeComponent },
  { path: 'home/forum', component: ForumHomeComponent },
  { path: 'home/event', component: EventHomeComponent },
  { path: 'home/authentificate', component: AuthentificateComponent },
  { path: 'home/createaccount', component: CreateaccountComponent },
  { path: 'home/forgot', component: ForgotComponent },

  { path: 'administrator', component: EsapaceAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/user', component: UserComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/delivery', component: DeliveryAdministratorComponent, canActivate: [AuthorizeGuardService] },
  
  { path: 'administrator/publicity', component: PublicityAdministratorComponent, canActivate: [AuthorizeGuardService]},
  { path: 'administrator/sales', component: SalesAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/claims', component: ClaimAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/forum', component: ForumAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/department', component: DepartmentAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/stock', component: StockAdministratorComponent, canActivate: [AuthorizeGuardService]},
  { path: 'administrator/statistic', component: StatisticAdministratorComponent, canActivate: [AuthorizeGuardService]},
  { path: 'administrator/comptability', component: ComptabilityAdministratorComponent, canActivate: [AuthorizeGuardService]},
  { path: 'administrator/cagnotte', component: CagnotteAdministratorComponent, canActivate: [AuthorizeGuardService] },
  { path: 'administrator/event', component: EventAdministratorComponent, canActivate: [AuthorizeGuardService]},
  { path: 'administrator/category', component: CategoryadministratorComponent },
  { path: 'administrator/order', component: OrderAdministratorComponent, canActivate: [AuthorizeGuardService] },


  { path: 'client/lista', component: ListaArticuloComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/product/:id', component: DetailsproductsComponent},
  { path: 'client', component: EsapaceClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/home', component: HomeClientComponent, canActivate: [AuthorizeclientguardService]},
  { path: 'client/profile', component: ProfileClientComponent, canActivate: [AuthorizeclientguardService]},
  { path: 'client/claim', component: ClaimClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/cagnotte', component: CagnotteClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/event', component: EventClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/product', component: ProductComponent,canActivate: [AuthorizeclientguardService]},
  { path: 'client/order', component: OrderClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/lista', component: ListaArticuloComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'client/detalle/:id', component: DetalleArticuloComponent, canActivate: [AuthorizeclientguardService]},
  { path: 'Client/department/virtual_visit', component: DepartmentClientComponent, canActivate: [AuthorizedepmantguardService] },
  { path: 'client/delivery', component: DeliveryClientComponent, canActivate: [AuthorizeclientguardService] },
  { path: 'pdf', component:PdfComponent },
  { path: 'deliveryperson', component: EsapaceDeliveryPersonComponent, canActivate: [AuthorizedeliverymenguardService] },
  { path: 'deliveryperson/delivery', component: DeliveryDeliveryPersonComponent, canActivate: [AuthorizedeliverymenguardService]},
  { path: 'client/products-view/:id',component:ProductsViewComponent},
  { path: 'departmentmanager/product', component: ProductAdministratorComponent, canActivate: [AuthorizedepmantguardService] },
  { path: 'products/inmydepartment/:id', component: EspaceDepartmentManagerComponent, canActivate: [AuthorizedepmantguardService] },

  { path: 'administrator/product', component: ProductDepartmentManagerComponent,  canActivate: [AuthorizeGuardService] },
  { path: 'departmentmanager/department', component: DepartmentDepartmentManagerComponent, canActivate: [AuthorizedepmantguardService] },
  { path: 'departmentmanager/stock', component: StockDepartmentMangerComponent, canActivate: [AuthorizedepmantguardService]},

  { path: 'home/forgot/updatepassword', component: UpdatepasswordComponent },

  { path: 'departmentmanager/Sales', component: SalesDepartmentManagerComponent, canActivate: [AuthorizedepmantguardService]},
  { path: 'departmentmanager/comment', component: CommentStatsComponent, canActivate: [AuthorizedepmantguardService]},

      { path: '**', component: HomeComponent }

];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
