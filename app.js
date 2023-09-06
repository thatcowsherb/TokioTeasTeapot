/*This code snippet demonstrates the usage of the Intersection Observer API to detect when elements on a webpage become visible or hidden within the viewport. The IntersectionObserver constructor is used to create an instance of the observer, which takes a callback function as its parameter.

Intersection Observer Callback Function
The callback function receives an array of entries as its parameter, representing the elements being observed. The forEach method is used to iterate through each entry in the array.

For each entry, the console.log statement logs the entry to the console. This can be helpful for debugging and understanding the behavior of the Intersection Observer.

Adding and Removing CSS Class
The isIntersecting property of each entry is checked to determine if the element is currently intersecting with the viewport. If it is, the show CSS class is added to the target element using the classList.add method. This can be useful for triggering animations or other visual changes when an element becomes visible.

If the element is not intersecting with the viewport, the show CSS class is removed from the target element using the classList.remove method. This can be used to hide or reset the visual state of an element when it becomes hidden.

Observing Hidden Elements
The querySelectorAll method is used to select all elements with the class name hidden. This creates a NodeList of elements. The forEach method is then used to iterate through each element in the NodeList and call the observe method on the observer instance, passing in each element as the argument. This registers the elements to be observed by the Intersection Observer.

By observing the hidden elements, the Intersection Observer will trigger the callback function whenever any of these elements become visible or hidden within the viewport.

Note: Make sure to include the necessary HTML and CSS code to define the hidden and show classes for this code to work properly. */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));