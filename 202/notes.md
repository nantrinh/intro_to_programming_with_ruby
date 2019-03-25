# Describe elements and tags.
Elements are designators that define the structure and content of objects within a page. They are identified by the use of less-than and greater-than angle
brackets surrounding the element name.
The use of less-than and greater-than angle brackets surrounding an element creates what is known as a tag. An opening tag marks the beginning of an element
(e.g., `<div>`). A closing tag marks the end of an element (e.g., `</div>`). The content that falls between the opening and closing tags is the content of that
element. (e.g., anchor tags look like `<a>...</a>`)

# Describe self-closing tags.
Not all elements consist of opening and closing tags. Some elements receive their content or behavior from attributes within a single tag. 

# Describe document type definition (DOCTYPE, DTD).
The document type declaration, or `<!DOCTYPE html>`, informs web browsers which version of HTML is being used and is placed at the very beginning of the HTML document. `<!DOCTYPE HTML>` refers to the latest version of HTML.


# Describe attributes.
Attributes are properties used to provide additional information about an element. The most common attributes include the `id` attribute, which identifies an
element; the `class` attribute, which classifies an element, the `src` attribute, which specifies a source for embeddable content, and the `href` attribute,
which provides a hyperlink reference to a linked resource.
Attributes are defined within the opening tag, after an element's name. Attributes generally include a name and a value. (e.g., `<a href="http://website.com">My
Website</a>`)

# Describe selectors.
A selector designates exactly which element(s) within our HTML to target and apply styles (e.g., color, size, position) to. Selectors may include a combination
of different qualifiers to select unique elements, depending on how specific we wish to be. Selectors generally target an attribute value, such as an `id` or
`class` value, or target the type of element, such as `<h1>` or `<p>`. Selectors are followed by curly brackets, which encompass the styles to be applied to the
selected element.

# Describe properties.
A property determines the styles that will be applied to that element. Property names fall after a selector, within the curly brackets, {}, and immediately preceding a colon, :. The text following the colon and preceding a semicolon is called the value.

# Describe a CSS rule set.
In CSS, a rule set begins with the selector, which is immediately followed by curly brackets. Within these curly brackets are declarations consisting of property and value pairs. Each declaration begins with a property, which is followed by a colon, the property value, and finally a semicolon.

# What are three kinds of selectors and how do they differ from each other?
Type selectors target elements by their element type.
Class selectors target elements based on their `class` attribute. They are a bit more specific than type selectors. They are denoted by a leading period.
ID selectors target only one unique element at a time. `id` attribute values can only be used once per page, regardless of which type of element they appear on.
They are the most specific selector. They are denoted by a leading hash.

# What is the difference between HTML and CSS?
HTML provides the structure and content of a web page.
CSS describes the appearance, or presentation of the page.
There is some overlap: CSS can dictate the apparent structure, while HTML can inform the browser of some presentation elements.

# What is the basic structure of a web page?
DOCTYPE, `<html>, <head>, <body>` element, and a few other tags in the `<head>` section. The DOCTYPE declaration tells web browsers which version of HTML is
being used. `<html>` signifies the beginning of the document. The `<head>` element identifies the top of the document and includes metadata. The content inside
the `<head>` element is not displayed on the web page. It may include the document title (which is displayed on the title bar in the browser window), links to
any external files, or any other beneficial metadata. The `<body>` element includes all of the content that will be visible on the web page.

# Explain each of the following tags, and what they are used for: <p>, <a>, <h1> - <h6>
`<p>`: paragraph, the primary organizational construct for text on web pages.
`<a>`: anchor, links to other pages
`<h1> - <h6>`: headings

# Explain each of the following tags, and what they are used for: <em>, <strong>
# Explain each of the following tags, and what they are used for: <header>, <main>, <article>, <section>, <aside>, <div>, <span>
# Explain each of the following tags, and what they are used for: <article>, <section>, <aside>, <div>, <span>

# Explain each of the following tags, and what they are used for: <div>, <span>
These are HTML elements that act as containers solely for styling purposes. They can be extremely valuable in that they give us the ability to apply targeted
styles to a contained set of content.

A `<div>` is a block-level element commonly used to identify large groupings of content.
A `<span>` is an inline-level element commonly used to identify smaller groupings of text within a block-level element.

# What is the difference between a block element and an inline element?
Block-level elements begin on a new line, stacking one on top of the other, and occupy any available width. Block-level elements may be nested inside one another and may wrap inline-level elements. We’ll most commonly see block-level elements used for larger pieces of content, such as paragraphs.

Inline-level elements do not begin on a new line. They fall into the normal flow of a document, lining up one after the other, and only maintain the width of their content. Inline-level elements may be nested inside one another; however, they cannot wrap block-level elements. We’ll usually see inline-level elements with smaller pieces of content, such as a few words.

# When choosing values for `class` or `id` attributes, should we want to choose a value that refers to the content of an element, or the appearance of an
element?
Content

# How do you leave a comment in HTML? How do leave a comment in CSS?
HTML: `<!-- comment text -->`
CSS: `/* comment text */`

# What are the three ways to use CSS in an HTML document?
inline, internal, and external

# What are the three primary types of selectors in CSS?
tag, id, class: selects elements based on the `tag` name, `id` attribute, or `class` attribute

# How do you set the color, background color, font family, and font size in CSS?
color, background-color, font-family, font-size

# What are the differences between linters and validators?
Linters check code for errors, misues, and style issues. They detect poor indentation and formatting as well as failures to follow best practices. 
Validators find uses of deprecated elements, poor element nesting, and non-standard attributes and properties. They check for conformance to standards.

# What is the best practice for referencing CSS within our HTML?
Include all of our styles in a single external style sheet and reference it from within the `<head>` element of the HTML document. Using a single external style sheet allows us to use the same styles across an entire website and quickly make changes sitewide.

# What is meant by "semantics within HTML"?
The practice of giving content on the page meaning and structure by using the proper element. Semantic code describes the value of content on a page, regardless
of the style or appearance of that content.

# What are several benefits of using semantic elements?
- Enable computers, screen readers, search engines, and other devices to adequately read and understand the content on a web page.
- Easier to manage and work with, since it shows clearly what each piece of content is about.

