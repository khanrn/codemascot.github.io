---
layout: post
title: "A Dissection Of WordPress Template Hierarchy"
categories: Programming
topics: WordPress Concepts
---

Template hierarchy means loading the templates in a hierarchical order. Yes, that's true. But do we know how WordPress handles this thing underneath? I think the answer will be "NO" for most of us! Without understand the core underneath process of template hierarchy we'll not be able to use it or tweak it to it's best! Here, I'll try to explain this with example. Stay tuned for a thrill ride!

## \# WordPress Life Cycle Boot Up Process

To understad template hierarchy we first need to understand WordPress life cycle boot up process a little bit, like first 4 steps. It'll help us to understand when the template things get triggered. 

First 4 steps of WordPress life cycle boot up process-

1. `index.php`
2. `wp-blog-header.php`
3. `wp-load.php` >> `wp-config.php` >> `wp-settings.php` >> `wp-includes/template.php` 
4. `wp-includes/template-loader.php`

Here we can see how the `template.php` and `template-loader.php` gets included in WordPress life cycle. Notice that, both file `wp-load.php`(3) and `template-loader.php`(4) are getting included inside `wp-blog-header.php` in a sequential order. Now, as PHP is an interpreted language, means it executes all the code sequentially from top to bottom, thus it'll finish executing the `wp-load.php` first and then it'll come to execute `template-loader.php`. This way it loads `template.php` first by `wp-load.php` and after that it'll load `template-loader.php`.

## \# Prerequisites Of Dissection

Anyway, as we have loaded `template.php` and `template-loader.php` in our WordPress system, now we need to analyze them a bit. 

First, what these files contain...

1. `template.php` has the template loading functions.
2. `template-loader.php` loads the correct template based on the visitor's URL.

In short, functions like `get_author_template`, `get_category_template`, `get_tag_template` etc. are defined in `template.php` which actually decides which template should be loaded and `template-loader.php` decides which of these functions should be called based on visitor's URL.

Second, the diagram...

Now it's time for you folks to have a look at a old diagram provided by the WordPress documentation site, the visual representation of WordPress template hierarchy-

![WP Visual Hierarchy](https://developer.wordpress.org/files/2014/10/Screenshot-2019-01-23-00.20.04.png)

Here it simply is showing you in what sequence the template will be loaded if any of them is not found. Helpful, but not totally clear. Wait a bit, after the full dissection the whole thing will be cleared.

## \# Here The Real Disection Begins

However, analyzing all of these template loading sequences aren't possible here in a single blog post. So, here we'll discuss only the author template loading sequence as it comes first in the diagram. You folks can use this dissection model for analyzing other template loading sequences as well.

OK then, lets start from the very beginning. Here the problem is, we need to load the author archive. And the solution of the problem starts with creating the URL for the author archive based on what the `template-loader.php` will call necessary function from `template.php` to deliver us the author archive. Therefore it'll solve our problem. Simple!

Now, the steps of the solution-

1. We'll create the author archive link by this `get_the_author_posts_link()` native WordPress function. This function will return a HTML anchor link with the author posts archive URL. Yes, of course, you can generate the link by other ways too. It's entirely your choice to make. Here, I used this function to keep the things simple. Notice that, this function uses `get_author_posts_url()` function to generate the main URL of the anchor link and both of these functions are defined inside `wp-includes/author-template.php`. 

2. Now, when a user clicks the link this will initiate a new WordPress life cycle boot up unless the system used asynchronous template. Anyway, when the WordPress boot up process initiated and the `template-loader.php` is loaded then it'll decide which template the user has requested. As we requested author archive then this `is_author()` function will return true and set the `$template` to `get_author_template()`. At the very last of this `template-loader.php` file it calls `include()` function on `$template` variable to invoke the template. But before that some other operations gets performed. We'll discuss them in next point.

3. The `get_author_template()` creates an array of template files name in a hierarchical order of which the templates should get loaded. Then it calls `get_query_template()` by passing the array of template files name as parameter. Now, this `get_query_template()` calls `locate_template()` function to know which template is available in hierarchical order. And the available template name gets returned to the `template-loader.php` by the return value of `locate_template()` to `get_query_template()` to `get_author_template()`. Therefore, the template gets called at the end of `template-loader.php` and gets loaded.


## \# Conclusion

This above model is the main process behind loading a template. Using this you can explain any other template loading like Category Archive, Custom Post Type Archive etc.
