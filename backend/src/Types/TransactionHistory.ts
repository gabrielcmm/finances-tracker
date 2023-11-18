export type TransactionHistory = {
  id: number;
  transactionId: number; // Transaction FK
  updatedBy: number; // User FK
  updatedOn: Date;
};
