def pertenceFibo(entrada):
    prev = 0
    current = 1
    while current < entrada and current != entrada:
        aux = current
        current += prev
        prev = aux
    return current == entrada or prev == entrada
    
entrada = int(input("Digite um valor"))
if(pertenceFibo(entrada)):
    print("O número informado pertence a sequencia de Fibonacci")
else: 
    print("O número informado não pertence a sequencia de Fibonacci")