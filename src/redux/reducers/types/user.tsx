export type User = {
  name?: string;
  isActive?: boolean;
  counterLogin?: number;
  Id?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  address?: string;
  manager?: string;
  surveyCompany?: string;
  role?: string;
  groups?: [UserGroup];
  currentGrade: string;
  currentCoursePlan: string;
  MacReqCount: number;
  platform: string;
  referralCode: string;
  city: string;
  phoneNumber: string;
  isComplete: boolean;
  isReferralAdded: boolean;
  backupEmail: string;
  profileImage: string;
  ipAddress: string;
  networkSpeed: number;
  dateCreated: string;
  country?: string;
};

export type UserGroup = {
  isActiveGroup: boolean;
  Id: string;
  group: string;
};
