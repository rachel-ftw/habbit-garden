import { Unity, useUnityContext } from "react-unity-webgl";

const RenderGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/demo.loader.js",
    dataUrl: "build/demo.data",
    frameworkUrl: "build/demo.framework.js",
    codeUrl: "build/demo.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default RenderGame;
