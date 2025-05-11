// @ts-ignore 奇怪的报错？ import * as shell from'shelljs' 也不行，会没有rm方法
import shell from 'shelljs'
import { ChangeEvent, NormalizedInputOptions } from 'rollup'
import { PluginContext } from 'rollup'

function isFunction(func: any) {
  return typeof func === 'function'
}

export default function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild
}: {
  rmFiles?: string[]
  beforeBuild?: Function
  afterBuild?: Function
}) {
  return {
    name: 'hooks-plugin',
    buildStart(this: PluginContext, options: NormalizedInputOptions) {
      rmFiles.forEach((file) => {
        shell.rm('-rf', file)
      })
      if (beforeBuild && isFunction(beforeBuild)) {
        beforeBuild()
        // @ts-ignore
        if (this.meta.watchMode) {
          // @ts-ignore
          console.log(
            '\n[Hooks: Build Watch] build-watch mode, hooks plugin is disabled\n'
          )
        }
      }
    },
    buildEnd(err?: Error) {
      console.log('\n[Hooks: Build End] build mode, hooks plugin is disabled\n')
      if (!err && afterBuild && isFunction(afterBuild)) {
        afterBuild()
      }
    }
  }
}
