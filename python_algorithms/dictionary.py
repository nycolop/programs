dictionary = []
dictionary_length = range(0, 25) # 25

for i in dictionary_length:
    spanish_word = input('Insert the Spanish word: ')
    english_word = input('Insert the English traduction: ')
    dictionary.append([spanish_word, english_word])

print(dictionary)