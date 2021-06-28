module.exports = {
  blankBoard: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ],

  bombBoard: [
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
  ],

  singleRowBombs: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣', '💣',],
  ],

  singleRowFlags: [
    [false, false, true, true, true, true, true, true, true, true],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ],

  singleRowRevealed: [
    [false, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [false, false, false, false, false, false, false, false, false, false],
  ]
}