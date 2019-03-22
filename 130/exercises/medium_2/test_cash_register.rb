require 'minitest/autorun'
require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def test_accept_money
    cr = CashRegister.new(0)
    assert_equal(0, cr.total_money)
    tr = Transaction.new(10)
    tr.amount_paid = 10
    cr.accept_money(tr)
    assert_equal(10, cr.total_money)
  end

  def test_change
    cr = CashRegister.new(0)
    tr = Transaction.new(10)
    tr.amount_paid = 10
    assert_equal(0, cr.change(tr))

    tr = Transaction.new(10)
    tr.amount_paid = 20
    assert_equal(10, cr.change(tr))

    tr = Transaction.new(10)
    tr.amount_paid = 5 
    assert_equal(-5, cr.change(tr))
  end

  def test_give_receipt
    cr = CashRegister.new(0)
    tr = Transaction.new(10)
    msg = "You've paid $10.\n"
    assert_output(msg) {cr.give_receipt(tr)}
  end
end
