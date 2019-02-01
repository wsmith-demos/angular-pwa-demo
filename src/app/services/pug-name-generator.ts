export class PugNameGenerator {
  static adj1 = [
    'Funny',
    'Sassy',
    'Gassy',
    'Fluffy',
    'Puffy',
    'Silly',
    'Smelly',
    'Happy',
    'Curious',
    'Strange',
    'Triumphant',
    'Glorious',
    'Wizened',
    'Silken',
    'Presidential',
    'Staunch',
    'Prize-winning'
  ];

  static adj2 = [
    'Mega-',
    'Supreme-',
    'Champion-',
    'Plump-',
    'Ultra-',
    'Super-',
    'Glutton-',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];

  static generateName(): string {
    const adj1Len = this.adj1.length;
    const adj2Len = this.adj2.length;

    const rare = Math.floor(Math.random() * 20) === 1 ? 'Rare ' : '';
    const name =
      rare +
      this.adj1[Math.floor(Math.random() * adj1Len)] +
      ' ' +
      this.adj2[Math.floor(Math.random() * adj2Len)] +
      'Pug';
    return name;
  }
}
