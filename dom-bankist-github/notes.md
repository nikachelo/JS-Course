# notes

197 - A better way: Observer API

The Intersection Observer API in JavaScript provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or viewport. It's particularly useful for scenarios like lazy loading images, infinite scrolling, or implementing sticky elements.

Here's a brief overview of the key points about the Intersection Observer API:

Observer Object: You create an IntersectionObserver object by passing it a callback function that will be invoked whenever a specified target element intersects with another element or the viewport.

Options Object: When creating an IntersectionObserver, you can specify options such as root, rootMargin, and threshold.

root: The element that is used as the viewport for checking visibility of the target.
rootMargin: Margin around the root.
threshold: A single number or an array of numbers that indicate at what percentage of the target's visibility the observer's callback should be executed.
Callback Function: The callback function you provide to the IntersectionObserver constructor is invoked asynchronously every time it detects changes in the intersection between the target element and the root.

Entry Object: The callback function receives a list of IntersectionObserverEntry objects as its argument. These objects contain information about the intersection between the target element and the root.

Properties of IntersectionObserverEntry:

boundingClientRect: The target element's bounding box.
intersectionRatio: The ratio of intersection between the target element and the root.
intersectionRect: The rectangle representing the area of intersection.
isIntersecting: Indicates whether the target element is currently intersecting with the root.
Usage:

Create an IntersectionObserver instance with a callback.
Specify the target element(s) to observe.
Implement the logic in the callback to respond to intersection changes.

199 - Lazy loading images

Lazy loading images are good for website performance, it helps in optimizing images.

1.  we need two copy on 1 image, low res and high res

2.  We need class to like: "lazy-img" to blur low res pic

3.  low res img is loaded from html: img src: ...
    high res img is loaded from data-src programatically

    'load' is an regular event and js uses it when pictures are loaded, so we made this code:

    entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img ');
    });

    to avoid wait until good image is loaded and then remove filter

200 - Building slider component

202 - Lifecycle DOM events

DOMContentLoaded - waits for html parsing and dom tree building

If we want to wait for it, we do not need to add this event listened, we can include js in the end of html.

load - waits page to load fully, images, and all stuff. It fires on window: window.addEventListener('load')

beforeunload - Fires before user closes or leaves page, like closing the tab, it fires on window too: window.addEventListener('beforeunload'); We need to prevent default.
we need returnValue to empty value:
e.returnValue = '';

203 - Efficient script loading:Regular, Defer and Async
Regular (Head) - Parsing HTML --> Wating (Fetch script, Execute) --> Finish Parsing
Regular (Body end) - Parsing HTML --> Fetch script and execute

Async (Head) - Parsing HTML (Fetching) --> Waiting (Execute) -> Finish Parsing ----- Use for 3rd-pary scripts where order doesn't matter (Google analytics)

Defer (Head) - Parsing HTML (Fetching) --> Execute ----- This is overall the best solution, for own scripts, including a library when order matters.
