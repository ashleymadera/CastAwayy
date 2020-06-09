  ![Mobile](https://i.imgur.com/rEhMYM3.png)
  # CastAway <!-- omit in toc -->


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**CastAway** is the perfect crafters compnanion. Cast awat has projects for every skill level and garment type. Search and save projects with full instructions and material details so you know exactly what you need for yamr adventure. Cast away with us!


<br>

## MVP

_The **CastAway** MVP will consist of a RESTful Api used through a responsive React application which utilizes JWT authentication._

<br>

### Goals

- _Clean, bug free web appilcation_
- _Aesthetically pleasing design_


<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| Rails | _Lorem ipsum dolor sit amet, consectetur._ |
|     CORs      | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

- Mobile View
![Mobile](https://i.imgur.com/5bzhCS9.png)

-Login

![Mobile](https://i.imgur.com/U02vDKg.png)
- Desktop View

![Desktop](https://i.imgur.com/yae9I6e.png)




#### Component Tree

![Component Tree](https://i.imgur.com/NljoRgl.png)

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ shared/
        |__layout
        |__nav
        |__footer
      |__ProjectCreate
      |__ProjectEdit
      |__ProjectPage
      |__Search
      |__Liked
      |__Filter
      |__Account
      |__SignIn
      |__SignUp
      |__InstructorSignIn
|__ services/
  |__api-helper

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    |   class    |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  |   class    |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|    Search    |   class    |   y   |   n   | _The search will render input specefic data_      |
| Detail  |   class    |   n   |   y   | _The detail component will render the project details._                 |
|   Liked    |   class    |   n   |   y   | _The liked componenet will show all liked prijects of the user._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Linting    |    L     |     2 hrs      |     2 hrs     |    3 hrs    |
| Server (Back End) |    H     |     12 hrs      |     1 hrs     |     TBD     |
| Client(Front End) |    H     |     12 hrs      |     1 hrs     |     TBD     |
| Styling |    H     |     8 hrs      |     1 hrs     |     TBD     |
| Deploy |    M     |     2 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     36 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/PaRCTwQ.png)


<br>

***

## Post-MVP
- _Filtered/search functionality_
- _Connect/Share to social media/blog outlets_


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
