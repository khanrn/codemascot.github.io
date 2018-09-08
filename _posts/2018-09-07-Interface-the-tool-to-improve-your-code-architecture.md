---
layout: post
title: "Interface, the tool to improve your code architecture"
categories: Generic
topics: CS Concepts
---

## \# The Concept of Interface
In short, interface is a contract. Say, your boss has sent an email to you saying that he’ll send a man tomorrow to help you decorating the office. Your job is to use the man’s skill to renovate your office. In the email, your boss has described that a blue dressed person with an orange color cap will be at the office tomorrow. He will come in a maintenance van and with a tool box. Now if we put the man’s above description in below categories then it’ll be like-

```
+-- Predefined Properties
|	+-- Age: Mid Age
|	+-- Dress: Blue
|	+-- Cap: Orange
+- Predefined Method(s)
|	+-- Maintenance Van
|	+-- Tool Box
```

Now, replace your boss with “The_Boss” class, the man with **The_Helper** class. Think about the properties of as the properties of **The_Helper** class and methods as the methods of **TheHelper** class. If all the above things has been set the described way, then the email will be the interface here. Cause the email is the contract between your boss and you that which kind of person from your boss you will allow in the work zone. If a person doesn’t come with a maintenance van or tool box and says to you that your boss sent him, you will not allow him in the work zone, cause **the email** AKA **the contract** AKA **the interface** has stated different properties.

## \# Extra Methods
Additionally, the helper man can come exactly as he has been described in the email, but can bring an extra tool and an extra car or say with a pink cap or red dress. Wouldn’t you allow him to the work zone? You will definitely allow him to the workplace as he satisfies all the basic conditions of the email. He can bring some extra tools if he thinks they are necessary. So, thinking this way these extra tools can be compared to some extra methods which aren’t defined in the interface.

```
/**
 * Class The_Boss
 */
class The_Boss {

	public $instance_of_the_helper;
	public $instance_of_you;

	public function __construct() {
		$this->instance_of_the_helper = new The_Helper();
		$this->instance_of_you = new You( $this->instance_of_the_helper );
	}

	public function init() {
		$this->instance_of_you->do_something();
	}
}

/**
 * Interface The_Email_From_Your_Boss
 */
interface The_Email_From_Your_Boss {
	// Properties of the Helper
	// public $age;
	// public $dress;
	// public $cap;

	// As PHP doesn't support declaring properties
	// to the interfaces I commented those above properties.
	// But kept those cause some other languages
	// like C# allows authors to declare
	// the properties in the interface.

	// Methods, the Helper must have.
	public function maintenance_van();
	public function tool_box();

}

/**
 * Class The_Helper
 */
class The_Helper implements \The_Email_From_Your_Boss {
	// Properties of the Helper
	// public $age     = 'Mid Age';
	// public $dress   = 'Blue';
	// public $cap     = 'Orange';

	// As PHP doesn't support declaring properties
	// to the interfaces I commented those above properties.
	// But kept those cause some other languages
	// like C# allows authors to declare
	// the properties in the interface.

	// Methods of the Helper
	public function maintenance_van() {
		// Method functionality here
	}
	public function tool_box() {
		// Method functionality here
	}
}

/**
 * Class You
 */
class You {
	// You will only allow a class which implements "The_Email_From_Your_Friend"
	public function __construct( \The_Email_From_Your_Boss $the_helper ) {
		// Do something with The_Helper class instance.
	}

	public function do_something() {
		// Something The_Helper class do.
	}
}
```

## \# Implementation of Multiple Interfaces
Again, it’s possible that two of you boss’s friend know two more different people for two more different decoration job. One said he knows somebody who is best at decorating main office room, another said he can send somebody who is good at decorating the kitchen and the boss of yours said he know a person who can decorate the office lawn beautifully. So, they all has sent you three different emails describing their person’s. Now, when all the people has come, you talked to them and formed a team with them in order to decorate the office. Now see, this newly created team has all the characteristics of these above three email AKA contract AKA the interface. So, here you can compare the newly created team with a class which implements all the three interfaces. Very simple concept.

## \# Where we use Interface ?
- Type Declaration: If you have any experience with data type you’ll get it by a simple line, “Interfaces are the data type for a class.”. It defines what type of class it is. In short it’s a blueprint of a class. It defines the structure of a class.
- Decoupling or Modularization: It helps us to modularize the system. It makes composing classes easy and type defined.
- Multiple Things Implementations: Implement multiple standard or imposing multiple rules to one class.

## \# References

1. [What is the point of interfaces in PHP?](https://stackoverflow.com/questions/20463/what-is-the-point-of-interfaces-in-php)
2. [Multiple inheritance (Wikipedia)](https://en.wikipedia.org/wiki/Multiple_inheritance)
3. [PHP Interface Manual](http://php.net/manual/en/language.oop5.interfaces.php)
4. [mrkrstphr's blog](http://kristopherwilson.com/2015/03/26/using-interfaces-effectively-in-php/)
