# upscalix_maintenance-request

# Setup Guide
1. Run `yarn install`
2. Run `yarn workspace server dlx prisma init --datasource-provider sqlite` to create the SQLiteDatabase
3. Run `yarn workspace server prisma migrate dev --name init` to initialize the SQL Schema
4. Run `yarn workspace server prisma:generate` to generate Prisma Client
5. Run `yarn workspace server start:dev` to initiate the GraphQL server
6. Run `yarn workspace web dev` to initiate NextJS 15 with App Router

# Features

## Main Feature
1. Ability to create, edit maintenance ticket
2. Caching using `react-query`
3. Realtime ticket push using GraphQL subscription

## Missing Features
1. Better project structure
2. Use of MobX
3. Realtime integration when ticket is edited  

Overall, I never used GraphQL, `react-query`, nor MobX, the new React features and new NextJS before. So I have to learn them first before actually creating it. It was a good challenge after all, I learn a lot of new things.
