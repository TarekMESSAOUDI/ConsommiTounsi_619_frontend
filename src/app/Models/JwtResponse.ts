import { Role } from "./Role";

export class JwtResponse {

  jwttoken: string;
  type: string;
  username: string;
  authorities: string[];

  constructor(jwttoken: string, type: string, username: string, authorities: string[]) {

    this.jwttoken = jwttoken;
    this.type = type;
    this.username = username;
    this.authorities = authorities;
  }
}
