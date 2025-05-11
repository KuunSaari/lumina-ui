import { makeInstaller } from '@lumina-ui/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import printLogo from './printLogo'

printLogo()

library.add(fas)
const installer = makeInstaller(components)
export * from '@lumina-ui/components'
export default installer