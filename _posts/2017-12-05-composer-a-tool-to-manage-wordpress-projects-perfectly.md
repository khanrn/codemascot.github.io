---
layout: post
title:  "Composer: A tool to manage WordPress projects perfectly"
categories: WordPress Composer
---
![composer-mascot](https://getcomposer.org/img/logo-composer-transparent5.png?style=center-image)

[Composer](https://getcomposer.org/), released first in 2012, is one of the biggest thing ever happened to *PHP*. Most of the libraries or frameworks in *PHP* are now-a-days using this *Composer* to manage themselves as well as their dependencies. Good news is, we also can use this *Composer* with *WordPress* to manage our projects. I know, some of you folks would say that usage of *Composer* will make the projects bloated and unnecessary complicated, but I would oppose on this. I would rather say if we can understand concept and mechanism of *Composer*, it could be the best tool to use for our every next *WordPress* project.

## \# Why We Need Composer

**Long term project**: For long time projects *Composer* is a blessing. Managing long time project means a lot of version control issues as well as a lot of deployment with obviously a lot of releases. And managing deployments of releases can be done easily with *Composer*.

**Teamwork**: *WordPress* has a pretty cool architecture which is distributed in to themes, plugins and mu-plugins. This way we can easily make modular application with *WordPress* and distribute the modules to be developed in an entire team. In fact we can distribute the modules for being developed to multiple teams also. Let's think that multiple people in a teams or multiple teams, are updating the modules repositories simultaneously. But if they want to update all those repositories manually in the staging or production server then it'll be pretty much time consuming as well as managing the version or releases will also be very tough. Now here comes the advantage of *Composer* to make bootstrap this kinda project easy. With one command all of them will be pull together. So, *Composer* is making team work easier than ever before.

**Prevents re-inventing the wheel**: Sometimes we need to add some special features to our *WordPress* application and often we can prevent re-inventing the wheel by using a prebuilt *composer* package for those features. Now, what is a *Composer* package ? In short, *Composer* packages are libraries which has been built to solve some problems. Often the packages are built as platform independent, means they can be used with any *PHP* platforms. As *WordPress* is also a *PHP* platform we can take advantage of those *Composer* packages and for that we need *Composer*. Let's say we need a functionality to convert an array to a Excel file. [Packagist](http://packagist.org/) got some cool *Composer* packages to solve this problem. If our project is using *Composer* then we can solve this issue with in a very short time. Besides, the solution will also be very dependable, cause there are some people who has tested this *Composer* package multiple times and updating the package time to time.

**Easy deployment**: Above here, some things has already been told about deployment. We'll extend those and will add some more things to it here. Easy deployment is one of the most effective advantage of using *Composer*. Also there are some dedicated deployment service like [Envoyer](https://envoyer.io/). You can use them to deploy with just one click at your production or staging environment. It'll give you a nice interface to do that. Otherwise with a shell access or command line access you can deploy the project with just one command. Isn't that cool ? You don't need to think about the changes or if any other people's changes. You just push you changes to the repository and the run an `composer update` in the server. All of the changes will be pulled to the server automatically. 

**VCS friendly**: *Composer* runs on version control system. It's one of the best advantage about *Composer*. This will help you to manage your project better. You can also add your private repositories to your *Composer* bootstrap and set them to specific branch or release. You can also create multiple branches or releases for one repository for multiple projects. In short you are getting a freedom to manage your projects more optimized.

**Easy update**: You can update your plugins and themes easily by setting the version number of them in the main `composer.json` bootstrap file. Also you can set them to a specific version number as well as lower or upper than a specific version. After that when ever you'll run the update command, then *Composer* will check all of those repositories with the associated versions and will update them automatically if needed. This way you can keep your *WordPress* application and it's parts up to date.

**On-boarding new person**: On boarding a new person in team is extremely easy using *Composer*. You just need to give the new person your VCS repositories access and the *Composer* project bootstrap file, the `composer.json` file. Then he/she will put the *Composer* file to his/her local server and run an install command with `composer install`. The system code will be pulled and installed automatically by *Composer* then. So just two steps and the code base will be in there. He/she might be needed to update database manually after this, but this is pretty usual for *WordPress* projects. He/she will also be able to update his/her local project code with *Composer* easily with just the update command `composer update`.

## \# Recommendations and Tools

### **Bedrock**
[Bedrock](https://roots.io/bedrock/) is a *WordPress* boilerplate which uses *Composer* as it's dependency manager. It also uses [WordPress](https://github.com/johnpbloch/wordpress) package by *John P. Bloch* and [Dotenv](https://github.com/vlucas/phpdotenv) package by *Vance Lucas*, plus it uses [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt) which forces *WordPress* to use [**Bcrypt**](https://en.wikipedia.org/wiki/Bcrypt) hashing rather than *MD5* based *WordPress* default hashing. It is developed and maintained by [Roots](https://roots.io/).

[Bedrock](https://roots.io/bedrock/) directory structure-

```
├── composer.json
├── config
│   ├── application.php
│   └── environments
│       ├── development.php
│       ├── staging.php
│       └── production.php
├── vendor
└── web         // --> web-root
    ├── app
    │   ├── mu-plugins
    │   ├── plugins
    │   ├── themes
    │   └── uploads
    ├── wp-config.php
    ├── index.php
    └── wp
```


### **WP Starter**
[WP Starter](http://wecodemore.github.io/wpstarter/) is another *Composer* based *WordPress* bootstrap utility package developed by  [wecodemore](https://github.com/wecodemore), an open source organization formed by a bunch of volunteer *WordPress* veterans. It uses [WordPress](https://github.com/johnpbloch/wordpress) package by *John P. Bloch* and [Dotenv](https://github.com/vlucas/phpdotenv) package by *Vance Lucas*. It's a pretty cool tool to bootstrap *WordPress* project and as it uses [Dotenv](https://github.com/vlucas/phpdotenv) package, we can easily manage DB credentials as well as other settings through a `.env` file. 

[WP Starter](http://wecodemore.github.io/wpstarter/) directory structure-

```
├── public          // --> web-root
│   ├── wordpress
│   └── wp-content
│       ├── plugins
│       └── themes
├── vendor
├── .gitignore
├── composer.json
├── composer.lock
└── README.md
```

## \# Necessary Repositories

### **WPackagist**
This [**WPackagist**](https://wpackagist.org/) is a site, which mirrors the [WordPress.org](https://wordpress.org/) plugin and theme directories as a *Composer* repository. At the home page of this site you'll find the instruction on how you should use it with your *Composer* setup. [**WPackagist**](https://wpackagist.org/) is developed and maintained by [Outlandish](https://outlandish.com/).

### **Packagist**
Packagist is the main Composer repository. It aggregates public PHP packages installable with Composer. This system is developed and maintainned by the authors of *Composer* and it's also open sourced. You'll find the source code [here](https://github.com/composer/packagist). For private usage you can also try the premium version of this, which is [packagist.com](https://packagist.com/). If you are building some thing big and need to maintain long, I'll definitely suggest you to give it a try.

## \# Conclusion

Above here I tried to explain how *Composer* can make our project management easy. Yes, there are also some cons of using *Composer*, but comparing to pros, the number of cons are very little. So, I'll suggest you to bootstrap your every project with composer unless you are building some theme or plugin or a stand alone *WordPress* product.