export class BEM {
  private blockList: string[] = []
  constructor(blockList: string | string[]) {
    this.blockList = Array.isArray(blockList) ? blockList : [blockList]
  }

  getName() {
    return this.blockList.join('-')
  }

  addBlock(blockList: string | string[]): void {
    const blocksToAdd = Array.isArray(blockList) ? blockList : [blockList]
    this.blockList = [...this.blockList, ...blocksToAdd]
  }

  concatBlock(blockList: string | string[]): string {
    let blocksToAdd = Array.isArray(blockList) ? blockList : [blockList]
    let list = [...this.blockList, ...blocksToAdd]
    return list.join('-')
  }

  block(name: string) {
    return this.blockList.join('-') + `-${name}`
  }

  b(name: string) {
    return this.block(name)
  }

  element(name: string) {
    return this.blockList.join('-') + `__${name}`
  }

  e(name: string) {
    return this.element(name)
  }

  modifier(name: string) {
    return this.blockList.join('-') + `--${name}`
  }

  m(name: string) {
    return this.modifier(name)
  }

  elementWithModifier(name: string) {
    return this.element(name) + `--${name}`
  }

  em(name: string) {
    return this.elementWithModifier(name)
  }

  blockAndElementWithModifier(
    blockName: string,
    elementName: string,
    modifierName: string,
  ) {
    return this.block(blockName) + `__${elementName}--${modifierName}`
  }

  bem(blockName: string, elementName: string, modifierName: string) {
    return this.blockAndElementWithModifier(
      blockName,
      elementName,
      modifierName,
    )
  }

  is(name: string, isModifier: boolean = true) {
    return isModifier ? `is-${name}` : ''
  }
}

export const createBem = (blockList: string[] | string) => {
  return new BEM([
    'lu',
    ...(Array.isArray(blockList) ? blockList : [blockList]),
  ])
}
