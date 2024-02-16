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
