import { makeInstaller } from "@lumina-ui/utils"
import components from "./components"
import '@lumina-ui/theme/index.scss'

const installer = makeInstaller(components)
export * from '@lumina-ui/components'
export default installer