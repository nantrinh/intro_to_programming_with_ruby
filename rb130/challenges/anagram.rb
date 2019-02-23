require 'pry'
class Anagram
  def initialize(str)
    @str = str.downcase
    @size = @str.size
    @counts = {} 
    @str.downcase.chars.uniq.sort.each do |c|
      @counts[c] = @str.count(c)  
    end
  end

  def match(arr)
    # return a list containing items from arr that are anagrams of @str
    arr.select { |x| x.downcase != @str and anagram?(x.downcase) }
  end

  def anagram?(word)
    return false unless @size == word.size
    # sorting keys again for backwards compatibility
    return false unless @counts.keys.sort == word.chars.uniq.sort
    @counts.each do |k,v|
      return false unless word.count(k) == v  
    end
    true
  end
end
