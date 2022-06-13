# Coding Standards
Hello, and welcome to this project repository by Virtual Tech School! This project is a community maintained responsive clone of YouTube and this document contains the coding standards that needs to be followed in order to contribute to the project.

## HTML & CSS

 1. Always use **4 spaces for indentation**!
 
	**Instead of**
	```
	<div>
	  <p>This is a paragraph!</p>
	  <ol>
		<li>This is a list item</li>
	  </ol>
	</div>
	```
	**Do**
	```
	<div>
		<p>This is a paragraph!</p>
		<ol>
			<li>This is a list item</li>
		</ol>
	</div>
	```
2. Always use "double quotes" for attirbutes and values.

	**Instead of**
	
	`<div class='div-container'></div>`
	
	**Do**
	
	`<div class="div-container"></div>`

3. Use lowercase letters for tags, attributes, values, url(s), etc.

	**Instead of**

	`<DIV CLASS="DIV-CONTAINER"></DIV>`

	**Do**

	`<div class="div-container"></div>`

4. Remove trailing white spaces (if any).
5. Don't add spaces before and after equal to (=) sign.

	**Instead of**

	`<div class = "div-container"></div>`

	**Do**
	
	`<div class="div-container"></div>`

6. Add blank lines between different sections of code.

	**Example**
	```
	<div class="navbar">
		...
	</div>

	<div class="side-bar">
		...
	</div>

	<div class="header">
		...
	</div>

	<div class="body">
		...
	</div>

	<div class="footer">
		...
	</div>
	```  
7. Give a space between attributes.

	**Example**
	`<input class="full-name" placeholder="Enter your name" />`

8. Don't give more than 1 blank line anywhere in the code.
9. Import all style sheets and scripts (CDN) in the `<head>` tag only.
10. Add comments before sections.

	 **Example**
	```
	<!-- Navbar -->
	<div class="navbar">
		...
	</div>

	<!-- Sidebar -->
	<div class="side-bar">
		...
	</div>

	<!-- Page header -->
	<div class="header">
		...
	</div>

	<!-- Main content -->
	<div class="body">
		...
	</div>

	<!-- Footer -->
	<div class="footer">
		...
	</div>
	```
11. Any additional JS scripts created should be added at the end of the body.
12. Always quote attribute values.

	**Instead of**

	`<div class=div-container></div>`

	**Do**
	
	`<div class="div-container"></div>`

13. Specify `alt` attribute for images.
14. Use semantic element tags instead of `div` tags. Reference [here](https://www.w3schools.com/html/html5_semantic_elements.asp).
15. Omit `type` attribute for stylesheets and scripts.
16. Use meaningful `class` and `id` names in HTML.
17. Use hyphens `-` instead of underscores `_` in id(s) and classes.
18. Avoid using type selectors with class names in CSS and JS unless absolutely necessary.

	**Instead of**
	
	`div.container {}`

	**Do**

	`.container {}`

19. There should **never** be multiple elements with same `id`. Each `id` should only be associated to one element. They are meant to be unique.
20. Avoid using "!important" declaration as much as possible.
21. Write CSS properties in alphabetical order.
22. Use a space after property name's colon :
23. Use shorthand properties wherever possible in CSS.

	**Instead of**
	```
	.container {
		margin-top: 1px;
		margin-bottom: 1px;
		margin-left: 1px;
		margin-right: 1px;
	}
	```

	**Do**
	```
	.container {
		margin: 1px;
	}
	```
24. Avoid using inline CSS.
25. HTML attributes should be in the following precedence order -
	- `src`, `for`, `type`, `href`, `value`
	- `class`
	- `id`, `name`
	- `title`, `alt`
	- `data`
26. Additional references can be found [here](https://www.w3schools.com/html/html5_syntax.asp) and [here](https://medium.com/@luqman.qureshi/think-twice-code-once-c49faa8cd18).

## JavaScript
1. Use camelCase for variable/function names.
2. Put 1 space before and after any operator.
3. Use 4 spaces for indentation.
4. Use semicolon ; for simple statements.
5. For compound statements and objects, put curly bracket { after a space at the end of the first line, and closing bracket } in a new line.

	**Example**
	```
	for (let i = 0; i < 10; i++) {
		...
	}
	```
6. For objects, put a space after the colons : and don't put a comma , after the last property

	**Example**
	```
	let newObj = {
		property1: value1,
		property2: value2
	};
	```
7. End an object with a semicolon.
8. Initialise a variable while declaring it (there may be a few edge cases where this won't be applicable).
9. Avoid using `var` to declare variables. Use `let` and `const`.

## Bootstrap
1.   Use `row` and `col` classes for any `<div>` or semantic HTML tags created.
2. Each and every `col` should always be inside of a `row`.
3. There should always be values for -
	- col-sm-*
	- col-md-*
	- col-lg-*
4. Define them in the same order and mentioned above for consistency.

## jQuery
Refer to the following [link](https://gist.github.com/mpatel3/9707f274515ac5fa472c145d21d666fd) for guidelines.
