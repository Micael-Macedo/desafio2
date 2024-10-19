def invertString(text):
    reversed = ""
    for i in range(len(text)-1, -1, -1):
        reversed += text[i]
    return reversed

string = input("Digite sua string: ")
print(invertString(string))