(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    35883: function () {},
    46601: function () {},
    52361: function () {},
    94616: function () {},
    67888: function (e, s, r) {
      Promise.resolve().then(r.t.bind(r, 84080, 23)),
        Promise.resolve().then(r.t.bind(r, 48730, 23)),
        Promise.resolve().then(r.t.bind(r, 53054, 23)),
        Promise.resolve().then(r.bind(r, 61358)),
        Promise.resolve().then(r.bind(r, 51099));
    },
    61358: function (e, s, r) {
      "use strict";
      r.d(s, {
        Web3Modal: function () {
          return l;
        },
      });
      var t = r(4050);
      let a = (0, t.u_)({
        metadata: {
          name: "zonPreSale",
          description: "zonPreSale Website",
          url: "https://web3modal.com",
          icons: ["https://avatars.githubusercontent.com/u/37784886"],
        },
        enableEIP6963: !0,
        enableInjected: !0,
        enableCoinbase: !0,
        rpcUrl: "...",
        defaultChainId: 1,
      });
      function l(e) {
        let { children: s } = e;
        return s;
      }
      (0, t.OY)({
        ethersConfig: a,
        chains: [
          {
            chainId: 1,
            name: "Ethereum",
            currency: "ETH",
            explorerUrl: "https://etherscan.io",
            rpcUrl: "https://cloudflare-eth.com",
          },
          {
            chainId: 11155111,
            name: "Sepolia",
            currency: "ETH",
            explorerUrl: "https://sepolia.etherscan.io",
            rpcUrl: "https://rpc.sepolia.org",
          },
          {
            chainId: 56,
            name: "Binance Smart Chain",
            currency: "BNB",
            explorerUrl: "https://bscscan.com",
            rpcUrl: "https://bsc-dataseed.binance.org",
          },
          {
            chainId: 97,
            name: "Binance Smart Chain Testnet",
            currency: "BNB",
            explorerUrl: "https://testnet.bscscan.com",
            rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
          },
          {
            chainId: 888,
            name: "Wanchain",
            currency: "WAN",
            explorerUrl: "https://www.wanscan.org",
            rpcUrl: "https://gwan-ssl.wandevs.org:56891",
          },
          {
            chainId: 999,
            name: "Wanchain Testnet",
            currency: "WAN",
            explorerUrl: "https://testnet.wanscan.org",
            rpcUrl: "https://gwan-ssl.wandevs.org:46891",
          },
          {
            chainId: 50,
            name: "XDC Network",
            currency: "XDC",
            explorerUrl: "https://xdcscan.io",
            rpcUrl: "https://rpc.xinfin.network",
          },
          {
            chainId: 51,
            name: "XDC Apothem Network",
            currency: "XDC",
            explorerUrl: "https://apothem.xdcscan.io",
            rpcUrl: "https://rpc.apothem.network",
          },
        ],
        projectId: "65a3d1371b0c39534a49d0ea40cf884c",
        enableAnalytics: !0,
        enableOnramp: !0,
      });
    },
    51099: function (e, s, r) {
      "use strict";
      var t = r(57437),
        a = r(2265),
        l = r(66648),
        o = r(87138),
        n = r(33293);
      s.default = () => {
        let [e, s] = (0, a.useState)(!1),
          r = () => {
            window.open("/AUDIT REPORT ZON TOKEN.pdf", "_blank");
          },
          c = () => {
            s(!e);
          };
        return (0, t.jsx)("nav", {
          className: "bg-blue-300 text-white ",
          children: (0, t.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3",
            children: (0, t.jsxs)("div", {
              className: "flex justify-between h-20 ",
              children: [
                (0, t.jsx)("div", {
                  className: "flex items-center sm:pl-6 max-sm:pl-3",
                  children: (0, t.jsx)(o.default, {
                    href: "https://www.zontoken.io/",
                    target: "_blank",
                    children: (0, t.jsx)(l.default, {
                      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fcommunity-logo&psig=AOvVaw201QqbG0yf2vMVlicQpf6L&ust=1724756839106000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDAr9utkogDFQAAAAAdAAAAABAE",
                      alt: "ZON Logo",
                      width: 400,
                      height: 400,
                      "data-aos": "fade-down",
                      className: "sm:w-20 sm:h-20 max-sm:w-12 max-sm:h-12",
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  "data-aos": "fade-down",
                  className: "".concat(
                    e ? "flex" : "hidden",
                    " lg:flex lg:items-center lg:justify-between font-outfit lg:flex-row  lg:py-10 lg:relative max-sm:absolute max-sm:top-16  max-sm:w-full max-sm:left-0  lg:w-auto max-sm:px-28 max-sm:bg-slate-900 max-sm:mt-4  nav-links max-sm:items-center max-sm:text-xs max-sm:justify-center  max-sm:text-white    max-sm:py-4  overflow-visible z-20 gap-1 mb-10 text-lg"
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "Home",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "Home",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "about",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "About",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "ecosystem",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "Ecosystem",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "token",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "Tokenomics",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "buy",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "How to Buy",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(n.rU, {
                        to: "Roadmap",
                        smooth: !0,
                        duration: 500,
                        className: "cursor-pointer",
                        children: "Roadmap",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)("div", {
                        onClick: () => r(),
                        className: "cursor-pointer",
                        children: "Audit report",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(o.default, {
                        href: "https://x.com/Zon_token",
                        children: (0, t.jsx)(l.default, {
                          src: "/twitter.png",
                          alt: "Twitter",
                          width: 24,
                          height: 24,
                          className: "w-7",
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "sm:block flex-grow mr-6 mb-6 ",
                      children: (0, t.jsx)(o.default, {
                        href: "https://t.me/zoncommunity",
                        children: (0, t.jsx)(l.default, {
                          src: "/telegram.png",
                          alt: "Telegram",
                          width: 24,
                          height: 24,
                          className: "w-8",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "flex items-center lg:hidden",
                  children: (0, t.jsx)("button", {
                    onClick: c,
                    className:
                      "text-gray-700  hover:text-gray-900 focus:outline-none pr-8",
                    children: (0, t.jsx)(l.default, {
                      src: "/menu.png",
                      alt: "menu",
                      width: 20,
                      height: 20,
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "".concat(
                    e ? "" : "translate-x-[110vw]",
                    " fixed backdrop-blur-md h-screen w-full top-0 right-0 z-[1000] transition-all duration-50"
                  ),
                  children: (0, t.jsxs)("div", {
                    className: "".concat(
                      e ? "" : "translate-x-[110vw]",
                      " fixed bg-blue-500 h-screen w-9/12 top-0 right-0 z-[1000] transition-all duration-700 "
                    ),
                    children: [
                      (0, t.jsx)("button", {
                        onClick: c,
                        className: "absolute top-11 right-12",
                        children: (0, t.jsx)(l.default, {
                          src: "/close.png",
                          alt: "menu",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        onClick: c,
                        className:
                          "flex flex-col justify-center mt-28 p-3 pl-10 text-xl ",
                        children: [
                          (0, t.jsx)("div", {
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "Home",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "Home",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            onClick: c,
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "about",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "About",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            onClick: c,
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "ecosystem",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "Ecosystem",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            onClick: c,
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "token",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "Tokenomics",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            onClick: c,
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "buy",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "How to Buy",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            onClick: c,
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(n.rU, {
                              onClick: c,
                              to: "Roadmap",
                              smooth: !0,
                              duration: 500,
                              className: "cursor-pointer",
                              children: "Roadmap",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)("div", {
                              onClick: () => r(),
                              className: "cursor-pointer",
                              children: "Audit report",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(o.default, {
                              href: "https://x.com/Zon_token",
                              children: (0, t.jsx)(l.default, {
                                src: "/twitter.png",
                                alt: "Twitter",
                                width: 24,
                                height: 24,
                                className: "w-9",
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "sm:block flex-grow mr-6 mb-6 ",
                            children: (0, t.jsx)(o.default, {
                              href: "https://t.me/zoncommunity",
                              children: (0, t.jsx)(l.default, {
                                src: "/telegram.png",
                                alt: "Telegram",
                                width: 24,
                                height: 24,
                                className: "w-10",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    53054: function () {},
  },
  function (e) {
    e.O(0, [515, 764, 549, 471, 971, 23, 744], function () {
      return e((e.s = 67888));
    }),
      (_N_E = e.O());
  },
]);
