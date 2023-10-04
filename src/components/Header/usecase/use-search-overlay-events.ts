import type { KeyboardEvent, RefObject } from 'react';
import { useCallback, useEffect } from 'react';

import { useRouter } from '@tokopedia/skipper/router';

import type { AppbarMethods } from '@/components/Appbar/type';
import { useSearchModalControl } from '@/context/SearchModalControl';

interface Params {
  appbar: RefObject<AppbarMethods>;
}

const useSearchOverlayEvents = (params: Params) => {
  const { appbar } = params;

  const { pluggableEvents: searchPluggableEvents } = useSearchModalControl();

  const { listen } = useRouter();

  const handleSetOverlay = useCallback(
    (param: boolean) => {
      if (appbar.current) {
        appbar.current.setOverlay(param);
      }
    },
    [appbar],
  );

  const handleOverlayClick = useCallback(() => {
    if (appbar.current) appbar.current.setOverlay(false);
    searchPluggableEvents.emit('@search_modal/close_modal');
  }, [appbar, searchPluggableEvents]);

  const handleSearchClick = useCallback(() => {
    handleSetOverlay(true);
  }, [handleSetOverlay]);

  const handleSearchSelectClick = useCallback(() => {
    handleSetOverlay(false);
    searchPluggableEvents.emit('@search_modal/close_modal');
  }, [searchPluggableEvents, handleSetOverlay]);

  const handleSearchKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Escape' && e.key !== 'Enter') {
        searchPluggableEvents.emit('@search_modal/open_modal');
        handleSetOverlay(true);

        return;
      }

      handleSetOverlay(false);
      searchPluggableEvents.emit('@search_modal/close_modal');
    },
    [searchPluggableEvents, handleSetOverlay],
  );

  useEffect(() => {
    // This ensures search modal will always be closed after user navigated to a different URL that implemented the same header layout
    const listener = listen(action => {
      if (!action) return;

      if (appbar.current) appbar.current.setOverlay(false);

      searchPluggableEvents.emit('@search_modal/close_modal');
    });

    return () => {
      listener();
    };
  }, [appbar, searchPluggableEvents, listen]);

  useEffect(() => {
    searchPluggableEvents.on('@search_modal/click_search_bar', handleSearchClick);
    searchPluggableEvents.on('@search_modal/click_search_select', handleSearchSelectClick);
    searchPluggableEvents.on('@search_modal/search_bar_key_down', handleSearchKeyDown);

    return () => {
      searchPluggableEvents.off('@search_modal/click_search_bar', handleSearchClick);
      searchPluggableEvents.off('@search_modal/click_search_select', handleSearchSelectClick);
      searchPluggableEvents.off('@search_modal/search_bar_key_down', handleSearchKeyDown);
    };
  }, [searchPluggableEvents, handleSearchClick, handleSearchKeyDown, handleSearchSelectClick]);

  return { onOverlayClick: handleOverlayClick };
};

export default useSearchOverlayEvents;
