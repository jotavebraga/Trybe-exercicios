// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');

    function callback(error, message){
        expect(error).toEqual(expected);
        done()
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Magikarp', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'

    function callback(error, message) {
        expect(message).toBe(expected);
        done();
    }

    getPokemonDetails((pokemon) =>  pokemon.name ===  'Charmander', callback);
  });
});