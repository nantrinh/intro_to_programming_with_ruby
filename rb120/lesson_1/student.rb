class Student
  attr_accessor :name
  attr_writer :grade

  def initialize(name, grade)
    self.name = name
    self.grade = grade
  end

  def better_grade_than?(other_student)
    grade > other_student.grade
  end
  
  def print_grade
    puts "My grade is #{grade}"
  end

  protected

  def grade
    @grade
  end
end

bob = Student.new('Bob', 80)
joe = Student.new('Joe', 90)

joe.print_grade
joe.grade
p joe.better_grade_than?(bob)
