# Exercises
1. We create an object by defining a class and instantiating it by using the `.new` method to create an instance, also known as an object.
```
class MyClass
end

my_obj = MyClass.new
```

2. A module is a container for methods that you would like to use in one or more classes. You use them in classes by mixing them in. You mix them in by calling the `include` method and passing in the module name as an argument.
```
module MyModule
  def hello
    puts "hello"
  end
end

class MyClass
  include MyModule
end

my_obj = MyClass.new
```
