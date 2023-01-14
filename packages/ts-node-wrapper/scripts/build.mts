import { copyPackageFiles, rmDist, tsc } from 'lionconfig'

rmDist()
await tsc()
await copyPackageFiles({ commonjs: false, additionalFiles: ['./src/bin'] })
