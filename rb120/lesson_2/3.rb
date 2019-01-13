class Pet 
  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end

  def fetch
    'fetching!'
  end
end

class BullDog < Dog
  def swim
    "can't swim!"
  end
end

class Cat < Pet 
  def speak
    'meow!'
  end
end


# Pet (run, jump) -> Dog (speak, swim, fetch) -> BullDog (swim)
#                 -> Cat (speak)
# 
# The method lookup path specifies the order of classes or modules 
# in which Ruby would look for a method when a method is invoked on the object.
# If two methods of the same name are defined in two different places on the
# method lookup path, the one that is encountered first is invoked (overrides
# the method further up the hierarchy).
# 
# Bulldog, Dog, Pet, Object, Kernel, BasicObject
# Cat, Pet, Object, Kernel, BasicObject
