import Beta from '@components/Shared/Badges/Beta';
import New from '@components/Shared/Badges/New';
import VeryNew from '@components/Shared/Badges/VeryNew';
import ToggleWithHelper from '@components/Shared/ToggleWithHelper';
import {
  PlusIcon,
  SwitchHorizontalIcon,
  UsersIcon,
  XCircleIcon,
  GlobeIcon,
  HeartIcon
} from '@heroicons/react/outline';
import { HANDLE_SUFFIX, LENSPROTOCOL_HANDLE } from '@lenster/data/constants';
import { CollectModules, useProfileLazyQuery } from '@lenster/lens';
import isValidEthAddress from '@lenster/lib/isValidEthAddress';
import splitNumber from '@lenster/lib/splitNumber';
import { Button, Input } from '@lenster/ui';
import { t, Trans } from '@lingui/macro';
import type { FC } from 'react';
import { useAppStore } from 'src/store/app';
import { useCollectModuleStore } from 'src/store/collect-module';
import type { Erc20 } from '@lenster/lens';
import { DEFAULT_CARBON_POOL_TOKEN } from '@lenster/data/constants';



interface CarbonConfigProps {
  //isRecipientsDuplicated: () => boolean;
  enabledModuleCurrencies?: Erc20[];
  setCollectType: (data: any) => void;
}

const CarbonConfig: FC<CarbonConfigProps> = ({
  enabledModuleCurrencies,
  setCollectType
}) => {

  // This line is a hack to display carbon tokens. enabledModuleCurrencies is queried from somewhere
  const carbonCurrencies = [
    {name: 'BCT', address: '0'}, 
    {name: 'NCT', address: '0'}, 
    {name: 'UBO', address: '0'}, 
    {name: 'NBO', address: '0'}, 
    {name: 'MCO2', address: '0'}
  ] as Erc20[];

  const currentProfile = useAppStore((state) => state.currentProfile);
  const collectModule = useCollectModuleStore((state) => state.collectModule);

  const [getProfileByHandle, { loading }] = useProfileLazyQuery();
  const getIsHandle = (handle: string) => {
    return handle === LENSPROTOCOL_HANDLE
      ? true
      : handle.includes(HANDLE_SUFFIX);
  };

  return (
    <div className="pt-5">
      <ToggleWithHelper
        on={Boolean(collectModule.carbonRetirement?.split)}
        setOn={() => {
          setCollectType({
            type:
              collectModule.carbonRetirement?.split
                ? CollectModules.SimpleCollectModule
                : CollectModules.SimpleCollectModule,
                //TODO: Find a way to include carbon module without having to hack node_modules directory
                //CollectModules.PartialCarbonRetirementCollectModule,
            carbonRetirement: 
              collectModule.carbonRetirement?.split
                ? null
                : { pooltoken: DEFAULT_CARBON_POOL_TOKEN, split: '10' }
          });
        }}
        heading={
          <div className="flex items-center space-x-2">
            <span>
              <Trans>Retire carbon</Trans>
            </span>
            <VeryNew />
          </div>
        }
        description={t`Send a fraction of income to carbon retirement`}
        icon={<HeartIcon className="h-4 w-4" />}
      />
      {collectModule.carbonRetirement?.split ? (
        <div className="pt-4">
          <div className="flex space-x-2 text-sm">
            <Input
              label={t`Percent`}
              type="range"
              placeholder="10"
              min="0"
              max="100"
              value={parseFloat(collectModule.carbonRetirement.split)}
              onChange={(event) => {
                setCollectType({
                  carbonRetirement: {
                    pooltoken: collectModule.carbonRetirement?.poolToken,
                    split: event.target.value ? event.target.value : '0'
                  }
                })
              }}
            />
            <div>{parseFloat(collectModule.carbonRetirement.split)}%</div>
            <div>
              <div className="label">
                <Trans>Carbon token</Trans>
              </div>
              <select
                className="focus:border-brand-500 focus:ring-brand-400 w-full rounded-xl border border-gray-300 bg-white outline-none dark:border-gray-700 dark:bg-gray-800"
                onChange={(e) => {
                  setCollectType({
                    carbonRetirement: {
                      pooltoken: e.target.value,
                      split: collectModule.carbonRetirement?.split
                    }
                  });
                }}
              >
                {carbonCurrencies?.map((currency: Erc20) => (
                  <option
                    key={currency.address}
                    value={currency.address}
                    selected={
                      currency?.address === collectModule.amount?.currency
                    }
                  >
                    {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CarbonConfig;
