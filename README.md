![Project Image](./backCover.png)

# Food Delivery Web Application using Microservice Architecture with Nest.js, GraphQL, Next.js, Prisma

Welcome to the Food Delivery Web Application utilizing Microservice Architecture. This project aims to create a comprehensive Food Delivery Web Application employing Microservice Architecture. Separate applications will be built for User, Restaurant Owner.


## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).


## 1.Clone the Repository
```
git clone <repository-url>
cd Food-Delivery-WebApp
```
## 2.Install Dependencies
 ```
 npm install
 ```
## 3.Setup the Environment variables

DATABASE_URL="mongodb+srv://username:password@cluster0.mongodb.net/FoodApp?retryWrites=true&w=majority"
ACTIVATION_SECRET=your_activation_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_email_password
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
FORGOT_PASSWORD_SECRET=your_forgot_password_secret
CLIENT_SIDE_URI=http://localhost:3000

### Running the Application

## Run Database Migrations
```
npx dotenv -e apps/api-restuarants/.env -- npx prisma db push --schema=apps/api-restuarants/prisma/schema.prisma
npx dotenv -e apps/api-restuarants/.env -- npx prisma generate --schema=apps/api-restuarants/prisma/schema.prisma
```

## Start Backend Services

```
npx nx serve api-gateway
npx nx serve api-users
npx nx serve api-restuarants
```

## Start Frontend Applications

```
npx nx serve client
npx nx serve restuarant-dashboard
```


## Or Running All Services Concurrently

# Install concurrently
```
npm install concurrently --save-dev
```
# Add a Script in package.json

```
"scripts": {
  "start:all": "concurrently \"npx nx serve api-gateway\" \"npx nx serve api-users\" \"npx nx serve api-restuarants\" \"npx nx serve client\" \"npx nx serve restuarant-dashboard\""
}
```
# Run All Services
```
npm run start:all
```

# Accessing the Application
See the ports and access it



### Summary
1. Clone the repository.
2. Install dependencies.
3. Set up environment variables.
4. Run database migrations.
5. Start backend and frontend services.
6. Optionally, use `concurrently` to run all services at once.

This `README.md` file provides a comprehensive guide on how to set up and start the Food Delivery Web Application from cloning the repository to running the application.
