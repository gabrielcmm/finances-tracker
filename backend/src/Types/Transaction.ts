export type Transaction = {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: string;
  accountId: number; // Account FK
  familyGroupId: number; // FamilyGroup FK
  categoryId: number; // Category FK
  budgetId: number; // Budget FK
};
