3. 
call `ancestors` method on the class
Orange, Taste, Object, Kernel, BasicObject
HotSauce, Taste, Object, Kernel, BasicObject

4.
attr_accessor :type to automatically define getter and setter methods for the
instance variable @type

5.
local variable, instance, class

6. manufacturer. It is prefaced with `self`. Call it with {class name}.{method name}
e.g., Television.manufacturer

7. keeps track of the number of Cat objects instantiated
It increments by 1 whenever the initialize method is called, which happens
automatically whenever the `new` method is called.

Cat.cats.count # 0
one = Cat.new
Cat.cats.count # 1
two = Cat.new
Cat.cats.count # 2

8. `Bingo < Game`

9. The play method in the Bingo class will override the play method in the Game
class, because Ruby will first look for the method in the Bingo class before looking
in the Game class.

9.
- DRY: less repetition of code
- organization of related objects in classes
- organization of methods in modules that can be mixed in to classes: more flexibility, great when the objects that need these methods do not fit nicely into a hierarchical structure
