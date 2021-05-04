import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BasketComponent } from './Components/basket/basket.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { SliderComponent } from './Components/slider/slider.component';
import { CategoryComponent } from './Components/category/category.component';
import { AuthentificateComponent } from './Components/authentificate/authentificate.component';
import { CreateaccountComponent } from './Components/createaccount/createaccount.component';
import { StockComponent } from './Components/stock/stock.component';
import { ChartComponent } from './Components/Product details/chart.component';
import { UserComponent } from './Components/user/user.component';
import { EsapaceClientComponent } from './Components/esapace-client/esapace-client.component';
import { EspaceDepartmentManagerComponent } from './Components/espace-department-manager/espace-department-manager.component';
import { EsapaceDeliveryPersonComponent } from './Components/esapace-delivery-person/esapace-delivery-person.component';
import { EsapaceAdministratorComponent } from './Components/esapace-administrator/esapace-administrator.component';
import { AuthInterceptorService } from './Services/AuthInterceptor/auth-interceptor.service';
import { LogoutComponent } from './Components/logout/logout.component';
import { MyprofileclientComponent } from './Components/myprofileclient/myprofileclient.component';
import { ForumHomeComponent } from './Components/forum-home/forum-home.component';
import { PublicityHomeComponent } from './Components/publicity-home/publicity-home.component';
import { DeliveryAdministratorComponent } from './Components/delivery-administrator/delivery-administrator.component';
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
import { BillComponent } from './Components/bill/bill.component';
import { UpdateproductComponent } from './Components/updateproduct/updateproduct.component';
import { DepartmentClientComponent } from './Components/espace-department-client/department-client/department-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsproductsComponent } from './Components/detailsproducts/detailsproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    HomeComponent,
    ProductComponent,
    SliderComponent,
    CategoryComponent,
    AuthentificateComponent,
    CreateaccountComponent,
    StockComponent,
    ChartComponent,
    UserComponent,
    EsapaceClientComponent,
    EspaceDepartmentManagerComponent,
    EsapaceDeliveryPersonComponent,
    EsapaceAdministratorComponent,
    LogoutComponent,
    MyprofileclientComponent,
    ForumHomeComponent,
    PublicityHomeComponent,
    DeliveryAdministratorComponent,
    ProductAdministratorComponent,
    PublicityAdministratorComponent,
    SalesAdministratorComponent,
    ClaimAdministratorComponent,
    ForumAdministratorComponent,
    DepartmentAdministratorComponent,
    StockAdministratorComponent,
    StatisticAdministratorComponent,
    ComptabilityAdministratorComponent,
    CagnotteAdministratorComponent,
    EventAdministratorComponent,
    HomeClientComponent,
    ProfileClientComponent,
    BasketClientComponent,
    ClaimClientComponent,
    CagnotteClientComponent,
    EventClientComponent,
    DeliveryDeliveryPersonComponent,
    ProductDepartmentManagerComponent,
    DepartmentDepartmentManagerComponent,
    StockDepartmentMangerComponent,
    SalesDepartmentManagerComponent,
    EventHomeComponent,
    BillComponent,
    UpdateproductComponent,
    DepartmentClientComponent,
    DetailsproductsComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'XSRF-TOKEN' }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    //{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
