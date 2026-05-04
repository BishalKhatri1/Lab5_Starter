# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
# Name: Bishal Khatri

[View Party Horn App/Pt 1. Speech Synthesis](https://bishalkhatri1.github.io/Lab5_Starter/expose.html)

## 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?

No. Because sending a message involves multiple parts like UI, server requests, and receiving responses. It is not a single isolated function, so it is better for integration testing.

---

## 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

Yes. Because checking if a message is under 80 characters is a simple, isolated piece of logic that can be tested independently using a unit test.
