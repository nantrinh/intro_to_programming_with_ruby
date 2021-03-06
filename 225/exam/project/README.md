# Notes
- I added a `print` method to todoList for debugging purposes. I did not comment it out in case the grader was interested in running the statements I used for debugging at the bottom of the file.

# Assumptions
- todo object
  - all strings will be trimmed
  - month property valid values
    - empty string
    - an integer between 1 and 12 inclusive
  - year property valid values
    - empty string
    - any non-negative integer
  - title and description
    - must have at least one non-whitespace character 
    - capitalization not enforced
- todoList
  - "maintains a collection of todo objects": not sure what kind of method this refers to in particular, so I didn't implement anything for it
  - initialization of todoList
    - all todoData objects must be valid inputs for any todo objects to be added to the todoList. Otherwise `{invalidInput: true}` is returned 
    - if all todoData objects are valid and added successfully to the todoList, `this` (the todoList) is returned.
  - delete
    - takes an `id` as argument because I do not enforce the uniqueness of the other properties of a todo object
    - returns `true` if something has been deleted; `false` otherwise
  - add
    - takes a todoData object as argument; adds it to the list if properties are valid.
    - returns `true` if a new todo has been added; `false` otherwise
  - update
    - takes an id and object as argument
    - will update the todo corresponding to the id passed in, if found
    - only the `title`, `month`, `year`, `description`, and `completed` properties may be updated, if the new values are valid. 
    - returns `true` if a todo has been updated; `false` otherwise
- todoManager
    - the requirements suggest that each todoManager interfaces with only one list

