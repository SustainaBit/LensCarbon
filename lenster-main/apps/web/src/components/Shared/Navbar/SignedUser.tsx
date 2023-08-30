import { Menu } from '@headlessui/react';
import type { Profile } from '@lenster/lens';
import formatHandle from '@lenster/lib/formatHandle';
import getAvatar from '@lenster/lib/getAvatar';
import { Image } from '@lenster/ui';
import { Trans } from '@lingui/macro';
import clsx from 'clsx';
import type { FC } from 'react';
import { useAppStore } from 'src/store/app';
import { useGlobalModalStateStore } from 'src/store/modals';
import { usePreferencesStore } from 'src/store/preferences';

import MenuTransition from '../MenuTransition';
import Slug from '../Slug';
import { NextLink } from './MenuItems';
import MobileDrawerMenu from './MobileDrawerMenu';
import AppVersion from './NavItems/AppVersion';
import GardenerMode from './NavItems/GardenerMode';
import Invites from './NavItems/Invites';
import Logout from './NavItems/Logout';
import Mod from './NavItems/Mod';
import Settings from './NavItems/Settings';
import StaffMode from './NavItems/StaffMode';
import Status from './NavItems/Status';
import SwitchProfile from './NavItems/SwitchProfile';
import ThemeSwitch from './NavItems/ThemeSwitch';
import YourProfile from './NavItems/YourProfile';

const SignedUser: FC = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);
  const isStaff = usePreferencesStore((state) => state.isStaff);
  const isGardener = usePreferencesStore((state) => state.isGardener);
  const setShowMobileDrawer = useGlobalModalStateStore(
    (state) => state.setShowMobileDrawer
  );
  const showMobileDrawer = useGlobalModalStateStore(
    (state) => state.showMobileDrawer
  );

  const Avatar = () => (
    <Image
      src={getAvatar(currentProfile as Profile)}
      className="h-8 w-8 cursor-pointer rounded-full border dark:border-gray-700"
      alt={formatHandle(currentProfile?.handle)}
    />
  );

  const openMobileMenuDrawer = () => {
    setShowMobileDrawer(true);
  };

  return (
    <>
      {showMobileDrawer ? <MobileDrawerMenu /> : null}
      <button
        className="focus:outline-none md:hidden"
        onClick={() => openMobileMenuDrawer()}
      >
        <Avatar />
      </button>
      <Menu as="div" className="hidden md:block">
        <Menu.Button className="flex self-center">
          <Avatar />
        </Menu.Button>
        <MenuTransition>
          <Menu.Items
            static
            className="absolute right-0 mt-2 w-48 rounded-xl border bg-white py-1 shadow-sm focus:outline-none dark:border-gray-700 dark:bg-black"
          >
            <Menu.Item
              as={NextLink}
              href={`/u/${formatHandle(currentProfile?.handle)}`}
              className="m-2 flex items-center rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <span>
                <Trans>Logged in as</Trans>
                <div className="truncate">
                  <Slug
                    className="font-bold"
                    slug={formatHandle(currentProfile?.handle)}
                    prefix="@"
                  />
                </div>
              </span>
            </Menu.Item>
            <div className="divider" />
            <Menu.Item
              as="div"
              className={({ active }: { active: boolean }) =>
                clsx(
                  { 'dropdown-active': active },
                  'm-2 rounded-lg border dark:border-gray-700'
                )
              }
            >
              <SwitchProfile />
            </Menu.Item>
            <Menu.Item
              as="div"
              className={({ active }: { active: boolean }) =>
                clsx(
                  { 'dropdown-active': active },
                  'm-2 rounded-lg border dark:border-gray-700'
                )
              }
            >
              <Status />
            </Menu.Item>
            <div className="divider" />
            <Menu.Item
              as={NextLink}
              href={`/u/${formatHandle(currentProfile?.handle)}`}
              className={({ active }: { active: boolean }) =>
                clsx({ 'dropdown-active': active }, 'menu-item')
              }
            >
              <YourProfile />
            </Menu.Item>
            <Menu.Item
              as={NextLink}
              href={'/settings'}
              className={({ active }: { active: boolean }) =>
                clsx({ 'dropdown-active': active }, 'menu-item')
              }
            >
              <Settings />
            </Menu.Item>
            {isGardener ? (
              <Menu.Item
                as={NextLink}
                href={'/mod'}
                className={({ active }: { active: boolean }) =>
                  clsx({ 'dropdown-active': active }, 'menu-item')
                }
              >
                <Mod />
              </Menu.Item>
            ) : null}
            <Menu.Item
              as="div"
              className={({ active }: { active: boolean }) =>
                clsx({ 'dropdown-active': active }, 'm-2 rounded-lg')
              }
            >
              <Invites />
            </Menu.Item>
            <Menu.Item
              as="div"
              className={({ active }) =>
                clsx({ 'dropdown-active': active }, 'm-2 rounded-lg')
              }
            >
              <Logout />
            </Menu.Item>
            <div className="divider" />
            <Menu.Item
              as="div"
              className={({ active }) =>
                clsx({ 'dropdown-active': active }, 'm-2 rounded-lg')
              }
            >
              <ThemeSwitch />
            </Menu.Item>
            {isGardener ? (
              <Menu.Item
                as="div"
                className={({ active }) =>
                  clsx(
                    { 'bg-yellow-100 dark:bg-yellow-800': active },
                    'm-2 rounded-lg'
                  )
                }
              >
                <GardenerMode />
              </Menu.Item>
            ) : null}
            {isStaff ? (
              <Menu.Item
                as="div"
                className={({ active }) =>
                  clsx(
                    { 'bg-yellow-100 dark:bg-yellow-800': active },
                    'm-2 rounded-lg'
                  )
                }
              >
                <StaffMode />
              </Menu.Item>
            ) : null}
            <div className="divider" />
            <AppVersion />
          </Menu.Items>
        </MenuTransition>
      </Menu>
    </>
  );
};

export default SignedUser;