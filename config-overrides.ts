import { override, addWebpackAlias } from "customize-cra"
import path from "path"

const rootImport = {
    '/': path.resolve(__dirname, 'src')
}

export default override(addWebpackAlias(rootImport))