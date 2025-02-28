import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1729257539380",
  root: "1675552563896",
  nodes: {
    geo1: "1729257539380",
    "geo1/MAT": "1675552563896",
    ground: "1729257539380",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1729257539380",
    COP: "1675552563896",
    lights: "1729257539380",
    cameras: "1729257539380",
    "cameras/cameraControls1": "1729257592980",
    "cameras/cameraPostProcess1": "1729257810213",
    "cameras/cameraRenderer1": "1729257539380",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1729257539380",
      fragment: "1729257539380",
      "customDepthMaterial.vertex": "1729257539380",
      "customDepthMaterial.fragment": "1729257539380",
      "customDistanceMaterial.vertex": "1729257539380",
      "customDistanceMaterial.fragment": "1729257539380",
      "customDepthDOFMaterial.vertex": "1729257539380",
      "customDepthDOFMaterial.fragment": "1729257539380",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
