(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    46601: function () {},
    6656: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 38173, 23)),
        Promise.resolve().then(a.bind(a, 9074)),
        Promise.resolve().then(a.bind(a, 9223)),
        Promise.resolve().then(a.bind(a, 69621)),
        Promise.resolve().then(a.bind(a, 91961)),
        Promise.resolve().then(a.bind(a, 49194));
    },
    9074: function (e, t, a) {
      "use strict";
      var n = a(57437),
        s = a(66648),
        i = a(2265);
      t.default = () => {
        let [e, t] = (0, i.useState)(0),
          [a, l] = (0, i.useState)(1),
          [o, r] = (0, i.useState)(2),
          u = () => {
            l((e) => (e + 1) % 3),
              t((e) => (e + 1) % 3),
              r((e) => (e + 1) % 3),
              console.log(a);
          },
          p = () => {
            l((e) => (e + 2) % 3),
              t((e) => (e + 2) % 3),
              r((e) => (e + 2) % 3),
              console.log(a);
          },
          d =
            "absolute flex flex-col bg-white lg:min-h-[24rem] justify-between max-lg:w-10/12 max-lg:m-auto mx-5 scale-90 border-4 border-blue-800 overflow-hidden blur-sm w-1/3 translate-x-[-30vw] max-sm:w-9/12",
          m =
            "absolute flex flex-col bg-white lg:min-h-[24rem] justify-between max-lg:w-10/12 max-lg:m-auto scale-105 border-4 border-blue-800 w-1/3 translate-x-[0vw] z-[200] max-sm:w-9/12",
          c =
            "absolute flex flex-col bg-white lg:min-h-[24rem] justify-between max-lg:w-10/12 max-lg:m-auto mx-5 scale-90 border-4 border-blue-800 overflow-hidden blur-sm w-1/3 translate-x-[30vw] max-sm:w-9/12";
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            id: "buy",
            className: "relative bg-blue-500 overflow-hidden ",
            children: (0, n.jsxs)("div", {
              className: "flex flex-col min-h-[60rem] max-sm:min-h-[45rem]",
              children: [
                (0, n.jsx)("h1", {
                  "data-aos": "fade-up",
                  className:
                    "m-auto text-5xl font-bold my-20 max-md:text-4xl text-center text-gray-800 ",
                  children: "How to Buy",
                }),
                (0, n.jsx)("div", {
                  className: "absolute w-full z-20 mb-20 ",
                  children: (0, n.jsxs)("div", {
                    "data-aos": "fade-up",
                    className:
                      "flex justify-center mt-60 transition-all duration-500 max-sm:mt-44 ",
                    children: [
                      (0, n.jsxs)("div", {
                        className: ""
                          .concat(0 == e ? d : "", "  ")
                          .concat(0 == a ? m : "", " ")
                          .concat(
                            0 == o ? c : "",
                            " transition-all duration-500 "
                          ),
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex justify-between bg-green-500 p-2 border-b-4 border-blue-800",
                            children: [
                              (0, n.jsx)("h1", {
                                className: "text-xl max-sm:text-md",
                                children: "How to buy > Profit",
                              }),
                              (0, n.jsx)(s.default, {
                                src: "/close.png",
                                height: 100,
                                width: 1e3,
                                alt: "",
                                className: "invert w-5 h-5",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col p-5 ",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "flex border-4 border-blue-800 flex-col text-lg p-5 max-sm:p-2 min-h-[17rem] justify-center",
                                children: (0, n.jsx)("p", {
                                  className: "mb-5 max-sm:text-sm",
                                  children:
                                    "Once the pre-sale is over ZON will be listed of centralised exchnages where users can either sell for profit , or HODL for a bigger return",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "btn text-white flex justify-end py-2 text-lg max-sm:text-sm",
                                children: [
                                  (0, n.jsx)("div", {
                                    onClick: () => p(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 mr-2 py-1 px-2 cursor-pointer",
                                    children: "Previous",
                                  }),
                                  (0, n.jsx)("div", {
                                    onClick: () => u(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 py-1 px-2 cursor-pointer",
                                    children: "Next",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: ""
                          .concat(1 == e ? d : "", "  ")
                          .concat(1 == a ? m : "", " ")
                          .concat(
                            1 == o ? c : "",
                            " transition-all duration-500 "
                          ),
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex justify-between bg-green-500 p-2 border-b-4 border-blue-800",
                            children: [
                              (0, n.jsx)("h1", {
                                className: "text-xl max-sm:text-md",
                                children: "How to buy > Connect",
                              }),
                              (0, n.jsx)(s.default, {
                                src: "/close.png",
                                height: 100,
                                width: 1e3,
                                alt: "",
                                className: "invert w-5 h-5",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col p-5",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex border-4 border-blue-800 flex-col text-lg p-5 max-sm:p-2 min-h-[17rem] max-sm:text-sm",
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "mb-5",
                                    children:
                                      "Go to the Presale website and then Tap on the Connect Wallet button and choose your preferred wallet.",
                                  }),
                                  (0, n.jsx)("p", {
                                    children:
                                      "Choose your preferred buying method XDC, Wan, ETH BNB or USDT and Enter the quantity of ZON tokens that your want to buy and Tap on BUY",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-white flex justify-end py-2 text-lg max-sm:text-sm",
                                children: [
                                  (0, n.jsx)("div", {
                                    onClick: () => p(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 mr-2 py-1 px-2 cursor-pointer",
                                    children: "Previous",
                                  }),
                                  (0, n.jsx)("div", {
                                    onClick: () => u(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 py-1 px-2 cursor-pointer",
                                    children: "Next",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: ""
                          .concat(2 == e ? d : "", "  ")
                          .concat(2 == a ? m : "", " ")
                          .concat(
                            2 == o ? c : "",
                            " transition-all duration-500 "
                          ),
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex justify-between bg-green-500 p-2 border-b-4 border-blue-800",
                            children: [
                              (0, n.jsx)("h1", {
                                className: "text-xl max-sm:text-md",
                                children: "How to buy > Claim",
                              }),
                              (0, n.jsx)(s.default, {
                                src: "/close.png",
                                height: 100,
                                width: 1e3,
                                alt: "",
                                className: "invert w-5 h-5",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col p-5",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex border-4 border-blue-800 flex-col text-lg p-5 max-sm:p-2 min-h-[17rem] max-sm:text-sm",
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "mb-5",
                                    children:
                                      "Tap on the Connect Wallet button and choose your preferred wallet. Make sure you are choosing the same account with which you purchased ZON tokens",
                                  }),
                                  (0, n.jsx)("p", {
                                    children:
                                      "At the end of the pre-sale you will see a “Claim” button, click on that and your tokens will be deposited in your wallet",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-white flex justify-end py-2 text-lg max-sm:text-sm",
                                children: [
                                  (0, n.jsx)("div", {
                                    onClick: () => p(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 mr-2 py-1 px-2 cursor-pointer",
                                    children: "Previous",
                                  }),
                                  (0, n.jsx)("div", {
                                    onClick: () => u(),
                                    className:
                                      "flex bg-green-500 border-4 border-blue-800 py-1 px-2 cursor-pointer",
                                    children: "Next",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(s.default, {
                  src: "/roadmapbg.png",
                  height: 100,
                  width: 1e3,
                  alt: "",
                  className: "w-full absolute bottom-0",
                }),
              ],
            }),
          }),
        });
      };
    },
    9223: function (e, t, a) {
      "use strict";
      var n = a(57437),
        s = a(66648),
        i = a(87138),
        l = a(2265);
      let o = [
        {
          title: "XDSea NFT Marketplace",
          img: "xdsea.png",
          brief:
            "XDSea is revolutionizing the NFT space by empowering creators with our cutting-edge staking wizard and seamless integration with real-world assets (RWA).",
          button1: "Status",
          button2: "Live",
          button3: "Total Volume",
          button4: "$2.8 Million",
          button5: "Explore XDSea",
          btn5bg: "bg-blue-600",
          goto: "https://xdsea.com/",
        },
        {
          title: "ZebraSwap Exchange",
          img: "zebra.png",
          brief:
            "Zebra is a decentralized exchange (DEX) featuring a universal EVM contract for seamless access to DeFi markets across multiple blockchains. With community governance, users shape the platform by voting on listings. Zebra offers secure trading, staking, and farming, decentralised ETFs all in a user-friendly interface.",
          button1: "Status",
          button2: "Alpha",
          button3: "Predicted Volume",
          button4: "$10 Million",
          button5: "Explore Zebra",
          btn5bg: "bg-black",
          goto: " https://zebraswap.exchange/",
        },
        {
          title: "RoRo Wallet",
          img: "roro.png",
          brief:
            "RoRo Wallet is a leading decentralized crypto wallet offering secure asset management, private messaging, and seamless access to DeFi services. Our user-centric platform is designed to simplify the crypto experience and empower users worldwide. Join us in redefining decentralized finance for all.",
          button1: "Status",
          button2: "Building",
          button3: "Predicted MAU",
          button4: "50,000",
          button5: "Explore RoRo",
          btn5bg: "bg-yellow-600",
          goto: "https://www.rorowallet.io/",
        },
      ];
      t.default = () => {
        let [e, t] = (0, l.useState)(0),
          [a, r] = (0, l.useState)(1),
          [u, p] = (0, l.useState)("XDSea NFT Marketplace"),
          d = (e) => {
            "XDSea NFT Marketplace" == e
              ? (t(0), r(1), p(e))
              : "ZebraSwap Exchange" == e
              ? (t(1), r(2), p(e))
              : "RoRo Wallet" == e && (t(2), r(3), p(e));
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            id: "ecosystem",
            className:
              "flex py-20 bg-[url('/tokenobg.png')] bg-cover bg-center flex-col min-h-[57rem] ",
            children: [
              (0, n.jsx)("h1", {
                "data-aos": "fade-up",
                className:
                  "m-auto text-5xl max-md:text-4xl text-center my-4 text-slate-800 font-bold",
                children: "Zon Ecosystem",
              }),
              (0, n.jsxs)("div", {
                className: "flex w-full justify-center max-md:flex-col",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex flex-col max-md:flex-row flex-wrap justify-start max-md:justify-center pt-10 text-center",
                    children: o.map((e, t) =>
                      (0, n.jsxs)(
                        "div",
                        {
                          "data-aos": "fade-up",
                          onClick: () => d(e.title),
                          className:
                            "flex flex-col max-md:w-[18rem] max-sm:w-1/3 justify-items-center cursor-pointer max-sm:min-h-[6rem] max-sm:p-2 max-sm:text-xs max-sm:justify-start md:mb-5",
                          children: [
                            (0, n.jsx)(s.default, {
                              src: "/folder.png",
                              height: 1e3,
                              width: 1e3,
                              alt: "",
                              className:
                                "w-auto flex h-20 m-auto max-sm:h-12 max-sm:my-1 max-sm:w-20  ",
                            }),
                            (0, n.jsx)("h1", { children: e.title }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    "data-aos": "fade-up",
                    className:
                      "flex w-7/12 bg-white m-5 flex-col border-b-2 border-black max-sm:border-gray-300 max-md:w-10/12 max-md:m-auto max-md:my-5 ",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          " text-white p-3 flex justify-between items-center max-sm:rounded-t-lg h-12 ",
                        children: [
                          (0, n.jsx)("span", {
                            className:
                              "font-outfit text-lg text-black max-sm:text-sm",
                            children: u,
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [
                              (0, n.jsx)(s.default, {
                                src: "/minwin.png",
                                alt: "live icon",
                                width: 300,
                                height: 300,
                                className: "w-5 h-5 invert",
                              }),
                              (0, n.jsx)(s.default, {
                                src: "/winmin.png",
                                alt: "live icon",
                                width: 300,
                                height: 300,
                                className: "w-5 h-5 invert",
                              }),
                              (0, n.jsx)(s.default, {
                                src: "/close.png",
                                alt: "live icon",
                                width: 300,
                                height: 300,
                                className: "w-5 h-5 invert",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o
                        .slice(e, a)
                        .map((e, t) =>
                          (0, n.jsxs)(
                            "div",
                            {
                              className:
                                "flex flex-col bg-blue-400 border-4 border-black mx-2 justify-between mb-2 tracking-tighter",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex flex-col w-9/12 max-sm:w-full max-sm:px-2 text-center m-auto text-xs py-5",
                                      children: [
                                        (0, n.jsx)(s.default, {
                                          src: "/".concat(e.img),
                                          alt: "live icon",
                                          width: 300,
                                          height: 300,
                                          className:
                                            "w-40 h-40 flex items-center justify-center m-auto max-sm:h-20 max-sm:w-20",
                                        }),
                                        (0, n.jsx)("p", {
                                          className: "sm:text-lg text-base ",
                                          children: e.brief,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex w-11/12 flex-wrap m-auto justify-center",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "flex justify-center text-center",
                                          children: (0, n.jsx)("div", {
                                            className:
                                              "flex bg-white m-3 p-1 w-[16rem]",
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex border-2 border-black border-dotted py-1 px-6 w-full justify-center",
                                              children: e.button1,
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "flex w-1/ justify-center",
                                          children: (0, n.jsx)("div", {
                                            className:
                                              "flex bg-white m-3 p-1 w-[16rem]",
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex border-2 border-black border-dotted py-1 px-6 w-full justify-center",
                                              children: e.button2,
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "flex w-1/2justify-center",
                                          children: (0, n.jsx)("div", {
                                            className:
                                              "flex bg-white m-3 p-1 w-[16rem]",
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex border-2 border-black border-dotted py-1 px-6 w-full justify-center",
                                              children: e.button3,
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "flex w-1/ justify-center",
                                          children: (0, n.jsx)("div", {
                                            className:
                                              "flex bg-white m-3 p-1 w-[16rem]",
                                            children: (0, n.jsx)("div", {
                                              className:
                                                "flex border-2 border-black border-dotted py-1 px-6 w-full justify-center",
                                              children: e.button4,
                                            }),
                                          }),
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "flex justify-center",
                                          children: (0, n.jsx)(i.default, {
                                            href: e.goto,
                                            target: "_blank",
                                            children: (0, n.jsx)("div", {
                                              className: "flex ".concat(
                                                e.btn5bg,
                                                " text-white m-3 p-1 w-[16rem]"
                                              ),
                                              children: (0, n.jsx)("div", {
                                                className:
                                                  "flex border-2 border-black border-dotted py-1 px-6 w-full justify-center",
                                                children: e.button5,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("div", {
                                  className: "flex w-full h-10 bg-gray-400",
                                }),
                              ],
                            },
                            t
                          )
                        ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    69621: function (e, t, a) {
      "use strict";
      var n = a(57437);
      a(2265);
      var s = a(66648),
        i = a(91961);
      t.default = function () {
        let e = () => {
          window.open("/sample.pdf", "_blank");
        };
        return (0, n.jsx)("div", {
          id: "home",
          className:
            "relative bg-[url('/herobg.png')] flex flex-col max-sm:h-auto justify-center items-center md:bg-contain bg-cover h-[50rem] max-sm:min-h-[30rem]",
          children: (0, n.jsxs)("div", {
            className: "flex justify-around w-11/12 z-50 mt-1 max-md:w-full",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "text-center lg:text-left md:w-6/12  max-sm:mt-[-9rem]",
                children: [
                  (0, n.jsx)(s.default, {
                    src: "/live.png",
                    alt: "live icon",
                    width: 300,
                    height: 300,
                    className: "w-16 h-16 -mb-5 max-sm:mx-auto",
                  }),
                  (0, n.jsxs)("h1", {
                    className:
                      "lg:text-7xl py-4 font-bold leading-tight text-4xl",
                    children: [
                      (0, n.jsx)("span", {
                        className: "inline  lg:inline text-white",
                        children: "ZON ",
                      }),
                      (0, n.jsx)("span", {
                        className: "inline  lg:inline pt-2 lg:pt-0 text-white",
                        children: "Pre-Sale",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "max-sm:px-6 text-lg max-sm:text-xs",
                    children: [
                      (0, n.jsx)("p", {
                        className:
                          "text-gray-500 max-sm:text-slate-900 mt-4 max-sm:pr-2 max-sm:inline",
                        children:
                          "ZON is a versatile, cross-chain digital token embedded in top DApps.",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "text-gray-500 max-sm:text-slate-900 max-sm:inline max-sm:pl-0 ",
                        children:
                          "It offers governance, staking, and ecosystem service access,",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "text-gray-500 max-sm:text-slate-900 max-sm:inline max-sm:pr-2",
                        children: "with profits flowing back to ZON holders.",
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "lg:p-0 mt-7 pb-10",
                    children: (0, n.jsxs)("div", {
                      onClick: () => e(),
                      className:
                        "relative inline-block text-lg group cursor-pointer",
                      children: [
                        (0, n.jsxs)("span", {
                          className:
                            "relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gray-50",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "absolute left-0 w-52 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease",
                            }),
                            (0, n.jsx)("span", {
                              className: "relative max-sm:text-md ",
                              children: "Read WhitePaper",
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0",
                          "data-rounded": "rounded-lg",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                "data-aos": "fade-left",
                className: "max-sm:p-2 max-sm:mt-24 max-md:hidden",
                children: (0, n.jsx)(i.default, {}),
              }),
            ],
          }),
        });
      };
    },
    91961: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return f;
        },
      });
      var n = a(57437),
        s = a(2265),
        i = a(66648),
        l = a(68893),
        o = a(22554),
        r = a(58789),
        u = a(9784),
        p = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"_zontestToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RemainingTokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ZontestPriceUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"buyTokensWithEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyTokensWithUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"changeClaimStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ethToUsdRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setEthToUsdRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setZontestPriceInUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"tokensBoughtBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalZontestSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRemainingTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zontestPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zontestToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'
        ),
        d = JSON.parse(
          '[{"inputs":[{"internalType":"contract IERC20","name":"_zontestToken","type":"address"},{"internalType":"contract IERC20","name":"_usdtToken","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RemainingTokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ZontestPriceUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"bnbToUsdRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyTokensWithBnb","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyTokensWithUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"changeClaimStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setBnbToUsdRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setZontestPriceInUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"tokensBoughtBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalZontestSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRemainingTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zontestPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zontestToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'
        ),
        m = JSON.parse(
          '[{"inputs":[{"internalType":"contract IERC20","name":"_zontestToken","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RemainingTokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"WanToUsdRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ZontestPriceUpdated","type":"event"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"constant":false,"inputs":[],"name":"buyTokensWithWan","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"changeClaimStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"claimAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setWanToUsdRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setZontestPriceInUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"tokensBoughtBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalZontestSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wanToUsdRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawRemainingTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"zontestPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"zontestToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]'
        ),
        c = JSON.parse(
          '[{"inputs":[{"internalType":"contract IERC20","name":"_zontestToken","type":"address"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"ClaimStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RemainingTokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ZontestPriceUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"buyTokensWithXdc","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"changeClaimStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setXdcToUsdRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setZontestPriceInUSD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"tokensBoughtBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalZontestSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawRemainingTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"xdcToUsdRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zontestPriceInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"zontestToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'
        ),
        y = function () {
          let [e, t] = (0, s.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
          return (
            (0, s.useEffect)(() => {
              let e = () => {
                let e = new Date().getTime(),
                  a = new Date("2024-10-09T23:59:59").getTime() - e;
                a < 0
                  ? t({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                  : t({
                      days: Math.floor(a / 864e5),
                      hours: Math.floor((a % 864e5) / 36e5),
                      minutes: Math.floor((a % 36e5) / 6e4),
                      seconds: Math.floor((a % 6e4) / 1e3),
                    });
              };
              e();
              let a = setInterval(e, 1e3);
              return () => clearInterval(a);
            }, []),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "bg-blue-500 text-white p-3 flex justify-between items-center max-sm:rounded-t-lg border-b-2 border-black max-sm:border-gray-300",
                  children: [
                    (0, n.jsx)("span", {
                      className: "font-outfit text-lg",
                      children: "Pre-Sale Now Live",
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex space-x-4",
                      children: [
                        (0, n.jsx)(i.default, {
                          src: "/winmin.png",
                          alt: "live icon",
                          width: 300,
                          height: 300,
                          className: "w-5 h-5 ",
                        }),
                        (0, n.jsx)(i.default, {
                          src: "/minwin.png",
                          alt: "live icon",
                          width: 300,
                          height: 300,
                          className: "w-5 h-5 ",
                        }),
                        (0, n.jsx)(i.default, {
                          src: "/close.png",
                          alt: "live icon",
                          width: 300,
                          height: 300,
                          className: "w-5 h-5 ",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "mt-4 text-center bg-white text-gray-800 font-semibold mx-6  px-4 border-b-4 border-black rounded-xl shadow",
                  children: (0, n.jsx)("h2", {
                    className: "text-lg font-outfit font-semibold",
                    children: "Closing in",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "mt-4 grid grid-cols-4 gap-2 p-3 max-sm:p-1",
                  children: [
                    (0, n.jsxs)("button", {
                      type: "button",
                      className:
                        "text-white bg-blue-300 border-b-4 border-black font-bold font-outfit rounded-lg text-sm max-sm:px-4 px-5 py-2.5",
                      children: [e.days, " Days"],
                    }),
                    (0, n.jsxs)("button", {
                      type: "button",
                      className:
                        "text-white bg-purple-300 border-b-4 border-black font-bold font-outfit rounded-lg max-sm:px-3 text-sm px-5 py-2.5",
                      children: [e.hours, " Hours"],
                    }),
                    (0, n.jsxs)("button", {
                      type: "button",
                      className:
                        "text-white bg-yellow-400 border-b-4 border-black font-bold font-outfit rounded-lg max-sm:px-3 text-sm px-5 py-2.5",
                      children: [e.minutes, " Minutes"],
                    }),
                    (0, n.jsxs)("button", {
                      type: "button",
                      className:
                        "text-white bg-indigo-400 border-b-4 border-black font-bold font-outfit rounded-lg text-sm max-sm:px-3 px-5 py-2.5",
                      children: [e.seconds, " Seconds"],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: " grid grid-cols-2 gap-2 p-3",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        " text-center bg-white text-gray-800 font-semibold mx-4 py-2  px-4 max-sm:px-1  border-2 border-gray-300 rounded-md shadow",
                      children: (0, n.jsx)("h2", {
                        className: "text-md font-outfit ",
                        children: "Pre-Sale Price",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        " text-center bg-white text-gray-800 font-semibold mx-4 py-2 max-sm:my-auto  px-4   border-black rounded-md shadow-lg",
                      children: (0, n.jsx)("h2", {
                        className: "text-md text-green-500 font-outfit ",
                        children: "$0.0051",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        " text-center bg-white text-gray-800 font-semibold mx-4 py-2  px-4 max-sm:px-1  border-2 border-gray-300 rounded-md shadow",
                      children: (0, n.jsx)("h2", {
                        className: "text-md font-outfit ",
                        children: "Listing Price",
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        " text-center bg-white text-gray-800 font-semibold mx-4 py-2 max-sm:my-auto px-4   border-black rounded-md shadow-lg",
                      children: (0, n.jsx)("h2", {
                        className: "text-md text-green-500 font-outfit ",
                        children: "$0.006",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        b = JSON.parse(
          '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]'
        ),
        x = JSON.parse(
          '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"mintable","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        ),
        f = () => {
          let [e, t] = (0, s.useState)(0),
            [a, f] = (0, s.useState)(""),
            [h, w] = (0, s.useState)(""),
            [g, v] = (0, s.useState)(""),
            [T, j] = (0, s.useState)(0),
            [N, k] = (0, s.useState)("0%"),
            [M, C] = (0, s.useState)("0.00"),
            [S, A] = (0, s.useState)(""),
            E = {
              1: {
                chainId: "0x1",
                chainName: "Ethereum Mainnet",
                symbol: "ETH",
                rpcUrls: ["https://rpc.ankr.com/eth"],
                blockExplorerUrls: ["https://etherscan.io"],
                contractAddress: "0xE570d84d918C8E8422563A6DbEEd3B84c1950e86",
                abi: p,
                usdtAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                usdtAbi: b,
              },
              56: {
                chainId: "0x38",
                chainName: "Binance Smart Chain Mainnet",
                symbol: "BNB",
                rpcUrls: ["https://bsc-dataseed.binance.org"],
                blockExplorerUrls: ["https://bscscan.com"],
                contractAddress: "0x1b140dF5dCe6f357A5C24824d0c258Ec1De0D4E2",
                abi: d,
                usdtAddress: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                usdtAbi: x,
              },
              50: {
                chainId: "0x32",
                chainName: "XDC Network Mainnet",
                symbol: "XDC",
                rpcUrls: ["https://rpc.xinfin.network"],
                blockExplorerUrls: ["https://explorer.xinfin.network"],
                contractAddress: "0xe2fC2c10aA7855a0478b4caAa41d4b3F28C3Bf27",
                abi: c,
                usdtAddress: "",
                usdtAbi: "",
              },
              888: {
                chainId: "0x378",
                chainName: "Wanchain Mainnet",
                symbol: "WAN",
                rpcUrls: ["https://gwan-ssl.wandevs.org:56891"],
                blockExplorerUrls: ["https://wanscan.org"],
                contractAddress: "0xe2fC2c10aA7855a0478b4caAa41d4b3F28C3Bf27",
                abi: m,
                usdtAddress: "",
                usdtAbi: "",
              },
            };
          async function P(e) {
            if (window.ethereum)
              try {
                await window.ethereum.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: "0x".concat(e.toString(16)) }],
                }),
                  t(e),
                  f(""),
                  w(""),
                  v(""),
                  D(),
                  F();
              } catch (a) {
                if (4902 === a.code) {
                  let a = E[e];
                  try {
                    await window.ethereum.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          chainId: a.chainId,
                          chainName: a.chainName,
                          nativeCurrency: {
                            name: a.symbol,
                            symbol: a.symbol,
                            decimals: 18,
                          },
                          rpcUrls: a.rpcUrls,
                          blockExplorerUrls: a.blockExplorerUrls,
                        },
                      ],
                    }),
                      t(e),
                      f(""),
                      w(""),
                      v(""),
                      D(),
                      F();
                  } catch (e) {
                    console.error(e);
                  }
                } else console.error(a);
              }
            else console.error("MetaMask is not installed.");
          }
          (0, s.useEffect)(() => {
            let e = parseFloat(a);
            if (isNaN(e)) v("");
            else
              switch (h) {
                case "ETH":
                  v(((3277 * e) / 0.0051).toFixed(2));
                  break;
                case "USDT":
                case "USDC":
                  v((e / 0.0051).toFixed(2));
                  break;
                case "BNB":
                  v(((585.53 * e) / 0.0051).toFixed(2));
                  break;
                case "XDC":
                  v(((0.0302 * e) / 0.0051).toFixed(2));
                  break;
                case "WAN":
                  v(((0.1762 * e) / 0.0051).toFixed(2));
                  break;
                default:
                  v("");
              }
          }, [a, h]);
          let B = [1e4, 1e4, 15e3, 5e3],
            U = new Date("2024-08-01T00:00:00Z").getTime(),
            D = async () => {
              try {
                let t = (e ? await _(e) : 0) + 1e4,
                  a = Math.floor((Date.now() - U) / 6048e5);
                for (let e = 0; e < a && e < B.length; e++) t += B[e];
                j(t);
                let n = (t / 51e4) * 100;
                k("".concat(n, "%"));
              } catch (e) {
                console.error("Error fetching token sales:", e);
              }
            },
            _ = async (e) => {
              let { contractAddress: t, abi: a } = E[e],
                n = new l.Q(window.ethereum),
                s = new o.CH(t, a, n);
              try {
                let e = await s.totalZontestSold();
                return 0.0051 * Number(e / 1e18);
              } catch (t) {
                return (
                  console.error(
                    "Error fetching token sales for chain ".concat(e, ":"),
                    t
                  ),
                  0
                );
              }
            };
          (0, s.useEffect)(() => {
            D();
          }, []);
          let R = async (t, a) => {
              try {
                let { usdtAddress: n, usdtAbi: s } = E[e],
                  i = new l.Q(window.ethereum).getSigner(),
                  r = new o.CH(n, s, i),
                  u = await r.allowance(await i.getAddress(), t);
                if (
                  (console.log("current allowance: ", u.toBigInt()),
                  console.log("amt", a.toBigInt()),
                  1 == e)
                ) {
                  if (u.eq(a)) {
                    console.log("Approval sufficient");
                    return;
                  }
                  {
                    if (!u.isZero()) {
                      let e = await r.approve(t, 0);
                      await e.wait();
                    }
                    let e = await r.approve(t, a);
                    await e.wait(),
                      console.log("Approval successful"),
                      console.log(
                        "new allowance: ",
                        (await r.allowance(await i.getAddress(), t)).toBigInt()
                      );
                  }
                } else {
                  if (u.gte(a)) {
                    console.log("Approval sufficient");
                    return;
                  }
                  let e = await r.approve(t, a);
                  await e.wait(),
                    console.log("Approval successful"),
                    console.log(
                      "new allowance: ",
                      (await r.allowance(await i.getAddress(), t)).toBigInt()
                    );
                }
              } catch (e) {
                throw (
                  (console.error("Error during approval:", e),
                  alert("Approval failed"),
                  e)
                );
              }
            },
            O = async () => {
              if (!e) {
                alert("Please select a payment method");
                return;
              }
              if (!a || 0 >= parseFloat(a)) {
                alert("Minimum amount for buying is 1 currency unit");
                return;
              }
              if (!h) {
                alert("Please select a cryptocurrency");
                return;
              }
              try {
                let t;
                let { contractAddress: n, abi: s } = E[e],
                  i = new l.Q(window.ethereum).getSigner(),
                  p = new o.CH(n, s, i),
                  d = a.toString();
                if (isNaN(parseFloat(d)) || 0 >= parseFloat(d))
                  throw Error("Invalid amount entered");
                let m = r.vz(d.toString(), 18),
                  c = r.vz(d, 6),
                  y = r.vz(d, 18);
                switch (h) {
                  case "ETH":
                    t = await p.buyTokensWithEth({ value: m });
                    break;
                  case "USDT":
                    await R(n, c),
                      (t = await p.buyTokensWithUsdt(c, {
                        gasLimit: u.Dv(2e5),
                      }));
                    break;
                  case "USDC":
                    await R(n, y),
                      (t = await p.buyTokensWithUsdt(y, {
                        gasLimit: u.Dv(2e5),
                      }));
                    break;
                  case "BNB":
                    t = await p.buyTokensWithBnb({ value: m });
                    break;
                  case "XDC":
                    (t = await p.buyTokensWithXdc({ value: m })),
                      v(""),
                      D(),
                      F(),
                      alert("Purchase successful!");
                    break;
                  case "WAN":
                    t = await p.buyTokensWithWan({ value: m });
                    break;
                  default:
                    alert("Unsupported cryptocurrency");
                    return;
                }
                try {
                  if ("XDC" != h) {
                    let e = await t.wait();
                    console.log("Transaction confirmed:", e),
                      v(""),
                      D(),
                      F(),
                      alert("Purchase successful!");
                  }
                } catch (e) {
                  console.error(
                    "Error waiting for transaction confirmation:",
                    e
                  ),
                    alert("Transaction confirmation failed");
                }
              } catch (e) {
                console.error("Error during purchase:", e),
                  alert("Purchase failed");
              }
            },
            F = async () => {
              if (!e || !S) return;
              let { contractAddress: t, abi: a } = E[e],
                n = new l.Q(window.ethereum),
                s = new o.CH(t, a, n);
              try {
                let e = await s.tokensBoughtBy(S),
                  t = (Number(e) / 1e18) * 0.0051;
                C(t.toFixed(4));
              } catch (e) {
                console.error("Error fetching tokens bought:", e);
              }
            };
          async function W() {
            if (!e) {
              alert("Please select a chain.");
              return;
            }
            let { contractAddress: t, abi: a } = E[e],
              n = new l.Q(window.ethereum).getSigner(),
              s = new o.CH(t, a, n);
            try {
              if (!(await s.claimAllowed())) {
                alert(
                  "Claiming not allowed yet. Please wait until the presale ends."
                );
                return;
              }
              let e = await s.claimTokens();
              await e.wait(), D(), F(), alert("Tokens claimed successfully!");
            } catch (e) {
              console.error("Error claiming tokens:", e),
                alert("Failed to claim tokens. Please try again.");
            }
          }
          return (
            (0, s.useEffect)(() => {
              F();
            }, [e, S]),
            (0, s.useEffect)(() => {
              (async () => {
                let e = new l.Q(window.ethereum);
                A((await e.send("eth_requestAccounts", []))[0]);
              })();
            }, []),
            (0, n.jsxs)("div", {
              className:
                "w-96 max-sm:w-full  h-auto bg-white rounded-xl max-sm:border-gray-300  drop-shadow-lg border-r-2 border-b-2 max-sm:border-2 border-black flex flex-col",
              children: [
                (0, n.jsx)(y, {}),
                (0, n.jsx)("div", {
                  className: "rounded-full bg-gray-300 m-3 overflow-hidden",
                  children: (0, n.jsx)("div", {
                    className:
                      "bg-blue-500 text-xs font-medium  text-blue-100 text-center p-1.5 leading-none rounded-full",
                    style: { width: N },
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "text-center  border-gray-200",
                  children: (0, n.jsxs)("h2", {
                    className: "text-md  font-outfit",
                    children: ["Total Raised: $", T.toFixed(2)],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "text-center mt-4 border-t border-gray-200 pt-3",
                  children: (0, n.jsx)("h2", {
                    className: "text-md font-semibold font-outfit",
                    children: "Select Payment Method",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "grid grid-cols-4 gap-2 p-3",
                  children: [
                    (0, n.jsx)("button", {
                      className:
                        "text-white bg-indigo-300 border-2 border-gray-400 font-bold font-outfit rounded-lg text-sm px-5 py-2.5 ".concat(
                          1 === e ? "bg-indigo-700" : "bg-indigo-300"
                        ),
                      onClick: () => {
                        t(1), P(1);
                      },
                      children: "ETH",
                    }),
                    (0, n.jsx)("button", {
                      className:
                        "text-white bg-yellow-200 border-2 border-gray-400 font-bold font-outfit rounded-lg text-sm px-5 py-2.5 ".concat(
                          56 === e ? "bg-yellow-600" : "bg-yellow-500"
                        ),
                      onClick: () => {
                        t(56), P(56);
                      },
                      children: "BNB",
                    }),
                    (0, n.jsx)("button", {
                      className:
                        "text-white bg-blue-400 border-2 border-gray-400 font-bold font-outfit rounded-lg text-sm px-5 py-2.5 ".concat(
                          50 === e ? "bg-blue-950" : "bg-blue-200"
                        ),
                      onClick: () => {
                        t(50), P(50);
                      },
                      children: "XDC",
                    }),
                    (0, n.jsx)("button", {
                      className:
                        "text-white bg-purple-200 border-2 border-gray-400 font-bold font-outfit rounded-lg text-sm px-5 py-2.5 ".concat(
                          888 === e ? "bg-purple-800" : "bg-purple-500"
                        ),
                      onClick: () => {
                        t(888), P(888);
                      },
                      children: "WAN",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "grid grid-cols-3 gap-2 p-3 max-sm:mx-auto max-sm:overflow-hidden max-sm:grid-cols-2",
                  children: [
                    (0, n.jsx)("div", {
                      className: "relative   ",
                      children: (0, n.jsx)("input", {
                        type: "text",
                        className:
                          "border max-sm:py-3 max-sm:text-sm border-gray-300 w-28 max-sm:w-36 rounded-md  py-2 pl-2 focus:outline-none focus:ring focus:border-blue-300",
                        placeholder: "Buying Amount",
                        value: a,
                        onChange: (e) => f(e.target.value),
                      }),
                    }),
                    (0, n.jsxs)("select", {
                      className:
                        "border border-gray-300 max-sm:text-sm rounded-md bg-indigo-50 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300",
                      value: h,
                      onChange: (e) => w(e.target.value),
                      children: [
                        (0, n.jsx)("option", {
                          value: "",
                          children: "Select Cryptocurrency",
                        }),
                        1 === e &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("option", {
                                value: "ETH",
                                children: "ETH",
                              }),
                              (0, n.jsx)("option", {
                                value: "USDT",
                                children: "USDT",
                              }),
                            ],
                          }),
                        56 === e &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("option", {
                                value: "BNB",
                                children: "Binance Coin",
                              }),
                              (0, n.jsx)("option", {
                                value: "USDC",
                                children: "USDC",
                              }),
                            ],
                          }),
                        50 === e &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("option", {
                              value: "XDC",
                              children: "XDC",
                            }),
                          }),
                        888 === e &&
                          (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)("option", {
                              value: "WAN",
                              children: "Wan",
                            }),
                          }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative max-sm:ml-4 max-sm:py-1",
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          className:
                            "border max-sm:py-3 max-sm:text-sm border-gray-300 w-28 max-sm:w-72  rounded-md  py-2 pl-10 focus:outline-none focus:ring focus:border-blue-300",
                          placeholder: "ZON ",
                          value: g,
                          readOnly: !0,
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                          children: (0, n.jsx)(i.default, {
                            src: "/logo.png",
                            alt: "ZON token",
                            width: 20,
                            height: 20,
                            className: "w-5 h-5",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex justify-between px-8 py-1 mb-4 max-sm:mb-2  ",
                  children: [
                    (0, n.jsx)("w3m-button", { balance: "hide" }),
                    (0, n.jsx)("button", {
                      className:
                        "text-white bg-green-500  border-2 border-green-600 font-bold font-outfit rounded-full text-sm max-sm:text-md px-16 py-2 max-sm:py-1 max-sm:px-14  ",
                      onClick: O,
                      children: "Buy",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "text-center  mb-3 border-t border-gray-200 pt-3",
                  children: [
                    (0, n.jsx)("h2", {
                      className:
                        "text-md mb-3 font-regular text-red-400 font-outfit",
                      children:
                        "Claim Will be available after the Pre-Sale Ends !",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex items-center justify-center  mb-3 border-t border-gray-200 pt-3",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "text-center bg-white text-gray-800 font-semibold mx-4 py-2 px-12 border-black rounded-md shadow-lg",
                          children: (0, n.jsxs)("h2", {
                            className: "text-md text-green-500 font-outfit",
                            children: ["$", M],
                          }),
                        }),
                        (0, n.jsxs)("button", {
                          className:
                            "relative inline-flex items-center justify-center p-4 px-8 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-md shadow-md group",
                          onClick: W,
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease",
                              children: (0, n.jsx)("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                }),
                              }),
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "absolute flex items-center justify-center font-outfit w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease",
                              children: "Claim Tokens",
                            }),
                            (0, n.jsx)("span", {
                              className: "relative invisible",
                              children: "Claim Tokens",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    49194: function (e, t, a) {
      "use strict";
      var n = a(57437),
        s = a(66648),
        i = a(2265),
        l = a(17323),
        o = a.n(l);
      a(73023);
      let r = [
        {
          text: "Community Allocation: 550,000,000 $ZON (55%)",
          color: "bg-blue-500",
        },
        {
          text: "Treasury Allocation: 120,000,000 $ZON (12%)",
          color: "bg-yellow-500",
        },
        {
          text: "Private sale Allocation: 70,000,000 $ZON (5%)",
          color: "bg-orange-500",
        },
        {
          text: "Pre-sale Allocation: 70,000,000 $ZON (7%)",
          color: "bg-sky-500",
        },
        {
          text: "Token-sale Allocation: 30,000,000 $ZON (3%)",
          color: "bg-purple-400",
        },
        {
          text: "Team Allocation: 150,000,000 $ZON (15%)",
          color: "bg-amber-500",
        },
        {
          text: "Advisor Allocation: 30,000,000 $ZON (3%)",
          color: "bg-pink-400",
        },
      ];
      t.default = () => (
        (0, i.useEffect)(() => {
          o().init();
        }, []),
        (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            id: "token",
            className: "relative",
            children: (0, n.jsx)("div", {
              className:
                "flex py-20 flex-col min-h-[110vh] justify-between w-full",
              children: (0, n.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, n.jsx)("h1", {
                    "data-aos": "fade-up",
                    className:
                      "text-5xl text-slate-800 m-auto max-sm:text-4xl font-bold",
                    children: "Tokenomics",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex w-9/12 m-auto my-10 z-[2] max-lg:flex-col max-xl:w-11/12",
                    children: [
                      (0, n.jsx)(s.default, {
                        src: "https://www.zontoken.io/_next/image?url=%2Ftwitter.png&w=48&q=75",
                        width: 1e3,
                        height: 100,
                        alt: "",
                        "data-aos": "fade-right",
                        className:
                          "w-6/12 max-md:w-full m-auto max-sm:scale-110",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex w-1/2 flex-col justify-center m-auto max-sm:w-full",
                        children: [
                          (0, n.jsx)("h1", {
                            "data-aos": "fade-left",
                            className: "my-2 max-sm:text-sm max-sm:my-5",
                            children: "Total Supply : 1,000,000,000 $ZON",
                          }),
                          r.map((e, t) =>
                            (0, n.jsx)(
                              "div",
                              {
                                "data-aos": "fade-left",
                                className:
                                  "flex w-full rounded bg-slate-300 border-black border my-2 max-sm:text-xs max-sm:mb-5",
                                children: (0, n.jsx)("div", {
                                  className: "flex ".concat(e.color),
                                  children: (0, n.jsx)("h1", {
                                    className:
                                      "font-robot text-black border-black border text-sm self-center py-4 px-3 h-auto rounded w-[25rem] max-sm:w-[20rem] ".concat(
                                        e.color,
                                        " hover:bg-blue-400 hover:translate-x-[50px] max-sm:hover:translate-x-[30px] duration-[1100ms] max-sm:px-1  "
                                      ),
                                    children: e.text,
                                  }),
                                }),
                              },
                              t
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(s.default, {
                    src: "/tokenobg.png",
                    height: 100,
                    width: 1e3,
                    alt: "",
                    className: "w-full absolute bottom-0",
                  }),
                ],
              }),
            }),
          }),
        })
      );
    },
  },
  function (e) {
    e.O(0, [704, 549, 427, 971, 23, 744], function () {
      return e((e.s = 6656));
    }),
      (_N_E = e.O());
  },
]);
