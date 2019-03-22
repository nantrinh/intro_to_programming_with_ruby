class Diamond
  def self.make_diamond(middle_letter)
    letters = [*'A'..middle_letter]
    result = ''

    letters.each_with_index do |letter, idx|
      result << "#{letter * (idx + 1)}\n"
    end

    letters[0...-1].reverse.each_with_index do |letter, idx|
      result << "#{letter * (idx + 1)}\n"
    end

    result
  end
end
