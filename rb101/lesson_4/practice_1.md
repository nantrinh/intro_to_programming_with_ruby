PROBLEM:

Given a string, write a method `palindrome_substrings` which returns
all the substrings from a given string which are palindromes. Consider
palindrome words case sensitive.

Test cases:

palindrome_substrings("supercalifragilisticexpialidocious") == ["ili"]
palindrome_substrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
palindrome_substrings("palindrome") == []
palindrome_substrings("") == []

input: string
output: array of substrings
rules:
  explicit requirements:
    - every palindrome in string must be returned as a separate element in an array
    - palindromes are case sensitive ('Dad' is not a palindrome but 'dad' is)
    - if there aren't any palindromes, return empty array
    - if the input is an empty string, return empty array

  questions:
    - what to return when no input is specified?
    - will input always be strings? what to do if input is not a string?

Algorithm:
Find all substrings in string, which are palindromes.
Return substrings in array.

