const imageIds = [
  "1Xf4g9deCZY48nxynsSe4EEueuYingXK1",
  "1d7BQXlL8aWEjB1s2ntyLdVYl2_Cppfg7",
  "1WknUM5MSu6xPckcnYLKy62QEc6HLsz2J",
  "1g2INvwxZbYFS6HcHsqOYR_VtnRYqnvhI",
  "1L3EtSrIJhJkNT7ft35yUi3aloGk9hvFD",
  "1QAG7WaKHn4ZpzCM5Lt_hAFzqFhYpjUMD",
  "1pXmrpIaV9UawiXPxiIQtwZzmaEk5LbDx",
  "1ffHNa-A7PnhsUM1lL_ArD1B_P2C_W-lf",
  "1RkQQVRc5z9eyEka3Ge-yFzTpZEbuhqjr",
  "1nZxoRIXMH3ZjnGD_N3VeRCR58PxcUF_8",
  "1i1vpklc1yxsF8-EzXe0RxJ5Eq74yLJ3Q",
  "1BKhrnUkGRuj0N9woVRClMMaQLEPIFT51",
  "1gsCRTRGLCvL_jQpcrJbst_yEK0voO0Wi",
  "1KuGrXfI8pqbc5aGRffdWqiDrGvah9j_e",
  "1UDNlsqF-71cwO1RPTLtJbniyda2wZAV_",
  "1HyrsEUGaamvxZiChdaB2Ya7VJSyPB5YI",
  "1sVPgz8mI096CzIIzb_BHz4ysNh8J8Ts_",
  "16fVtLRygG6ptGV7yLxYdfxofxjIpQFaS",
  "1qJ5Yfs2qKICcUjWlpxWR1S2mJO2VsRZX",
  "1DBQ9I8yQudh4klth9UntmGuU3l83AKEv",
  "15XSZF5yqRVU-SenVtgWnft7vtsA0A72a",
  "1nhnMBiFTN-0YGfXEnxyziAubue-5MoVT",
  "1uy0vgNjjZ7jpXrViAaMUbl8CbMTWLQqh",
  "1Frp-LsKdFGfgw1LuQPZUliBmqdSNngNo",
  "1UIlvJoc7TDlvATBQ9ltw7fgaSWO4qTpN",
  "1er-zzI6zJM4tV5Sjq-btN-vIBQjkJd_z",
  "1g7hEL5XKCLXdYsKOXBAj_fGPklVgRHlA",
];

export const getSlideImages = (width) =>
  imageIds.map((id) => ({
    url: `https://drive.google.com/thumbnail?id=${id}&sz=w800`,
    caption: undefined,
  }));