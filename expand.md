### Why is it important to put thought into your IDs & Classes when it comes to technology intersections?
Thoughtful naming of IDs and Classes is critical because they act as the bridge (or the contract) between HTML, CSS, and JavaScript. CSS relies on them for styling, and JavaScript relies on them for DOM manipulation and event binding. If IDs and classes are semantic, consistent, and well-structured, the codebase becomes maintainable and scalable. Poor naming leads to "CSS specificity wars" where styles override each other unexpectedly, and brittle JavaScript code that breaks whenever the HTML structure changes slightly.

### What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
Data attributes (starting with `data-`) allow you to store extra information on standard HTML elements without creating custom, non-standard attributes. They are useful for passing configuration data from HTML to JavaScript (e.g., storing a user ID or a product price) without polluting the global scope.
- **Accessing them:** In JavaScript, you access them via the `dataset` property (e.g., `element.dataset.myCustomData` for `data-my-custom-data`).
- **Implications for Microdata:** While Data attributes are great for internal JS usage, they are ignored by search engines and screen readers. If you want to convey semantic meaning (e.g., product availability or schema information), you should use Schema.org markup or JSON-LD instead, as Data attributes do not provide structural semantic value to machines or assistive technologies.

### What is a DOM fragment? Why are they powerful?
A DocumentFragment is a lightweight, "minimal" document object that has no parent. It exists in memory rather than in the live DOM. They are powerful because they allow you to batch multiple DOM changes. Instead of inserting elements one by one into the live DOM—which triggers a browser "reflow" or "repaint" for every single addition—you append all your elements to the fragment first, then append the fragment to the DOM in one single operation. This significantly improves performance.

### What is the point of a “Virtual DOM”? What do you gain? What do you lose?
The Virtual DOM is a programming concept where a virtual representation of the real UI is kept in memory and synced with the "real" DOM by a library (like React).
- **Gain:** You gain declarative UI development and performance optimizations through "reconciliation" (diffing). The library automatically calculates the minimal set of changes needed to update the UI, rather than re-rendering the whole page.
- **Lose:** You lose some raw performance in very simple apps (due to the overhead of maintaining the virtual tree), and you add complexity to the build process and memory footprint.

### In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
This exists for historical reasons. When JavaScript was first being standardized, `class` was a reserved keyword in the language (even though it wasn't used for classes until much later). Because `class` was reserved, developers could not use `element.class` in the DOM API. The property `className` was created as an alternative. Even though `class` is no longer a restricted keyword in modern ES6+, the name `className` persisted for backward compatibility. Modern developers can also use `element.classList` to manipulate classes more easily.

### What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
- **onClick (HTML attribute):** This is an older way to bind events. It is easy to write but violates the "separation of concerns" principle by mixing logic into your HTML. You can only attach one function to this event per element.
- **addEventListener():** This is the modern, standard way to bind events.
    - **Advantages:** You can attach multiple listeners to the same event on the same element; it allows you to control the event phase (capturing vs. bubbling); and it keeps your logic separated from your HTML structure.
    - **Disadvantages:** It requires slightly more code and must be called within a JavaScript file, meaning it will not work if the script fails to load.
