require 'minitest/autorun'
require_relative 'transaction'

class TransactionTest < Minitest::Test
  def test_prompt_for_payment
    tr = Transaction.new(10)
    input = StringIO.new('10\n')
    output = StringIO.new
    tr.prompt_for_payment(input: input, output: output)
    assert_equal(10, tr.amount_paid)
  end
end
