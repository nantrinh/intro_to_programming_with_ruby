assert(value.odd?)
assert_equal('xyz', value.downcase)
assert_nil(value)
assert_empty(list)

# Need to study these
assert_includes(list, 'xyz')
assert_raises(NoExperienceError) { employee.hire }
assert_instance_of(Numeric, value)
assert_kind_of(Numeric, value)
assert_same(list, list.process)
refute_includes(list, 'xyz')
