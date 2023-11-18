export type Account = {
  id: number;
  name: string;
  currentBalance: number;
  accountType: string;
  userId: number; // User FK
  familyGroupId: number; // FamilyGroup FK
};
