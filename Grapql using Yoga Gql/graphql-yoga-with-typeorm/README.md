# graphql-yoga-with-typeorm-boilerplate v1.1

## Description

- Boiler plate project for
  - graphql-yoga(express)
  - typescript
  - typeorm
  - postgres

## Features

- [x] Express Server (port 4000)
- [x] Graphql Entry Point (/graphql)
- [x] Graphql Playground Page (/playground)
- [x] Typeorm Settings For Postgres
- [x] Basic User Entity (src/entities/User.ts)
- [x] Email Sign Up
- [x] Email Sign In
- [x] Get My Profile

## Usage

#### Create project

```console
mkdir graphql-project
cd graphql-project
git clone https://github.com/DalYoon/graphql-yoga-with-typeorm-boilerplate .
```

#### Change `.env` for your database and JWT Secret

```
DB_ENDPOINT=(your database address)
DB_NAME=(your database name)
DB_USERNAME=(your database username)
DB_PASSWORD=(your database password)
JWT_SECRET=(your JWT secret for authentication)
```

#### VSCode GraphQL Support

Install the [GraphQL VSCode Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql) for best experience.

#### Run `yarn` to install dependencies

```console
yarn
```

#### Run `yarn dev` to start the server

```console
yarn dev
```

#### Connect to `http://localhost:4000/playground` for playground page

#### Add entities those you need into `src/entities/*`

#### Enjoy!
