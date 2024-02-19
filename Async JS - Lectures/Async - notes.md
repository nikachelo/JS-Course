246 - Async JS, AJAX, APIs

Synchronous code -

1.  Most code is synchronous
2.  Synchronous code is executed line by line
3.  Each Line of code waits for previous line to finish
4.  Long running operations block code execution

Asynchronous code -

1. It is executed after a task that runds in the "background" finishes;
2. Async code is non-blocking
3. Executed doesn't wait for async task to finish its work

AJAX Calls - Async JS And XML allows us to communicate with remote web servers in an async way. With AJAX calls, we can request data from web servers dynamically.

API - Application Programming Interface - Piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

249 - How the web works

TCP - Transmission Control Protocol

251 - Promises and Fetch API

Promise - An object that is used as a placeholder for the future result of an async function

1. We no longer need to rely on events and callbacks passed into async functions to handle async results
2. Instead of nesting callbaks, we can chain promises for a sequence of async operations: escaping callback hell

The Promise lifecycle

1. Pending - Before the future value is avaliable
2. Settled - Async task has finished, Fullfilled or Rejected
