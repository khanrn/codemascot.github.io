---
layout: post
title:  "Easy flash messaging in WordPress"
categories: Generic
topics: WordPress | Composer
---

Flash messaging, a very effective thing to give notifications to the users. This way you can make your UX very effective as well as interactive. Now question is, how can we do this ? Well, there are several ways we can manage to do it. Common approaches are through a `$_GET` variable or with cookies or with `SESSION`. Among them `SESSION` is the most preferred and best solution. Cause with `$_GET` variable the disposal of the notification message is tough. For cookies, it depends on browser and custom user settings can deny the message notification to be stored in the browser. Now, comparing to those two approaches, the `SESSION` approach is far more safe as well as feasible. Yea, it can be a little trouble with some server configurations. But that depends on the server administrator and developer. With a little careful tuning to the server we can easily avoid the issues.

However, for my personal usages I’ve built a Composer package to handle flash messaging easily. I’ve named it [TheDramatist WP Flash Message](https://github.com/rnaby/wp-flash-message). Here below has been given the requirements with a brief instruction for installing and using this package. 


## Requirements
- PHP >= 5.6
- Composer
- WordPress >= 4.0 (Lowest Tested Version)

## Installation
The best way to use this package is through Composer:
```php
$ composer require rnaby/wp-flash-message
```
## Usage
#### Step 1
Instantiate the `FlashMessage` class object like below-

```php
$flash_message = new \TheDramatist\WPFlashMessage\FlashMessage();
```

#### Step 2
Turn on the `SESSION` in *PHP* like below-

```php
$flash_message->start_session();
```

#### Step 3
Set you message like below-

```php
$flash_message->error(
    __(
        'Your message here',
        'text-domain'
    ),
    // This is the URL where you want to redirect.
    home_url()
);
```

#### Step 4
Display the `SESSION` message like below-

```php
// Display the messages
$flash_message->display();
```

#### Step 5
Write `CSS` style as you want to style the message.

> **If you are using prcedural approach then you may need to use PHP super global to store the instance of the class.**
> 
> ```
> $GLOBALS['FlashMessage'] = $flash_message
> ```
> 
> **That's why procedural approach is highly discouraged.**

## Coding styles and technique
* All input data escaped and validated.
* **PSR-4** autoloading used.
* Developed as *Composer* package.
* **YODA** condition check applied.
* Maintained ***Right Margin*** carefully. Usually that is 80 characters.
* Used `true`, `false` and `null` in stead of `TRUE`, `FALSE` and `NULL`.
* **INDENTATION:** *TABS* has been used in stead of *SPACES*.
* *PHP Codesniffer* checked.
* *WordPress VIP* coding standard followed mostly.

## License and Contribution

This package is free for everyone! Since it's released under the [MIT License](https://github.com/rnaby/wp-flash-message/blob/master/LICENSE) you can use it free of charge on your personal or commercial website. Plus all feedback / bug reports / pull requests are welcome.
