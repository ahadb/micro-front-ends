## Micro Front End Architecture

There are many front-end architectural styles in our modern world today, one that has gained some popularity over the past couple of years
is the micro front end-architecture. This repository explores architecture in code so we can have a clear understanding of how this works. 
We're not concerned with the functionality, data or features in each app, just with how the overall flow and control in the context of
creating such an architecture.

A little more on micro front-ends:

Micro front-ends replace monolithic Single Page Applications that are built using one code base into multiple applications each having their
own code base (...hence micro). These smaller applications are decoupled and contain their own set of features and modules.

There are some advantages in using this architecture:

1. In a large application multiple teams can work in complete isolation on their slice or micro front-end
2. Each micro front-end in turn is easier to grasp and each engineering team focuses solely on changes to their micro-front-end 
3. Each micro front-end can use completely different modules and rendering frameworks. This essentially means that we can use Angular
for one application and React for the other (thought one stack should be used throughout, but note that this is possible)

A tremendous amount of considerations come into play but what's important to understand is that in a micro front end architecture
we have a container that acts as the parent for all other micro front ends to render into. The container, which itself is an app, delegates 
and decides when and where to load it's children.

Another key takeaway here is that a distinct understanding of how Webpack (or similar bundler) works is crucial to setting up this type
of architecture. We use Webpack Module Federation and Vanilla JS/DOMe to achieve this in our contrived example. Ultimately we can easily
refactor this to use a more sophisticated rendering framework such as React or Vue (along with any third party NPM modules needed)

We can have a look at the tree to see that we indeed have a similar structure for of all our micro front-ends:

```bash
.
├── README.md
├── container
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── bootstrap.js
│   │   └── index.js
│   └── webpack.config.js
├── mfe-app-one
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── bootstrap.js
│   │   └── index.js
│   └── webpack.config.js
└── mfe-app-two
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── index.html
    ├── src
    │   ├── bootstrap.js
    │   └── index.js
    └── webpack.config.js

```
