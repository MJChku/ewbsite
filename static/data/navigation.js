const navigation =
  {
    notmore: [
      {
        underline: "#00008B",
        head: { name: "news", link: "/news" },
        sub: []
      },
      {
        underline: "#AF3232",
        head: { name: "aboutus", link: "/aboutus" },
        sub: [
          {
            name: "mission", link: "/about-us/mission"
          },
          {
            name: "program", link: "/about-us/program"
          },
          {
            name: "impact", link: "/about-us/impact"
          },
          {
            name: "team", link: "/about-us/team"
          },
          {
            name: "partners", link: "/about-us/partners"
          },
          {
            name: "Why US", link: "/about-us/why-ewb"
          }

        ]
      },
      {
        underline: "##FFD700",
        head: { name: "where we work", link: "/where-we-work" },
        sub: []
      },
      {
        underline: "#00FF00",
        head: { name: "ways to help", link: "/ways-to-help" },
        sub: []
      }
    ],
    more:
      {
        underline: "#556B2F",
        head: { name: "    more    ", link: "/more" },
        sub: [
          {
            name: "financial information", link: "/financial-information"
          },
          {
            name: "shop gift catalog", link: "/shop-gift-catalog"
          },
          {
            name: "sponsor a child", link: "/sponsor-a-child"
          },
          {
            name: "US chapter", link: "/us-chapter"
          }

        ]
      }
  };

export { navigation };