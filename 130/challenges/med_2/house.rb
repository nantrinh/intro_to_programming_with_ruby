require 'pry'
class House

  def self.recite
    verses = []
    (0...pieces.flatten.size).step(2) do |idx|
      verses << self.verse(idx)
    end
    verses.reverse.join("\n")
  end

  def self.verse(start)
    lines = ["This is #{pieces.flatten[start]}"]
    pieces.flatten[(start + 1)..-1].each_slice(2) do |x, y|
      lines << "#{x} #{y}"
    end
    lines.last << ".\n"
    lines.join("\n")
  end

  private

  def self.pieces
    [
      ['the horse and the hound and the horn', 'that belonged to'],
      ['the farmer sowing his corn', 'that kept'],
      ['the rooster that crowed in the morn', 'that woke'],
      ['the priest all shaven and shorn', 'that married'],
      ['the man all tattered and torn', 'that kissed'],
      ['the maiden all forlorn', 'that milked'],
      ['the cow with the crumpled horn', 'that tossed'],
      ['the dog', 'that worried'],
      ['the cat', 'that killed'],
      ['the rat', 'that ate'],
      ['the malt', 'that lay in'],
      ['the house that Jack built']
    ]
  end
end
