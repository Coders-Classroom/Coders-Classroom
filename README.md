Coders Classroom
================

[![Build Status](https://travis-ci.org/Coders-Classroom/Coders-Classroom.png?branch=master)](https://travis-ci.org/Coders-Classroom/Coders-Classroom)
[![Dependency Status](https://david-dm.org/Coders-Classroom/Coders-Classroom.png)](https://david-dm.org/Coders-Classroom/Coders-Classroom)
[![authors](https://sourcegraph.com/api/repos/github.com/Coders-Classroom/Coders-Classroom/badges/authors.png)](https://sourcegraph.com/github.com/Coders-Classroom/Coders-Classroom)
[![Total views](https://sourcegraph.com/api/repos/github.com/Coders-Classroom/Coders-Classroom/counters/views.png)](https://sourcegraph.com/github.com/Coders-Classroom/Coders-Classroom)
[![Views in the last 24 hours](https://sourcegraph.com/api/repos/github.com/Coders-Classroom/Coders-Classroom/counters/views-24h.png)](https://sourcegraph.com/github.com/Coders-Classroom/Coders-Classroom)

Online classroom environment, designed by coders for coders. Great for educators and students alike.

-----

![System Setup](https://docs.google.com/drawings/d/14KqaC1bBqG2D2H2uvFN4BzQNMO0UYOMGHB6jaBZeFuI/pub?w=960&amp;h=720)

-----

### Installation
Run the following Bash command:

```bash
git clone https://github.com/Coders-Classroom/Coders-Classroom.git && \
node install
```

### Usage
To start the server run:

#### 1. Building Ember.js for first time
This will process the current [app](./app) directory into compiled static public files.

```bash
grunt build
```

#### 2. Starting Server
This will start the Node.js server and will serve both the Ember.js App and the `Coders Classroom` API.

```bash
node server/index.js
```

##### 3. For Developers
This will watch for file changes and re-compile your source code. Does not support `livereload`, so refresh your browser to see changes.

```bash
grunt watch
```

**Note**: The Grunt task `watch` will only update changed files, it will not `build` all other files, until they have been changed.

For an all in one command:

```bash
grunt build watch
```

See the [docs](docs/) directory for more information.

### Contributing

Please see this issue: https://github.com/Coders-Classroom/Coders-Classroom/issues/1

-----

## Reason for creating this Application
There are many [Course Management System (CMS), also known as a Learning Management System (LMS) or a Virtual Learning Environment (VLE), the one I am most familiar with being Moodle](https://moodle.org/). These systems are designed for learning in general, with many different subjects. **Coders Classroom** is designed from the ground up with programmers in mind, and so will be very powerful in the hands of both educators and students who know or want to learn about programming.

## Goals
### Students Will Learn Important Skills
- **Git** - [Git](http://git-scm.com/) (backed by [GitLab HQ](http://gitlab.org/)) is used as the medium for storing, updating, and sharing (including submitting) student exercises and assignents.
- **Unit Testing** - Automated grading of exercises are performed in a similar manner as [Unit Tests](http://en.wikipedia.org/wiki/Unit_testing), so students can get used to making their own, and having their code evaulated by tests, such as in [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development).
- **Issue Tracking** - With [GitLab]((http://gitlab.org/) backing each student's project, they are encouraged to create and resolve issues as they progress through their class exercises and assignments.
- **Version Control** - [Git](http://git-scm.com/) is a distributed version control system, and knowing how to use a version control system will be important when working on industry-standard programs.
- **Team Work** - With [GitLab]((http://gitlab.org/), it is easy to add members to projects and collaborate on projects; and the Issue Tracker makes it even easier to manage who is doing what.
- **Deadlines / Milestones** - It is very important hit your project deadlines. This should be the case for both work and school.

### Educators Will Be More Efficient at Educating
- **Automated Grading** - Exercises can be quickly, and automatically, graded and feedback sent to the student for improvements. 
- **Class Statistics** - Class progress can be monitored and can easily narrow in on the aspects that individual students are struggling with.

## Foundation
- Written in [Node.js](http://nodejs.org/)
- Built with [Git, distributed version control system,](http://git-scm.com/) in mind. https://github.com/nodegit/nodegit
- [Ember.js](http://emberjs.com/), a JavaScript framework for creating ambitious web applications
- [Twitter Bootstrap 3.0](http://getbootstrap.com/)
- [GitLab HQ](http://gitlab.org/) support, https://github.com/moul/node-gitlab
- [Feathers.js API](http://feathersjs.com/)
- [Socket.io](http://socket.io/) for asychronous / realtime updating (included in Feathers.js)
- [Express.js](http://expressjs.com/) for RESTful API (included in Feather.js)
- [MongoDB](http://www.mongodb.org/) for server-side database.
- [Passportjs](http://passportjs.org/) for API authentication.
- [iCalendar / CalDAV support](http://en.wikipedia.org/wiki/ICalendar), https://github.com/tritech/node-icalendar
- [Online Calendar viewer](http://arshaw.com/fullcalendar/)

## Features
- All accounts can act as Educator (teacher) and/or Student accounts, depending on usage.
- Easily create new online classes.
- Blog style Classrooms, with ability for Educators to upload miscellaneous content and link resources. 
- Create exercises / assignments (Unit Testing to partially automated grading) with online submission for Students
- Calendar for events (such as classes, exercises / assignments due dates, exams) and CalDAV to allow subscription to calendar on desktop/mobile calendar applications
- Support for basic compiing and execution of code in the following common programming languages: C, C++, Python, and JavaScript (Node.js).

-----

## High-Level Description of Concept

## Basics
The server application is not a Git server. 
It [pulls](https://www.kernel.org/pub/software/scm/git/docs/git-pull.html) the code from the Git repository specified. 

### Sign Up / Login
Accounts are linked to either a [GitLab](http://gitlab.org/) account.
The user must first have an account first a GitLab installation then sign up and sign in with that account. The user's email is used as the unqiue username. A local GitLab installation is choosen because this can be setup by an organization and run for educational purposes for free and allow for both Private and Public projects.

### Creating a Class

![What happens when creating a class](https://docs.google.com/drawings/d/1D-ZWZfRpOhdCo1X5mSXc2Nr8o5pkeB2wboKX_lEDZio/pub?w=1549&amp;h=743)

An Educator can easily create a new class. In fact, a student can act as an "Open-Source Educator" and create their own Class.

### Creating an Exercise
An exercise is strictly an assignment where the submitted information is code that can be Unit Tested and graded automatically. Tests are performed on [Standard Input and Output](http://en.wikipedia.org/wiki/Standard_streams#Standard_input_.28stdin.29).

### Creating an Assignment
An assignent can consist of Exercises (modular programs that can be Unit Tested) or written pieces that will have to be manually graded.

### Submitting an Exercise / Assignment
Submitting an exercise or assignment is as easy as providing a Git repository URL. The Class Admin (Educator) will be added as a view-only Member of the project, so that the repository may be pulled.
