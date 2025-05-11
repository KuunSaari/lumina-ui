export class BEM {
  private blockList: string[] = []
  constructor(blockList: string | string[]) {
    this.blockList = Array.isArray(blockList) ? blockList : [blockList]
  }

  addDot(str: string) {
    return `.${str}`
  }

  getName(dot?: boolean) {
    return dot ? this.addDot(this.blockList.join('-')) : this.blockList.join('-')
  }

  addBlock(blockList: string | string[]): void {
    const blocksToAdd = Array.isArray(blockList) ? blockList : [blockList]
    this.blockList = [...this.blockList, ...blocksToAdd]
  }

  concatBlock(blockList: string | string[], dot?: boolean): string {
    let blocksToAdd = Array.isArray(blockList) ? blockList : [blockList]
    let list = [...this.blockList, ...blocksToAdd]
    return dot? this.addDot(list.join('-'))  : list.join('-')
  }

  block(name: string, dot?: boolean) {
    return (dot ? this.addDot(this.blockList.join('-')) : this.blockList.join('-')) + `-${name}`
  }

  b(name: string, dot?: boolean) {
    return this.block(name, dot)
  }

  element(name: string, dot?: boolean) {
    return (dot ? this.addDot(this.blockList.join('-')) : this.blockList.join('-')) + `__${name}`
  }

  e(name: string, dot?: boolean) {
    return this.element(name, dot)
  }

  modifier(name: string, dot?: boolean) {
    return (dot? this.addDot(this.blockList.join('-')) : this.blockList.join('-')) + `--${name}`
  }

  m(name: string, dot?: boolean) {
    return this.modifier(name, dot)
  }

  elementWithModifier(name: string, modifierName: string, dot?: boolean) {
    return this.element(name, dot) + `--${modifierName}`
  }

  em(name: string, modifierName: string, dot?: boolean) {
    return this.elementWithModifier(name, modifierName, dot)
  }

  blockAndElementWithModifier(
    blockName: string,
    elementName: string,
    modifierName: string,
    dot?: boolean
  ) {
    return (dot? this.addDot(this.blockList.join('-')) : this.block(blockName)) + `__${elementName}--${modifierName}`
  }

  bem(blockName: string, elementName: string, modifierName: string, dot?: boolean) {
    return this.blockAndElementWithModifier(
      blockName,
      elementName,
      modifierName,
      dot
    )
  }

  is(name: string, isModifier: boolean = true, dot?: boolean) {
    return isModifier ? dot ? this.addDot(`is-${name}`) : `is-${name}` : ''
  }
}

export const createBem = (blockList: string[] | string) => {
  return new BEM([
    'lu',
    ...(Array.isArray(blockList) ? blockList : [blockList]),
  ])
}
