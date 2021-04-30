import { Role } from "./Role";
import { SexeType } from "./SexeType";
import { ZoneMap } from "./ZoneMap";


export class User {
 idUser: number;
  username: string;
  lastNameUser: string;
  cinUser: string;
  password: string;
  confirmPasswordUser: string;
  stateUser: boolean;
  phoneNumberUser: string;
  adressUser: string;
  birthDateUser: Date;
  emailUser: string;
  sexeUser: SexeType;
  accountNonLocked: boolean;
  failedAttempt: number;
  lockTime: Date;
  resettoken: string;
  isBlocked: boolean;
  blockDate: Date;
  unBlockDate: Date;
  isPrivate: boolean;
  salaire: number;
  pointnumber: number;
  avilaibility: boolean;
  zone: ZoneMap;
  role: Role;

/*  constructor(idUser: number, username: string, lastNameUser: string, cinUser: string, password: string, confirmPasswordUser: string,
    stateUser: boolean, phoneNumberUser: string, adressUser: string, birthDateUser: Date, emailUser: string, sexeUser: SexeType,
    accountNonLocked: boolean, failedAttempt: number, lockTime: Date, resettoken: string, isBlocked: boolean, blockDate: Date,
    unBlockDate: Date, isPrivate: boolean, salaire: number, pointnumber: number, avilaibility: boolean, zone: ZoneMap,
    role: Role) {

    this.idUser = idUser;
    this.username = username;
    this.lastNameUser = lastNameUser;
    this.cinUser = cinUser;
    this.password = password;
    this.confirmPasswordUser = confirmPasswordUser;
    this.stateUser = stateUser;
    this.phoneNumberUser = phoneNumberUser;
    this.adressUser = adressUser;
    this.birthDateUser = birthDateUser;
    this.emailUser = emailUser;
    this.sexeUser = sexeUser;
    this.accountNonLocked = accountNonLocked;
    this.failedAttempt = failedAttempt;
    this.lockTime = lockTime;
    this.resettoken = resettoken;
    this.isBlocked = isBlocked;
    this.blockDate = blockDate;
    this.unBlockDate = unBlockDate;
    this.isPrivate= isPrivate;
    this.salaire= salaire;
    this.pointnumber= pointnumber;
    this.avilaibility= avilaibility;
    this.zone= zone;
    this. role= role;
  }*/

}
