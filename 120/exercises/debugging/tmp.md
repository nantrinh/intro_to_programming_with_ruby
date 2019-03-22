The class MarkdownFile inherits from the class File.
This means instances of MarkdownFile can access the getter and setter methods name and byte_content, and the alias getter method read, and the
alias setter method write, as well as the methods copy and to_s.
All of the lines except the last one runs without a problem.
On line 45, the puts method is called and the MarkdownFile instance 
blog_post is passed in as an argument. The puts method calls the to_s method of the instance. The to_s method cannot locate the constant FORMAT
constants are in lexical scope. The constant is not defined in the class
File, but in the subclasses. To fix this, we replace FORMAT with 
self.class::FORMAT.
