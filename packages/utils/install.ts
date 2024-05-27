import type { App, Plugin } from "vue";
import { each } from "lodash-es";
// 用于 vue plugin 安装的一系列操作
type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
    const install = (app: App) => {
        each(components, (component) => {
            app.use(component);
        });
    }
    return install as Plugin;
};
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
      const name = (component as any)?.name || "UnnamedComponent";
    //   app.component(name, component as SFCWithInstall<T>);
      app.component(name, component as Plugin);
    };
    return component as SFCWithInstall<T>;
};