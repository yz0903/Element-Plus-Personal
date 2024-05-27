import { makeInstaller } from "@element-plus-personal/utils";
import components from "./components";
import "@element-plus-personal/theme/index.css";

const installer = makeInstaller(components);

export * from "@element-plus-personal/components";
export default installer;