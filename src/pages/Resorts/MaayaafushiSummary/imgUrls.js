const imageIds = [
  "1elPugEEMqi89rvEJXrVPSqdRs3V8fu2U",
  "1QyXr_9N7NjlF_HbD6zDUPCIsJHJqrsZS",
  "15ZXpCTpd3xr4mLiOSSEnt5cA8q8je3Ye",
  "1QcxW_zKpKVFnzyT2oka4c2fVhtj5Akdc",
  "1HiRPjUYSgVig5YYzxJ50T3EA9bCLmwJE",
  "16ariDtJCmpSCZZo0qWzCDV6cD6B3T6yW",
  "1VmhBjzf9Q7SEbXwTP49iaJFEOyh0Hw8A",
  "1ctkbocSzCg_SyLo5kNTW1znKNOv2zGHB",
  "18-Xc4hp0kfmU2DhjFvu0rxNGDyvfSCy-",
  "1rJvH4rTdkfigUfUwSEbzO7q2JMTow2Af",
  "1PrtT5ELpq_MUjZQ22pnP88vCQkSomSm8",
  "1ldxP8rHmitS81XJcnwEaNJoZkMGErn5s",
  "151Ra2tLQ940m63jSMOuAnKTsIcXeGROh",
  "1GOnYB2ukQCl3pJvbgjiFiOWtMhaTo67G",
  "1tJEmqAA6XXkuMtwiTNYV_HjEkBqSyuR8",
  "1QMeHgYbMRRCIMaiTBHW4fvNhY8KZwsHQ",
  "1fzGAsxPhFwaC_CUe6_aYXuWAjJfyhLJk",
  "14nK_ZQRQJFDmDm_6_2D-GCU2KTR3j1vx",
  "1enTkuRORH6oGDe1FjSmoGqzqKH_iKNQu",
  "1xXGOAX504YEj_p95_wPb6R3HqLl7Mhf3",
  "1JJAUXpD1tElVnTgKSFqNlDrMFDHy8Mab",
  "1XdhEVLz8UpPxsKl3IW34Bx5Vwgl6y-No",
  "1N6yPEGQ6XaofCTnK87Wvt_AZz_t6PjZP",
  "1Pb1eiz1SjtLkjTjC9b0Iy0f5pTh80rcR",
  "14kH8KdyqwuOAImaKv9IZ_aINJnCR00Om",
  "1tRb0a5jEqAgW7t1TW44t5yY8BZ_ajTSy",
  "1COKS2mcId5HePIqLadmbWfTnhb2hekBa",
  "10k2NIqykZXmY4H776EVeTT8quTSnTOb1",
  "1oYnHI7zTazCCrJEr31rwYybcmDLYLPkC",
  "1nNwgl0Szg6PQq9vInVz6YZteib9okoPO",
  "1LagPnQw8JpCLB_e8jQ1gUPom9x6A1-dL",
  "1bFQ3sMsCUfIW7eHySzzwsvztD_A6Bcf4",
  "1_xaiAjGJJUmz5wxxzTrOmC7B54sHmUgj",
  "1ZwVANuUQufR617QFfrIf19qWQFdGRb-w",
  "1uO9QYIqT05p51L3xBP5e8m9nmVFQYkq0",
  "1lea7xg-RHceSoj6btD4WFI2XoyafAkTJ",
  "1fb9kgLr79py1v8SQrKFHaPyRo0it62MS",
  "1hcbM8o6XQFNx7PqUG6p94ZJFnyvONKNg",
  "1kGHMk7ltetY0Ly6ZtSyJ7SreZheUPy0T",
  "1kLsTCJ8GM65uMQu2nBHj7mwBWW60Dc0y",
  "1pFtv9UfNUA1zynwAhJn6ImgDu5rDbXwD",
  "1Nm_ZflhtoC_diuzcBBaZRnoCY0qA0JuX",
  "1OdjZh7hw9xowkHVZmib_H5s108NdX-fS",
  "1zwGWl8VhcUUiMtgxw3kWb4g98pN9CE3X",
  "121prMXF-mq_-NOMLLUX1KdPJHps5uYvj",
  "1n2gvl3JL1mrh_JDjAOEvL9BypfKI9wub",
  "11fV8BAHKzR_dCH7-y-6Q6NEQL6k0M9Qi",
  "11g0GFoxf9PTMdK4U5KacCx5Kxi2MIDDP",
  "1P49Yknulmr_jXPmrcAJHrym4PJoF0_lK",
  "1juL6jpfttIdztabDWVBQdPY2rYPL_Wl_",
  "1nZ42lKHVnTc2r2UQ39jTXdorbla9IiDm",
];

export const getSlideImages = (width) =>
  imageIds.map((id) => ({
    url: `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`,
    caption: undefined,
  }));
