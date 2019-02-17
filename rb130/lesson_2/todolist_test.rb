require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'todolist'

class TodoListTest < MiniTest::Test
  attr_reader :todos, :list

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(todos, list.to_a) 
  end

  def test_size
    assert_equal(list.size, todos.size)
  end

  def test_first
    assert_equal(list.first, todos.first)
  end

  def test_last
    assert_equal(list.last, todos.last)
  end

  def test_shift
    l2 = list.dup
    res = l2.shift
    assert_equal(res, todos.first)
    assert_equal(l2.to_a, todos[1..-1])
  end

  def test_pop
    l2 = list.dup
    res = l2.pop
    assert_equal(res, todos.last)
    assert_equal(l2.to_a, todos[0..-2])
  end

  # def test_done?
  #   assert(list.done?)
  # end

  def test_add_raise_error
    assert_raises(TypeError) {list << 1}
    assert_raises(TypeError) {list << 'one'}
  end

  def test_shovel
    size_before = list.size
    list << Todo.new("new")
    size_after = list.size
    assert_equal(size_before + 1, size_after)
  end

  def test_add
    size_before = list.size
    list.add(Todo.new("new"))
    size_after = list.size
    assert_equal(size_before + 1, size_after)
  end

  def test_item_at
    assert_raises(IndexError) {list.item_at(list.size)}
    assert_equal(list.item_at(0), list.first)
  end

  def test_mark_done_at
    assert_raises(IndexError) {list.mark_done_at(list.size)}
    list.mark_done_at(0)
    assert(list.first.done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) {list.mark_undone_at(list.size)}
    list.mark_undone_at(0)
    refute(list.first.done?)
  end

  def test_done!
    list.done!
    assert(list.done?)
  end

  def test_remove_at
    list.remove_at(0)
    assert_equal(todos[1..-1], list.to_a)
    assert_raises(IndexError) {list.remove_at(list.size)}
  end

  def test_to_s
    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_todos_one_done
    output = <<~OUTPUT.chomp
      ---- Today's Todos ----
      [ ] Buy milk
      [X] Clean room
      [ ] Go to gym
      OUTPUT
    list.mark_done_at(1)
    assert_equal(output, @list.to_s)
  end
  
  def test_todos_all_done
    output = <<~OUTPUT.chomp
      ---- Today's Todos ----
      [X] Buy milk
      [X] Clean room
      [X] Go to gym
      OUTPUT
    list.done!
    assert_equal(output, @list.to_s)
  end

  def test_each
    result = []
    list.each { |todo| result << todo }
    assert_equal([@todo1, @todo2, @todo3], result)
  end

  def test_each_return_val
    assert_equal(list.each {nil}, list)
  end

  def test_select
    assert_equal([@todo2], list.select {|x| x.title == @todo2.title }.to_a)
  end
end

