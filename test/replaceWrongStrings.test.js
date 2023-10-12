const { result, data } = require('./dataSet/index');
const {replaceWrongStrings} = require('../index.js');

//console.log(result, data);

//Проверка замены всех неправильных строк'
test('Checking for replacement of invalid strings', () => {
   expect(replaceWrongStrings('Two roads diverged in a yellow d12324344rgg6f5g6gdf2ddjf,')).toBe('Two roads diverged in a yellow wood,');   
});

test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Robert Frost poetAnd sorry I cou1d not trave1 both')).toBe('Robert Frost poetAnd sorry I could not travel both');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('An other text')).toBe(null);
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('And be one trave1er, long I stood')).toBe('And be one traveler, long I stood');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('And 1ooked down one as far as I cou1d')).toBe('And looked down one as far as I could');
 });
 
 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Bla-bla-bla-blaaa, just some RANDOM tExT')).toBe(null);
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Then Random text, yeeep the other, as just as fair,')).toBe('Then took the other, as just as fair,');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('And having perhaps parentheses - that is a smart word,')).toBe('And having perhaps the better claim,');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('In 1eaves no step had trodden b1ack.')).toBe('In leaves no step had trodden black.');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Yet Skooby-dooby-doooo 1eads on to way,')).toBe('Yet knowing how way leads on to way,');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Ha-haaa, hacked you.')).toBe('I doubted if I should ever come back.');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('I shall be te11ing this with a sigh')).toBe('I shall be telling this with a sigh');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('sdshdjdskfm sfjsdif jfjfidjf')).toBe('Somewhere ages and ages hence:');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('Two roads diverged in a d12324344rgg6f5g6gdf2ddjf, and I')).toBe('Two roads diverged in a wood, and I');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('I Random text, yeeep the one less traveled by,')).toBe('I took the one less traveled by,');
 });

 test('Checking for replacement of invalid strings', () => {
    expect(replaceWrongStrings('And that has made a11 the difference.')).toBe('And that has made all the difference.');
 });

 //Проверяем нет ли замены данных в корректных строках

 test('Checking that the correct string has not been replaced', () => {
    expect(replaceWrongStrings('To where it bent in the undergrowth;')).toBe('To where it bent in the undergrowth;');
 });

 test('Checking that the correct string has not been replaced', () => {
    expect(replaceWrongStrings('Because it was grassy and wanted wear;')).toBe('Because it was grassy and wanted wear;');
 });

 test('Checking that the correct string has not been replaced', () => {
    expect(replaceWrongStrings('Though as for that the passing there')).toBe('Though as for that the passing there');
 });

 test('Checking that the correct string has not been replaced', () => {
    expect(replaceWrongStrings('And both that morning equally lay')).toBe('And both that morning equally lay');
 });

 test('Checking that the correct string has not been replaced', () => {
    expect(replaceWrongStrings('Oh, I kept the first for another day!')).toBe('Oh, I kept the first for another day!');
 });