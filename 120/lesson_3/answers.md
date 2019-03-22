1.
case 1: "Hello" is output
case 2: The `Hello` class does not have a `bye` method. `NoMethodError`
case 3: Invalid number of arguments. 1 required, 0 provided.
case 4: "Goodbye" is output.
case 5: `NoMethodError`. `hi` is an instance method so you need to instantiate an object of class `Hello` before calling the `hi` method.

3. beezle = AngryCat.new(2, "Beezle")
jovie = AngryCat.new(1, "Jovie")

4. override the default to_s method
def to_s
  "I am a #{@type} cat."
end

5. 
`tv.manufacturer` : Error, because `manufacturer` is a class method, not an instance method.
`tv.model`: runs the model method
`Television.manufacturer`: runs the manufacturer method
`Television.model`: error, because `model` is an instance method

6. Since the variable of interest is an instance variable, and the setter method
has been defined for it with the attr_accessor method, we can dispose of self and
replace with @age += 1.
