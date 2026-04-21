import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'
import { http } from 'wagmi'

// You don't need the 'ox' import anymore.
// We paste the encoded hex string directly here:
const DATA_SUFFIX = "0x62635f72743732363571300b0080218021802180218021802180218021"

export const config = getDefaultConfig({
  appName: 'BaseChainLore',
  projectId: '9f7d421ee5a5891f0d1f1c02048e86e2',
  chains: [base],
  ssr: true,
  // Wagmi accepts the hex string here just fine!
  dataSuffix: DATA_SUFFIX,
  transports: {
    [base.id]: http(),
  },
})
