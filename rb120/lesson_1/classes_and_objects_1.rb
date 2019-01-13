class MyCar
  attr_accessor :speed, :color
  attr_reader :year, :model

  def initialize(year, color, model)
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
  
  def info
    "Year: #{year}. Color: #{color}. Model: #{model}."
  end
  
  def spray_paint(color)
    self.color = color
    puts "Your car's color has changed to #{color}!" 
  end
end

car = MyCar.new(year=1990, color='Yellow', model='Coaster')
puts car.info
puts "My car speed is #{car.speed}." # 0
car.speed_up(100)
puts "My car speed is #{car.speed}." # 100
car.brake(50)
puts "My car speed is #{car.speed}." # 50
car.brake(100)
puts "My car speed is #{car.speed}." # 0
car.speed_up(20)
puts "My car speed is #{car.speed}." # 20
car.shut_off
puts "My car speed is #{car.speed}." # 20
car.spray_paint('Cerulean')
puts "You're right! My car's color is now #{car.color}!" # Cerulean
