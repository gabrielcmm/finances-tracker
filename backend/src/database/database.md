# Database Model for Family Financial Management Application

## Tables:

### Family Group (FamilyGroup):
- ID (Primary Key)
- Group Name
- Other relevant group information

### User (User):
- ID (Primary Key)
- Name
- Email
- Password (hash)
- Other relevant user information

### Family Member (FamilyMember):
- ID (Primary Key)
- Family Group ID (Foreign Key referencing FamilyGroup table)
- User ID (Foreign Key referencing User table)
- Role (admin, member);

### Account (Account):
- ID (Primary Key)
- Account Name
- Current Balance
- Account Type (e.g., checking, savings)
- User ID (Foreign Key referencing User table)
- Family Group ID (Foreign Key referencing Family Group table)

### Transaction (Transaction):
- ID (Primary Key)
- Description
- Amount
- Transaction Date
- Transaction Type (income, expense, or shared expense)
- Account ID (Foreign Key referencing Account table)
- Family Group ID (Foreign Key referencing FamilyGroup table)
- Category ID (Foreign Key referencing Category table)
- Budget ID (Foreign Key referencing Budget table)

### Category (Category):
- ID (Primary Key)
- Category Name
- Family Group ID (Foreign Key referencing FamilyGroup table)

### Transaction Detail (TransactionDetail):
- ID (Primary Key)
- Transaction ID (Foreign Key referencing Transaction table)
- Family Member ID (Foreign Key referencing FamilyMember table)
- Amount Paid By Member

### Tag (Tag):
- ID (Primary Key)
- Tag Name
- Family Group ID (Foreign Key referencing FamilyGroup table)

### Transaction-Tag (TransactionTag):
- Association ID (Primary Key)
- Transaction ID (Foreign Key referencing Transaction table)
- Tag ID (Foreign Key referencing Tag table)

### Transaction History (TransactionHistory):
- ID (Primary Key)
- Transaction ID (Foreign Key referencing Transaction table)
- Update Date
- Other relevant history information

### Budget (Budget):
- ID (Primary Key)
- Budget Amount
- Start Date
- End Date
- Family Group ID (Foreign Key referencing FamilyGroup table)

### FamilyGroupBudget (FamilyGroupBudgets):
- Family Group ID (Foreign Key referencing FamilyGroup table)
- Budget ID (Foreign Key referencing Budgets table)
