class Robot
  LETTERS = [*'A'..'Z'].freeze
  NUMBERS = [*0..9].freeze

  @@names = []
  @@seed = 1000

  attr_reader :seed, :name

  def reset
    set_seed
    set_name
  end

  alias initialize reset

  def set_seed
    @@seed += 1 unless @@names.empty?
    srand @@seed
  end

  def set_name
    @name = random_name
    @@names << @name
  end

  def random_name
    (LETTERS.sample(2) + NUMBERS.sample(3)).join
  end
end
