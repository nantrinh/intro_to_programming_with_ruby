require 'pry'
require 'minitest/autorun'
require_relative 'text.rb'

class TextTest < MiniTest::Test
  def setup
    @file = File.open('sample_text.txt', 'r') 
  end

  def teardown
    @file.close
  end

  def test_swap
    text = Text.new(@file.read)
    res = text.swap('a', 'e')
    @file.rewind
    exp = @file.read.gsub('a', 'e')
    assert_equal(exp, res)
  end
end
