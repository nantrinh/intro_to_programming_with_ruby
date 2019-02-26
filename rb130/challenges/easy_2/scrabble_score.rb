POINTS = {
  1 =>  %w(A E I O U L N R S T),
  2 =>  %w(D G),
  3 =>  %w(B C M P),
  4 =>  %w(F H V W Y),
  5 =>  %w(K),
  8 =>  %w(J X),
  10 => %w(Q Z)
}

class Scrabble
  def initialize(word)
    @word = word
    self.class.create_letters_hash
  end

  def self.create_letters_hash
    @@letters = {}
    POINTS.each do |points, arr|
      arr.each do |l|
        @@letters[l] = points 
      end
    end
  end

  def score
    self.class.score(@word)
  end

  def valid?
    self.class.valid?(@word)
  end

  def calculate
    self.class.calculate(@word)
  end

  def self.score(word)
    create_letters_hash
    valid?(word) ? calculate(word) : 0
  end

  def self.valid?(word)
    !word.nil? and !word.empty? and !word.match(/[^A-Za-z]/)
  end

  def self.calculate(word)
    word.upcase.chars.map { |x| @@letters[x] }.sum
  end
end

Scrabble.new('word')
