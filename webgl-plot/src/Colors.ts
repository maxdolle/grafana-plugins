import { ColorRGBA } from 'webgl-plot';

const _gist_earth_data = {
  red: [
    [0.0, 0.0, 0.0],
    [0.2824, 0.1882, 0.1882],
    [0.4588, 0.2714, 0.2714],
    [0.549, 0.4719, 0.4719],
    [0.698, 0.7176, 0.7176],
    [0.7882, 0.7553, 0.7553],
    [1.0, 0.9922, 0.9922],
  ],
  green: [
    [0.0, 0.0, 0.0],
    [0.0275, 0.0, 0.0],
    [0.1098, 0.1893, 0.1893],
    [0.1647, 0.3035, 0.3035],
    [0.2078, 0.3841, 0.3841],
    [0.2824, 0.502, 0.502],
    [0.5216, 0.6397, 0.6397],
    [0.698, 0.7171, 0.7171],
    [0.7882, 0.6392, 0.6392],
    [0.7922, 0.6413, 0.6413],
    [0.8, 0.6447, 0.6447],
    [0.8078, 0.6481, 0.6481],
    [0.8157, 0.6549, 0.6549],
    [0.8667, 0.6991, 0.6991],
    [0.8745, 0.7103, 0.7103],
    [0.8824, 0.7216, 0.7216],
    [0.8902, 0.7323, 0.7323],
    [0.898, 0.743, 0.743],
    [0.9412, 0.8275, 0.8275],
    [0.9569, 0.8635, 0.8635],
    [0.9647, 0.8816, 0.8816],
    [0.9961, 0.9733, 0.9733],
    [1.0, 0.9843, 0.9843],
  ],
  blue: [
    [0.0, 0.0, 0.0],
    [0.0039, 0.1684, 0.1684],
    [0.0078, 0.2212, 0.2212],
    [0.0275, 0.4329, 0.4329],
    [0.0314, 0.4549, 0.4549],
    [0.2824, 0.5004, 0.5004],
    [0.4667, 0.2748, 0.2748],
    [0.5451, 0.3205, 0.3205],
    [0.7843, 0.3961, 0.3961],
    [0.8941, 0.6651, 0.6651],
    [1.0, 0.9843, 0.9843],
  ],
};

function interpolateColor(val: number, colors: number[][]) {
  let lineId = 0;
  for (; lineId + 1 < colors.length; lineId += 1) {
    if (val >= colors[lineId][0] && val < colors[lineId + 1][0]) {
      break;
    }
  }

  const ratio = (colors[lineId + 1][0] - val) / (colors[lineId + 1][0] - colors[lineId][0]);

  return ratio * (colors[lineId + 1][1] - colors[lineId][2]) + colors[lineId][2];
}

function createPalette(nColors: number): ColorRGBA[] {
  if (nColors === 8) {
    return createGrafanaPalette();
  }

  const outColors = [];

  for (let i = 0; i < nColors; i += 1) {
    const val = (i + 0.5) / nColors;

    const color = new ColorRGBA(
      interpolateColor(val, _gist_earth_data.red),
      interpolateColor(val, _gist_earth_data.green),
      interpolateColor(val, _gist_earth_data.blue),
      1
    );

    outColors.push(color);
  }
  return outColors;
}

function createGrafanaPalette(): ColorRGBA[] {
  return [
    new ColorRGBA(0.38, 0.54, 0.34, 1),
    new ColorRGBA(0.71, 0.56, 0.18, 1),
    new ColorRGBA(0.34, 0.63, 0.68, 1),
    new ColorRGBA(0.72, 0.4, 0.2, 1),
    new ColorRGBA(0.68, 0.25, 0.21, 1),
    new ColorRGBA(0.11, 0.37, 0.59, 1),
    new ColorRGBA(0.57, 0.21, 0.52, 1),
    new ColorRGBA(0.35, 0.29, 0.49, 1),
  ];
}

export default createPalette;
