1.
Ben is right. He defined a getter method using attr_reader. On line 9, he is
calling the getter method `balance` to get the value of @balance before comparing
it to 0.

2. Should do either `@quantity = ` or define a setter method with attr_writer or attr_accessor for the @quantity instance variable.

4.
```
class Greeting
  def greet(str)
    puts str
  end
end

class Hello < Greeting
  def hi
    greet('Hello')
  end
end

class Goodbye < Greeting
  def bye
    greet('Goodbye')
  end
end

Hello.new.hi
Goodbye.new.bye
```
5. 
```
class KrispyKreme
  def initialize(filling_type, glazing)
    @filling_type = filling_type.nil? ? 'Plain' : filling_type
    @glazing = glazing
  end

  def to_s
    @glazing.nil? ? @filling_type : "#{@filling_type} with #{@glazing}"
  end
end

donut1 = KrispyKreme.new(nil, nil)
donut2 = KrispyKreme.new("Vanilla", nil)
donut3 = KrispyKreme.new(nil, "sugar")
donut4 = KrispyKreme.new(nil, "chocolate sprinkles")
donut5 = KrispyKreme.new("Custard", "icing")

puts donut1
#  => "Plain"

puts donut2
#  => "Vanilla"

puts donut3
#  => "Plain with sugar"

puts donut4
#  => "Plain with chocolate sprinkles"

puts donut5
#  => "Custard with icing"
```

6.
First example:
The create_template method sets the @template instance variable directly to the value "template 14231".
The show_template method calls the getter method `template`.

Second example:
The create_template method calls the setter method to set the value of the `@template` instance variable.
The show_template method calls the getter method `template`. Calling `self` here
is optional.
