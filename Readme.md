# To-do List | Coopers Digital

This project was created based on the [Cooper's Full Stack Test](https://github.com/CoopersDigitalProduction/full-stack-test?tab=readme-ov-file)

Currently can be accessed at: [coopers.epeixoto.dev](https://coopers.epeixoto.dev)

API Documentation at: [coopers.epeixoto.dev/resources](https://coopers.epeixoto.dev/resources)

Demonstrative Playlist: [youtube.com/@capitão_eulr](https://www.youtube.com/watch?v=ZZueC2mg_go&list=PLX00v7ikWSwdm7XTLa4Y1ilJjiNhclAt5&index=4)

Features includes:

```diff
+ Front-end development of the provided layout ensuring responsivity across major browsers (Chrome, Safari, Firefox, and Microsoft Edge)

+ User registration and login functionalities using React and Node.js, with a to-do list that is associated with each logged-in user

+ Move items to a completed list upon checking them

+ Edit item text by clicking on it

+ Show delete button on hover and remove the item upon clicking

+ Move items to a completed list upon checking them

+ Order list by dragging items

+ Carousel implementation for the "good things" section with horizontal navigation between cards

+ Email sending feature integrated into the contact form
```

Technologies utilized are:

```diff
+ React/Nextjs
+ Tailwindcss
+ Docusaurus
+ NodeJs
+ Sequelize ORM
+ Nginx
+ Postgres 
+ Docker and Docker Compose
+ AWS
```

Database Diagram:

![image](https://github.com/user-attachments/assets/a7570f75-1ba8-4156-96a6-75850d2ddbce)

### Setup on your machine

If you are on Linux, all you have to do is to set the enviroment variables then open the terminal and type:

```shell
$ make dev
```

Now your app should be running on localhost

For other OS users, it may be not enough and you may have a bit more work. I can not give support at the moment.

If you want to run Docusaurus (API Documentation) locally, move to ./docs and type:

```shell
$ npm run install
$ npm run start
```






