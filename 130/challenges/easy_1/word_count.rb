require 'pry'
class Phrase
  attr_reader :str

  def initialize(str)
    @str = str
  end

  def word_count
    words = str.split(/[^0-9A-Za-z']/).reject {|x| x.empty?}
    words = words.map {|x| x.gsub(/\A'|'\z/, '').downcase}
    words.uniq.each_with_object({}) do |x, hsh|
      hsh[x] = words.count(x)
    end
  end
end
