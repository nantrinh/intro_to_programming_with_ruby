class Vehicle
  @@num_vehicles = 0

  def self.num_vehicles
    "There are #{@@num_vehicles} vehicles."
  end

  def initialize
    @@num_vehicles += 1
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end
end

class MyCar < Vehicle
  WEIGHT_LIMIT = 100 
  attr_accessor :speed, :color
  attr_reader :year, :model
  
  def initialize(year, color, model)
    @@num_vehicles += 1
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def speed_up(n)
    self.speed += n
  end

  def brake(n)
    if speed - n >= 0
      self.speed -= n
    else 
      self.speed = 0
    end
  end

  def shut_off
    self.speed = 0
  end
  
  def to_s 
    "Year: #{year}. Color: #{color}. Model: #{model}."
  end
  
  def spray_paint(color)
    self.color = color
    puts "Your car's color has changed to #{color}!" 
  end
end

class MyTruck < Vehicle
  WEIGHT_LIMIT = 200
end


puts Vehicle.num_vehicles
car = MyCar.new(year=1990, color='Yellow', model='Coaster')
truck = MyTruck.new
car2 = MyCar.new(year=10, color='Yellow', model='Whats')
puts Vehicle.num_vehicles

# method lookup
puts MyTruck.ancestors
puts MyCar.ancestors
puts Vehicle.ancestors
