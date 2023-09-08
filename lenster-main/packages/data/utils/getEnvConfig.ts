import { LENS_NETWORK } from '../constants';
import {
  MainnetContracts,
  SandboxContracts,
  TestnetContracts
} from '../contracts';
import LensEndpoint from '../lens-endpoints';

const getEnvConfig = (): {
  apiEndpoint: string;
  lensHubProxyAddress: `0x${string}`;
  lensPeripheryAddress: `0x${string}`;
  defaultCollectToken: string;
  defaultCarbonPoolToken: string;
  litProtocolEnvironment: string;
} => {
  switch (LENS_NETWORK) {
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.Testnet,
        lensHubProxyAddress: TestnetContracts.LensHubProxy,
        lensPeripheryAddress: TestnetContracts.LensPeriphery,
        defaultCollectToken: TestnetContracts.DefaultToken,
        defaultCarbonPoolToken: TestnetContracts.DefaultCarbonPoolToken,
        litProtocolEnvironment: 'mumbai'
      };
    case 'staging':
      return {
        apiEndpoint: LensEndpoint.Staging,
        lensHubProxyAddress: TestnetContracts.LensHubProxy,
        lensPeripheryAddress: TestnetContracts.LensPeriphery,
        defaultCollectToken: TestnetContracts.DefaultToken,
        defaultCarbonPoolToken: TestnetContracts.DefaultCarbonPoolToken,
        litProtocolEnvironment: 'mumbai'
      };
    case 'sandbox':
      return {
        apiEndpoint: LensEndpoint.Sandbox,
        lensHubProxyAddress: SandboxContracts.LensHubProxy,
        lensPeripheryAddress: SandboxContracts.LensPeriphery,
        defaultCollectToken: TestnetContracts.DefaultToken,
        defaultCarbonPoolToken: TestnetContracts.DefaultCarbonPoolToken,
        litProtocolEnvironment: 'mumbai-sandbox'
      };
    case 'staging-sandbox':
      return {
        apiEndpoint: LensEndpoint.StagingSandbox,
        lensHubProxyAddress: SandboxContracts.LensHubProxy,
        lensPeripheryAddress: SandboxContracts.LensPeriphery,
        defaultCollectToken: TestnetContracts.DefaultToken,
        defaultCarbonPoolToken: TestnetContracts.DefaultCarbonPoolToken,
        litProtocolEnvironment: 'mumbai-sandbox'
      };
    default:
      return {
        apiEndpoint: LensEndpoint.Mainnet,
        lensHubProxyAddress: MainnetContracts.LensHubProxy,
        lensPeripheryAddress: MainnetContracts.LensPeriphery,
        defaultCollectToken: MainnetContracts.DefaultToken,
        defaultCarbonPoolToken: MainnetContracts.DefaultCarbonPoolToken,
        litProtocolEnvironment: 'polygon'
      };
  }
};

export default getEnvConfig;
