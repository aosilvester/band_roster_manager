import random
from random import randint
import randominfo
from randominfo import Person
import string

number_of_additions = 100

f = open("demofile.txt", "w")

for i in range(number_of_additions):
    first_name = randominfo.get_first_name(gender = None)
    last_name = randominfo.get_last_name()
    phone_number = randint(10**(10-1), (10**10)-1)
    email = f'{first_name}.{last_name}@{last_name}.com'

    new_person = {
        'first_name': first_name,
        'last_name': last_name,
        'age': random.choice([17,18,19]),
        'phone_number': phone_number,
        'email': email
    }
    unique_id = i + 1
    sqlite_row = ' ("{}", "{}", {}, {}, "{}", {}, {}, {});\n'
    sqlite_row = sqlite_row.format(
        str(new_person['first_name']), 
        str(new_person['last_name']), 
        str(new_person['age']), 
        str(new_person['phone_number']), 
        str(new_person['email']),
        1,
        random.choice(range(11))+ 1,
        random.choice(range(6))+ 1
    )

    f.write("\nINSERT INTO players(first_name, last_name, age, phone_number, email, active, section_type, leadership_type)\n")
    f.write(" VALUES")
    f.write(sqlite_row)
    print(f'Creating {first_name} {last_name}')
f.close()
