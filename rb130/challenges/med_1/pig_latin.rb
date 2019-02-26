require 'pry'
class PigLatin
  VOWELS = /[aeiou]/

  def self.translate_word(word)
    if word =~ /\A([aeiou]|ytt|xr)/ 
      return word.dup << 'ay'
    elsif word =~ /\A(squ|thr|sch)/
      return word[3..-1].dup << word[0, 3] << 'ay'
    elsif word =~ /\A(ch|qu|th)/
      return word[2..-1].dup << word[0, 2] << 'ay'
    elsif word =~ /\Axe/
      return word[1..-1].dup << word[0] << 'ay'
    else
      return word[1..-1].dup << word[0] << 'ay' 
    end
  end

  def self.translate(phrase)
    phrase.split(' ').map{|w| translate_word(w)}.join(' ')
  end
end
