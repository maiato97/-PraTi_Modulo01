let thingsList = Array()

thingsList['Hardware'] = Array()
thingsList['fruits'] = Array()
thingsList['People'] = Array('Aristoteles', 'Tolkien')

thingsList['Hardware'][0] = 'Notebook'
thingsList['Hardware'][1] = 'Mouse'
thingsList['Hardware'][2] = 'Teclado'
thingsList['fruits'][0] = 'Laranja'
thingsList['fruits'][1] = 'Maça'

console.table(thingsList)
console.table(thingsList['Hardware'])

/* index do thingsList é 'Hardware', 'fruits' e 'People', e o index deles que são 0, 1.
formando um array multidimencional, uma matriz */