status = ['awake', 'tired'].sample

# def sleep_alert(status)
#   if status == 'awake'
#     return 'Be productive!'
#   else
#     return 'Go to sleep!'
#   end
# end
# 
# puts sleep_alert(status)

alert = if status == 'awake'
          'Be productive!'
        else
          'Go to sleep!'
        end

puts alert

