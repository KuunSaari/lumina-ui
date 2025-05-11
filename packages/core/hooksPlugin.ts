// @ts-ignore 奇怪的报错？ import * as shell from'shelljs' 也不行，会没有rm方法
import shell from 'shelljs'

function isFunction(func: any) {
  return typeof func === 'function'
}

export default function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild
} : {
  rmFiles?: string[],
  beforeBuild?: Function,
  afterBuild?: Function
}) {
  return {
    name: 'hooks-plugin',
    buildStart() {
      if (process.env.BUILD_WATCH === 'true') {
        console.log('\n[Hooks: Build Start] build-watch mode, hooks plugin is disabled\n')
        return
      }
      console.log('\n[Hooks: Build Start] build mode, hooks plugin is enabled\n')
      rmFiles.forEach((file) => {
        shell.rm('-rf', file)
      })
      if (beforeBuild && isFunction(beforeBuild)) {
        beforeBuild()
      }
    },
    buildEnd(err?: Error) {
      if (process.env.BUILD_WATCH === 'true') {
        console.log('\n[Hooks: Build End] build-watch mode, hooks plugin is disabled\n')
        return
      }
      console.log('\n[Hooks: Build End] build mode, hooks plugin is enabled\n')
      if (!err && afterBuild && isFunction(afterBuild)) {
        afterBuild()
      }
    }
  }
}