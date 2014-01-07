Coders Classroom
================

Online classroom environment, designed by coders for coders. Great for educators and students alike.

## Reason for creating this Application
There are many [Course Management System (CMS), also known as a Learning Management System (LMS) or a Virtual Learning Environment (VLE), the one I am most familiar with being Moodle](https://moodle.org/). These systems are designed for learning in general, with many different subjects. **Coders Classroom** is designed from the ground up with programmers in mind, and so will be very powerful in the hands of both educators and students who know or want to learn about programming.

## Students Will Learn
- **Git** - [Git](http://git-scm.com/) (backed by [GitLab HQ](http://gitlab.org/)) is used as the medium for storage, updating, and sharing (including submitting) student exercises and assignents
- **Unit Testing** - Automated grading of exercises are performed in a similar manner as [Unit Tests](http://en.wikipedia.org/wiki/Unit_testing), so students can get used to making their own, and having their code evaulated by tests, such as in [Test-Driven Development](http://en.wikipedia.org/wiki/Test-driven_development).

## Foundation
- Written in [Node.js](http://nodejs.org/)
- Built with [Git, distributed version control system,](http://git-scm.com/) in mind. https://github.com/nodegit/nodegit
- Blog style Classrooms, with ability for Educators to upload miscellaneous content and link resources. 
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
An Educator can easily create a new class. In fact, a student can act as an "Open-Source Educator" and create their own Class.

### Creating an Exercise
An exercise is strictly an assignment where the submitted information is code that can be Unit Tested and graded automatically. Tests are performed on [Standard Input and Output](http://en.wikipedia.org/wiki/Standard_streams#Standard_input_.28stdin.29).

### Creating an Assignment
An assignent can consist of Exercises (modular programs that can be Unit Tested) or written pieces that will have to be manually graded.

### Submitting an Exercise / Assignment
Submitting an exercise or assignment is as easy as providing a Git repository URL. The Class Admin (Educator) will be added as a view-only Member of the project, so that the repository may be pulled.
