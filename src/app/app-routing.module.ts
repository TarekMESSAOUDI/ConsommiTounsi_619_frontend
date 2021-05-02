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



const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthorizeGuardService] },
        { path: 'home/category', component: CategoryComponent },
        { path: 'home/basket', component: BasketClientComponent },
        { path: 'home/publicity', component: PublicityHomeComponent },
        { path: 'home/forum', component: ForumHomeComponent },
        { path: 'home/event', component: EventHomeComponent },
          { path: 'home/authentificate', component: AuthentificateComponent },
          { path: 'home/createaccount', component: CreateaccountComponent },
              { path: 'administrator', component: EsapaceAdministratorComponent },
                    { path: 'administrator/user', component: UserComponent },
                    { path: 'administrator/delivery', component: DeliveryAdministratorComponent },
                    { path: 'administrator/product', component: ProductAdministratorComponent },
                    { path: 'administrator/publicity', component: PublicityAdministratorComponent },
                    { path: 'administrator/sales', component: SalesAdministratorComponent },
                    { path: 'administrator/claims', component: ClaimAdministratorComponent },
                    { path: 'administrator/forum', component: ForumAdministratorComponent },
                    { path: 'administrator/department', component: DepartmentAdministratorComponent },
                    { path: 'administrator/stock', component: StockAdministratorComponent },
                    { path: 'administrator/statistic', component: StatisticAdministratorComponent },
                    { path: 'administrator/comptability', component: ComptabilityAdministratorComponent },
                    { path: 'administrator/cagnotte', component: CagnotteAdministratorComponent },
                    { path: 'administrator/event', component: EventAdministratorComponent },
              { path: 'client', component: EsapaceClientComponent },
                    { path: 'client/home', component: HomeClientComponent },
                    { path: 'client/profile', component: ProfileClientComponent },
                    { path: 'client/claim', component: ClaimClientComponent },
                    { path: 'client/cagnotte', component: CagnotteClientComponent },
                    { path: 'client/event', component: EventClientComponent },
                    {path:  'client/product',component:ProductComponent},
                    {path:'Client/departments',component: DepartmentClientComponent},
              { path: 'deliveryperson', component: EsapaceDeliveryPersonComponent },
                    { path: 'deliveryperson/delivery', component: DeliveryDeliveryPersonComponent },
              { path: 'departmentmanager', component: EspaceDepartmentManagerComponent },
                    { path: 'departmentmanager/product', component: ProductDepartmentManagerComponent },
                    { path: 'departmentmanager/department', component: DepartmentDepartmentManagerComponent },
                    { path: 'departmentmanager/stock', component: StockDepartmentMangerComponent },
                    { path: 'departmentmanager/Sales', component: SalesDepartmentManagerComponent },
 
  {path:'**',component:HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
