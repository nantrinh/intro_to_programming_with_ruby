require 'pry'
class Anagram
  def initialize(str)
    @str = str.downcase
    @letters = @str.chars.sort 
  end

  def match(arr)
    # return a list containing items from arr that are anagrams of @str
    arr.select { |x| anagram?(x.downcase) }
  end

  def anagram?(word)
    (word != @str) and (word.chars.sort == @letters)
  end
end
