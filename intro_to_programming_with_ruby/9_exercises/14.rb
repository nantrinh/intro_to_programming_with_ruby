contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

i = 0
contacts.each_key do |person|
  contacts[person][:email] = contact_data[i][0] 
  contacts[person][:address] = contact_data[i][1]
  contacts[person][:phone] = contact_data[i][2]
  i += 1
end

p contacts


