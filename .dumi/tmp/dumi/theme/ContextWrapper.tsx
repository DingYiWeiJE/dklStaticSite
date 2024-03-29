// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from 'D:/code/test/dklStaticSite/node_modules/.pnpm/dumi@2.2.16_@babel+core@7.23.7_@types+node@20.5.1_eslint@8.56.0_prettier@2.8.8_react-dom@18.2_jrput5psj2bktgt7f7xjgt4mqy/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"dklSS","description":"A static site based on dumi","version":"0.0.1","license":"MIT","authors":["dingkaile"]},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"footer":"Copyright © 2024 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"name":"dklSS"},
      _2_level_nav_available: true,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
