export type UserFamilyGroup = {
  id: number;
  userId: number; // User FK
  familyGroupId: number; // FamilyGroup FK
  role: string;
};
