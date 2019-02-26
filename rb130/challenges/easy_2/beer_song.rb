class BeerSong
  def lyrics
    verses(99, 0)
  end

  def verses(start, stop)
    [*stop..start].reverse.each_with_object([]) do |n, res|
      res << verse(n)
    end.join("\n")
  end

  def verse(n)
    first_line(n) + second_line(n - 1)
  end

  def first_line(n)
    case n
    when (2..99) then
      "#{n} bottles of beer on the wall, #{n} bottles of beer.\n"
    when 1 then
      "1 bottle of beer on the wall, 1 bottle of beer.\n"
    when 0 then
      "No more bottles of beer on the wall, no more bottles of beer.\n" \
    end
  end

  def second_line(n)
    case n
    when (2..99) then
      "Take one down and pass it around, #{n} bottles of beer on the wall.\n"
    when 1 then
      "Take one down and pass it around, #{n} bottle of beer on the wall.\n"
    when 0 then
      "Take it down and pass it around, no more bottles of beer on the wall.\n"
    when (-99..-1) then
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    end
  end
end
