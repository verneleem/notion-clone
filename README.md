# 📓 Notion Clone

#### Create and Edit Notes like in Notion

This clone tries to replicate some of the great note-taking features Notion has. If you don't know [Notion.so](https://notion.so) yet, I highly recommend to check it out!

📌 Live Demo with Slash GraphQL: [tender-darwin-8cc2fe.netlify.app](https://tender-darwin-8cc2fe.netlify.app/)

📌 Original Medium Article: [How To Build A Text Editor Like Notion](https://medium.com/swlh/how-to-build-a-text-editor-like-notion-c510aedfdfcc)

📌 How to Convert MongoDB and REST API to Slash GraphQL Article: Coming Soon

---

<img alt="notion clone screenshot" src="./screenshot.gif" width="480">

**NOTE**: As Slash GraphQL does not provide document storage, and this is a serverless deployed app, we decided to restrict the image upload capabilities at this time instead of integrating with a 3rd party service such as S3.

---

## Features

- **Slash Commands** (Type `/` to turn the block into different content types)
- _REDACTED_ - **HTML Support** (Use regular HTML tags like `<a>` in text blocks)
- _REDACTED_ - **Image Support** (Upload images by using the `/image` command)
- **Drag And Drop** (Reorder blocks easily by drag and drop)
- **Guest Editing** (Anyone can create public pages and share them via link)
- _INTEGRATED_ - **User Management** (Create an account to create private pages)
- _REMOVED_ **Scheduled Jobs** (Delete inactive pages and accounts automatically)

In this rendition, user management is acheived integrating with Auth0 services. HTML Support was removed to deploy serverless. (Future idea to integrate with markdown render service.) Scheduled jobs are not as Slash GraphQL does not charge for storage but only for data transfered.

_NOTE_: This deployed application is for experimentation purposes only with no promise of data retention.

## Tech Stack

The frontend is built with Next.js and serverless deployed. On the backend, Slash GraphQL replaced the REST API and now handles user's content. User authentication is now achieved with Auth0 services.

#### Frontend

Next.js · React.js · SCSS/SASS · Netlify

#### Backend

Slash GraphQL · Auth0

## Installation

1. **Clone the project**

   ```sh
    git clone https://github.com/verneleem/notion-clone.git
    cd notion-clone
    git checkout graphql
   ```
   
2. **Add environment variables**

   Replace Hard coded Slash and Auth0 variables:

   [Slash GraphQL Endpoint](https://github.com/verneleem/notion-clone/blob/3255109b2cabe1ef2759f354e52257bfbf6bd003/frontend/lib/apolloClient.js#L14)
   [Auth0 Domain](https://github.com/verneleem/notion-clone/blob/3255109b2cabe1ef2759f354e52257bfbf6bd003/frontend/pages/_app.js#L36)
   [Auth0 Client ID](https://github.com/verneleem/notion-clone/blob/3255109b2cabe1ef2759f354e52257bfbf6bd003/frontend/pages/_app.js#L37)

3. **Deploy backend on [slash.dgraph.io](https://slash.dgraph.io)**

    Deploy a new backend on Slash GraphQL, and copy the schema from backend/schema.graphql. You will need to update the `# Dgraph Authorization` line for your own Auth0 configuration. More details on this later.

4. **Install and run frontend (http://localhost:3000)**

    ```sh
    cd frontend
    npm install
    npm run dev
    ```

## About

Verneleem - Contract dev for [Dgraph.io](https://dgraph.io) - [verneleem.dg@gmail.com](mailto:verneleem.dg@gmail.com)

Forked From:
Konstantin Münster – [konstantin.digital](https://konstantin.digital) – [mail@konstantin.digital](mailto:mail@konstantin.digital)
[https://github.com/konstantinmuenster](https://github.com/konstantinmuenster)

Distributed under the [MIT](http://showalicense.com/?fullname=Konstantin+M%C3%BCnster&year=2019#license-mit) license.
See `LICENSE` for more information.
