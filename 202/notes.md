# Describe elements and tags.
Elements are designators that define the structure and content of objects within a page. They are identified by the use of less-than and greater-than angle
brackets surrounding the element name.
The use of less-than and greater-than angle brackets surrounding an element creates what is known as a tag. An opening tag marks the beginning of an element
(e.g., `<div>`). A closing tag marks the end of an element (e.g., `</div>`). The content that falls between the opening and closing tags is the content of that
element. (e.g., anchor tags look like `<a>...</a>`)

# Describe: self-closing tag
# Describe: document type definition (DOCTYPE, DTD)

# Describe attributes.
Attributes are properties used to provide additional information about an element. The most common attributes include the `id` attribute, which identifies an
element; the `class` attribute, which classifies an element, the `src` attribute, which specifies a source for embeddable content, and the `href` attribute,
which provides a hyperlink reference to a linked resource.
Attributes are defined within the opening tag, after an element's name. Attributes generally include a name and a value. (e.g., `<a href="http://website.com">My
Website</a>`)

# Describe: selector
# Describe: property
# Describe: id, class, and name
# What is the difference between HTML and CSS?
HTML provides the structure and content of a web page.
CSS describes the appearance, or presentation of the page.
There is some overlap: CSS can dictate the apparent structure, while HTML can inform the browser of some presentation elements.

# What is the basic structure of a web page?
DOCTYPE, `<html>, <head>, <body>` element, and a few other tags in the `<head>` section.

# Explain each of the following tags, and what they are used for: <p>, <a>, <h1> - <h6>
`<p>`: paragraph, the primary organizational construct for text on web pages.
`<a>`: anchor, links to other pages
`<h1> - <h6>`: headings

# Explain each of the following tags, and what they are used for: <em>, <strong>
# Explain each of the following tags, and what they are used for: <header>, <main>, <article>, <section>, <aside>, <div>, <span>
# Explain each of the following tags, and what they are used for: <article>, <section>, <aside>, <div>, <span>
# Explain each of the following tags, and what they are used for: <div>, <span>

# What are the three ways to use CSS in an HTML document?
inline, internal, and external

# What are the three primary types of selectors in CSS?
tag, id, class: selects elements based on the `tag` name, `id` attribute, or `class` attribute

# How do you set the color, background color, font family, and font size in CSS?
color, background-color, font-family, font-size

# What are the differences between linters and validators?
Linters check code for errors, misues, and style issues. They detect poor indentation and formatting as well as failures to follow best practices. 
Validators find uses of deprecated elements, poor element nesting, and non-standard attributes and properties. They check for conformance to standards.
