class Cube
  # can call the attr_reader or attr_accessor method and pass in the symbol
  # `:volume` as an argument
  # attr_reader :volume
  # attr_accessor :volume #(also gives write access)
  def initialize(volume)
    @volume = volume
  end

  # can define a method volume that returns the value of the instance variable
  # `@volume`
  # def volume
  #   @volume
  # end
end
