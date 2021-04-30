import { Role } from "./Role";
import { SexeType } from "./SexeType";

export class CreateAccount {
  username: string;
  lastNameUser: string;
  cinUser: string;
  password: string;
  confirmPasswordUser: string;
  phoneNumberUser: string;
  adressUser: string;
  birthDateUser: Date;
  emailUser: string;
  sexeUser: SexeType;
  role: Role;

  constructor(username: string, lastNameUser: string, cinUser: string, password: string, confirmPasswordUser: string,
    phoneNumberUser: string, adressUser: string, birthDateUser: Date, emailUser: string, sexeUser: SexeType, role: Role) {

    this.username = username;
    this.lastNameUser = lastNameUser;
    this.cinUser = cinUser;
    this.password = password;
    this.confirmPasswordUser = confirmPasswordUser;
    this.phoneNumberUser = phoneNumberUser
    this.adressUser = adressUser;
    this.birthDateUser = birthDateUser;
    this.emailUser = emailUser;
    this.sexeUser = sexeUser;
    this.role = role;

  }
}
