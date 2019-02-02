---
layout: post
title: "Learn to index from 0, it helps"
categories: Generic
topics: CS Concepts
---

Kinda weird headline, right? We all start indexing by 1 from the very beginning and we are doing fine. So why do we need to reinvent the wheel while the wheel is serving us good! Most importantly it’s getting the works done. So, again, why?

Well, everything above aren’t 100% true. Besides, we mankind don’t just want to do things, we want to do things the best way it could be done and the process of finding the best way, is neverending. Anyway, in real life when you are counting from 1, it is fine. Indexing from 1 is being used over centuries. But, when you are programming in C or any other language evolved from C, then may be this ancient full-proof indexing system can be an issue. Cause, array, a very important concept of C, which indexing starts from 0. Now, here arises the question once more, why? Below here, we’ll find the answer(s). 

## \# Concept of position
Say we have an **array of 9 elements** and the elements are **A, B, C, D, E, F, G, H** and **I**. In C when you are calling an array, it grabs the first element’s memory pointer to pull out the entire array. Then C calculates the steps it needs to jump in order to get an elements pointer position. Like, if you want to get the second element, C will calculate **how many steps it needs to jump** to get the second element. As it is grabbing the first elements position to pull out the entire array, it needs to jump one step to get the second element. So, with **Array[1]** you’ll get the second element. This way if it jumps 8 steps, it’ll get the 9th element. Now, Here comes another tricky part. All those above describes how to get all the other elements but the first one. So, when you need to get the first element, how many steps you need to jump? And, the answer is 0, as it already grabbed the first elements position to pull out the entire array. That’s why in C the array index starts from 0.

![2018-04-21-array-position](http://www.codemascot.com/public/img/2018-04-21-array-position.jpg)

## \# Concept of mathematics
Mathematical concept is very easy to grab. Say we want to group every **3 objects from 9 objects** and want to index the groups. The best way we could achieve this by putting **first 3 objects(object 1, 2, 3)** to **group 1**, then the **second 3 objects(object 4, 5, 6)** to **group 2** and **last 3 objects(object 7, 8, 9)** to **group 3**. Now if we need to know the group number for an object the formula will be `1+[(n-1)/3]` (here n is the object number). So removing the remainder from the solution of this equation we can get the group number of the object.

![2018-04-21-indexing_by_1](http://www.codemascot.com/public/img/2018-04-21-indexing_by_1.jpg)

We can simplify the whole equation with just indexing the objects and groups from 0. Here we’ll put **first 3 objects(object 0, 1, 2)** to **group 0**, then the **second 3 objects(object 3, 4, 5)** to **group 1** and the last **3 objects(object 6, 7, 8)** to **group 2**. Now if we want to know the group number for an object, the formula will be just n/3 (here n is the object number). After removing the remainder from the solution of this equation we can get the group number of the object.

![2018-04-21-indexing_by_0](http://www.codemascot.com/public/img/2018-04-21-indexing_by_0.jpg)

By comparing these above two equations we can say that computer will consume less power to calculate the latter one and thus it is more efficient than the first one. In array operations this kinda operations take place often. Also it’s a lot simpler than the first one. This is the mathematical reason to describe why array starts from 0.

## \# Concept of programmers burden
Not all programming language actually adapted the concept of array indexing from 0. Mostly the languages inherited from C or based on C, has inherited the concept of indexing from 0. Like **COBOL** starts indexing from 1. **ForTran** also index from 1. So, what happened to C then? Well, when C has been designed, the designer(s) thought of giving the burden of indexing from 0 to the programmers and made the indexing easy for the machine. It was actually kinda fair for those machines, because of their computing power. So, indexing from 0 is also because of the very core design philosophy of some programming languages.

## \# References

1. [Why does the indexing start with zero in 'C'?](https://stackoverflow.com/questions/7320686/why-does-the-indexing-start-with-zero-in-c)
2. [Why computer scientists count from zero](https://www.johndcook.com/blog/2008/06/26/why-computer-scientists-count-from-zero/)
3. [What is the origin of counting from zero in programming languages?](https://softwareengineering.stackexchange.com/questions/318982/what-is-the-origin-of-counting-from-zero-in-programming-languages)
