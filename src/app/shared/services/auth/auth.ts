export class Auth {
  public static userData: UserLogin;
}

export class UserLogin {
  error: string;
  userLoginId: string;
  userName: string;
  hasAuth: string;
  jsessionid: string;
  projectPermission: any;
  permissions: any;
  deptId: any;
  deptName: any;
  sysProp: any;
  generalPartyId: any;
  generalPartyName: any;
  viewPermissions: string;
}
