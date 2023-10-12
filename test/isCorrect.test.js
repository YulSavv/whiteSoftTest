//const isCorrect = require('./isCorrect')
const { result, data } = require('./dataSet/index');
const {isCorrect} = require('../index.js');

// Проверка корректных строк

test('Checking the correct string', () => {
    expect(isCorrect('To where it bent in the undergrowth;')).toBe(true);
});

test('Checking the correct string', () => {
    expect(isCorrect('Because it was grassy and wanted wear;')).toBe(true);
});

test('Checking the correct string', () => {
    expect(isCorrect('Though as for that the passing there')).toBe(true);
});

test('Checking the correct string', () => {
    expect(isCorrect('And both that morning equally lay')).toBe(true);
});

test('Checking the correct string', () => {
    expect(isCorrect('Oh, I kept the first for another day!')).toBe(true);
});

//Проверка строк, требующих замену

test('Checking the wrong string', () => {
    expect(isCorrect('Two roads diverged in a yellow d12324344rgg6f5g6gdf2ddjf,')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Robert Frost poetAnd sorry I cou1d not trave1 both')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('An other text')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('And be one trave1er, long I stood')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('And 1ooked down one as far as I cou1d')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Bla-bla-bla-blaaa, just some RANDOM tExT')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Then Random text, yeeep the other, as just as fair,')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('And having perhaps parentheses - that is a smart word,')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('In 1eaves no step had trodden b1ack.')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Yet Skooby-dooby-doooo 1eads on to way,')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Ha-haaa, hacked you.')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('I shall be te11ing this with a sigh')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('sdshdjdskfm sfjsdif jfjfidjf')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('Two roads diverged in a d12324344rgg6f5g6gdf2ddjf, and I')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('I Random text, yeeep the one less traveled by,')).toBe(false);
});

test('Checking the wrong string', () => {
    expect(isCorrect('And that has made a11 the difference.')).toBe(false);
});