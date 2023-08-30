import { SparklesIcon } from '@heroicons/react/solid';
import { Trans } from '@lingui/macro';
import type { FC } from 'react';

const VeryNew: FC = () => {
  return (
    <div className="flex items-center space-x-1 rounded-md border border-green-500 bg-green-600 px-1.5 text-xs text-white shadow-sm">
      <SparklesIcon className="h-3 w-3" />
      <div>
        <Trans>New</Trans>
      </div>
    </div>
  );
};

export default VeryNew;
