# notion-clone backend

This backend REST API was completely removed! Instead we served the backend serverless with [Slash GraphQL](https://slash.dgraph.io). We could have managed user credentials through Slash with their password type, but then we would've had to generate JWTs after authenticating users. Instead, we simply integrated with Auth0 and users can authenticate with email/password or a Google account.

For thoroughness, here is the model that was used by the former MongoDB:

```js
// models/page.js
const pageSchema = new Schema(
  {
    blocks: [
      {
        tag: {
          type: String,
          required: true,
        },
        html: {
          type: String,
          required: false,
        },
        imageUrl: {
          type: String,
          required: false,
        },
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
```

```js
// models/user.js
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    activationToken: {
      type: String,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpiry: {
      type: Number,
    },
    pages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Page",
      },
    ],
  },
  { timestamps: true }
);
```

Without the auth rules, Here is the simplified GraphQL Schema deployed on Slash:

```graphql
type Page  {
  id: ID!
  blocks: String
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime
}

type User {
  email: String! @id
  name: String!
  pages: [Page] @hasInverse(field: "creator")
  createdAt: DateTime!
  updatedAt: DateTime
}
```

With Slash GraphQL, there is no need for auth middleware other than the authentication process. After a user is authenticated and provides a JWT, Slash controls access by applying rules. Here are the rules we applied. (See schema.graphql for exact implementation.)

- A user can query public pages
- A user can query pages they created
- A user can update public Pages
- A user can update Pages they created
- Only a user with a special isAmin property can delete public pages
- A user can delete Pages they created
- Everyone can add a user
- A user can see their own user
- A user can update their own user
- Only a user with a special isAdmin property can delete users

Authorization rules are easy to make with Slash GraphQL using GraphQL syntax and the generated queries, types, and inputs.
